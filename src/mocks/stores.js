// Lojas oficiais Nexus Auto nas 9 cidades do Sul do Brasil
export const stores = [
  {
    id: 1,
    name: 'Nexus Auto',
    city: 'Curitiba',
    state: 'PR',
    address: 'Av. Marechal Floriano Peixoto, 4500 - Hauer',
    phone: '(41) 99999-9999',
    email: 'curitiba@nexusauto.com',
    instagram: '@nexus.auto'
  },
  {
    id: 2,
    name: 'Nexus Auto',
    city: 'Londrina',
    state: 'PR',
    address: 'Av. Tiradentes, 1200 - Shangri-lá',
    phone: '(43) 99999-9999',
    email: 'londrina@nexusauto.com',
    instagram: '@nexus.auto'
  },
  {
    id: 3,
    name: 'Nexus Auto',
    city: 'Ponta Grossa',
    state: 'PR',
    address: 'Av. Ernesto Vilela, 850 - Nova Rússia',
    phone: '(42) 99999-9999',
    email: 'pontagrossa@nexusauto.com',
    instagram: '@nexus.auto'
  },
  {
    id: 4,
    name: 'Nexus Auto',
    city: 'Florianópolis',
    state: 'SC',
    address: 'Rod. SC-401, 3500 - Saco Grande',
    phone: '(48) 99999-9999',
    email: 'florianopolis@nexusauto.com',
    instagram: '@nexus.auto'
  },
  {
    id: 5,
    name: 'Nexus Auto',
    city: 'Joinville',
    state: 'SC',
    address: 'Rua Ottokar Doerffel, 600 - Atiradores',
    phone: '(47) 99999-9999',
    email: 'joinville@nexusauto.com',
    instagram: '@nexus.auto'
  },
  {
    id: 6,
    name: 'Nexus Auto',
    city: 'Blumenau',
    state: 'SC',
    address: 'Rua São Paulo, 1450 - Victor Konder',
    phone: '(47) 99999-9999',
    email: 'blumenau@nexusauto.com',
    instagram: '@nexus.auto'
  },
  {
    id: 7,
    name: 'Nexus Auto',
    city: 'Porto Alegre',
    state: 'RS',
    address: 'Av. Ceará, 700 - São João',
    phone: '(51) 99999-9999',
    email: 'portoalegre@nexusauto.com',
    instagram: '@nexus.auto'
  },
  {
    id: 8,
    name: 'Nexus Auto',
    city: 'Caxias do Sul',
    state: 'RS',
    address: 'Rua Sinimbu, 2100 - Centro',
    phone: '(54) 99999-9999',
    email: 'caxias@nexusauto.com',
    instagram: '@nexus.auto'
  },
  {
    id: 9,
    name: 'Nexus Auto',
    city: 'Canoas',
    state: 'RS',
    address: 'Av. Getúlio Vargas, 5200 - Centro',
    phone: '(51) 99999-9999',
    email: 'canoas@nexusauto.com',
    instagram: '@nexus.auto'
  }
];

export const getStoreByCity = (city, state) => {
  return stores.find(s => s.city.toLowerCase() === city.toLowerCase() && s.state === state) || stores[0];
};
