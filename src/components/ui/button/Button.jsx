import React from 'react';
import { 
  PrimaryButton, 
  SecondaryButton, 
  ButtonIcon 
} from './Button.styles';

const Button = ({ 
  children, 
  variant = 'primary', 
  icon, 
  iconPosition = 'right',
  href,
  onClick,
  ...props 
}) => {
  const ButtonComponent = variant === 'primary' ? PrimaryButton : SecondaryButton;
  
  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <ButtonIcon className="material-symbols-outlined">{icon}</ButtonIcon>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <ButtonIcon className="material-symbols-outlined">{icon}</ButtonIcon>
      )}
    </>
  );

  if (href) {
    return (
      <ButtonComponent as="a" href={href} {...props}>
        {content}
      </ButtonComponent>
    );
  }

  return (
    <ButtonComponent onClick={onClick} {...props}>
      {content}
    </ButtonComponent>
  );
};

export default Button;