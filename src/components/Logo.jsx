import './Logo.css';

const Logo = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'logo-sm',
    md: 'logo-md',
    lg: 'logo-lg',
  };

  return (
    <div className={`logo ${sizeClasses[size] || sizeClasses.md}`}>
      <span className="logo-icon">🚗</span>
      <span className="logo-text">Car Marketplace</span>
    </div>
  );
};

export default Logo;
