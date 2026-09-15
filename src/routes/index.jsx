import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HeroSection from '../components/HeroSection';
import VehicleCard from '../components/VehicleCard';
import SearchBar from '../components/SearchBar';
import Button from '../components/Button';
import Card from '../components/Card';
import { vehicles } from '../mocks/vehicles.js';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations';

// Importar as páginas quando forem criadas
// import HomePage from '../pages/HomePage';
// import LoginPage from '../pages/LoginPage';
// import DashboardPage from '../pages/DashboardPage';

const HomePage = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const [filteredVehicles, setFilteredVehicles] = useState(vehicles);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (filters) => {
    setHasSearched(true);
    
    let results = vehicles.filter(vehicle => {
      const matchType = !filters.vehicleType || vehicle.type === filters.vehicleType;
      const matchBrand = !filters.brand || vehicle.brand.toLowerCase().includes(filters.brand.toLowerCase());
      const matchModel = !filters.model || vehicle.model.toLowerCase().includes(filters.model.toLowerCase());
      const matchMinPrice = !filters.minPrice || vehicle.price >= Number(filters.minPrice);
      const matchMaxPrice = !filters.maxPrice || vehicle.price <= Number(filters.maxPrice);
      const matchYear = !filters.year || vehicle.year === Number(filters.year);
      const matchLocation = !filters.location || 
        vehicle.city.toLowerCase().includes(filters.location.toLowerCase()) ||
        vehicle.state.toLowerCase().includes(filters.location.toLowerCase());
      const matchStoreType = !filters.storeType || vehicle.store?.type === filters.storeType;

      return matchType && matchBrand && matchModel && matchMinPrice && matchMaxPrice && matchYear && matchLocation && matchStoreType;
    });

    setFilteredVehicles(results);
  };

  const handleClearFilters = () => {
    setHasSearched(false);
    setFilteredVehicles(vehicles);
  };

  const resultsCount = filteredVehicles.length;
  const resultsMessage = t.vehicles.resultsFound.replace('{count}', resultsCount);

  return (
    <>
      <HeroSection />
      
      <SearchBar onSearch={handleSearch} />
      
      <section className="container" style={{ padding: 'var(--spacing-4xl) var(--spacing-lg)' }}>
        {hasSearched && resultsCount > 0 && (
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
            <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-primary)', fontWeight: 500 }}>
              {resultsMessage}
            </p>
          </div>
        )}

        {hasSearched && resultsCount === 0 ? (
          <div style={{ textAlign: 'center', padding: 'var(--spacing-4xl) 0' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--spacing-md)', color: 'var(--text-primary)' }}>
              {t.vehicles.noResults}
            </h2>
            <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', marginBottom: 'var(--spacing-xl)', maxWidth: '600px', margin: '0 auto var(--spacing-xl)' }}>
              {t.vehicles.noResultsDescription}
            </p>
            <div style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center' }}>
              <Button variant="outline" size="lg" onClick={handleClearFilters}>
                {t.vehicles.clearFilters}
              </Button>
              <Button variant="primary" size="lg" onClick={handleClearFilters}>
                {t.vehicles.viewAll}
              </Button>
            </div>
          </div>
        ) : (
          <>
            {!hasSearched && (
              <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-3xl)' }}>
                <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginBottom: 'var(--spacing-md)' }}>
                  {t.vehicles.featured}
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-lg)', maxWidth: '600px', margin: '0 auto' }}>
                  {t.vehicles.featuredDescription}
                </p>
              </div>
            )}

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: 'var(--spacing-xl)',
              marginBottom: 'var(--spacing-3xl)'
            }}>
              {filteredVehicles.map((vehicle) => (
                <VehicleCard
                  key={vehicle.id}
                  type={vehicle.type}
                  availability={vehicle.availability}
                  {...vehicle}
                  onClick={() => console.log('Ver detalhes:', vehicle.id)}
                />
              ))}
            </div>

            {!hasSearched && (
              <div style={{ textAlign: 'center' }}>
                <Button variant="outline" size="lg">
                  {t.vehicles.viewAll}
                </Button>
              </div>
            )}
          </>
        )}
      </section>

      {!hasSearched && (
        <section style={{ backgroundColor: 'var(--bg-secondary)', padding: 'var(--spacing-4xl) 0' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: 'var(--spacing-2xl)',
              textAlign: 'center'
            }}>
              <Card variant="default" padding="lg">
                <div style={{ fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--color-primary)', marginBottom: 'var(--spacing-sm)' }}>
                  10.000+
                </div>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--spacing-xs)' }}>{t.stats.vehicles}</h3>
                <p style={{ color: 'var(--text-secondary)', margin: 0 }}>{t.stats.vehiclesDesc}</p>
              </Card>

              <Card variant="default" padding="lg">
                <div style={{ fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--color-primary)', marginBottom: 'var(--spacing-sm)' }}>
                  5.000+
                </div>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--spacing-xs)' }}>{t.stats.sales}</h3>
                <p style={{ color: 'var(--text-secondary)', margin: 0 }}>{t.stats.salesDesc}</p>
              </Card>

              <Card variant="default" padding="lg">
                <div style={{ fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--color-primary)', marginBottom: 'var(--spacing-sm)' }}>
                  98%
                </div>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--spacing-xs)' }}>{t.stats.satisfaction}</h3>
                <p style={{ color: 'var(--text-secondary)', margin: 0 }}>{t.stats.satisfactionDesc}</p>
              </Card>

              <Card variant="default" padding="lg">
                <div style={{ fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--color-primary)', marginBottom: 'var(--spacing-sm)' }}>
                  24/7
                </div>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--spacing-xs)' }}>{t.stats.support}</h3>
                <p style={{ color: 'var(--text-secondary)', margin: 0 }}>{t.stats.supportDesc}</p>
              </Card>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* Rotas serão adicionadas aqui quando as páginas forem criadas */}
      {/* <Route path="/" element={<HomePage />} /> */}
      {/* <Route path="/login" element={<LoginPage />} /> */}
      {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
      
      {/* Página inicial com layout profissional */}
      <Route
        path="/"
        element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
