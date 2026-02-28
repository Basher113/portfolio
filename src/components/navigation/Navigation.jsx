import { useTheme } from 'styled-components';
import Button from '../ui/button/Button';
import { 
  Nav, 
  NavContainer, 
  Logo, 
  LogoText,
  NavLinks,
  NavLink 
} from './Navigation.styles';
import LogoImage from "../../assets/logo.webp";
import LogoImageDark from "../../assets/logoDark.webp";
const Navigation = () => {
  const theme = useTheme();

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <Nav>
      <NavContainer>
        <Logo href='#hero'>
          {theme.dark ? <img src={LogoImage} alt="logo" height={20} width={20}/> : <img src={LogoImageDark} alt="logo" height={20} width={20}/>}
          <LogoText>Basher Kalim</LogoText>
        </Logo>
        
        <NavLinks>
          {navItems.map((item, index) => (
            <NavLink key={index} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </NavLinks>
        
        <Button variant="primary">Resume</Button>
      </NavContainer>
    </Nav>
  );
};

export default Navigation;