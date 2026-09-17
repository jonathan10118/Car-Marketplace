// Gerador do catálogo oficial NEXUS AUTO - Exatamente 75 veículos 0 km
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { stores } from './stores.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 9 Cidades permitidas no Sul do Brasil
const locations = [
  { city: 'Curitiba', state: 'PR', ddd: '41' },
  { city: 'Londrina', state: 'PR', ddd: '43' },
  { city: 'Ponta Grossa', state: 'PR', ddd: '42' },
  { city: 'Florianópolis', state: 'SC', ddd: '48' },
  { city: 'Joinville', state: 'SC', ddd: '47' },
  { city: 'Blumenau', state: 'SC', ddd: '47' },
  { city: 'Porto Alegre', state: 'RS', ddd: '51' },
  { city: 'Caxias do Sul', state: 'RS', ddd: '54' },
  { city: 'Canoas', state: 'RS', ddd: '51' }
];

// Conjuntos de imagens verificadas (Status 200) - 3 por categoria
const luxuryCarImageSets = [
  [
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
    'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80',
    'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80'
  ],
  [
    'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80',
    'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
    'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80'
  ],
  [
    'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
    'https://images.unsplash.com/photo-1508974239320-0a029497e820?w=800&q=80',
    'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&q=80'
  ],
  [
    'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
    'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?w=800&q=80',
    'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=800&q=80'
  ],
  [
    'https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&q=80',
    'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80',
    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80'
  ]
];

const normalCarImageSets = [
  [
    'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80',
    'https://images.unsplash.com/photo-1508974239320-0a029497e820?w=800&q=80',
    'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80'
  ],
  [
    'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=800&q=80',
    'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80',
    'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80'
  ],
  [
    'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80',
    'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80',
    'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80'
  ],
  [
    'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
    'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80',
    'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&q=80'
  ],
  [
    'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=800&q=80',
    'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
    'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80'
  ]
];

const pickupImageSets = [
  [
    'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80',
    'https://images.unsplash.com/photo-1566008885218-90abf9200ddb?w=800&q=80',
    'https://images.unsplash.com/photo-1519245659620-e859806a8d3b?w=800&q=80'
  ],
  [
    'https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=800&q=80',
    'https://images.unsplash.com/photo-1566008885218-90abf9200ddb?w=800&q=80',
    'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&q=80'
  ],
  [
    'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80',
    'https://images.unsplash.com/photo-1566008885218-90abf9200ddb?w=800&q=80',
    'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80'
  ],
  [
    'https://images.unsplash.com/photo-1612825173281-9a193378527e?w=800&q=80',
    'https://images.unsplash.com/photo-1566008885218-90abf9200ddb?w=800&q=80',
    'https://images.unsplash.com/photo-1551830820-330a71b99659?w=800&q=80'
  ],
  [
    'https://images.unsplash.com/photo-1570733577524-3a047079e80d?w=800&q=80',
    'https://images.unsplash.com/photo-1566008885218-90abf9200ddb?w=800&q=80',
    'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80'
  ]
];

const motorcycleImageSets = [
  [
    'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80',
    'https://images.unsplash.com/photo-1558981852-426c6c22a060?w=800&q=80',
    'https://images.unsplash.com/photo-1558981033-0f0309284409?w=800&q=80'
  ],
  [
    'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80',
    'https://images.unsplash.com/photo-1622185135505-2d795003994a?w=800&q=80',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80'
  ],
  [
    'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&q=80',
    'https://images.unsplash.com/photo-1558981852-426c6c22a060?w=800&q=80',
    'https://images.unsplash.com/photo-1571188654248-7a89213915f7?w=800&q=80'
  ],
  [
    'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&q=80',
    'https://images.unsplash.com/photo-1622185135505-2d795003994a?w=800&q=80',
    'https://images.unsplash.com/photo-1558980664-3a031cf67ea8?w=800&q=80'
  ],
  [
    'https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=800&q=80',
    'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?w=800&q=80',
    'https://images.unsplash.com/photo-1558980664-2506fca6bfc2?w=800&q=80'
  ]
];

