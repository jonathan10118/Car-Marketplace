import './Card.css';

const Card = ({
  children,
  variant = 'default',
  hoverable = false,
  padding = 'md',
  className = '',
  ...props
}) => {
  const cardClasses = [
    'card',
    `card-${variant}`,
    hoverable && 'card-hoverable',
    `card-padding-${padding}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};

export default Card;
