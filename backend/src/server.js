const path = require('path');
const { loadEnvFile } = require('node:process');
const express = require('express');
const mysql = require('mysql2/promise');

// Carrega backend/.env
loadEnvFile(path.join(__dirname, '..', '.env'));

const app = express();
const PORT = Number(process.env.PORT) || 3000;

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'nexus_motors',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// JSON
app.use(express.json());

// CORS para o frontend Vite
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }

  next();
});

// Rota inicial
app.get('/', (req, res) => {
  res.json({
    message: 'API Nexus Auto funcionando!',
  });
});

// Teste da conexão com MySQL
app.get('/api/health', async (req, res) => {
  try {
    await pool.query('SELECT 1 AS connected');

    res.json({
      status: 'ok',
      api: true,
      mysql: true,
      database: process.env.DB_NAME || 'nexus_motors',
    });
  } catch (error) {
    console.error('Erro ao testar MySQL:', error);

    res.status(500).json({
      status: 'error',
      api: true,
      mysql: false,
      message: 'Não foi possível conectar ao MySQL.',
    });
  }
});

// Lista veículos do banco
app.get('/api/vehicles', async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT
        id,
        category,
        brand,
        model,
        year,
        price,
        mileage,
        color,
        state,
        city,
        store,
        image_url,
        description,
        available
      FROM vehicles
      WHERE available = 1
      ORDER BY id ASC
    `);

    const vehicles = rows.map((vehicle) => ({
      ...vehicle,
      type:
        vehicle.category === 'carro'
          ? 'car'
          : vehicle.category === 'caminhonete'
            ? 'pickup'
            : 'motorcycle',
      category:
        vehicle.category === 'carro'
          ? 'car'
          : vehicle.category === 'caminhonete'
            ? 'pickup'
            : 'motorcycle',
      mileage: vehicle.mileage ?? 0,
      images: vehicle.image_url ? [vehicle.image_url] : [],
    }));

    res.json(vehicles);
  } catch (error) {
    console.error('Erro ao buscar veículos:', error);

    res.status(500).json({
      message: 'Erro ao buscar veículos no banco de dados.',
    });
  }
});

// 404
app.use((req, res) => {
  res.status(404).json({
    message: 'Rota não encontrada.',
  });
});

// Tratamento de erros
app.use((error, req, res, next) => {
  console.error('Erro interno:', error);

  res.status(500).json({
    message: 'Erro interno do servidor.',
  });
});

// Testa MySQL antes de iniciar a API
async function startServer() {
  try {
    await pool.query('SELECT 1 AS connected');

    console.log('MySQL conectado com sucesso!');
    console.log(`Banco: ${process.env.DB_NAME || 'nexus_motors'}`);

    app.listen(PORT, () => {
      console.log(`Servidor Nexus Auto rodando em http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('ERRO AO CONECTAR AO MYSQL:');
    console.error(error.message);
    process.exit(1);
  }
}

startServer();