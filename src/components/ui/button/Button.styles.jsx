import styled, {css} from 'styled-components';


const sizeStyles = {
  sm: css`
    height: 2rem;
    padding: 0 0.75rem;
    font-size: 0.75rem;
  `,

  md: css`
    height: 2.5rem;
    padding: 0 1rem;
    font-size: 0.875rem;
  `,

  lg: css`
    height: 3rem;
    padding: 0 1.5rem;
    font-size: 0.875rem;
  `,
};

export const PrimaryButton = styled.button`
  background-color: ${props => props.theme.dark ? '#ffffff' : '#141414'};
  color: ${props => props.theme.dark ? '#141414' : '#ffffff'};
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 700;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: opacity 0.3s ease;
  text-decoration: none;
  font-family: 'Inter', sans-serif;

   ${({ $size }) => sizeStyles[$size] || sizeStyles.md}

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const SecondaryButton = styled.button`
  background-color: transparent;
  color: ${props => props.theme.dark ? '#ffffff' : '#141414'};
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 700;
  border: 1px solid ${props => props.theme.dark ? '#404040' : '#d1d5db'};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: background-color 0.3s ease;
  text-decoration: none;
  font-family: 'Inter', sans-serif;

   ${({ $size }) => sizeStyles[$size] || sizeStyles.md}
   
  &:hover {
    background-color: ${props => props.theme.dark ? '#1f1f1f' : '#f9fafb'};
  }

  &:active {
    transform: scale(0.98);
  }
`;
