import { useId } from 'react';
import './Input.css';

const Input = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  fullWidth = false,
  name,
  id,
  ...props
}) => {
  const generatedId = useId();
  const inputId = id || name || generatedId;

  const inputClasses = [
    'input',
    error && 'input-error',
    disabled && 'input-disabled',
    fullWidth && 'input-full-width',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="input-wrapper">
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label}
        </label>
      )}
      <input
        type={type}
        id={inputId}
        name={name}
        className={inputClasses}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        {...props}
      />
      {error && <span className="input-error-message">{error}</span>}
    </div>
  );
};

export default Input;
