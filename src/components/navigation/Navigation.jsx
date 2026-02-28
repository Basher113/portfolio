import Button from '../ui/button/Button';
import { 
  Nav, 
  NavContainer, 
  Logo, 
  LogoText,
  NavLinks,
  NavLink 
} from './Navigation.styles';

const Navigation = ({ logoText = "Alex.Dev", navItems = [] }) => {
  return (
    <Nav>
      <NavContainer>
        <Logo>
          <LogoText>{logoText}</LogoText>
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