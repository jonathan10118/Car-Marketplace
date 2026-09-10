import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';

// Importar as páginas quando forem criadas
// import HomePage from '../pages/HomePage';
// import LoginPage from '../pages/LoginPage';
// import DashboardPage from '../pages/DashboardPage';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Rotas serão adicionadas aqui quando as páginas forem criadas */}
      {/* <Route path="/" element={<HomePage />} /> */}
      {/* <Route path="/login" element={<LoginPage />} /> */}
      {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
      
      {/* Rota temporária para teste do layout e componentes */}
      <Route
        path="/"
        element={
          <MainLayout>
            <div className="container">
              <div style={{ padding: 'var(--spacing-2xl) 0' }}>
                <h1 style={{ marginBottom: 'var(--spacing-lg)' }}>
                  Car Marketplace
                </h1>
                <p style={{ marginBottom: 'var(--spacing-xl)', color: 'var(--text-secondary)' }}>
                  Bem-vindo ao marketplace de veículos. Layout e componentes configurados com sucesso!
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-2xl)' }}>
                  <Card variant="default" padding="lg">
                    <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Botões</h3>
                    <div style={{ display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
                      <Button variant="primary">Primary</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="ghost">Ghost</Button>
                    </div>
                  </Card>

                  <Card variant="elevated" padding="lg">
                    <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Inputs</h3>
                    <Input
                      label="Nome"
                      placeholder="Digite seu nome"
                      fullWidth
                    />
                    <Input
                      label="Email"
                      placeholder="Digite seu email"
                      type="email"
                      fullWidth
                      style={{ marginTop: 'var(--spacing-md)' }}
                    />
                  </Card>

                  <Card variant="bordered" padding="lg" hoverable>
                    <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Card Hoverable</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>
                      Este card tem efeito de hover. Passe o mouse para ver o efeito.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </MainLayout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
