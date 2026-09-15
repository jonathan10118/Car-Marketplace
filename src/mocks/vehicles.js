// Dados mockados de veículos para demonstração
// Gerados automaticamente pelo script generateVehicles.js
// 120 veículos realistas (carros e motos)

export const vehicles = [
  {
    "id": 1,
    "type": "motorcycle",
    "brand": "Kawasaki",
    "model": "Z900",
    "year": 2021,
    "price": 31000,
    "mileage": 52312,
    "city": "Curitiba",
    "state": "PR",
    "description": "Kawasaki Z900 em estado cuidado. Baixo consumo, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    "features": [
      "Baixo consumo",
      "Manutenção em dia"
    ],
    "store": {
      "id": 1,
      "name": "BMW Premium Curitiba",
      "type": "premium",
      "city": "Curitiba",
      "state": "PR",
      "phone": "(41) 9999-9999",
      "email": "curitiba@bmwpremium.com",
      "instagram": "@bmwpremiumcuritiba"
    },
    "availability": "available",
    "category": "naked"
  },
  {
    "id": 2,
    "type": "motorcycle",
    "brand": "Yamaha",
    "model": "Fazer",
    "year": 2021,
    "price": 36000,
    "mileage": 46415,
    "city": "Fortaleza",
    "state": "CE",
    "description": "Yamaha Fazer em estado cuidado. Manutenção em dia, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    "features": [
      "Baixo consumo",
      "Manutenção em dia"
    ],
    "store": {
      "id": 8,
      "name": "Hyundai Center Porto Alegre",
      "type": "dealership",
      "city": "Porto Alegre",
      "state": "RS",
      "phone": "(51) 2222-2222",
      "email": "poa@hyundaicenter.com",
      "instagram": "@hyundaicenterpoa"
    },
    "availability": "available",
    "category": "cruiser"
  },
  {
    "id": 3,
    "type": "motorcycle",
    "brand": "Honda",
    "model": "CB 500X",
    "year": 2021,
    "price": 33000,
    "mileage": 50776,
    "city": "São Paulo",
    "state": "SP",
    "description": "Honda CB 500X em estado conservado. Pneus novos, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80",
    "features": [
      "Baixo consumo",
      "Manutenção em dia"
    ],
    "store": {
      "id": 12,
      "name": "Toyota Center São Paulo",
      "type": "dealership",
      "city": "São Paulo",
      "state": "SP",
      "phone": "(11) 8888-7777",
      "email": "sp@toyotacenter.com",
      "instagram": "@toyotacentersp"
    },
    "availability": "available",
    "category": "touring"
  },
  {
    "id": 4,
    "type": "car",
    "brand": "Hyundai",
    "model": "HB20",
    "year": 2020,
    "price": 99000,
    "mileage": 65828,
    "city": "Goiânia",
    "state": "GO",
    "description": "Hyundai HB20 em estado impecável. Câmera de ré, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1606152421811-aa6a6c2c7a7b?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 14,
      "name": "Yamaha Premium Rio",
      "type": "premium",
      "city": "Rio de Janeiro",
      "state": "RJ",
      "phone": "(21) 6666-5555",
      "email": "rio@yamahapremium.com",
      "instagram": "@yamahapremiumrio"
    },
    "availability": "sold",
    "category": "suv"
  },
  {
    "id": 5,
    "type": "car",
    "brand": "Hyundai",
    "model": "Tucson",
    "year": 2018,
    "price": 83000,
    "mileage": 91644,
    "city": "Porto Alegre",
    "state": "RS",
    "description": "Hyundai Tucson em estado cuidado. Direção elétrica, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1606152421811-aa6a6c2c7a7b?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 8,
      "name": "Hyundai Center Porto Alegre",
      "type": "dealership",
      "city": "Porto Alegre",
      "state": "RS",
      "phone": "(51) 2222-2222",
      "email": "poa@hyundaicenter.com",
      "instagram": "@hyundaicenterpoa"
    },
    "availability": "available",
    "category": "sports"
  },
  {
    "id": 6,
    "type": "motorcycle",
    "brand": "Honda",
    "model": "CB 500X",
    "year": 2022,
    "price": 37000,
    "mileage": 35378,
    "city": "São Paulo",
    "state": "SP",
    "description": "Honda CB 500X em estado cuidado. Manutenção em dia, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1558981033-0f0309284409?w=800&q=80",
    "features": [
      "Baixo consumo",
      "Manutenção em dia"
    ],
    "store": {
      "id": 12,
      "name": "Toyota Center São Paulo",
      "type": "dealership",
      "city": "São Paulo",
      "state": "SP",
      "phone": "(11) 8888-7777",
      "email": "sp@toyotacenter.com",
      "instagram": "@toyotacentersp"
    },
    "availability": "available",
    "category": "naked"
  },
  {
    "id": 7,
    "type": "car",
    "brand": "Honda",
    "model": "HR-V",
    "year": 2021,
    "price": 97000,
    "mileage": 45610,
    "city": "Belo Horizonte",
    "state": "MG",
    "description": "Honda HR-V em estado excelente. Ar condicionado, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 3,
      "name": "Jeep Store Minas",
      "type": "dealership",
      "city": "Belo Horizonte",
      "state": "MG",
      "phone": "(31) 7777-7777",
      "email": "bh@jeepstore.com",
      "instagram": "@jeepstoreminas"
    },
    "availability": "available",
    "category": "sports"
  },
  {
    "id": 8,
    "type": "car",
    "brand": "Nissan",
    "model": "Sentra",
    "year": 2023,
    "price": 114000,
    "mileage": 24568,
    "city": "Belo Horizonte",
    "state": "MG",
    "description": "Nissan Sentra em estado conservado. Central multimídia, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 3,
      "name": "Jeep Store Minas",
      "type": "dealership",
      "city": "Belo Horizonte",
      "state": "MG",
      "phone": "(31) 7777-7777",
      "email": "bh@jeepstore.com",
      "instagram": "@jeepstoreminas"
    },
    "availability": "available",
    "category": "sedan"
  },
  {
    "id": 9,
    "type": "motorcycle",
    "brand": "Yamaha",
    "model": "MT-09",
    "year": 2021,
    "price": 31000,
    "mileage": 54835,
    "city": "Curitiba",
    "state": "PR",
    "description": "Yamaha MT-09 em estado cuidado. Pneus novos, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1558981033-0f0309284409?w=800&q=80",
    "features": [
      "Baixo consumo",
      "Manutenção em dia"
    ],
    "store": {
      "id": 15,
      "name": "Kawasaki Store Curitiba",
      "type": "dealership",
      "city": "Curitiba",
      "state": "PR",
      "phone": "(41) 5555-4444",
      "email": "curitiba@kawasakistore.com",
      "instagram": "@kawasakistorecwb"
    },
    "availability": "available",
    "category": "naked"
  },
  {
    "id": 10,
    "type": "car",
    "brand": "Chevrolet",
    "model": "Tracker",
    "year": 2021,
    "price": 91000,
    "mileage": 46655,
    "city": "Recife",
    "state": "PE",
    "description": "Chevrolet Tracker em estado pronto. Vidros elétricos, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 1,
      "name": "BMW Premium Curitiba",
      "type": "premium",
      "city": "Curitiba",
      "state": "PR",
      "phone": "(41) 9999-9999",
      "email": "curitiba@bmwpremium.com",
      "instagram": "@bmwpremiumcuritiba"
    },
    "availability": "reserved",
    "category": "luxury"
  },
  {
    "id": 11,
    "type": "car",
    "brand": "Citroën",
    "model": "C3",
    "year": 2020,
    "price": 51000,
    "mileage": 61352,
    "city": "Salvador",
    "state": "BA",
    "description": "Citroën C3 em estado excelente. Câmera de ré, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 4,
      "name": "Auto Center Curitiba",
      "type": "standard",
      "city": "Curitiba",
      "state": "PR",
      "phone": "(41) 6666-6666",
      "email": "contato@autocentercuritiba.com",
      "instagram": "@autocentercuritiba"
    },
    "availability": "available",
    "category": "sports"
  },
  {
    "id": 12,
    "type": "car",
    "brand": "Peugeot",
    "model": "2008",
    "year": 2020,
    "price": 51000,
    "mileage": 60006,
    "city": "Fortaleza",
    "state": "CE",
    "description": "Peugeot 2008 em estado cuidado. Vidros elétricos, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 15,
      "name": "Kawasaki Store Curitiba",
      "type": "dealership",
      "city": "Curitiba",
      "state": "PR",
      "phone": "(41) 5555-4444",
      "email": "curitiba@kawasakistore.com",
      "instagram": "@kawasakistorecwb"
    },
    "availability": "available",
    "category": "sports"
  },
  {
    "id": 13,
    "type": "car",
    "brand": "Hyundai",
    "model": "HB20",
    "year": 2022,
    "price": 108000,
    "mileage": 36306,
    "city": "Curitiba",
    "state": "PR",
    "description": "Hyundai HB20 em estado cuidado. Vidros elétricos, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 1,
      "name": "BMW Premium Curitiba",
      "type": "premium",
      "city": "Curitiba",
      "state": "PR",
      "phone": "(41) 9999-9999",
      "email": "curitiba@bmwpremium.com",
      "instagram": "@bmwpremiumcuritiba"
    },
    "availability": "available",
    "category": "sedan"
  },
  {
    "id": 14,
    "type": "motorcycle",
    "brand": "Kawasaki",
    "model": "Z900",
    "year": 2018,
    "price": 27000,
    "mileage": 93749,
    "city": "Salvador",
    "state": "BA",
    "description": "Kawasaki Z900 em estado impecável. Pneus novos, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&q=80",
    "features": [
      "Baixo consumo",
      "Manutenção em dia"
    ],
    "store": {
      "id": 5,
      "name": "BMW Premium São Paulo",
      "type": "premium",
      "city": "São Paulo",
      "state": "SP",
      "phone": "(11) 5555-5555",
      "email": "sp@bmwpremium.com",
      "instagram": "@bmwpremiumsp"
    },
    "availability": "available",
    "category": "adventure"
  },
  {
    "id": 15,
    "type": "car",
    "brand": "Nissan",
    "model": "Frontier",
    "year": 2020,
    "price": 73000,
    "mileage": 61204,
    "city": "Goiânia",
    "state": "GO",
    "description": "Nissan Frontier em estado excelente. Central multimídia, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1606152421811-aa6a6c2c7a7b?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 7,
      "name": "Audi Premium Brasília",
      "type": "premium",
      "city": "Brasília",
      "state": "DF",
      "phone": "(61) 3333-3333",
      "email": "bsb@audipremium.com",
      "instagram": "@audipremiumbsb"
    },
    "availability": "reserved",
    "category": "suv"
  },
  {
    "id": 16,
    "type": "car",
    "brand": "Peugeot",
    "model": "208",
    "year": 2022,
    "price": 60000,
    "mileage": 33634,
    "city": "Porto Alegre",
    "state": "RS",
    "description": "Peugeot 208 em estado impecável. Ar condicionado, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1606152421811-aa6a6c2c7a7b?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 8,
      "name": "Hyundai Center Porto Alegre",
      "type": "dealership",
      "city": "Porto Alegre",
      "state": "RS",
      "phone": "(51) 2222-2222",
      "email": "poa@hyundaicenter.com",
      "instagram": "@hyundaicenterpoa"
    },
    "availability": "available",
    "category": "suv"
  },
  {
    "id": 17,
    "type": "motorcycle",
    "brand": "Kawasaki",
    "model": "Versys 650",
    "year": 2018,
    "price": 21000,
    "mileage": 95503,
    "city": "Curitiba",
    "state": "PR",
    "description": "Kawasaki Versys 650 em estado excelente. Manutenção em dia, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    "features": [
      "Baixo consumo",
      "Manutenção em dia"
    ],
    "store": {
      "id": 1,
      "name": "BMW Premium Curitiba",
      "type": "premium",
      "city": "Curitiba",
      "state": "PR",
      "phone": "(41) 9999-9999",
      "email": "curitiba@bmwpremium.com",
      "instagram": "@bmwpremiumcuritiba"
    },
    "availability": "available",
    "category": "adventure"
  },
  {
    "id": 18,
    "type": "motorcycle",
    "brand": "Yamaha",
    "model": "MT-07",
    "year": 2020,
    "price": 34000,
    "mileage": 64914,
    "city": "Recife",
    "state": "PE",
    "description": "Yamaha MT-07 em estado cuidado. Pneus novos, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80",
    "features": [
      "Baixo consumo",
      "Manutenção em dia"
    ],
    "store": {
      "id": 5,
      "name": "BMW Premium São Paulo",
      "type": "premium",
      "city": "São Paulo",
      "state": "SP",
      "phone": "(11) 5555-5555",
      "email": "sp@bmwpremium.com",
      "instagram": "@bmwpremiumsp"
    },
    "availability": "available",
    "category": "sport"
  },
  {
    "id": 19,
    "type": "car",
    "brand": "Jeep",
    "model": "Cherokee",
    "year": 2022,
    "price": 115000,
    "mileage": 38109,
    "city": "Recife",
    "state": "PE",
    "description": "Jeep Cherokee em estado impecável. Central multimídia, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 12,
      "name": "Toyota Center São Paulo",
      "type": "dealership",
      "city": "São Paulo",
      "state": "SP",
      "phone": "(11) 8888-7777",
      "email": "sp@toyotacenter.com",
      "instagram": "@toyotacentersp"
    },
    "availability": "available",
    "category": "hatchback"
  },
  {
    "id": 20,
    "type": "motorcycle",
    "brand": "Yamaha",
    "model": "Lander",
    "year": 2022,
    "price": 29000,
    "mileage": 39711,
    "city": "Recife",
    "state": "PE",
    "description": "Yamaha Lander em estado excelente. Documentação em dia, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1591637333184-19aa84b3e027?w=800&q=80",
    "features": [
      "Baixo consumo",
      "Manutenção em dia"
    ],
    "store": {
      "id": 8,
      "name": "Hyundai Center Porto Alegre",
      "type": "dealership",
      "city": "Porto Alegre",
      "state": "RS",
      "phone": "(51) 2222-2222",
      "email": "poa@hyundaicenter.com",
      "instagram": "@hyundaicenterpoa"
    },
    "availability": "available",
    "category": "cruiser"
  },
  {
    "id": 21,
    "type": "car",
    "brand": "Hyundai",
    "model": "ix35",
    "year": 2020,
    "price": 80000,
    "mileage": 64367,
    "city": "Rio de Janeiro",
    "state": "RJ",
    "description": "Hyundai ix35 em estado impecável. Central multimídia, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 2,
      "name": "Honda Premium Rio",
      "type": "premium",
      "city": "Rio de Janeiro",
      "state": "RJ",
      "phone": "(21) 8888-8888",
      "email": "rio@hondapremium.com",
      "instagram": "@hondapremiumrio"
    },
    "availability": "available",
    "category": "hatchback"
  },
  {
    "id": 22,
    "type": "motorcycle",
    "brand": "Honda",
    "model": "CB 500X",
    "year": 2022,
    "price": 40000,
    "mileage": 39656,
    "city": "Salvador",
    "state": "BA",
    "description": "Honda CB 500X em estado impecável. Baixo consumo, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1558981033-0f0309284409?w=800&q=80",
    "features": [
      "Baixo consumo",
      "Manutenção em dia"
    ],
    "store": {
      "id": 1,
      "name": "BMW Premium Curitiba",
      "type": "premium",
      "city": "Curitiba",
      "state": "PR",
      "phone": "(41) 9999-9999",
      "email": "curitiba@bmwpremium.com",
      "instagram": "@bmwpremiumcuritiba"
    },
    "availability": "available",
    "category": "naked"
  },
  {
    "id": 23,
    "type": "car",
    "brand": "Chevrolet",
    "model": "S10",
    "year": 2018,
    "price": 71000,
    "mileage": 95396,
    "city": "Rio de Janeiro",
    "state": "RJ",
    "description": "Chevrolet S10 em estado impecável. Vidros elétricos, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 14,
      "name": "Yamaha Premium Rio",
      "type": "premium",
      "city": "Rio de Janeiro",
      "state": "RJ",
      "phone": "(21) 6666-5555",
      "email": "rio@yamahapremium.com",
      "instagram": "@yamahapremiumrio"
    },
    "availability": "available",
    "category": "sports"
  },
  {
    "id": 24,
    "type": "car",
    "brand": "Chevrolet",
    "model": "Onix",
    "year": 2021,
    "price": 79000,
    "mileage": 54001,
    "city": "São Paulo",
    "state": "SP",
    "description": "Chevrolet Onix em estado excelente. Direção elétrica, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 5,
      "name": "BMW Premium São Paulo",
      "type": "premium",
      "city": "São Paulo",
      "state": "SP",
      "phone": "(11) 5555-5555",
      "email": "sp@bmwpremium.com",
      "instagram": "@bmwpremiumsp"
    },
    "availability": "available",
    "category": "suv"
  },
  {
    "id": 25,
    "type": "motorcycle",
    "brand": "Honda",
    "model": "PCX",
    "year": 2022,
    "price": 35000,
    "mileage": 30616,
    "city": "Belo Horizonte",
    "state": "MG",
    "description": "Honda PCX em estado conservado. Documentação em dia, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1622185135505-2d795003994a?w=800&q=80",
    "features": [
      "Baixo consumo",
      "Manutenção em dia"
    ],
    "store": {
      "id": 3,
      "name": "Jeep Store Minas",
      "type": "dealership",
      "city": "Belo Horizonte",
      "state": "MG",
      "phone": "(31) 7777-7777",
      "email": "bh@jeepstore.com",
      "instagram": "@jeepstoreminas"
    },
    "availability": "available",
    "category": "adventure"
  },
  {
    "id": 26,
    "type": "motorcycle",
    "brand": "Yamaha",
    "model": "MT-07",
    "year": 2022,
    "price": 30000,
    "mileage": 39043,
    "city": "Belo Horizonte",
    "state": "MG",
    "description": "Yamaha MT-07 em estado excelente. Manutenção em dia, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1571188654248-7a89213915f7?w=800&q=80",
    "features": [
      "Baixo consumo",
      "Manutenção em dia"
    ],
    "store": {
      "id": 3,
      "name": "Jeep Store Minas",
      "type": "dealership",
      "city": "Belo Horizonte",
      "state": "MG",
      "phone": "(31) 7777-7777",
      "email": "bh@jeepstore.com",
      "instagram": "@jeepstoreminas"
    },
    "availability": "available",
    "category": "touring"
  },
  {
    "id": 27,
    "type": "car",
    "brand": "Citroën",
    "model": "C3",
    "year": 2022,
    "price": 51000,
    "mileage": 37937,
    "city": "Porto Alegre",
    "state": "RS",
    "description": "Citroën C3 em estado impecável. Direção elétrica, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 8,
      "name": "Hyundai Center Porto Alegre",
      "type": "dealership",
      "city": "Porto Alegre",
      "state": "RS",
      "phone": "(51) 2222-2222",
      "email": "poa@hyundaicenter.com",
      "instagram": "@hyundaicenterpoa"
    },
    "availability": "available",
    "category": "hatchback"
  },
  {
    "id": 28,
    "type": "car",
    "brand": "Citroën",
    "model": "C5 Aircross",
    "year": 2021,
    "price": 46000,
    "mileage": 53717,
    "city": "Recife",
    "state": "PE",
    "description": "Citroën C5 Aircross em estado conservado. Câmera de ré, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 3,
      "name": "Jeep Store Minas",
      "type": "dealership",
      "city": "Belo Horizonte",
      "state": "MG",
      "phone": "(31) 7777-7777",
      "email": "bh@jeepstore.com",
      "instagram": "@jeepstoreminas"
    },
    "availability": "available",
    "category": "sedan"
  },
  {
    "id": 29,
    "type": "motorcycle",
    "brand": "Yamaha",
    "model": "Lander",
    "year": 2018,
    "price": 27000,
    "mileage": 97515,
    "city": "Curitiba",
    "state": "PR",
    "description": "Yamaha Lander em estado impecável. Manutenção em dia, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1591637333184-19aa84b3e027?w=800&q=80",
    "features": [
      "Baixo consumo",
      "Manutenção em dia"
    ],
    "store": {
      "id": 15,
      "name": "Kawasaki Store Curitiba",
      "type": "dealership",
      "city": "Curitiba",
      "state": "PR",
      "phone": "(41) 5555-4444",
      "email": "curitiba@kawasakistore.com",
      "instagram": "@kawasakistorecwb"
    },
    "availability": "available",
    "category": "cruiser"
  },
  {
    "id": 30,
    "type": "motorcycle",
    "brand": "Kawasaki",
    "model": "Versys 650",
    "year": 2018,
    "price": 21000,
    "mileage": 92319,
    "city": "Rio de Janeiro",
    "state": "RJ",
    "description": "Kawasaki Versys 650 em estado cuidado. Pneus novos, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&q=80",
    "features": [
      "Baixo consumo",
      "Manutenção em dia"
    ],
    "store": {
      "id": 14,
      "name": "Yamaha Premium Rio",
      "type": "premium",
      "city": "Rio de Janeiro",
      "state": "RJ",
      "phone": "(21) 6666-5555",
      "email": "rio@yamahapremium.com",
      "instagram": "@yamahapremiumrio"
    },
    "availability": "available",
    "category": "sport"
  },
  {
    "id": 31,
    "type": "car",
    "brand": "Citroën",
    "model": "C3",
    "year": 2018,
    "price": 29000,
    "mileage": 98151,
    "city": "Goiânia",
    "state": "GO",
    "description": "Citroën C3 em estado impecável. Central multimídia, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 5,
      "name": "BMW Premium São Paulo",
      "type": "premium",
      "city": "São Paulo",
      "state": "SP",
      "phone": "(11) 5555-5555",
      "email": "sp@bmwpremium.com",
      "instagram": "@bmwpremiumsp"
    },
    "availability": "available",
    "category": "suv"
  },
  {
    "id": 32,
    "type": "motorcycle",
    "brand": "Yamaha",
    "model": "Fazer",
    "year": 2019,
    "price": 22000,
    "mileage": 80713,
    "city": "Recife",
    "state": "PE",
    "description": "Yamaha Fazer em estado cuidado. Documentação em dia, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&q=80",
    "features": [
      "Baixo consumo",
      "Manutenção em dia"
    ],
    "store": {
      "id": 2,
      "name": "Honda Premium Rio",
      "type": "premium",
      "city": "Rio de Janeiro",
      "state": "RJ",
      "phone": "(21) 8888-8888",
      "email": "rio@hondapremium.com",
      "instagram": "@hondapremiumrio"
    },
    "availability": "available",
    "category": "sport"
  },
  {
    "id": 33,
    "type": "motorcycle",
    "brand": "BMW Motorrad",
    "model": "R 1250 GS",
    "year": 2022,
    "price": 67000,
    "mileage": 32394,
    "city": "Brasília",
    "state": "DF",
    "description": "BMW Motorrad R 1250 GS em estado cuidado. Manutenção em dia, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1558981033-0f0309284409?w=800&q=80",
    "features": [
      "Baixo consumo",
      "Manutenção em dia"
    ],
    "store": {
      "id": 7,
      "name": "Audi Premium Brasília",
      "type": "premium",
      "city": "Brasília",
      "state": "DF",
      "phone": "(61) 3333-3333",
      "email": "bsb@audipremium.com",
      "instagram": "@audipremiumbsb"
    },
    "availability": "available",
    "category": "touring"
  },
  {
    "id": 34,
    "type": "car",
    "brand": "Volkswagen",
    "model": "Tiguan",
    "year": 2021,
    "price": 80000,
    "mileage": 45901,
    "city": "Porto Alegre",
    "state": "RS",
    "description": "Volkswagen Tiguan em estado impecável. Direção elétrica, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 8,
      "name": "Hyundai Center Porto Alegre",
      "type": "dealership",
      "city": "Porto Alegre",
      "state": "RS",
      "phone": "(51) 2222-2222",
      "email": "poa@hyundaicenter.com",
      "instagram": "@hyundaicenterpoa"
    },
    "availability": "available",
    "category": "sedan"
  },
  {
    "id": 35,
    "type": "car",
    "brand": "Chevrolet",
    "model": "Tracker",
    "year": 2021,
    "price": 76000,
    "mileage": 51960,
    "city": "Curitiba",
    "state": "PR",
    "description": "Chevrolet Tracker em estado excelente. Ar condicionado, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 1,
      "name": "BMW Premium Curitiba",
      "type": "premium",
      "city": "Curitiba",
      "state": "PR",
      "phone": "(41) 9999-9999",
      "email": "curitiba@bmwpremium.com",
      "instagram": "@bmwpremiumcuritiba"
    },
    "availability": "available",
    "category": "sports"
  },
  {
    "id": 36,
    "type": "car",
    "brand": "Chevrolet",
    "model": "Equinox",
    "year": 2022,
    "price": 116000,
    "mileage": 37601,
    "city": "Porto Alegre",
    "state": "RS",
    "description": "Chevrolet Equinox em estado impecável. Central multimídia, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1606152421811-aa6a6c2c7a7b?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 8,
      "name": "Hyundai Center Porto Alegre",
      "type": "dealership",
      "city": "Porto Alegre",
      "state": "RS",
      "phone": "(51) 2222-2222",
      "email": "poa@hyundaicenter.com",
      "instagram": "@hyundaicenterpoa"
    },
    "availability": "available",
    "category": "sports"
  },
  {
    "id": 37,
    "type": "car",
    "brand": "Citroën",
    "model": "C4",
    "year": 2018,
    "price": 36000,
    "mileage": 96096,
    "city": "Salvador",
    "state": "BA",
    "description": "Citroën C4 em estado excelente. Vidros elétricos, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 14,
      "name": "Yamaha Premium Rio",
      "type": "premium",
      "city": "Rio de Janeiro",
      "state": "RJ",
      "phone": "(21) 6666-5555",
      "email": "rio@yamahapremium.com",
      "instagram": "@yamahapremiumrio"
    },
    "availability": "available",
    "category": "hatchback"
  },
  {
    "id": 38,
    "type": "motorcycle",
    "brand": "Yamaha",
    "model": "MT-07",
    "year": 2018,
    "price": 27000,
    "mileage": 98683,
    "city": "Brasília",
    "state": "DF",
    "description": "Yamaha MT-07 em estado conservado. Documentação em dia, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80",
    "features": [
      "Baixo consumo",
      "Manutenção em dia"
    ],
    "store": {
      "id": 7,
      "name": "Audi Premium Brasília",
      "type": "premium",
      "city": "Brasília",
      "state": "DF",
      "phone": "(61) 3333-3333",
      "email": "bsb@audipremium.com",
      "instagram": "@audipremiumbsb"
    },
    "availability": "available",
    "category": "sport"
  },
  {
    "id": 39,
    "type": "motorcycle",
    "brand": "Honda",
    "model": "PCX",
    "year": 2024,
    "price": 37000,
    "mileage": 7693,
    "city": "Porto Alegre",
    "state": "RS",
    "description": "Honda PCX em estado impecável. Pneus novos, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1571188654248-7a89213915f7?w=800&q=80",
    "features": [
      "Baixo consumo",
      "Manutenção em dia"
    ],
    "store": {
      "id": 8,
      "name": "Hyundai Center Porto Alegre",
      "type": "dealership",
      "city": "Porto Alegre",
      "state": "RS",
      "phone": "(51) 2222-2222",
      "email": "poa@hyundaicenter.com",
      "instagram": "@hyundaicenterpoa"
    },
    "availability": "available",
    "category": "sport"
  },
  {
    "id": 40,
    "type": "motorcycle",
    "brand": "Kawasaki",
    "model": "Versys 650",
    "year": 2020,
    "price": 32000,
    "mileage": 61997,
    "city": "Recife",
    "state": "PE",
    "description": "Kawasaki Versys 650 em estado impecável. Documentação em dia, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80",
    "features": [
      "Baixo consumo",
      "Manutenção em dia"
    ],
    "store": {
      "id": 7,
      "name": "Audi Premium Brasília",
      "type": "premium",
      "city": "Brasília",
      "state": "DF",
      "phone": "(61) 3333-3333",
      "email": "bsb@audipremium.com",
      "instagram": "@audipremiumbsb"
    },
    "availability": "available",
    "category": "naked"
  },
  {
    "id": 41,
    "type": "motorcycle",
    "brand": "Yamaha",
    "model": "Lander",
    "year": 2022,
    "price": 31000,
    "mileage": 30021,
    "city": "Recife",
    "state": "PE",
    "description": "Yamaha Lander em estado excelente. Baixo consumo, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1622185135505-2d795003994a?w=800&q=80",
    "features": [
      "Baixo consumo",
      "Manutenção em dia"
    ],
    "store": {
      "id": 6,
      "name": "Mercedes-Benz Rio",
      "type": "dealership",
      "city": "Rio de Janeiro",
      "state": "RJ",
      "phone": "(21) 4444-4444",
      "email": "rio@mercedes-benz.com",
      "instagram": "@mercedesbenzrio"
    },
    "availability": "available",
    "category": "cruiser"
  },
  {
    "id": 42,
    "type": "car",
    "brand": "Chevrolet",
    "model": "Cruze",
    "year": 2018,
    "price": 74000,
    "mileage": 98764,
    "city": "Rio de Janeiro",
    "state": "RJ",
    "description": "Chevrolet Cruze em estado pronto. Vidros elétricos, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1606152421811-aa6a6c2c7a7b?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 14,
      "name": "Yamaha Premium Rio",
      "type": "premium",
      "city": "Rio de Janeiro",
      "state": "RJ",
      "phone": "(21) 6666-5555",
      "email": "rio@yamahapremium.com",
      "instagram": "@yamahapremiumrio"
    },
    "availability": "reserved",
    "category": "sports"
  },
  {
    "id": 43,
    "type": "motorcycle",
    "brand": "Honda",
    "model": "CB 500X",
    "year": 2021,
    "price": 26000,
    "mileage": 49965,
    "city": "São Paulo",
    "state": "SP",
    "description": "Honda CB 500X em estado pronto. Manutenção em dia, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&q=80",
    "features": [
      "Baixo consumo",
      "Manutenção em dia"
    ],
    "store": {
      "id": 5,
      "name": "BMW Premium São Paulo",
      "type": "premium",
      "city": "São Paulo",
      "state": "SP",
      "phone": "(11) 5555-5555",
      "email": "sp@bmwpremium.com",
      "instagram": "@bmwpremiumsp"
    },
    "availability": "available",
    "category": "cruiser"
  },
  {
    "id": 44,
    "type": "motorcycle",
    "brand": "Kawasaki",
    "model": "Versys 650",
    "year": 2020,
    "price": 24000,
    "mileage": 67608,
    "city": "Goiânia",
    "state": "GO",
    "description": "Kawasaki Versys 650 em estado impecável. Baixo consumo, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1558981033-0f0309284409?w=800&q=80",
    "features": [
      "Baixo consumo",
      "Manutenção em dia"
    ],
    "store": {
      "id": 6,
      "name": "Mercedes-Benz Rio",
      "type": "dealership",
      "city": "Rio de Janeiro",
      "state": "RJ",
      "phone": "(21) 4444-4444",
      "email": "rio@mercedes-benz.com",
      "instagram": "@mercedesbenzrio"
    },
    "availability": "available",
    "category": "sport"
  },
  {
    "id": 45,
    "type": "motorcycle",
    "brand": "Honda",
    "model": "PCX",
    "year": 2020,
    "price": 33000,
    "mileage": 63120,
    "city": "Salvador",
    "state": "BA",
    "description": "Honda PCX em estado conservado. Documentação em dia, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1571188654248-7a89213915f7?w=800&q=80",
    "features": [
      "Baixo consumo",
      "Manutenção em dia"
    ],
    "store": {
      "id": 11,
      "name": "Porsche Center São Paulo",
      "type": "premium",
      "city": "São Paulo",
      "state": "SP",
      "phone": "(11) 9999-8888",
      "email": "sp@porsche.com",
      "instagram": "@porschecentersp"
    },
    "availability": "available",
    "category": "naked"
  },
  {
    "id": 46,
    "type": "motorcycle",
    "brand": "Yamaha",
    "model": "Fazer",
    "year": 2018,
    "price": 19000,
    "mileage": 95616,
    "city": "São Paulo",
    "state": "SP",
    "description": "Yamaha Fazer em estado impecável. Manutenção em dia, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1558981033-0f0309284409?w=800&q=80",
    "features": [
      "Baixo consumo",
      "Manutenção em dia"
    ],
    "store": {
      "id": 11,
      "name": "Porsche Center São Paulo",
      "type": "premium",
      "city": "São Paulo",
      "state": "SP",
      "phone": "(11) 9999-8888",
      "email": "sp@porsche.com",
      "instagram": "@porschecentersp"
    },
    "availability": "sold",
    "category": "naked"
  },
  {
    "id": 47,
    "type": "car",
    "brand": "Citroën",
    "model": "C5 Aircross",
    "year": 2021,
    "price": 41000,
    "mileage": 47417,
    "city": "Rio de Janeiro",
    "state": "RJ",
    "description": "Citroën C5 Aircross em estado excelente. Direção elétrica, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 6,
      "name": "Mercedes-Benz Rio",
      "type": "dealership",
      "city": "Rio de Janeiro",
      "state": "RJ",
      "phone": "(21) 4444-4444",
      "email": "rio@mercedes-benz.com",
      "instagram": "@mercedesbenzrio"
    },
    "availability": "available",
    "category": "hatchback"
  },
  {
    "id": 48,
    "type": "motorcycle",
    "brand": "Honda",
    "model": "NC750X",
    "year": 2021,
    "price": 30000,
    "mileage": 53940,
    "city": "Recife",
    "state": "PE",
    "description": "Honda NC750X em estado conservado. Baixo consumo, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    "features": [
      "Baixo consumo",
      "Manutenção em dia"
    ],
    "store": {
      "id": 6,
      "name": "Mercedes-Benz Rio",
      "type": "dealership",
      "city": "Rio de Janeiro",
      "state": "RJ",
      "phone": "(21) 4444-4444",
      "email": "rio@mercedes-benz.com",
      "instagram": "@mercedesbenzrio"
    },
    "availability": "available",
    "category": "adventure"
  },
  {
    "id": 49,
    "type": "car",
    "brand": "Hyundai",
    "model": "HB20",
    "year": 2024,
    "price": 107000,
    "mileage": 4456,
    "city": "Goiânia",
    "state": "GO",
    "description": "Hyundai HB20 em estado conservado. Direção elétrica, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 12,
      "name": "Toyota Center São Paulo",
      "type": "dealership",
      "city": "São Paulo",
      "state": "SP",
      "phone": "(11) 8888-7777",
      "email": "sp@toyotacenter.com",
      "instagram": "@toyotacentersp"
    },
    "availability": "available",
    "category": "sports"
  },
  {
    "id": 50,
    "type": "car",
    "brand": "Hyundai",
    "model": "Santa Fe",
    "year": 2019,
    "price": 77000,
    "mileage": 80620,
    "city": "Porto Alegre",
    "state": "RS",
    "description": "Hyundai Santa Fe em estado excelente. Vidros elétricos, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 8,
      "name": "Hyundai Center Porto Alegre",
      "type": "dealership",
      "city": "Porto Alegre",
      "state": "RS",
      "phone": "(51) 2222-2222",
      "email": "poa@hyundaicenter.com",
      "instagram": "@hyundaicenterpoa"
    },
    "availability": "available",
    "category": "luxury"
  },
  {
    "id": 51,
    "type": "car",
    "brand": "Fiat",
    "model": "Mobi",
    "year": 2020,
    "price": 49000,
    "mileage": 61941,
    "city": "São Paulo",
    "state": "SP",
    "description": "Fiat Mobi em estado cuidado. Central multimídia, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 10,
      "name": "Chevrolet Store SP",
      "type": "dealership",
      "city": "São Paulo",
      "state": "SP",
      "phone": "(11) 0000-0000",
      "email": "sp@chevroletstore.com",
      "instagram": "@chevroletstoresp"
    },
    "availability": "reserved",
    "category": "hatchback"
  },
  {
    "id": 52,
    "type": "car",
    "brand": "Hyundai",
    "model": "Tucson",
    "year": 2021,
    "price": 106000,
    "mileage": 48285,
    "city": "Fortaleza",
    "state": "CE",
    "description": "Hyundai Tucson em estado conservado. Central multimídia, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 7,
      "name": "Audi Premium Brasília",
      "type": "premium",
      "city": "Brasília",
      "state": "DF",
      "phone": "(61) 3333-3333",
      "email": "bsb@audipremium.com",
      "instagram": "@audipremiumbsb"
    },
    "availability": "available",
    "category": "luxury"
  },
  {
    "id": 53,
    "type": "motorcycle",
    "brand": "Honda",
    "model": "Biz",
    "year": 2018,
    "price": 19000,
    "mileage": 99626,
    "city": "Belo Horizonte",
    "state": "MG",
    "description": "Honda Biz em estado impecável. Baixo consumo, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1622185135505-2d795003994a?w=800&q=80",
    "features": [
      "Baixo consumo",
      "Manutenção em dia"
    ],
    "store": {
      "id": 3,
      "name": "Jeep Store Minas",
      "type": "dealership",
      "city": "Belo Horizonte",
      "state": "MG",
      "phone": "(31) 7777-7777",
      "email": "bh@jeepstore.com",
      "instagram": "@jeepstoreminas"
    },
    "availability": "available",
    "category": "adventure"
  },
  {
    "id": 54,
    "type": "motorcycle",
    "brand": "BMW Motorrad",
    "model": "R 1250 GS",
    "year": 2021,
    "price": 52000,
    "mileage": 52081,
    "city": "Goiânia",
    "state": "GO",
    "description": "BMW Motorrad R 1250 GS em estado impecável. Baixo consumo, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&q=80",
    "features": [
      "Baixo consumo",
      "Manutenção em dia"
    ],
    "store": {
      "id": 8,
      "name": "Hyundai Center Porto Alegre",
      "type": "dealership",
      "city": "Porto Alegre",
      "state": "RS",
      "phone": "(51) 2222-2222",
      "email": "poa@hyundaicenter.com",
      "instagram": "@hyundaicenterpoa"
    },
    "availability": "available",
    "category": "adventure"
  },
  {
    "id": 55,
    "type": "motorcycle",
    "brand": "Honda",
    "model": "Biz",
    "year": 2024,
    "price": 37000,
    "mileage": 8461,
    "city": "Recife",
    "state": "PE",
    "description": "Honda Biz em estado pronto. Pneus novos, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    "features": [
      "Baixo consumo",
      "Manutenção em dia"
    ],
    "store": {
      "id": 15,
      "name": "Kawasaki Store Curitiba",
      "type": "dealership",
      "city": "Curitiba",
      "state": "PR",
      "phone": "(41) 5555-4444",
      "email": "curitiba@kawasakistore.com",
      "instagram": "@kawasakistorecwb"
    },
    "availability": "available",
    "category": "sport"
  },
  {
    "id": 56,
    "type": "motorcycle",
    "brand": "Yamaha",
    "model": "MT-07",
    "year": 2021,
    "price": 32000,
    "mileage": 45633,
    "city": "São Paulo",
    "state": "SP",
    "description": "Yamaha MT-07 em estado impecável. Manutenção em dia, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1571188654248-7a89213915f7?w=800&q=80",
    "features": [
      "Baixo consumo",
      "Manutenção em dia"
    ],
    "store": {
      "id": 10,
      "name": "Chevrolet Store SP",
      "type": "dealership",
      "city": "São Paulo",
      "state": "SP",
      "phone": "(11) 0000-0000",
      "email": "sp@chevroletstore.com",
      "instagram": "@chevroletstoresp"
    },
    "availability": "available",
    "category": "naked"
  },
  {
    "id": 57,
    "type": "car",
    "brand": "Chevrolet",
    "model": "Tracker",
    "year": 2019,
    "price": 82000,
    "mileage": 84465,
    "city": "Salvador",
    "state": "BA",
    "description": "Chevrolet Tracker em estado excelente. Câmera de ré, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 8,
      "name": "Hyundai Center Porto Alegre",
      "type": "dealership",
      "city": "Porto Alegre",
      "state": "RS",
      "phone": "(51) 2222-2222",
      "email": "poa@hyundaicenter.com",
      "instagram": "@hyundaicenterpoa"
    },
    "availability": "available",
    "category": "sedan"
  },
  {
    "id": 58,
    "type": "car",
    "brand": "Hyundai",
    "model": "Creta",
    "year": 2019,
    "price": 82000,
    "mileage": 77291,
    "city": "Goiânia",
    "state": "GO",
    "description": "Hyundai Creta em estado cuidado. Vidros elétricos, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 12,
      "name": "Toyota Center São Paulo",
      "type": "dealership",
      "city": "São Paulo",
      "state": "SP",
      "phone": "(11) 8888-7777",
      "email": "sp@toyotacenter.com",
      "instagram": "@toyotacentersp"
    },
    "availability": "available",
    "category": "suv"
  },
  {
    "id": 59,
    "type": "car",
    "brand": "Renault",
    "model": "Duster",
    "year": 2021,
    "price": 38000,
    "mileage": 50746,
    "city": "Fortaleza",
    "state": "CE",
    "description": "Renault Duster em estado excelente. Câmera de ré, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 6,
      "name": "Mercedes-Benz Rio",
      "type": "dealership",
      "city": "Rio de Janeiro",
      "state": "RJ",
      "phone": "(21) 4444-4444",
      "email": "rio@mercedes-benz.com",
      "instagram": "@mercedesbenzrio"
    },
    "availability": "available",
    "category": "hatchback"
  },
  {
    "id": 60,
    "type": "motorcycle",
    "brand": "Honda",
    "model": "XRE300",
    "year": 2023,
    "price": 38000,
    "mileage": 24461,
    "city": "Porto Alegre",
    "state": "RS",
    "description": "Honda XRE300 em estado conservado. Pneus novos, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80",
    "features": [
      "Baixo consumo",
      "Manutenção em dia"
    ],
    "store": {
      "id": 8,
      "name": "Hyundai Center Porto Alegre",
      "type": "dealership",
      "city": "Porto Alegre",
      "state": "RS",
      "phone": "(51) 2222-2222",
      "email": "poa@hyundaicenter.com",
      "instagram": "@hyundaicenterpoa"
    },
    "availability": "sold",
    "category": "touring"
  },
  {
    "id": 61,
    "type": "car",
    "brand": "Jeep",
    "model": "Wrangler",
    "year": 2022,
    "price": 116000,
    "mileage": 35012,
    "city": "São Paulo",
    "state": "SP",
    "description": "Jeep Wrangler em estado excelente. Ar condicionado, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 12,
      "name": "Toyota Center São Paulo",
      "type": "dealership",
      "city": "São Paulo",
      "state": "SP",
      "phone": "(11) 8888-7777",
      "email": "sp@toyotacenter.com",
      "instagram": "@toyotacentersp"
    },
    "availability": "available",
    "category": "luxury"
  },
  {
    "id": 62,
    "type": "motorcycle",
    "brand": "BMW Motorrad",
    "model": "G 310 R",
    "year": 2019,
    "price": 58000,
    "mileage": 75884,
    "city": "Goiânia",
    "state": "GO",
    "description": "BMW Motorrad G 310 R em estado excelente. Baixo consumo, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1558981033-0f0309284409?w=800&q=80",
    "features": [
      "Baixo consumo",
      "Manutenção em dia"
    ],
    "store": {
      "id": 10,
      "name": "Chevrolet Store SP",
      "type": "dealership",
      "city": "São Paulo",
      "state": "SP",
      "phone": "(11) 0000-0000",
      "email": "sp@chevroletstore.com",
      "instagram": "@chevroletstoresp"
    },
    "availability": "available",
    "category": "adventure"
  },
  {
    "id": 63,
    "type": "motorcycle",
    "brand": "Honda",
    "model": "CB 500X",
    "year": 2019,
    "price": 26000,
    "mileage": 80824,
    "city": "Recife",
    "state": "PE",
    "description": "Honda CB 500X em estado impecável. Manutenção em dia, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1558981033-0f0309284409?w=800&q=80",
    "features": [
      "Baixo consumo",
      "Manutenção em dia"
    ],
    "store": {
      "id": 3,
      "name": "Jeep Store Minas",
      "type": "dealership",
      "city": "Belo Horizonte",
      "state": "MG",
      "phone": "(31) 7777-7777",
      "email": "bh@jeepstore.com",
      "instagram": "@jeepstoreminas"
    },
    "availability": "available",
    "category": "naked"
  },
  {
    "id": 64,
    "type": "car",
    "brand": "Chevrolet",
    "model": "Equinox",
    "year": 2021,
    "price": 103000,
    "mileage": 47787,
    "city": "São Paulo",
    "state": "SP",
    "description": "Chevrolet Equinox em estado impecável. Direção elétrica, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 11,
      "name": "Porsche Center São Paulo",
      "type": "premium",
      "city": "São Paulo",
      "state": "SP",
      "phone": "(11) 9999-8888",
      "email": "sp@porsche.com",
      "instagram": "@porschecentersp"
    },
    "availability": "available",
    "category": "sports"
  },
  {
    "id": 65,
    "type": "motorcycle",
    "brand": "Honda",
    "model": "NC750X",
    "year": 2024,
    "price": 40000,
    "mileage": 4845,
    "city": "Recife",
    "state": "PE",
    "description": "Honda NC750X em estado excelente. Baixo consumo, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    "features": [
      "Baixo consumo",
      "Manutenção em dia"
    ],
    "store": {
      "id": 6,
      "name": "Mercedes-Benz Rio",
      "type": "dealership",
      "city": "Rio de Janeiro",
      "state": "RJ",
      "phone": "(21) 4444-4444",
      "email": "rio@mercedes-benz.com",
      "instagram": "@mercedesbenzrio"
    },
    "availability": "available",
    "category": "naked"
  },
  {
    "id": 66,
    "type": "motorcycle",
    "brand": "Yamaha",
    "model": "Fazer",
    "year": 2022,
    "price": 33000,
    "mileage": 37182,
    "city": "Goiânia",
    "state": "GO",
    "description": "Yamaha Fazer em estado impecável. Pneus novos, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1591637333184-19aa84b3e027?w=800&q=80",
    "features": [
      "Baixo consumo",
      "Manutenção em dia"
    ],
    "store": {
      "id": 15,
      "name": "Kawasaki Store Curitiba",
      "type": "dealership",
      "city": "Curitiba",
      "state": "PR",
      "phone": "(41) 5555-4444",
      "email": "curitiba@kawasakistore.com",
      "instagram": "@kawasakistorecwb"
    },
    "availability": "available",
    "category": "sport"
  },
  {
    "id": 67,
    "type": "motorcycle",
    "brand": "Honda",
    "model": "XRE300",
    "year": 2023,
    "price": 33000,
    "mileage": 15002,
    "city": "Curitiba",
    "state": "PR",
    "description": "Honda XRE300 em estado excelente. Manutenção em dia, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1558981033-0f0309284409?w=800&q=80",
    "features": [
      "Baixo consumo",
      "Manutenção em dia"
    ],
    "store": {
      "id": 1,
      "name": "BMW Premium Curitiba",
      "type": "premium",
      "city": "Curitiba",
      "state": "PR",
      "phone": "(41) 9999-9999",
      "email": "curitiba@bmwpremium.com",
      "instagram": "@bmwpremiumcuritiba"
    },
    "availability": "available",
    "category": "touring"
  },
  {
    "id": 68,
    "type": "car",
    "brand": "Volkswagen",
    "model": "Tiguan",
    "year": 2024,
    "price": 111000,
    "mileage": 6841,
    "city": "Porto Alegre",
    "state": "RS",
    "description": "Volkswagen Tiguan em estado conservado. Direção elétrica, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 8,
      "name": "Hyundai Center Porto Alegre",
      "type": "dealership",
      "city": "Porto Alegre",
      "state": "RS",
      "phone": "(51) 2222-2222",
      "email": "poa@hyundaicenter.com",
      "instagram": "@hyundaicenterpoa"
    },
    "availability": "reserved",
    "category": "sports"
  },
  {
    "id": 69,
    "type": "car",
    "brand": "Volkswagen",
    "model": "Virtus",
    "year": 2020,
    "price": 70000,
    "mileage": 62643,
    "city": "Porto Alegre",
    "state": "RS",
    "description": "Volkswagen Virtus em estado excelente. Central multimídia, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 8,
      "name": "Hyundai Center Porto Alegre",
      "type": "dealership",
      "city": "Porto Alegre",
      "state": "RS",
      "phone": "(51) 2222-2222",
      "email": "poa@hyundaicenter.com",
      "instagram": "@hyundaicenterpoa"
    },
    "availability": "available",
    "category": "sports"
  },
  {
    "id": 70,
    "type": "car",
    "brand": "Citroën",
    "model": "C4",
    "year": 2021,
    "price": 45000,
    "mileage": 54887,
    "city": "Salvador",
    "state": "BA",
    "description": "Citroën C4 em estado excelente. Ar condicionado, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 9,
      "name": "Auto Center Minas",
      "type": "standard",
      "city": "Belo Horizonte",
      "state": "MG",
      "phone": "(31) 1111-1111",
      "email": "contato@autocenterminas.com",
      "instagram": "@autocenterminas"
    },
    "availability": "available",
    "category": "sedan"
  },
  {
    "id": 71,
    "type": "car",
    "brand": "Volkswagen",
    "model": "Virtus",
    "year": 2023,
    "price": 124000,
    "mileage": 19590,
    "city": "Rio de Janeiro",
    "state": "RJ",
    "description": "Volkswagen Virtus em estado pronto. Vidros elétricos, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 14,
      "name": "Yamaha Premium Rio",
      "type": "premium",
      "city": "Rio de Janeiro",
      "state": "RJ",
      "phone": "(21) 6666-5555",
      "email": "rio@yamahapremium.com",
      "instagram": "@yamahapremiumrio"
    },
    "availability": "available",
    "category": "sports"
  },
  {
    "id": 72,
    "type": "motorcycle",
    "brand": "BMW Motorrad",
    "model": "S 1000 RR",
    "year": 2024,
    "price": 92000,
    "mileage": 9035,
    "city": "Salvador",
    "state": "BA",
    "description": "BMW Motorrad S 1000 RR em estado cuidado. Pneus novos, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1571188654248-7a89213915f7?w=800&q=80",
    "features": [
      "Baixo consumo",
      "Manutenção em dia"
    ],
    "store": {
      "id": 5,
      "name": "BMW Premium São Paulo",
      "type": "premium",
      "city": "São Paulo",
      "state": "SP",
      "phone": "(11) 5555-5555",
      "email": "sp@bmwpremium.com",
      "instagram": "@bmwpremiumsp"
    },
    "availability": "available",
    "category": "naked"
  },
  {
    "id": 73,
    "type": "car",
    "brand": "Renault",
    "model": "Duster",
    "year": 2022,
    "price": 61000,
    "mileage": 37602,
    "city": "Curitiba",
    "state": "PR",
    "description": "Renault Duster em estado excelente. Ar condicionado, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 4,
      "name": "Auto Center Curitiba",
      "type": "standard",
      "city": "Curitiba",
      "state": "PR",
      "phone": "(41) 6666-6666",
      "email": "contato@autocentercuritiba.com",
      "instagram": "@autocentercuritiba"
    },
    "availability": "available",
    "category": "luxury"
  },
  {
    "id": 74,
    "type": "car",
    "brand": "Chevrolet",
    "model": "Tracker",
    "year": 2021,
    "price": 94000,
    "mileage": 50823,
    "city": "Porto Alegre",
    "state": "RS",
    "description": "Chevrolet Tracker em estado conservado. Câmera de ré, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 8,
      "name": "Hyundai Center Porto Alegre",
      "type": "dealership",
      "city": "Porto Alegre",
      "state": "RS",
      "phone": "(51) 2222-2222",
      "email": "poa@hyundaicenter.com",
      "instagram": "@hyundaicenterpoa"
    },
    "availability": "available",
    "category": "suv"
  },
  {
    "id": 75,
    "type": "car",
    "brand": "Nissan",
    "model": "Sentra",
    "year": 2022,
    "price": 96000,
    "mileage": 32607,
    "city": "Brasília",
    "state": "DF",
    "description": "Nissan Sentra em estado cuidado. Vidros elétricos, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 7,
      "name": "Audi Premium Brasília",
      "type": "premium",
      "city": "Brasília",
      "state": "DF",
      "phone": "(61) 3333-3333",
      "email": "bsb@audipremium.com",
      "instagram": "@audipremiumbsb"
    },
    "availability": "available",
    "category": "sports"
  },
  {
    "id": 76,
    "type": "car",
    "brand": "Citroën",
    "model": "C5 Aircross",
    "year": 2019,
    "price": 36000,
    "mileage": 76675,
    "city": "Salvador",
    "state": "BA",
    "description": "Citroën C5 Aircross em estado impecável. Câmera de ré, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 3,
      "name": "Jeep Store Minas",
      "type": "dealership",
      "city": "Belo Horizonte",
      "state": "MG",
      "phone": "(31) 7777-7777",
      "email": "bh@jeepstore.com",
      "instagram": "@jeepstoreminas"
    },
    "availability": "available",
    "category": "luxury"
  },
  {
    "id": 77,
    "type": "car",
    "brand": "Jeep",
    "model": "Wrangler",
    "year": 2019,
    "price": 73000,
    "mileage": 81551,
    "city": "Rio de Janeiro",
    "state": "RJ",
    "description": "Jeep Wrangler em estado impecável. Direção elétrica, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 2,
      "name": "Honda Premium Rio",
      "type": "premium",
      "city": "Rio de Janeiro",
      "state": "RJ",
      "phone": "(21) 8888-8888",
      "email": "rio@hondapremium.com",
      "instagram": "@hondapremiumrio"
    },
    "availability": "available",
    "category": "sedan"
  },
  {
    "id": 78,
    "type": "motorcycle",
    "brand": "Yamaha",
    "model": "Fazer",
    "year": 2019,
    "price": 23000,
    "mileage": 82570,
    "city": "Recife",
    "state": "PE",
    "description": "Yamaha Fazer em estado excelente. Documentação em dia, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80",
    "features": [
      "Baixo consumo",
      "Manutenção em dia"
    ],
    "store": {
      "id": 3,
      "name": "Jeep Store Minas",
      "type": "dealership",
      "city": "Belo Horizonte",
      "state": "MG",
      "phone": "(31) 7777-7777",
      "email": "bh@jeepstore.com",
      "instagram": "@jeepstoreminas"
    },
    "availability": "available",
    "category": "touring"
  },
  {
    "id": 79,
    "type": "car",
    "brand": "Fiat",
    "model": "Mobi",
    "year": 2021,
    "price": 40000,
    "mileage": 50009,
    "city": "Salvador",
    "state": "BA",
    "description": "Fiat Mobi em estado pronto. Câmera de ré, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 11,
      "name": "Porsche Center São Paulo",
      "type": "premium",
      "city": "São Paulo",
      "state": "SP",
      "phone": "(11) 9999-8888",
      "email": "sp@porsche.com",
      "instagram": "@porschecentersp"
    },
    "availability": "available",
    "category": "hatchback"
  },
  {
    "id": 80,
    "type": "motorcycle",
    "brand": "Kawasaki",
    "model": "Ninja 400",
    "year": 2023,
    "price": 32000,
    "mileage": 24148,
    "city": "Salvador",
    "state": "BA",
    "description": "Kawasaki Ninja 400 em estado cuidado. Manutenção em dia, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    "features": [
      "Baixo consumo",
      "Manutenção em dia"
    ],
    "store": {
      "id": 8,
      "name": "Hyundai Center Porto Alegre",
      "type": "dealership",
      "city": "Porto Alegre",
      "state": "RS",
      "phone": "(51) 2222-2222",
      "email": "poa@hyundaicenter.com",
      "instagram": "@hyundaicenterpoa"
    },
    "availability": "available",
    "category": "touring"
  },
  {
    "id": 81,
    "type": "car",
    "brand": "Fiat",
    "model": "Pulse",
    "year": 2019,
    "price": 39000,
    "mileage": 77439,
    "city": "Rio de Janeiro",
    "state": "RJ",
    "description": "Fiat Pulse em estado cuidado. Câmera de ré, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 2,
      "name": "Honda Premium Rio",
      "type": "premium",
      "city": "Rio de Janeiro",
      "state": "RJ",
      "phone": "(21) 8888-8888",
      "email": "rio@hondapremium.com",
      "instagram": "@hondapremiumrio"
    },
    "availability": "reserved",
    "category": "sedan"
  },
  {
    "id": 82,
    "type": "car",
    "brand": "Nissan",
    "model": "Sentra",
    "year": 2022,
    "price": 120000,
    "mileage": 38133,
    "city": "Belo Horizonte",
    "state": "MG",
    "description": "Nissan Sentra em estado conservado. Ar condicionado, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 3,
      "name": "Jeep Store Minas",
      "type": "dealership",
      "city": "Belo Horizonte",
      "state": "MG",
      "phone": "(31) 7777-7777",
      "email": "bh@jeepstore.com",
      "instagram": "@jeepstoreminas"
    },
    "availability": "available",
    "category": "suv"
  },
  {
    "id": 83,
    "type": "car",
    "brand": "Citroën",
    "model": "C4",
    "year": 2020,
    "price": 39000,
    "mileage": 65361,
    "city": "Rio de Janeiro",
    "state": "RJ",
    "description": "Citroën C4 em estado conservado. Câmera de ré, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 14,
      "name": "Yamaha Premium Rio",
      "type": "premium",
      "city": "Rio de Janeiro",
      "state": "RJ",
      "phone": "(21) 6666-5555",
      "email": "rio@yamahapremium.com",
      "instagram": "@yamahapremiumrio"
    },
    "availability": "available",
    "category": "sports"
  },
  {
    "id": 84,
    "type": "car",
    "brand": "Fiat",
    "model": "Argo",
    "year": 2024,
    "price": 57000,
    "mileage": 3184,
    "city": "Porto Alegre",
    "state": "RS",
    "description": "Fiat Argo em estado pronto. Direção elétrica, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 8,
      "name": "Hyundai Center Porto Alegre",
      "type": "dealership",
      "city": "Porto Alegre",
      "state": "RS",
      "phone": "(51) 2222-2222",
      "email": "poa@hyundaicenter.com",
      "instagram": "@hyundaicenterpoa"
    },
    "availability": "available",
    "category": "sedan"
  },
  {
    "id": 85,
    "type": "car",
    "brand": "Jeep",
    "model": "Wrangler",
    "year": 2023,
    "price": 92000,
    "mileage": 16814,
    "city": "Fortaleza",
    "state": "CE",
    "description": "Jeep Wrangler em estado conservado. Central multimídia, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 6,
      "name": "Mercedes-Benz Rio",
      "type": "dealership",
      "city": "Rio de Janeiro",
      "state": "RJ",
      "phone": "(21) 4444-4444",
      "email": "rio@mercedes-benz.com",
      "instagram": "@mercedesbenzrio"
    },
    "availability": "available",
    "category": "suv"
  },
  {
    "id": 86,
    "type": "car",
    "brand": "Citroën",
    "model": "C5 Aircross",
    "year": 2021,
    "price": 46000,
    "mileage": 50086,
    "city": "Goiânia",
    "state": "GO",
    "description": "Citroën C5 Aircross em estado excelente. Ar condicionado, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 15,
      "name": "Kawasaki Store Curitiba",
      "type": "dealership",
      "city": "Curitiba",
      "state": "PR",
      "phone": "(41) 5555-4444",
      "email": "curitiba@kawasakistore.com",
      "instagram": "@kawasakistorecwb"
    },
    "availability": "available",
    "category": "sports"
  },
  {
    "id": 87,
    "type": "car",
    "brand": "Volkswagen",
    "model": "Virtus",
    "year": 2022,
    "price": 88000,
    "mileage": 32541,
    "city": "Brasília",
    "state": "DF",
    "description": "Volkswagen Virtus em estado excelente. Central multimídia, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 7,
      "name": "Audi Premium Brasília",
      "type": "premium",
      "city": "Brasília",
      "state": "DF",
      "phone": "(61) 3333-3333",
      "email": "bsb@audipremium.com",
      "instagram": "@audipremiumbsb"
    },
    "availability": "available",
    "category": "suv"
  },
  {
    "id": 88,
    "type": "car",
    "brand": "Jeep",
    "model": "Compass",
    "year": 2021,
    "price": 78000,
    "mileage": 53322,
    "city": "São Paulo",
    "state": "SP",
    "description": "Jeep Compass em estado conservado. Vidros elétricos, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 5,
      "name": "BMW Premium São Paulo",
      "type": "premium",
      "city": "São Paulo",
      "state": "SP",
      "phone": "(11) 5555-5555",
      "email": "sp@bmwpremium.com",
      "instagram": "@bmwpremiumsp"
    },
    "availability": "sold",
    "category": "luxury"
  },
  {
    "id": 89,
    "type": "car",
    "brand": "Jeep",
    "model": "Compass",
    "year": 2019,
    "price": 73000,
    "mileage": 81057,
    "city": "Salvador",
    "state": "BA",
    "description": "Jeep Compass em estado excelente. Ar condicionado, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1606152421811-aa6a6c2c7a7b?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 1,
      "name": "BMW Premium Curitiba",
      "type": "premium",
      "city": "Curitiba",
      "state": "PR",
      "phone": "(41) 9999-9999",
      "email": "curitiba@bmwpremium.com",
      "instagram": "@bmwpremiumcuritiba"
    },
    "availability": "available",
    "category": "sports"
  },
  {
    "id": 90,
    "type": "car",
    "brand": "Jeep",
    "model": "Compass",
    "year": 2019,
    "price": 84000,
    "mileage": 84575,
    "city": "Recife",
    "state": "PE",
    "description": "Jeep Compass em estado impecável. Ar condicionado, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 11,
      "name": "Porsche Center São Paulo",
      "type": "premium",
      "city": "São Paulo",
      "state": "SP",
      "phone": "(11) 9999-8888",
      "email": "sp@porsche.com",
      "instagram": "@porschecentersp"
    },
    "availability": "reserved",
    "category": "hatchback"
  },
  {
    "id": 91,
    "type": "motorcycle",
    "brand": "Honda",
    "model": "PCX",
    "year": 2020,
    "price": 34000,
    "mileage": 61189,
    "city": "São Paulo",
    "state": "SP",
    "description": "Honda PCX em estado cuidado. Baixo consumo, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    "features": [
      "Baixo consumo",
      "Manutenção em dia"
    ],
    "store": {
      "id": 11,
      "name": "Porsche Center São Paulo",
      "type": "premium",
      "city": "São Paulo",
      "state": "SP",
      "phone": "(11) 9999-8888",
      "email": "sp@porsche.com",
      "instagram": "@porschecentersp"
    },
    "availability": "available",
    "category": "cruiser"
  },
  {
    "id": 92,
    "type": "motorcycle",
    "brand": "Honda",
    "model": "Biz",
    "year": 2018,
    "price": 27000,
    "mileage": 98993,
    "city": "Curitiba",
    "state": "PR",
    "description": "Honda Biz em estado cuidado. Pneus novos, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80",
    "features": [
      "Baixo consumo",
      "Manutenção em dia"
    ],
    "store": {
      "id": 1,
      "name": "BMW Premium Curitiba",
      "type": "premium",
      "city": "Curitiba",
      "state": "PR",
      "phone": "(41) 9999-9999",
      "email": "curitiba@bmwpremium.com",
      "instagram": "@bmwpremiumcuritiba"
    },
    "availability": "available",
    "category": "touring"
  },
  {
    "id": 93,
    "type": "car",
    "brand": "Jeep",
    "model": "Wrangler",
    "year": 2021,
    "price": 87000,
    "mileage": 52127,
    "city": "Goiânia",
    "state": "GO",
    "description": "Jeep Wrangler em estado excelente. Ar condicionado, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 10,
      "name": "Chevrolet Store SP",
      "type": "dealership",
      "city": "São Paulo",
      "state": "SP",
      "phone": "(11) 0000-0000",
      "email": "sp@chevroletstore.com",
      "instagram": "@chevroletstoresp"
    },
    "availability": "reserved",
    "category": "luxury"
  },
  {
    "id": 94,
    "type": "car",
    "brand": "Chevrolet",
    "model": "Onix",
    "year": 2021,
    "price": 102000,
    "mileage": 45977,
    "city": "Salvador",
    "state": "BA",
    "description": "Chevrolet Onix em estado excelente. Vidros elétricos, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 5,
      "name": "BMW Premium São Paulo",
      "type": "premium",
      "city": "São Paulo",
      "state": "SP",
      "phone": "(11) 5555-5555",
      "email": "sp@bmwpremium.com",
      "instagram": "@bmwpremiumsp"
    },
    "availability": "available",
    "category": "hatchback"
  },
  {
    "id": 95,
    "type": "car",
    "brand": "Jeep",
    "model": "Compass",
    "year": 2020,
    "price": 86000,
    "mileage": 65829,
    "city": "Recife",
    "state": "PE",
    "description": "Jeep Compass em estado conservado. Vidros elétricos, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 6,
      "name": "Mercedes-Benz Rio",
      "type": "dealership",
      "city": "Rio de Janeiro",
      "state": "RJ",
      "phone": "(21) 4444-4444",
      "email": "rio@mercedes-benz.com",
      "instagram": "@mercedesbenzrio"
    },
    "availability": "sold",
    "category": "sedan"
  },
  {
    "id": 96,
    "type": "motorcycle",
    "brand": "Honda",
    "model": "NC750X",
    "year": 2023,
    "price": 39000,
    "mileage": 18311,
    "city": "Brasília",
    "state": "DF",
    "description": "Honda NC750X em estado conservado. Baixo consumo, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80",
    "features": [
      "Baixo consumo",
      "Manutenção em dia"
    ],
    "store": {
      "id": 7,
      "name": "Audi Premium Brasília",
      "type": "premium",
      "city": "Brasília",
      "state": "DF",
      "phone": "(61) 3333-3333",
      "email": "bsb@audipremium.com",
      "instagram": "@audipremiumbsb"
    },
    "availability": "available",
    "category": "touring"
  },
  {
    "id": 97,
    "type": "car",
    "brand": "Fiat",
    "model": "Argo",
    "year": 2019,
    "price": 38000,
    "mileage": 80400,
    "city": "Fortaleza",
    "state": "CE",
    "description": "Fiat Argo em estado impecável. Ar condicionado, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 8,
      "name": "Hyundai Center Porto Alegre",
      "type": "dealership",
      "city": "Porto Alegre",
      "state": "RS",
      "phone": "(51) 2222-2222",
      "email": "poa@hyundaicenter.com",
      "instagram": "@hyundaicenterpoa"
    },
    "availability": "available",
    "category": "sedan"
  },
  {
    "id": 98,
    "type": "car",
    "brand": "Volkswagen",
    "model": "Jetta",
    "year": 2018,
    "price": 57000,
    "mileage": 90402,
    "city": "São Paulo",
    "state": "SP",
    "description": "Volkswagen Jetta em estado excelente. Vidros elétricos, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 5,
      "name": "BMW Premium São Paulo",
      "type": "premium",
      "city": "São Paulo",
      "state": "SP",
      "phone": "(11) 5555-5555",
      "email": "sp@bmwpremium.com",
      "instagram": "@bmwpremiumsp"
    },
    "availability": "available",
    "category": "sedan"
  },
  {
    "id": 99,
    "type": "car",
    "brand": "Citroën",
    "model": "C3",
    "year": 2022,
    "price": 52000,
    "mileage": 30452,
    "city": "Porto Alegre",
    "state": "RS",
    "description": "Citroën C3 em estado conservado. Câmera de ré, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 8,
      "name": "Hyundai Center Porto Alegre",
      "type": "dealership",
      "city": "Porto Alegre",
      "state": "RS",
      "phone": "(51) 2222-2222",
      "email": "poa@hyundaicenter.com",
      "instagram": "@hyundaicenterpoa"
    },
    "availability": "available",
    "category": "suv"
  },
  {
    "id": 100,
    "type": "motorcycle",
    "brand": "Yamaha",
    "model": "Fazer",
    "year": 2022,
    "price": 30000,
    "mileage": 36407,
    "city": "Brasília",
    "state": "DF",
    "description": "Yamaha Fazer em estado cuidado. Pneus novos, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80",
    "features": [
      "Baixo consumo",
      "Manutenção em dia"
    ],
    "store": {
      "id": 7,
      "name": "Audi Premium Brasília",
      "type": "premium",
      "city": "Brasília",
      "state": "DF",
      "phone": "(61) 3333-3333",
      "email": "bsb@audipremium.com",
      "instagram": "@audipremiumbsb"
    },
    "availability": "available",
    "category": "adventure"
  },
  {
    "id": 101,
    "type": "car",
    "brand": "Peugeot",
    "model": "2008",
    "year": 2018,
    "price": 34000,
    "mileage": 91999,
    "city": "Salvador",
    "state": "BA",
    "description": "Peugeot 2008 em estado excelente. Direção elétrica, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 1,
      "name": "BMW Premium Curitiba",
      "type": "premium",
      "city": "Curitiba",
      "state": "PR",
      "phone": "(41) 9999-9999",
      "email": "curitiba@bmwpremium.com",
      "instagram": "@bmwpremiumcuritiba"
    },
    "availability": "available",
    "category": "luxury"
  },
  {
    "id": 102,
    "type": "car",
    "brand": "Fiat",
    "model": "Uno",
    "year": 2019,
    "price": 40000,
    "mileage": 75724,
    "city": "Salvador",
    "state": "BA",
    "description": "Fiat Uno em estado conservado. Central multimídia, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 9,
      "name": "Auto Center Minas",
      "type": "standard",
      "city": "Belo Horizonte",
      "state": "MG",
      "phone": "(31) 1111-1111",
      "email": "contato@autocenterminas.com",
      "instagram": "@autocenterminas"
    },
    "availability": "available",
    "category": "sedan"
  },
  {
    "id": 103,
    "type": "car",
    "brand": "Jeep",
    "model": "Compass",
    "year": 2019,
    "price": 83000,
    "mileage": 82140,
    "city": "Recife",
    "state": "PE",
    "description": "Jeep Compass em estado cuidado. Central multimídia, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 5,
      "name": "BMW Premium São Paulo",
      "type": "premium",
      "city": "São Paulo",
      "state": "SP",
      "phone": "(11) 5555-5555",
      "email": "sp@bmwpremium.com",
      "instagram": "@bmwpremiumsp"
    },
    "availability": "available",
    "category": "luxury"
  },
  {
    "id": 104,
    "type": "car",
    "brand": "Renault",
    "model": "Duster",
    "year": 2018,
    "price": 39000,
    "mileage": 98557,
    "city": "Fortaleza",
    "state": "CE",
    "description": "Renault Duster em estado pronto. Direção elétrica, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 12,
      "name": "Toyota Center São Paulo",
      "type": "dealership",
      "city": "São Paulo",
      "state": "SP",
      "phone": "(11) 8888-7777",
      "email": "sp@toyotacenter.com",
      "instagram": "@toyotacentersp"
    },
    "availability": "available",
    "category": "sports"
  },
  {
    "id": 105,
    "type": "car",
    "brand": "Fiat",
    "model": "Mobi",
    "year": 2021,
    "price": 56000,
    "mileage": 47318,
    "city": "Brasília",
    "state": "DF",
    "description": "Fiat Mobi em estado impecável. Vidros elétricos, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 7,
      "name": "Audi Premium Brasília",
      "type": "premium",
      "city": "Brasília",
      "state": "DF",
      "phone": "(61) 3333-3333",
      "email": "bsb@audipremium.com",
      "instagram": "@audipremiumbsb"
    },
    "availability": "available",
    "category": "sedan"
  },
  {
    "id": 106,
    "type": "car",
    "brand": "Hyundai",
    "model": "ix35",
    "year": 2018,
    "price": 57000,
    "mileage": 90593,
    "city": "Brasília",
    "state": "DF",
    "description": "Hyundai ix35 em estado pronto. Central multimídia, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 7,
      "name": "Audi Premium Brasília",
      "type": "premium",
      "city": "Brasília",
      "state": "DF",
      "phone": "(61) 3333-3333",
      "email": "bsb@audipremium.com",
      "instagram": "@audipremiumbsb"
    },
    "availability": "available",
    "category": "sports"
  },
  {
    "id": 107,
    "type": "car",
    "brand": "Renault",
    "model": "Logan",
    "year": 2020,
    "price": 45000,
    "mileage": 64009,
    "city": "Fortaleza",
    "state": "CE",
    "description": "Renault Logan em estado cuidado. Vidros elétricos, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 3,
      "name": "Jeep Store Minas",
      "type": "dealership",
      "city": "Belo Horizonte",
      "state": "MG",
      "phone": "(31) 7777-7777",
      "email": "bh@jeepstore.com",
      "instagram": "@jeepstoreminas"
    },
    "availability": "available",
    "category": "sedan"
  },
  {
    "id": 108,
    "type": "car",
    "brand": "Peugeot",
    "model": "3008",
    "year": 2023,
    "price": 46000,
    "mileage": 18939,
    "city": "Recife",
    "state": "PE",
    "description": "Peugeot 3008 em estado pronto. Vidros elétricos, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 1,
      "name": "BMW Premium Curitiba",
      "type": "premium",
      "city": "Curitiba",
      "state": "PR",
      "phone": "(41) 9999-9999",
      "email": "curitiba@bmwpremium.com",
      "instagram": "@bmwpremiumcuritiba"
    },
    "availability": "available",
    "category": "suv"
  },
  {
    "id": 109,
    "type": "car",
    "brand": "Volkswagen",
    "model": "Jetta",
    "year": 2022,
    "price": 113000,
    "mileage": 32987,
    "city": "Brasília",
    "state": "DF",
    "description": "Volkswagen Jetta em estado impecável. Central multimídia, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 7,
      "name": "Audi Premium Brasília",
      "type": "premium",
      "city": "Brasília",
      "state": "DF",
      "phone": "(61) 3333-3333",
      "email": "bsb@audipremium.com",
      "instagram": "@audipremiumbsb"
    },
    "availability": "available",
    "category": "sedan"
  },
  {
    "id": 110,
    "type": "car",
    "brand": "Hyundai",
    "model": "HB20",
    "year": 2019,
    "price": 90000,
    "mileage": 80031,
    "city": "Porto Alegre",
    "state": "RS",
    "description": "Hyundai HB20 em estado cuidado. Ar condicionado, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 8,
      "name": "Hyundai Center Porto Alegre",
      "type": "dealership",
      "city": "Porto Alegre",
      "state": "RS",
      "phone": "(51) 2222-2222",
      "email": "poa@hyundaicenter.com",
      "instagram": "@hyundaicenterpoa"
    },
    "availability": "available",
    "category": "luxury"
  },
  {
    "id": 111,
    "type": "car",
    "brand": "Nissan",
    "model": "Versa",
    "year": 2020,
    "price": 102000,
    "mileage": 60737,
    "city": "Porto Alegre",
    "state": "RS",
    "description": "Nissan Versa em estado conservado. Central multimídia, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 8,
      "name": "Hyundai Center Porto Alegre",
      "type": "dealership",
      "city": "Porto Alegre",
      "state": "RS",
      "phone": "(51) 2222-2222",
      "email": "poa@hyundaicenter.com",
      "instagram": "@hyundaicenterpoa"
    },
    "availability": "available",
    "category": "sedan"
  },
  {
    "id": 112,
    "type": "car",
    "brand": "Chevrolet",
    "model": "Onix",
    "year": 2019,
    "price": 89000,
    "mileage": 75144,
    "city": "Salvador",
    "state": "BA",
    "description": "Chevrolet Onix em estado impecável. Direção elétrica, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 5,
      "name": "BMW Premium São Paulo",
      "type": "premium",
      "city": "São Paulo",
      "state": "SP",
      "phone": "(11) 5555-5555",
      "email": "sp@bmwpremium.com",
      "instagram": "@bmwpremiumsp"
    },
    "availability": "available",
    "category": "sports"
  },
  {
    "id": 113,
    "type": "car",
    "brand": "Jeep",
    "model": "Renegade",
    "year": 2024,
    "price": 97000,
    "mileage": 8581,
    "city": "Brasília",
    "state": "DF",
    "description": "Jeep Renegade em estado impecável. Vidros elétricos, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 7,
      "name": "Audi Premium Brasília",
      "type": "premium",
      "city": "Brasília",
      "state": "DF",
      "phone": "(61) 3333-3333",
      "email": "bsb@audipremium.com",
      "instagram": "@audipremiumbsb"
    },
    "availability": "available",
    "category": "sedan"
  },
  {
    "id": 114,
    "type": "car",
    "brand": "Renault",
    "model": "Kwid",
    "year": 2021,
    "price": 48000,
    "mileage": 50221,
    "city": "Curitiba",
    "state": "PR",
    "description": "Renault Kwid em estado pronto. Direção elétrica, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 1,
      "name": "BMW Premium Curitiba",
      "type": "premium",
      "city": "Curitiba",
      "state": "PR",
      "phone": "(41) 9999-9999",
      "email": "curitiba@bmwpremium.com",
      "instagram": "@bmwpremiumcuritiba"
    },
    "availability": "available",
    "category": "sedan"
  },
  {
    "id": 115,
    "type": "motorcycle",
    "brand": "Yamaha",
    "model": "MT-07",
    "year": 2020,
    "price": 29000,
    "mileage": 66983,
    "city": "São Paulo",
    "state": "SP",
    "description": "Yamaha MT-07 em estado excelente. Pneus novos, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&q=80",
    "features": [
      "Baixo consumo",
      "Manutenção em dia"
    ],
    "store": {
      "id": 5,
      "name": "BMW Premium São Paulo",
      "type": "premium",
      "city": "São Paulo",
      "state": "SP",
      "phone": "(11) 5555-5555",
      "email": "sp@bmwpremium.com",
      "instagram": "@bmwpremiumsp"
    },
    "availability": "available",
    "category": "cruiser"
  },
  {
    "id": 116,
    "type": "car",
    "brand": "Peugeot",
    "model": "2008",
    "year": 2022,
    "price": 42000,
    "mileage": 31264,
    "city": "Porto Alegre",
    "state": "RS",
    "description": "Peugeot 2008 em estado cuidado. Central multimídia, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 8,
      "name": "Hyundai Center Porto Alegre",
      "type": "dealership",
      "city": "Porto Alegre",
      "state": "RS",
      "phone": "(51) 2222-2222",
      "email": "poa@hyundaicenter.com",
      "instagram": "@hyundaicenterpoa"
    },
    "availability": "available",
    "category": "suv"
  },
  {
    "id": 117,
    "type": "motorcycle",
    "brand": "Yamaha",
    "model": "MT-07",
    "year": 2024,
    "price": 34000,
    "mileage": 4477,
    "city": "Rio de Janeiro",
    "state": "RJ",
    "description": "Yamaha MT-07 em estado pronto. Documentação em dia, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80",
    "features": [
      "Baixo consumo",
      "Manutenção em dia"
    ],
    "store": {
      "id": 14,
      "name": "Yamaha Premium Rio",
      "type": "premium",
      "city": "Rio de Janeiro",
      "state": "RJ",
      "phone": "(21) 6666-5555",
      "email": "rio@yamahapremium.com",
      "instagram": "@yamahapremiumrio"
    },
    "availability": "available",
    "category": "naked"
  },
  {
    "id": 118,
    "type": "car",
    "brand": "Peugeot",
    "model": "408",
    "year": 2020,
    "price": 43000,
    "mileage": 67410,
    "city": "São Paulo",
    "state": "SP",
    "description": "Peugeot 408 em estado cuidado. Central multimídia, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 5,
      "name": "BMW Premium São Paulo",
      "type": "premium",
      "city": "São Paulo",
      "state": "SP",
      "phone": "(11) 5555-5555",
      "email": "sp@bmwpremium.com",
      "instagram": "@bmwpremiumsp"
    },
    "availability": "available",
    "category": "hatchback"
  },
  {
    "id": 119,
    "type": "motorcycle",
    "brand": "Kawasaki",
    "model": "KLX230",
    "year": 2018,
    "price": 25000,
    "mileage": 91853,
    "city": "Goiânia",
    "state": "GO",
    "description": "Kawasaki KLX230 em estado cuidado. Baixo consumo, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1591637333184-19aa84b3e027?w=800&q=80",
    "features": [
      "Baixo consumo",
      "Manutenção em dia"
    ],
    "store": {
      "id": 2,
      "name": "Honda Premium Rio",
      "type": "premium",
      "city": "Rio de Janeiro",
      "state": "RJ",
      "phone": "(21) 8888-8888",
      "email": "rio@hondapremium.com",
      "instagram": "@hondapremiumrio"
    },
    "availability": "available",
    "category": "sport"
  },
  {
    "id": 120,
    "type": "car",
    "brand": "Hyundai",
    "model": "Creta",
    "year": 2024,
    "price": 119000,
    "mileage": 7338,
    "city": "Brasília",
    "state": "DF",
    "description": "Hyundai Creta em estado pronto. Ar condicionado, revisões em dia, sem sinistros.",
    "image": "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80",
    "features": [
      "Ar condicionado",
      "Direção elétrica",
      "Central multimídia"
    ],
    "store": {
      "id": 7,
      "name": "Audi Premium Brasília",
      "type": "premium",
      "city": "Brasília",
      "state": "DF",
      "phone": "(61) 3333-3333",
      "email": "bsb@audipremium.com",
      "instagram": "@audipremiumbsb"
    },
    "availability": "available",
    "category": "luxury"
  }
];

export const formatPrice = (price) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
};

export const formatMileage = (mileage) => {
  return new Intl.NumberFormat('pt-BR').format(mileage) + ' km';
};