// 1. Definição dos 20 Carros Premium/Luxo (Mercedes-Benz, BMW, Audi, Porsche)
const luxuryCars = [
  { brand: 'Porsche', model: '911 Carrera S', version: '3.0 Twin-Turbo PDK', price: 920000, fuel: 'Gasolina', color: 'Cinza Agata', features: ['Câmbio PDK 8 Marchas', 'Sport Chrono', 'Escape Esportivo'] },
  { brand: 'Porsche', model: 'Macan GTS', version: '2.9 V6 Biturbo', price: 680000, fuel: 'Gasolina', color: 'Preto Vulcano', features: ['Tração Integral', 'Suspensão Pneumática', 'Bancos Esportivos'] },
  { brand: 'Porsche', model: 'Cayenne Coupé', version: '3.0 V6 Turbo E-Hybrid', price: 790000, fuel: 'Híbrido', color: 'Branco Carrara', features: ['Teto Panorâmico', 'Pacote Sport', 'Faróis Matrix LED'] },
  { brand: 'Porsche', model: 'Panamera 4S', version: '2.9 V6 E-Hybrid', price: 850000, fuel: 'Híbrido', color: 'Azul Gentian', features: ['Eixo Traseiro Direcional', 'Som Burmester', 'Interior em Couro Club'] },
  { brand: 'Porsche', model: 'Taycan 4S', version: 'Elétrico 530cv', price: 740000, fuel: 'Elétrico', color: 'Cinza Vulcano', features: ['Bateria Performance Plus', 'Carga Ultra-Rápida', 'Porsche Active Suspension'] },

  { brand: 'Mercedes-Benz', model: 'Classe C C300', version: 'AMG Line 2.0 Turbo', price: 420000, fuel: 'Híbrido Leve', color: 'Prata High-Tech', features: ['Painel MBUX 12.3"', 'Teto Solar Panorâmico', 'Rodas AMG 19"'] },
  { brand: 'Mercedes-Benz', model: 'Classe E E350', version: 'Exclusive 2.0 Turbo', price: 580000, fuel: 'Híbrido Leve', color: 'Preto Obsidiana', features: ['Som Burmester 3D', 'Assentos Climatizados', 'Head-Up Display'] },
  { brand: 'Mercedes-Benz', model: 'Classe S S500', version: '4MATIC Longo 3.0', price: 1150000, fuel: 'Híbrido Leve', color: 'Preto Ônix', features: ['Suspensão Airmatic', 'Condução Autônoma Nível 3', 'Massagem nos Bancos'] },
  { brand: 'Mercedes-Benz', model: 'GLC 300', version: '4MATIC Coupe AMG Line', price: 495000, fuel: 'Híbrido Leve', color: 'Cinza Selenita', features: ['Faróis Digital Light', 'Tração 4MATIC', 'Câmera 360 Graus'] },
  { brand: 'Mercedes-Benz', model: 'GLE 450', version: '4MATIC 3.0 Turbo 7 Lugares', price: 720000, fuel: 'Híbrido Leve', color: 'Azul Cavansite', features: ['7 Lugares', 'E-Active Body Control', 'Assistente Ativo de Direção'] },

  { brand: 'BMW', model: 'Série 3 330i', version: 'M Sport 2.0 Turbo', price: 385000, fuel: 'Flex', color: 'Azul Portimão', features: ['Pacote M Sport', 'BMW Curved Display', 'Som Harman Kardon'] },
  { brand: 'BMW', model: 'Série 5 530i', version: 'M Sport 2.0 Turbo', price: 540000, fuel: 'Híbrido Leve', color: 'Preto Carbono', features: ['Controle por Gestos', 'Faróis Laserlight', 'Parking Assistant Plus'] },
  { brand: 'BMW', model: 'Série 7 740i', version: 'Pure Excellence 3.0', price: 980000, fuel: 'Híbrido Leve', color: 'Cinza Dravit', features: ['BMW Theater Screen 31"', 'Portas Automáticas', 'Bancos Executivos'] },
  { brand: 'BMW', model: 'X3 xDrive30i', version: 'M Sport 2.0 Turbo', price: 460000, fuel: 'Gasolina', color: 'Branco Alpino', features: ['Tração Integral xDrive', 'Teto Panorâmico', 'Live Cockpit Professional'] },
  { brand: 'BMW', model: 'X5 xDrive50e', version: 'M Sport Plug-in Hybrid', price: 760000, fuel: 'Híbrido', color: 'Azul Phytonic', features: ['Suspensão a Ar Adaptativa', 'Alcance Elétrico 100km', 'Ar Quadrizone'] },

  { brand: 'Audi', model: 'A4 Sedan', version: 'Performance Black 2.0 TFSI', price: 355000, fuel: 'Gasolina', color: 'Cinza Daytona', features: ['Virtual Cockpit Plus', 'Tração Quattro', 'Faróis Full LED Matrix'] },
  { brand: 'Audi', model: 'A6 Sedan', version: 'Performance 2.0 TFSI', price: 510000, fuel: 'Híbrido Leve', color: 'Preto Mito', features: ['Audi Pre Sense', 'Ar-condicionado de 4 Zonas', 'Bancos em Couro Valcona'] },
  { brand: 'Audi', model: 'A8 L', version: 'Performance Black 3.0 TFSI', price: 940000, fuel: 'Híbrido Leve', color: 'Prata Florete', features: ['Eixo Traseiro Dinâmico', 'Faróis HD Matrix Laser', 'Som Bang & Olufsen 3D'] },
  { brand: 'Audi', model: 'Q5 SUV', version: 'Performance Black TFSIe Hybrid', price: 475000, fuel: 'Híbrido', color: 'Branco Geleira', features: ['Tração Quattro Ultra', 'Piloto Automático Adaptativo', 'Teto Solar Open Sky'] },
  { brand: 'Audi', model: 'Q7 SUV', version: 'S line 3.0 TFSI 7 Lugares', price: 690000, fuel: 'Híbrido Leve', color: 'Azul Navarra', features: ['7 Lugares', 'Suspensão a Ar Adaptativa', 'Audi Drive Select'] }
];

