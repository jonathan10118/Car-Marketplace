import { useState, useMemo } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HeroSection from '../components/HeroSection';
import VehicleCard from '../components/VehicleCard';
import SearchBar from '../components/SearchBar';
import FilterPanel from '../components/FilterPanel';
import Button from '../components/Button';
import Card from '../components/Card';
import { vehicles } from '../mocks/vehicles.js';

// Páginas Principais
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import VehiclesPage from '../pages/VehiclesPage';
import VehicleDetailPage from '../pages/VehicleDetailPage';
import FavoritesPage from '../pages/FavoritesPage';
import ProfilePage from '../pages/ProfilePage';
import SettingsPage from '../pages/SettingsPage';

// Páginas Institucionais e Suporte
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import HelpPage from '../pages/HelpPage';
import FaqPage from '../pages/FaqPage';
import TermsPage from '../pages/TermsPage';
import PrivacyPage from '../pages/PrivacyPage';

const HomePage = () => {
  const navigate = useNavigate();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // 6 veículos fixos e balanceados para a Home (2 carros, 2 caminhonetes, 2 motos - sem repetição)
  const featuredVehicles = useMemo(() => {
    return [
      vehicles.find(v => v.id === 1) || vehicles[0],   // Porsche 911 (Carro Premium)
      vehicles.find(v => v.id === 21) || vehicles[20], // VW Gol (Carro)
      vehicles.find(v => v.id === 51) || vehicles[50], // VW Amarok (Caminhonete)
      vehicles.find(v => v.id === 56) || vehicles[55], // Ford Ranger (Caminhonete)
      vehicles.find(v => v.id === 61) || vehicles[60], // Honda CG 160 (Moto)
      vehicles.find(v => v.id === 71) || vehicles[70], // Kawasaki Ninja 400 (Moto)
    ];
  }, []);

  const handleSearch = (searchTerm) => {
    // Ao buscar na Home, direcionar para o catálogo completo
    if (searchTerm && searchTerm.trim()) {
      navigate(`/vehicles`);
    }
  };

  const handleApplyFilters = () => {
    navigate('/vehicles');
  };

  return (
    <>
      <HeroSection />
      
      <SearchBar 
        onSearch={handleSearch} 
        onFilterToggle={() => setIsFilterOpen(true)}
      />
      
      <FilterPanel
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onApply={handleApplyFilters}
        onClear={() => {}}
      />
      
      <section className="container" style={{ padding: 'var(--spacing-4xl) var(--spacing-lg)' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-3xl)' }}>
          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 800, marginBottom: 'var(--spacing-sm)', color: 'var(--text-primary)' }}>
            Destaques da Semana
          </h2>
        </div>

        {/* Grade com EXATAMENTE 6 veículos */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 'var(--spacing-xl)',
          marginBottom: 'var(--spacing-3xl)'
        }}>
          {featuredVehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              {...vehicle}
            />
          ))}
        </div>

        {/* Link para o estoque completo */}
        <div style={{ textAlign: 'center' }}>
          <Link to="/vehicles">
            <Button variant="outline" size="lg">
              Ver todos os veículos →
            </Button>
          </Link>
        </div>
      </section>

      {/* Destaques Institucionais */}
      <section style={{ backgroundColor: 'var(--bg-surface)', padding: 'var(--spacing-4xl) 0', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 'var(--spacing-xl)',
            textAlign: 'center'
          }}>
            <Card variant="default" padding="lg" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: 'var(--text-4xl)', fontWeight: 800, color: 'var(--color-primary-light)', marginBottom: 'var(--spacing-xs)' }}>
                75
              </div>
              <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, marginBottom: 'var(--spacing-xs)', color: 'var(--text-primary)' }}>Veículos</h3>
              <p style={{ color: 'var(--text-secondary)', margin: 0 }}>0 km no estoque oficial</p>
            </Card>

            <Card variant="default" padding="lg" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: 'var(--text-4xl)', fontWeight: 800, color: 'var(--color-primary-light)', marginBottom: 'var(--spacing-xs)' }}>
                9
              </div>
              <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, marginBottom: 'var(--spacing-xs)', color: 'var(--text-primary)' }}>Cidades</h3>
              <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Paraná, Santa Catarina e RS</p>
            </Card>

            <Card variant="default" padding="lg" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: 'var(--text-4xl)', fontWeight: 800, color: 'var(--color-primary-light)', marginBottom: 'var(--spacing-xs)' }}>
                100%
              </div>
              <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, marginBottom: 'var(--spacing-xs)', color: 'var(--text-primary)' }}>Revisados</h3>
              <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Garantia integral de fábrica</p>
            </Card>

            <Card variant="default" padding="lg" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: 'var(--text-4xl)', fontWeight: 800, color: 'var(--color-primary-light)', marginBottom: 'var(--spacing-xs)' }}>
                24/7
              </div>
              <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, marginBottom: 'var(--spacing-xs)', color: 'var(--text-primary)' }}>Suporte</h3>
              <p style={{ color: 'var(--text-secondary)', margin: 0 }}>WhatsApp (41) 99999-9999</p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        }
      />
      <Route
        path="/vehicles"
        element={
          <MainLayout>
            <VehiclesPage />
          </MainLayout>
        }
      />
      <Route
        path="/vehicle/:id"
        element={
          <MainLayout>
            <VehicleDetailPage />
          </MainLayout>
        }
      />
      <Route
        path="/login"
        element={
          <MainLayout>
            <LoginPage />
          </MainLayout>
        }
      />
      <Route
        path="/register"
        element={
          <MainLayout>
            <RegisterPage />
          </MainLayout>
        }
      />
      <Route
        path="/favorites"
        element={
          <MainLayout>
            <FavoritesPage />
          </MainLayout>
        }
      />
      <Route
        path="/profile"
        element={
          <MainLayout>
            <ProfilePage />
          </MainLayout>
        }
      />
      <Route
        path="/settings"
        element={
          <MainLayout>
            <SettingsPage />
          </MainLayout>
        }
      />
      <Route
        path="/about"
        element={
          <MainLayout>
            <AboutPage />
          </MainLayout>
        }
      />
      <Route
        path="/contact"
        element={
          <MainLayout>
            <ContactPage />
          </MainLayout>
        }
      />
      <Route
        path="/help"
        element={
          <MainLayout>
            <HelpPage />
          </MainLayout>
        }
      />
      <Route
        path="/faq"
        element={
          <MainLayout>
            <FaqPage />
          </MainLayout>
        }
      />
      <Route
        path="/terms"
        element={
          <MainLayout>
            <TermsPage />
          </MainLayout>
        }
      />
      <Route
        path="/privacy"
        element={
          <MainLayout>
            <PrivacyPage />
          </MainLayout>
        }
      />
      {/* Rota coringa para página inicial */}
      <Route
        path="*"
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
