import styled from 'styled-components';

export const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.dark ? '#262626' : '#e5e7eb'};
  background-color: ${props => props.theme.dark ? '#1a1a1a' : '#ffffff'};
  color: ${props => props.theme.dark ? '#ffffff' : '#141414'};
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;

  &:hover {
    background-color: ${props => props.theme.dark ? '#262626' : '#f3f4f6'};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: rotate(15deg);
  }
`;