// 2. Definição dos 30 Carros Normais
const normalCars = [
  // Volkswagen (5)
  { brand: 'Volkswagen', model: 'Gol', version: '1.0 MPI 12V TotalFlex', price: 78900, fuel: 'Flex', color: 'Branco Cristal', features: ['Direção Hidráulica', 'Ar-Condicionado', 'Vidros Elétricos'] },
  { brand: 'Volkswagen', model: 'Polo', version: 'Comfortline 170 TSI Automático', price: 108900, fuel: 'Flex', color: 'Cinza Platinum', features: ['VW Play 10.1"', 'Controle de Estabilidade', 'Rodas de Liga Leve 16"'] },
  { brand: 'Volkswagen', model: 'Nivus', version: 'Highline 200 TSI Automático', price: 149900, fuel: 'Flex', color: 'Azul Biscay', features: ['ACC Piloto Adaptativo', 'Painel Active Info Display', 'Faróis LED'] },
  { brand: 'Volkswagen', model: 'T-Cross', version: 'Highline 250 TSI Automático', price: 175900, fuel: 'Flex', color: 'Prata Pyrit', features: ['Teto Solar Panorâmico', 'Motor 1.4 Turbo', 'Detector de Fadiga'] },
  { brand: 'Volkswagen', model: 'Virtus', version: 'Exclusive 250 TSI Automático', price: 154900, fuel: 'Flex', color: 'Preto Ninja', features: ['Porta-malas 521L', 'Acabamento Exclusive', 'Frenagem Autônoma'] },

  // Chevrolet (5)
  { brand: 'Chevrolet', model: 'Onix', version: 'Premier 1.0 Turbo Automático', price: 115900, fuel: 'Flex', color: 'Vermelho Carmim', features: ['Alerta de Ponto Cego', 'Wi-Fi Nativo', 'Carregador por Indução'] },
  { brand: 'Chevrolet', model: 'Onix Plus', version: 'Premier 1.0 Turbo Automático', price: 122900, fuel: 'Flex', color: 'Prata Shark', features: ['Easy Park Estacionamento', 'Bancos Bicolores', '6 Airbags'] },
  { brand: 'Chevrolet', model: 'Tracker', version: 'Premier 1.2 Turbo Automático', price: 168900, fuel: 'Flex', color: 'Azul Eclipse', features: ['Teto Panorâmico', 'Frenagem de Emergência', 'MyLink 8"'] },
  { brand: 'Chevrolet', model: 'Cruze', version: 'LTZ 1.4 Turbo Automático', price: 152900, fuel: 'Flex', color: 'Branco Abalone', features: ['Motor 1.4 Turbo 153cv', 'Partida Remota', 'Bancos em Couro'] },
  { brand: 'Chevrolet', model: 'Spin', version: 'Premier 1.8 7 Lugares Automático', price: 139900, fuel: 'Flex', color: 'Cinza Drake', features: ['7 Lugares', 'Painel Digital 8"', 'OnStar Conectividade'] },

  // Ford (4)
  { brand: 'Ford', model: 'Ka', version: 'Titanium 1.5 AT', price: 69900, fuel: 'Flex', color: 'Branco Ártico', features: ['6 Airbags', 'Sync 3 Touchscreen', 'Partida por Botão'] },
  { brand: 'Ford', model: 'Fiesta', version: 'Titanium 1.6 Flex AT', price: 74900, fuel: 'Flex', color: 'Vermelho Bari', features: ['Controle de Tração', 'Bancos em Couro', 'Sensor de Chuva'] },
  { brand: 'Ford', model: 'Focus', version: 'Fastback Titanium Plus 2.0 AT', price: 89900, fuel: 'Flex', color: 'Prata Dublin', features: ['Estacionamento Automático', 'Faróis Bi-Xênon', 'Teto Solar'] },
  { brand: 'Ford', model: 'Territory', version: 'Titanium 1.5 Turbo EcoBoost', price: 210000, fuel: 'Gasolina', color: 'Azul Noronha', features: ['Piloto Adaptativo Stop&Go', 'Bancos Ventilados', 'Câmera 360 Graus'] },

  // Toyota (3)
  { brand: 'Toyota', model: 'Corolla', version: 'Altis Premium 2.0 Dynamic Force Flex', price: 185900, fuel: 'Flex', color: 'Branco Pérola', features: ['Toyota Safety Sense', 'Painel Digital 12.3"', 'Teto Solar'] },
  { brand: 'Toyota', model: 'Yaris', version: 'XLS 1.5 Flex Automático', price: 124900, fuel: 'Flex', color: 'Cinza Granito', features: ['7 Airbags', 'Alerta de Evasão de Faixa', 'Teto Solar Elétrico'] },
  { brand: 'Toyota', model: 'Corolla Cross', version: 'XRX Hybrid 1.8 Flex', price: 212900, fuel: 'Híbrido', color: 'Prata Lua Nova', features: ['Sistema Híbrido Flex', 'Ar Dual Zone', 'Alerta de Tráfego Traseiro'] },

  // Honda (3)
  { brand: 'Honda', model: 'Civic', version: 'Touring 2.0 e:HEV Híbrido', price: 265900, fuel: 'Híbrido', color: 'Preto Cristal', features: ['Sistema e:HEV 184cv', 'Honda SENSING', 'Som Bose 12 Alto-falantes'] },
  { brand: 'Honda', model: 'City', version: 'Touring 1.5 DOHC i-VTEC Flex', price: 141900, fuel: 'Flex', color: 'Azul Cósmico', features: ['Honda LaneWatch', 'Bancos Magic Seat', 'Faróis Full LED'] },
  { brand: 'Honda', model: 'HR-V', version: 'Touring 1.5 Turbo Flex', price: 199900, fuel: 'Flex', color: 'Branco Topázio', features: ['Porta-malas Elétrico Sensor', 'Motor Turbo 177cv', 'Carregador sem fio'] },

  // Fiat (4)
  { brand: 'Fiat', model: 'Mobi', version: 'Trekking 1.0 Fire Flex', price: 74900, fuel: 'Flex', color: 'Cinza Strato', features: ['Suspensão Elevada', 'Multimídia 7" Sem Fio', 'Rack de Teto'] },
  { brand: 'Fiat', model: 'Argo', version: 'Trekking 1.3 Flex Automático', price: 99900, fuel: 'Flex', color: 'Laranja Salento', features: ['Câmbio CVT 7 Marchas', 'Design Aventureiro', 'Câmera de Ré'] },
  { brand: 'Fiat', model: 'Pulse', version: 'Impetus 1.0 Turbo 200 Flex AT', price: 134900, fuel: 'Flex', color: 'Cinza Silverstone', features: ['Pintura Bicolor', 'Frenagem Autônoma AEB', 'Painel Full Digital 7"'] },
  { brand: 'Fiat', model: 'Fastback', version: 'Limited Edition Powered by Abarth', price: 162900, fuel: 'Flex', color: 'Branco Banchisa', features: ['Motor Turbo 270 185cv', 'Porta-malas 600L', 'Freio Eletrônico Auto Hold'] },

  // Nissan (3)
  { brand: 'Nissan', model: 'Kicks', version: 'Exclusive 1.6 Flex CVT', price: 151900, fuel: 'Flex', color: 'Azul Elétrico', features: ['Visão 360 Inteligente', 'Som Bose no Encosto', 'Alerta de Colisão'] },
  { brand: 'Nissan', model: 'Versa', version: 'Exclusive 1.6 16V Flex CVT', price: 132900, fuel: 'Flex', color: 'Prata Classic', features: ['Bancos Zero Gravity', 'Alerta de Tráfego Cruzado', 'Carregador por Indução'] },
  { brand: 'Nissan', model: 'Sentra', version: 'Exclusive 2.0 CVT com Teto', price: 178900, fuel: 'Gasolina', color: 'Cinza Grafite', features: ['Bancos Dianteiros Aquecidos', 'Partida Remota', 'Alerta de Fadiga'] },

  // Renault (3)
  { brand: 'Renault', model: 'Kwid', version: 'Outsider 1.0 12V SCe Flex', price: 79900, fuel: 'Flex', color: 'Verde Noronha', features: ['Start-Stop', '4 Airbags de Série', 'Luzes Diurnas LED'] },
  { brand: 'Renault', model: 'Duster', version: 'Iconic Plus 1.3 TCe Turbo CVT', price: 156900, fuel: 'Flex', color: 'Laranja Atacama', features: ['Motor Turbo 170cv', 'Câmeras Multiview', 'Carregador por Indução'] },
  { brand: 'Renault', model: 'Kardian', version: 'Premiere Edition 1.0 Turbo EDC', price: 132900, fuel: 'Flex', color: 'Laranja Energie', features: ['Câmbio Dupla Embreagem', 'Alavanca e-Shifter', 'Frenagem de Emergência'] }
];

