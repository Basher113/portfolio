import { useState } from 'react';
import {
  Nav,
  NavContainer,
  Logo,
  LogoText,
  NavLink,
  NavActions,
  HamburgerButton,
  HamburgerLine,
  DesktopNavLinks,
  MobileMenu,
  MobileNavLink,
} from './Navigation.styles';
import LogoImage from "../../assets/logo.webp";
import LogoImageDark from "../../assets/logoDark.webp";
import ThemeToggle from "../theme-toggle/ThemeToggle";

const Navigation = ({ onResumeClick, isDark, onThemeToggle }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleMobileLinkClick = () => setMenuOpen(false);

  return (
    <Nav>
      <NavContainer>
        <Logo href='#hero'>
          {isDark
            ? <img src={LogoImage} alt="logo" height={20} width={20} />
            : <img src={LogoImageDark} alt="logo" height={20} width={20} />}
          <LogoText>Basher Kalim</LogoText>
        </Logo>

        <NavActions>
          <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />

          {/* Desktop links */}
          <DesktopNavLinks>
            {navItems.map((item, index) => (
              <NavLink key={index} href={item.href}>{item.label}</NavLink>
            ))}
            <NavLink onClick={onResumeClick}>Resume</NavLink>
          </DesktopNavLinks>

          {/* Hamburger button */}
          <HamburgerButton
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <HamburgerLine $open={menuOpen} />
            <HamburgerLine $open={menuOpen} />
            <HamburgerLine $open={menuOpen} />
          </HamburgerButton>
        </NavActions>
      </NavContainer>

      {/* Mobile dropdown */}
      <MobileMenu $open={menuOpen}>
        {navItems.map((item, index) => (
          <MobileNavLink key={index} href={item.href} onClick={handleMobileLinkClick}>
            {item.label}
          </MobileNavLink>
        ))}
        <MobileNavLink onClick={() => { onResumeClick(); handleMobileLinkClick(); }}>
          Resume
        </MobileNavLink>
      </MobileMenu>
    </Nav>
  );
};

export default Navigation;