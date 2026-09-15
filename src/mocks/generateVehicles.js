// Script gerador de veículos mockados
// Gera 120 veículos realistas (carros e motos) com dados determinísticos
// Escreve os dados diretamente no arquivo vehicles.js

import { stores } from './stores.js';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Dados base para geração determinística
const carBrands = [
  { brand: 'BMW', models: ['320i', 'X3', 'M3 Competition', 'X5', 'i4', '5 Series'], type: 'premium', imageBase: 'bmw' },
  { brand: 'Mercedes-Benz', models: ['C200', 'E300', 'GLC', 'A200', 'S-Class'], type: 'premium', imageBase: 'mercedes' },
  { brand: 'Audi', models: ['A4', 'A6', 'Q5', 'Q7', 'RS3'], type: 'premium', imageBase: 'audi' },
  { brand: 'Porsche', models: ['911 Carrera', 'Cayenne', 'Macan', 'Taycan'], type: 'luxury', imageBase: 'porsche' },
  { brand: 'Toyota', models: ['Corolla', 'Camry', 'RAV4', 'Hilux', 'Yaris'], type: 'dealership', imageBase: 'toyota' },
  { brand: 'Honda', models: ['Civic', 'Accord', 'CR-V', 'Fit', 'HR-V'], type: 'dealership', imageBase: 'honda' },
  { brand: 'Volkswagen', models: ['Golf', 'Jetta', 'Tiguan', 'Polo', 'Virtus'], type: 'dealership', imageBase: 'volkswagen' },
  { brand: 'Chevrolet', models: ['Onix', 'Tracker', 'Equinox', 'Cruze', 'S10'], type: 'dealership', imageBase: 'chevrolet' },
  { brand: 'Jeep', models: ['Compass', 'Renegade', 'Wrangler', 'Cherokee'], type: 'dealership', imageBase: 'jeep' },
  { brand: 'Hyundai', models: ['HB20', 'Creta', 'Tucson', 'ix35', 'Santa Fe'], type: 'dealership', imageBase: 'hyundai' },
  { brand: 'Nissan', models: ['Versa', 'Sentra', 'Kicks', 'Frontier'], type: 'dealership', imageBase: 'nissan' },
  { brand: 'Fiat', models: ['Argo', 'Toro', 'Uno', 'Mobi', 'Pulse'], type: 'standard', imageBase: 'fiat' },
  { brand: 'Renault', models: ['Kwid', 'Sandero', 'Duster', 'Logan'], type: 'standard', imageBase: 'renault' },
  { brand: 'Peugeot', models: ['208', '3008', '2008', '408'], type: 'standard', imageBase: 'peugeot' },
  { brand: 'Citroën', models: ['C3', 'C4', 'C5 Aircross'], type: 'standard', imageBase: 'citroen' },
];

const motorcycleBrands = [
  { brand: 'Honda', models: ['CB 500X', 'PCX', 'Biz', 'XRE300', 'NC750X'], type: 'dealership', imageBase: 'honda-moto' },
  { brand: 'Yamaha', models: ['MT-07', 'R3', 'Fazer', 'Lander', 'MT-09'], type: 'dealership', imageBase: 'yamaha' },
  { brand: 'Kawasaki', models: ['Ninja 400', 'Z900', 'Versys 650', 'KLX230'], type: 'dealership', imageBase: 'kawasaki' },
  { brand: 'BMW Motorrad', models: ['G 310 R', 'R 1250 GS', 'S 1000 RR'], type: 'premium', imageBase: 'bmw-moto' },
  { brand: 'Ducati', models: ['Monster 821', 'Panigale V4', 'Multistrada 950'], type: 'premium', imageBase: 'ducati' },
  { brand: 'Triumph', models: ['Tiger 900', 'Street Triple', 'Bonneville'], type: 'premium', imageBase: 'triumph' },
  { brand: 'Harley-Davidson', models: ['Iron 883', 'Street 750', 'Fat Boy'], type: 'luxury', imageBase: 'harley' },
  { brand: 'KTM', models: ['Duke 390', '790 Duke', '890 Adventure'], type: 'premium', imageBase: 'ktm' },
  { brand: 'Suzuki', models: ['GSX-S750', 'V-Strom 650', 'Burgman'], type: 'dealership', imageBase: 'suzuki' },
];