// 3. Definição das 10 Caminhonetes
const pickups = [
  { brand: 'Volkswagen', model: 'Amarok', version: 'Extreme 3.0 V6 TDI 4x4 Diesel', price: 345000, fuel: 'Diesel', color: 'Cinza Indium', features: ['Motor V6 258cv', 'Tração 4Motion Permanente', 'Bancos ErgoComfort'] },
  { brand: 'Chevrolet', model: 'Montana', version: 'RS 1.2 Turbo Flex Automática', price: 156900, fuel: 'Flex', color: 'Vermelho Chili', features: ['Caçamba Multi-Board', 'Acabamento Esportivo RS', 'Wi-Fi Integrado'] },
  { brand: 'Chevrolet', model: 'S10', version: 'High Country 2.8 Turbo 4x4 Diesel AT', price: 312000, fuel: 'Diesel', color: 'Branco Summit', features: ['Motor Duramax 207cv', 'Alerta de Colisão Frontal', 'Estribos Laterais'] },
  { brand: 'Chevrolet', model: 'D20', version: 'Custom De Luxe 4.0 Diesel 4x4', price: 125000, fuel: 'Diesel', color: 'Vinho Clássico', features: ['Motor Turbo Diesel', 'Cabine Dupla', 'Tração 4x4 Robusta'] },
  { brand: 'Chevrolet', model: '250', version: 'Heavy Duty 4.2 Diesel Turbo Cabine Dupla', price: 145000, fuel: 'Diesel', color: 'Prata Lunar', features: ['Capacidade de Carga Alta', 'Cabine Estendida', 'Eixo Reforçado'] },
  { brand: 'Ford', model: 'Ranger', version: 'Limited 3.0 V6 4WD Diesel AT', price: 329900, fuel: 'Diesel', color: 'Laranja Terra', features: ['Motor V6 250cv', 'Piloto Automático Adaptativo', 'Painel Digital 12.4"'] },
  { brand: 'Toyota', model: 'Hilux', version: 'GR-Sport 2.8 TDI 4x4 Diesel Automática', price: 372000, fuel: 'Diesel', color: 'Preto Mica', features: ['Suspensão Esportiva GR', 'Motor 224cv', 'Toyota Safety Sense'] },
  { brand: 'Mitsubishi', model: 'Triton', version: 'HPE-S 2.4 Turbo Diesel 4x4 AT', price: 299900, fuel: 'Diesel', color: 'Branco Fuji', features: ['Tração Super Select II', '7 Airbags', 'Bloqueio do Diferencial Traseiro'] },
  { brand: 'Fiat', model: 'Toro', version: 'Ultra 2.0 16V Turbo Diesel 4x4 AT9', price: 215000, fuel: 'Diesel', color: 'Cinza Sting', features: ['Capota Rígida Exclusiva', 'Câmbio 9 Marchas', 'Central 10.1" Vertical'] },
  { brand: 'Nissan', model: 'Frontier', version: 'PRO-4X 2.3 Biturbo 4x4 Diesel AT', price: 321000, fuel: 'Diesel', color: 'Cinza Shark', features: ['Suspensão Traseira Multilink', 'Bloqueio de Diferencial', 'Câmeras 360 Off-Road'] }
];

