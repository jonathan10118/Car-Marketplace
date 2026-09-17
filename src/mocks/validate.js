import { vehicles, validateCatalog } from './vehicles.js';

console.log('=== VALIDAÇÃO DO CATÁLOGO NEXUS AUTO ===\n');

const validation = validateCatalog();

console.log('CONTAGEM DE VEÍCULOS:');
console.log(`Carros de Luxo (20): ${validation.counts.luxuryCars}`);
console.log(`Carros Normais (30): ${validation.counts.normalCars}`);
console.log(`Caminhonetes (10):   ${validation.counts.pickups}`);
console.log(`Motos (15):          ${validation.counts.motorcycles}`);
console.log(`TOTAL (75):          ${validation.total}\n`);

let hasErrors = false;

if (validation.counts.luxuryCars !== 20 || validation.counts.normalCars !== 30 || validation.counts.pickups !== 10 || validation.counts.motorcycles !== 15 || validation.total !== 75) {
  console.error('❌ ERRO NA CONTAGEM DO CATÁLOGO!');
  hasErrors = true;
} else {
  console.log('✅ Contagens exatas conferem (20 + 30 + 10 + 15 = 75)');
}

console.log('\nVERIFICAÇÃO DE MARCAS REMOVIDAS:');
const forbidden = ['Jeep', 'Hyundai', 'Peugeot'];
forbidden.forEach(brand => {
  const count = validation.brands[brand] || 0;
  console.log(`${brand}: ${count} (esperado 0)`);
  if (count > 0) hasErrors = true;
});

console.log('\nMODELOS OBRIGATÓRIOS PRIORIZADOS:');
const requiredModels = [
  'Volkswagen Gol',
  'Volkswagen Polo',
  'Volkswagen Nivus',
  'Volkswagen Amarok',
  'Chevrolet Montana',
  'Chevrolet S10',
  'Chevrolet D20',
  'Chevrolet 250',
  'Ford Ranger',
  'Toyota Hilux',
  'Mitsubishi Triton',
  'Fiat Toro',
  'Nissan Frontier',
  'Honda CB 500F',
  'Honda CG 160',
  'Yamaha MT-03',
  'Kawasaki Ninja 400'
];

requiredModels.forEach(model => {
  const exists = validation.models[model];
  console.log(`${model}: ${exists ? '✓ PRESENTE' : '✗ AUSENTE'}`);
  if (!exists) hasErrors = true;
});

console.log('\nVERIFICAÇÃO DE DADOS (0km, 3 fotos, lojas):');
let invalidMileage = 0;
let invalidImages = 0;
let invalidStores = 0;

vehicles.forEach(v => {
  if (v.mileage !== 0) invalidMileage++;
  if (!v.images || v.images.length < 3) invalidImages++;
  if (v.store.name !== 'Nexus Auto') invalidStores++;
});

console.log(`Veículos com km != 0: ${invalidMileage}`);
console.log(`Veículos com < 3 fotos: ${invalidImages}`);
console.log(`Lojas com nome diferente de Nexus Auto: ${invalidStores}`);

if (invalidMileage > 0 || invalidImages > 0 || invalidStores > 0) {
  hasErrors = true;
}

if (!hasErrors) {
  console.log('\n🌟 TODOS OS 75 VEÍCULOS ESTÃO 100% CONFORMES COM AS ESPECIFICAÇÕES DA NEXUS AUTO!');
} else {
  console.error('\n❌ HOUVE ERROS NA VALIDAÇÃO.');
  process.exit(1);
}