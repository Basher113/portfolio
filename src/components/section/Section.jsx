import React from 'react';
import { 
  SectionContainer, 
  SectionGrid,
  SectionHeader,
  SectionTitle,
  SectionContent 
} from './Section.styles';

const Section = ({ 
  id, 
  title, 
  children,
  className 
}) => {
  return (
    <>
      <SectionContainer id={id} className={className}>
        <SectionGrid>
          <SectionHeader>
            <SectionTitle>{title}</SectionTitle>
          </SectionHeader>
          
          <SectionContent>
            {children}
          </SectionContent>
        </SectionGrid>
      </SectionContainer>
    </>
  );
};

export default Section;