// 4. Definição das 15 Motos
const motorcycles = [
  { brand: 'Honda', model: 'CG 160', version: 'Titan FlexOne', price: 18900, fuel: 'Flex', color: 'Vermelho Perolizado', features: ['Freios CBS', 'Painel Blackout Digital', 'Motor 160cc Econômico'] },
  { brand: 'Honda', model: 'CB 300F', version: 'Twister ABS', price: 24900, fuel: 'Flex', color: 'Azul Metálico', features: ['Embreagem Deslizante', 'Iluminação Full LED', 'Freios ABS Duplo Canal'] },
  { brand: 'Honda', model: 'CB 500F', version: 'ABS Bicilíndrica', price: 42900, fuel: 'Gasolina', color: 'Prata Fosco', features: ['Suspensão Invertida Showa', 'Freios Duplos Dianteiros', 'Painel LCD Invertido'] },
  { brand: 'Honda', model: 'XRE 300', version: 'Sahara Rally ABS', price: 31900, fuel: 'Flex', color: 'Vermelho Rally', features: ['Câmbio 6 Marchas', 'Suspensão de Longo Curso', 'Entrada USB-C'] },
  { brand: 'Honda', model: 'Africa Twin', version: 'CRF 1100L DCT Adventure Sports', price: 112000, fuel: 'Gasolina', color: 'Branco Tricolor', features: ['Câmbio Automático DCT', 'Controle de Tração 7 Níveis', 'Painel TFT Touch 6.5"'] },

  { brand: 'Yamaha', model: 'Factor 150', version: 'ED UBS Flex', price: 16900, fuel: 'Flex', color: 'Preto Eclipse', features: ['Painel 100% Digital', 'Freios UBS Combinados', 'Excelente Consumo Urbano'] },
  { brand: 'Yamaha', model: 'FZ25', version: 'Fazer 250 ABS', price: 23900, fuel: 'Flex', color: 'Azul Racing Blue', features: ['Farol com Projetor LED', 'Freios ABS nas Duas Rodas', 'Assento Anatômico'] },
  { brand: 'Yamaha', model: 'MT-03', version: 'ABS Bicilíndrica 321cc', price: 33900, fuel: 'Gasolina', color: 'Storm Fluo', features: ['Motor Crossplane 42cv', 'Suspensão Invertida', 'Design Dark Side of Japan'] },
  { brand: 'Yamaha', model: 'MT-07', version: 'ABS 689cc', price: 49900, fuel: 'Gasolina', color: 'Cyan Storm', features: ['Torque Brutal Crossplane', 'Freios ABS Dianteiros Duplos', 'Chassi Tubular Compacto'] },
  { brand: 'Yamaha', model: 'YZF-R3', version: 'Monster Energy MotoGP Edition', price: 35900, fuel: 'Gasolina', color: 'Preto Monster', features: ['Carenagem Aerodinâmica', 'Painel Digital Completo', 'Posição de Pilotagem Esportiva'] },

  { brand: 'Kawasaki', model: 'Ninja 400', version: 'KRT Edition ABS', price: 36900, fuel: 'Gasolina', color: 'Verde Lime Green', features: ['Embreagem Assistida e Deslizante', 'Faróis Duplos LED', 'Chassi em Treliça'] },
  { brand: 'Kawasaki', model: 'Z400', version: 'Special Edition ABS', price: 35500, fuel: 'Gasolina', color: 'Cinza Candy', features: ['Estilo Sugomi Agressivo', 'Ergonomia Confortável', 'Painel Multifuncional'] },
  { brand: 'Kawasaki', model: 'Ninja 650', version: 'ABS Sport Touring', price: 48900, fuel: 'Gasolina', color: 'Verde Metálico', features: ['Conectividade Smartphone TFT', 'Bolha Aerodinâmica', 'Pneus Dunlop Sportmax'] },

  { brand: 'BMW', model: 'G 310 R', version: 'Sport ABS', price: 36500, fuel: 'Gasolina', color: 'Vermelho Racing', features: ['Acelerador Eletrônico Ride by Wire', 'Manetes Reguláveis', 'Iluminação Full LED'] },
  { brand: 'BMW', model: 'F 850 GS', version: 'Premium Adventure Triple Black', price: 84900, fuel: 'Gasolina', color: 'Preto Triple Black', features: ['Controle Dinâmico de Tração DTC', 'Modos de Pilotagem Pro', 'Painel TFT Conectividade'] }
];

