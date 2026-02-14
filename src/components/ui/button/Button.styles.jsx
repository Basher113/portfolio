import styled from 'styled-components';

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

  &:hover {
    background-color: ${props => props.theme.dark ? '#1f1f1f' : '#f9fafb'};
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const ButtonIcon = styled.span`
  font-size: 0.875rem;
  display: inline-flex;
  align-items: center;
`;