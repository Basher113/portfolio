import styled from 'styled-components';

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100vw;
  border-bottom: 1px solid ${props => props.theme.dark ? '#262626' : '#e5e7eb'};
  background-color: ${props => props.theme.dark ? 'rgba(18, 18, 18, 0.8)' : 'rgba(255, 255, 255, 0.8)'};
  backdrop-filter: blur(12px);
`;

export const NavContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  height: 4rem;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;

`;

export const LogoText = styled.span`
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -0.025em;
`;

export const NavLinks = styled.div`
  display: none;
  align-items: center;
  gap: 2rem;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const NavLink = styled.a`
  font-size: 0.875rem;
  font-weight: 500;
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease;
  cursor: pointer;
  &:hover {
    color: #9ca3af;
  }
`;
