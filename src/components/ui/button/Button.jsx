import { 
  PrimaryButton, 
  SecondaryButton, 
} from './Button.styles';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = "md",
  href,
  onClick,
  ...props 
}) => {
  const ButtonComponent = variant === 'primary' ? PrimaryButton : SecondaryButton;

  if (href) {
    return (
      <ButtonComponent $size={size} as="a" href={href} {...props}>
        {children}
      </ButtonComponent>
    );
  }

  return (
    <ButtonComponent $size={size} onClick={onClick} {...props}>
      {children}
    </ButtonComponent>
  );
};

export default Button;