const cities = [
  { city: 'São Paulo', state: 'SP' },
  { city: 'Rio de Janeiro', state: 'RJ' },
  { city: 'Belo Horizonte', state: 'MG' },
  { city: 'Curitiba', state: 'PR' },
  { city: 'Porto Alegre', state: 'RS' },
  { city: 'Brasília', state: 'DF' },
  { city: 'Salvador', state: 'BA' },
  { city: 'Fortaleza', state: 'CE' },
  { city: 'Recife', state: 'PE' },
  { city: 'Goiânia', state: 'GO' },
];

const carImages = [
  'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80',
  'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
  'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
  'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80',
  'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
  'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
  'https://images.unsplash.com/photo-1606152421811-aa6a6c2c7a7b?w=800&q=80',
  'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=800&q=80',
  'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80',
  'https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&q=80',
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
  'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80',
  'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80',
  'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80',
  'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
];

const motorcycleImages = [
  'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80',
  'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80',
  'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&q=80',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  'https://images.unsplash.com/photo-1571188654248-7a89213915f7?w=800&q=80',
  'https://images.unsplash.com/photo-1622185135505-2d795003994a?w=800&q=80',
  'https://images.unsplash.com/photo-1558981033-0f0309284409?w=800&q=80',
  'https://images.unsplash.com/photo-1591637333184-19aa84b3e027?w=800&q=80',
];

const categories = {
  car: ['sedan', 'suv', 'hatchback', 'sports', 'luxury'],
  motorcycle: ['sport', 'touring', 'cruiser', 'adventure', 'naked']
};

// Função determinística para gerar números baseados em seed
function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// Função para selecionar item aleatório determinístico
function seededPick(array, seed) {
  return array[Math.floor(seededRandom(seed) * array.length)];
}

// Função para gerar preço baseado em tipo e ano
function generatePrice(type, brandType, year, seed) {
  const baseYear = 2024;
  const age = baseYear - year;
  
  let basePrice;
  if (type === 'car') {
    switch (brandType) {
      case 'luxury': basePrice = 500000; break;
      case 'premium': basePrice = 200000; break;
      case 'dealership': basePrice = 120000; break;
      case 'standard': basePrice = 60000; break;
      default: basePrice = 100000;
    }
  } else { // motorcycle
    switch (brandType) {
      case 'luxury': basePrice = 150000; break;
      case 'premium': basePrice = 80000; break;
      case 'dealership': basePrice = 40000; break;
      default: basePrice = 50000;
    }
  }
  
  // Depreciação por ano (5-10% ao ano)
  const depreciation = 1 - (age * 0.07);
  const price = basePrice * depreciation * (0.8 + seededRandom(seed) * 0.4);
  
  return Math.round(price / 1000) * 1000; // Arredondar para milhar
}

// Função para gerar quilometragem baseada no ano
function generateMileage(year, seed) {
  const baseYear = 2024;
  const age = baseYear - year;
  const baseMileage = age * 15000;
  const variation = seededRandom(seed) * 10000;
  return Math.round(baseMileage + variation);
}

// Função para gerar descrição
function generateDescription(brand, model, type, seed) {
  const adjectives = ['excelente', 'impecável', 'conservado', 'cuidado', 'pronto'];
  const features = type === 'car' 
    ? ['ar condicionado', 'direção elétrica', 'vidros elétricos', 'central multimídia', 'câmera de ré']
    : ['baixo consumo', 'manutenção em dia', 'pneus novos', 'documentação em dia'];
  
  const adj = seededPick(adjectives, seed);
  const feat = seededPick(features, seed + 1);
  
  return `${brand} ${model} em estado ${adj}. ${feat.charAt(0).toUpperCase() + feat.slice(1)}, revisões em dia, sem sinistros.`;
}