// Montar lista completa de 75 veículos
const vehicles = [];
let currentId = 1;

// Helper para selecionar loja e localização garantindo rotação equilibrada
function getLocation(index) {
  return locations[index % locations.length];
}

function getStoreForLocation(loc) {
  return stores.find(s => s.city.toLowerCase() === loc.city.toLowerCase() && s.state === loc.state) || stores[0];
}

// 1. 20 Carros Premium (IDs 1-20)
luxuryCars.forEach((item, idx) => {
  const loc = getLocation(idx);
  const store = getStoreForLocation(loc);
  const images = luxuryCarImageSets[idx % luxuryCarImageSets.length];

  vehicles.push({
    id: currentId,
    type: 'car',
    category: 'car',
    isPremium: true,
    brand: item.brand,
    model: item.model,
    version: item.version,
    year: 2024,
    yearFabrication: 2024,
    price: item.price,
    mileage: 0,
    city: loc.city,
    state: loc.state,
    description: `${item.brand} ${item.model} ${item.version} 0km. Veículo premium novo, pronta entrega com garantia de fábrica na Nexus Auto ${loc.city}.`,
    images,
    fuel: item.fuel,
    color: item.color,
    plate: `NEX-0${currentId.toString().padStart(2, '0')}`,
    features: [...item.features, 'Garantia de Fábrica', 'Revisão Feita'],
    store: {
      id: store.id,
      name: 'Nexus Auto',
      type: 'dealership',
      city: store.city,
      state: store.state,
      phone: store.phone,
      email: store.email,
      instagram: store.instagram
    },
    availability: 'available'
  });
  currentId++;
});

