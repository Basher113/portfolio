import React from 'react';
import Button from '../ui/button/Button';
import { 
  HeroSection, 
  HeroContent, 
  HeroTitle,
  HeroHighlight,
  HeroDescription,
  HeroButtons, 
  HeroBg,
  HeroWrapper
} from './Hero.styles';

const Hero = ({ 
  title, 
  highlight, 
  description,
  primaryButton,
  secondaryButton 
}) => {
  return (
    <HeroWrapper>
      <HeroBg />
    <HeroSection id="hero">
      
      <HeroContent>
        <HeroTitle>
          {title} <HeroHighlight>{highlight}</HeroHighlight>
        </HeroTitle>
        
        <HeroDescription>{description}</HeroDescription>
        
        <HeroButtons>
          <Button 
            variant="primary" 
            href={primaryButton.href}
            icon="arrow_forward"
          >
            {primaryButton.text}
          </Button>
          
          <Button 
            variant="secondary" 
            href={secondaryButton.href}
          >
            {secondaryButton.text}
          </Button>
        </HeroButtons>
      </HeroContent>
    </HeroSection>
    </HeroWrapper>
  );
};

export default Hero;