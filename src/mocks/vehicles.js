import { vehicles as localVehicles } from './vehicles.local.js';

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

function mergeVehicle(localVehicle, apiVehicle) {
  if (!apiVehicle) return localVehicle;

  return {
    ...localVehicle,
    ...apiVehicle,
    id: localVehicle.id,
    name: localVehicle.name,
    brand: localVehicle.brand,
    model: localVehicle.model,
    version: localVehicle.version,
    isPremium: localVehicle.isPremium,
    yearFabrication: localVehicle.yearFabrication,
    fuel: localVehicle.fuel,
    plate: localVehicle.plate,
    features: localVehicle.features,
    store: localVehicle.store,
    price: Number(apiVehicle.price),
    mileage: Number(apiVehicle.mileage ?? localVehicle.mileage ?? 0),
    images: localVehicle.images?.length
      ? localVehicle.images
      : apiVehicle.images || [],
    availability:
      Number(apiVehicle.available) === 1
        ? 'available'
        : 'unavailable'
  };
}

async function loadVehicles() {
  try {
    const response = await fetch(`${API_BASE_URL}/vehicles`, {
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const apiVehicles = await response.json();

    if (!Array.isArray(apiVehicles) || apiVehicles.length !== 75) {
      throw new Error(
        `API retornou ${Array.isArray(apiVehicles) ? apiVehicles.length : 0} veículos`
      );
    }

    const byId = new Map(
      apiVehicles.map(vehicle => [Number(vehicle.id), vehicle])
    );

    return localVehicles.map(vehicle =>
      mergeVehicle(vehicle, byId.get(Number(vehicle.id)))
    );
  } catch (error) {
    console.warn(
      'API Nexus Auto indisponível. Usando catálogo local.',
      error
    );

    return localVehicles;
  }
}

export const vehicles = await loadVehicles();

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
    const isPickup =
      vehicle.category === 'pickup' ||
      vehicle.category === 'caminhonete' ||
      vehicle.type === 'pickup' ||
      vehicle.type === 'caminhonete';

    const isMoto =
      vehicle.category === 'motorcycle' ||
      vehicle.category === 'moto' ||
      vehicle.type === 'motorcycle' ||
      vehicle.type === 'moto';

    if (isPickup) {
      counts.pickups++;
    } else if (isMoto) {
      counts.motorcycles++;
    } else if (vehicle.isPremium) {
      counts.luxuryCars++;
    } else {
      counts.normalCars++;
    }

    brands[vehicle.brand] = (brands[vehicle.brand] || 0) + 1;
    models[`${vehicle.brand} ${vehicle.model}`] = true;
  });

  return {
    counts,
    brands,
    models,
    total: vehicles.length
  };
};