// 2. 30 Carros Normais (IDs 21-50)
normalCars.forEach((item, idx) => {
  const loc = getLocation(idx);
  const store = getStoreForLocation(loc);
  const images = normalCarImageSets[idx % normalCarImageSets.length];

  vehicles.push({
    id: currentId,
    type: 'car',
    category: 'car',
    isPremium: false,
    brand: item.brand,
    model: item.model,
    version: item.version,
    year: 2024,
    yearFabrication: 2024,
    price: item.price,
    mileage: 0,
    city: loc.city,
    state: loc.state,
    description: `${item.brand} ${item.model} ${item.version} 0km. Zero km disponível na loja Nexus Auto de ${loc.city}, revisado e com procedência total.`,
    images,
    fuel: item.fuel,
    color: item.color,
    plate: `NEX-0${currentId.toString().padStart(2, '0')}`,
    features: [...item.features, 'Garantia de Fábrica', 'Revisão Feita'],
    store: {
      id: store.id,
      name: 'Nexus Auto',
      type: 'standard',
      city: store.city,
      state: store.state,
      phone: store.phone,
      email: store.email,
      instagram: store.instagram
    },
    availability: 'available'
  });
  currentId++;
});

// 3. 10 Caminhonetes (IDs 51-60)
pickups.forEach((item, idx) => {
  const loc = getLocation(idx);
  const store = getStoreForLocation(loc);
  const images = pickupImageSets[idx % pickupImageSets.length];

  vehicles.push({
    id: currentId,
    type: 'car',
    category: 'pickup',
    isPremium: false,
    brand: item.brand,
    model: item.model,
    version: item.version,
    year: 2024,
    yearFabrication: 2024,
    price: item.price,
    mileage: 0,
    city: loc.city,
    state: loc.state,
    description: `${item.brand} ${item.model} ${item.version} 0km. Caminhonete nova com máxima robustez e capacidade, pronta para entrega na Nexus Auto ${loc.city}.`,
    images,
    fuel: item.fuel,
    color: item.color,
    plate: `NEX-0${currentId.toString().padStart(2, '0')}`,
    features: [...item.features, 'Tração 4x4', 'Garantia de Fábrica'],
    store: {
      id: store.id,
      name: 'Nexus Auto',
      type: 'standard',
      city: store.city,
      state: store.state,
      phone: store.phone,
      email: store.email,
      instagram: store.instagram
    },
    availability: 'available'
  });
  currentId++;
});

