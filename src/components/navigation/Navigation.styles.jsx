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

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const HamburgerButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 2rem;
  height: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: inherit;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const HamburgerLine = styled.span`
  display: block;
  width: 20px;
  height: 2px;
  background-color: currentColor;
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;

  &:nth-child(1) {
    transform: ${({ $open }) => $open ? 'translateY(7px) rotate(45deg)' : 'none'};
  }
  &:nth-child(2) {
    opacity: ${({ $open }) => $open ? '0' : '1'};
  }
  &:nth-child(3) {
    transform: ${({ $open }) => $open ? 'translateY(-7px) rotate(-45deg)' : 'none'};
  }
`;

export const DesktopNavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${({ $open }) => $open ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 4rem;
    left: 0;
    right: 0;
    background-color: ${props => props.theme.dark ? 'rgba(18, 18, 18, 0.97)' : 'rgba(255, 255, 255, 0.97)'};
    backdrop-filter: blur(12px);
    border-bottom: 1px solid ${props => props.theme.dark ? '#262626' : '#e5e7eb'};
    padding: 1rem 1.5rem 1.5rem;
    gap: 0.25rem;
    z-index: 49;
  }
`;

export const MobileNavLink = styled.a`
  font-size: 0.9rem;
  font-weight: 500;
  color: inherit;
  text-decoration: none;
  padding: 0.65rem 0;
  border-bottom: 1px solid ${props => props.theme.dark ? '#1f1f1f' : '#f3f4f6'};
  transition: color 0.2s ease;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    color: #9ca3af;
  }
`;
