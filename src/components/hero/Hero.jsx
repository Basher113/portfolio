import React from 'react';
import Button from '../ui/button/Button';
import { 
  HeroSection, 
  HeroContent, 
  HeroTitle,
  HeroHighlight,
  HeroDescription,
  HeroButtons, 
  HeroWrapper,
  HeroSocialLinks
} from './Hero.styles';


const Hero = () => {
  return (
    <HeroWrapper>
    
    <HeroSection id="hero">
      <HeroContent>
        <HeroTitle>
          Hi, I'm Basher! <HeroHighlight>Full stack Developer.</HeroHighlight>
        </HeroTitle>
        
        <HeroDescription>I turn ideas into web apps, solve real problems, and keep leveling up along the way.</HeroDescription>
        
        <HeroButtons>
          <Button 
            variant="primary" 
            href="#projects"
            size='lg'
          >
            See My Projects
          </Button>
          
          <Button 
            variant="secondary" 
            href='#contact'
            size='lg'
          >
            Get in Touch
          </Button>
        </HeroButtons>
        <HeroSocialLinks>
         
        </HeroSocialLinks>

      </HeroContent>
    </HeroSection>
    </HeroWrapper>
  );
};

export default Hero;