// 4. 15 Motos (IDs 61-75)
motorcycles.forEach((item, idx) => {
  const loc = getLocation(idx);
  const store = getStoreForLocation(loc);
  const images = motorcycleImageSets[idx % motorcycleImageSets.length];

  vehicles.push({
    id: currentId,
    type: 'motorcycle',
    category: 'motorcycle',
    isPremium: false,
    brand: item.brand,
    model: item.model,
    version: item.version,
    year: 2024,
    yearFabrication: 2024,
    price: item.price,
    mileage: 0,
    city: loc.city,
    state: loc.state,
    description: `${item.brand} ${item.model} ${item.version} 0km. Moto zero km, pronta para rodar com eficiência e segurança na Nexus Auto ${loc.city}.`,
    images,
    fuel: item.fuel,
    color: item.color,
    plate: `NEX-0${currentId.toString().padStart(2, '0')}`,
    features: [...item.features, 'Partida Elétrica', 'Garantia de Fábrica'],
    store: {
      id: store.id,
      name: 'Nexus Auto',
      type: 'standard',
      city: store.city,
      state: store.state,
      phone: store.phone,
      email: store.email,
      instagram: store.instagram
    },
    availability: 'available'
  });
  currentId++;
});

// Validador embutido no arquivo final
const content = `// Dados oficiais dos veículos Nexus Auto - 75 Veículos 0km
export const vehicles = ${JSON.stringify(vehicles, null, 2)};

export const validateCatalog = () => {
  const counts = {
    luxuryCars: 0,
    normalCars: 0,
    pickups: 0,
    motorcycles: 0
  };

  const brands = {};
  const models = {};

  vehicles.forEach(vehicle => {
    if (vehicle.type === 'car') {
      if (vehicle.category === 'pickup') {
        counts.pickups++;
      } else if (vehicle.isPremium) {
        counts.luxuryCars++;
      } else {
        counts.normalCars++;
      }
    } else if (vehicle.type === 'motorcycle') {
      counts.motorcycles++;
    }

    brands[vehicle.brand] = (brands[vehicle.brand] || 0) + 1;
    models[\`\${vehicle.brand} \${vehicle.model}\`] = true;
  });

  return {
    counts,
    brands,
    models,
    total: vehicles.length
  };
};
`;

const outputPath = join(__dirname, 'vehicles.js');
writeFileSync(outputPath, content, 'utf-8');
console.log(`Sucesso: ${vehicles.length} veículos gerados em ${outputPath}`);