// Função para selecionar loja apropriada
function selectStore(brandType, city, seed) {
  const compatibleStores = stores.filter(s => {
    // Lojas premium aceitam qualquer tipo
    if (s.type === 'premium') return true;
    // Lojas dealership aceitam dealership e standard
    if (s.type === 'dealership') return brandType !== 'luxury';
    // Lojas standard aceitam standard
    if (s.type === 'standard') return brandType === 'standard';
    return true;
  });
  
  // Priorizar lojas na mesma cidade
  const cityStores = compatibleStores.filter(s => s.city === city);
  const availableStores = cityStores.length > 0 ? cityStores : compatibleStores;
  
  return seededPick(availableStores, seed);
}

// Gerar veículos
function generateVehicles(count = 120) {
  const vehicles = [];
  
  for (let i = 1; i <= count; i++) {
    const seed = i * 12345; // Seed determinística
    const isCar = seededRandom(seed) > 0.35; // 65% carros, 35% motos
    
    let brand, model, brandType, imageBase, category;
    
    if (isCar) {
      const carBrand = seededPick(carBrands, seed);
      brand = carBrand.brand;
      model = seededPick(carBrand.models, seed + 1);
      brandType = carBrand.type;
      imageBase = carBrand.imageBase;
      category = seededPick(categories.car, seed + 2);
    } else {
      const motoBrand = seededPick(motorcycleBrands, seed);
      brand = motoBrand.brand;
      model = seededPick(motoBrand.models, seed + 1);
      brandType = motoBrand.type;
      imageBase = motoBrand.imageBase;
      category = seededPick(categories.motorcycle, seed + 2);
    }
    
    const year = 2018 + Math.floor(seededRandom(seed + 3) * 7); // 2018-2024
    const location = seededPick(cities, seed + 4);
    const price = generatePrice(isCar ? 'car' : 'motorcycle', brandType, year, seed + 5);
    const mileage = generateMileage(year, seed + 6);
    const store = selectStore(brandType, location.city, seed + 7);
    const images = isCar ? motorcycleImages : carImages;
    const image = seededPick(isCar ? carImages : motorcycleImages, seed + 8);
    const availability = seededRandom(seed + 9) > 0.1 ? 'available' : (seededRandom(seed + 10) > 0.5 ? 'reserved' : 'sold');
    
    vehicles.push({
      id: i,
      type: isCar ? 'car' : 'motorcycle',
      brand,
      model,
      year,
      price,
      mileage,
      city: location.city,
      state: location.state,
      description: generateDescription(brand, model, isCar ? 'car' : 'motorcycle', seed + 11),
      image,
      features: isCar ? ['Ar condicionado', 'Direção elétrica', 'Central multimídia'] : ['Baixo consumo', 'Manutenção em dia'],
      store: {
        id: store.id,
        name: store.name,
        type: store.type,
        city: store.city,
        state: store.state,
        phone: store.phone,
        email: store.email,
        instagram: store.instagram
      },
      availability,
      category
    });
  }
  
  return vehicles;
}

// Gerar e exportar
const vehicles = generateVehicles(120);

// Escrever no arquivo vehicles.js
const outputContent = `// Dados mockados de veículos para demonstração
// Gerados automaticamente pelo script generateVehicles.js
// 120 veículos realistas (carros e motos)

export const vehicles = ${JSON.stringify(vehicles, null, 2)};

export const formatPrice = (price) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
};

export const formatMileage = (mileage) => {
  return new Intl.NumberFormat('pt-BR').format(mileage) + ' km';
};
`;

const outputPath = join(__dirname, 'vehicles.js');
writeFileSync(outputPath, outputContent);

console.log('=== ESTATÍSTICAS ===');
console.log(`Gerados ${vehicles.length} veículos:`);
console.log(`- Carros: ${vehicles.filter(v => v.type === 'car').length}`);
console.log(`- Motos: ${vehicles.filter(v => v.type === 'motorcycle').length}`);
console.log(`- Disponíveis: ${vehicles.filter(v => v.availability === 'available').length}`);
console.log(`- Reservados: ${vehicles.filter(v => v.availability === 'reserved').length}`);
console.log(`- Vendidos: ${vehicles.filter(v => v.availability === 'sold').length}`);
console.log(`\nArquivo salvo em: ${outputPath}`);

export { vehicles };
export const formatPrice = (price) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
};

export const formatMileage = (mileage) => {
  return new Intl.NumberFormat('pt-BR').format(mileage) + ' km';
};
