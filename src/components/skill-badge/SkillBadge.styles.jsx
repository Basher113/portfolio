import styled from 'styled-components';

export const Badge = styled.span`
  padding: 0.375rem 0.75rem;
  background-color: ${props => props.theme.dark ? '#1f1f1f' : '#f7f7f7'};
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
`;