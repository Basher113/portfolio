import React from 'react';
import styled from 'styled-components';

const GridBackground = () => {
  return (
    <BackgroundContainer>
      <GridLines />
      <FadeOverlay />
    </BackgroundContainer>
  );
};

const GridLines = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: ${({ theme }) =>
    theme.dark
      ? `linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
         linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px)`
      : `linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
         linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px)`
  };
  background-size: 80px 80px; 
  transition: background-image 0.3s ease;
`;

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
`;

const FadeOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) =>
    theme.dark
      ? `linear-gradient(180deg, transparent 0%, rgba(18, 18, 18, 0.2) 100%)`
      : `linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0.2) 100%)`
  };
`;
export default GridBackground;