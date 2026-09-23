const path = require('path');
const { pathToFileURL } = require('url');
const { loadEnvFile } = require('node:process');
const mysql = require('mysql2/promise');

const ROOT = path.resolve(__dirname, '..', '..');
const ENV_FILE = path.join(ROOT, 'backend', '.env');
const VEHICLES_FILE = path.join(ROOT, 'src', 'mocks', 'vehicles.local.js');

if (typeof loadEnvFile === 'function') {
  loadEnvFile(ENV_FILE);
}

(async () => {
  try {
    const module = await import(pathToFileURL(VEHICLES_FILE).href);
    const vehicles = module.vehicles;

    if (!Array.isArray(vehicles) || vehicles.length !== 75) {
      throw new Error(`Esperava 75 veículos no frontend, encontrei ${Array.isArray(vehicles) ? vehicles.length : 0}.`);
    }

    const pool = await mysql.createPool({
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT || 3306),
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'nexus_motors',
      waitForConnections: true,
      connectionLimit: 5,
    });

    await pool.query('SELECT 1');

    const sql = `
      INSERT INTO vehicles
        (id, category, brand, model, year, price, mileage, color, state, city, store, image_url, description, available)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE
        category = VALUES(category),
        brand = VALUES(brand),
        model = VALUES(model),
        year = VALUES(year),
        price = VALUES(price),
        mileage = VALUES(mileage),
        color = VALUES(color),
        state = VALUES(state),
        city = VALUES(city),
        store = VALUES(store),
        image_url = VALUES(image_url),
        description = VALUES(description),
        available = VALUES(available)
    `;

    for (const vehicle of vehicles) {
      const category =
        vehicle.category === 'pickup' || vehicle.type === 'pickup'
          ? 'caminhonete'
          : vehicle.category === 'motorcycle' || vehicle.type === 'motorcycle'
            ? 'moto'
            : 'carro';

      const imageUrl = Array.isArray(vehicle.images) && vehicle.images.length
        ? vehicle.images[0]
        : null;

      const storeName = vehicle.store?.name || 'Nexus Auto';

      await pool.execute(sql, [
        vehicle.id,
        category,
        vehicle.brand,
        vehicle.model,
        vehicle.year,
        vehicle.price,
        vehicle.mileage ?? 0,
        vehicle.color ?? null,
        vehicle.state ?? null,
        vehicle.city ?? null,
        storeName,
        imageUrl,
        vehicle.description ?? null,
        vehicle.availability === 'available' ? 1 : 0,
      ]);
    }

    const [rows] = await pool.query(`
      SELECT COUNT(*) AS total,
             SUM(category = 'carro') AS carros,
             SUM(category = 'caminhonete') AS caminhonetes,
             SUM(category = 'moto') AS motos
      FROM vehicles
    `);

    console.log('======================================');
    console.log('NEXUS AUTO - IMPORTAÇÃO DOS VEÍCULOS');
    console.log('======================================');
    console.log(`Total no MySQL: ${rows[0].total}`);
    console.log(`Carros: ${rows[0].carros}`);
    console.log(`Caminhonetes: ${rows[0].caminhonetes}`);
    console.log(`Motos: ${rows[0].motos}`);
    console.log('Importação concluída com sucesso.');

    await pool.end();
  } catch (error) {
    console.error('ERRO NA IMPORTAÇÃO:', error.message);
    process.exit(1);
  }
})();
