import styled from 'styled-components';

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${props => props.theme.dark ? '#171717' : '#f3f4f6'};
  margin: 0;
`;
