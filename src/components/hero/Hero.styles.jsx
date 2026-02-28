import styled from 'styled-components';

export const HeroWrapper = styled.section`
  position: relative;
  width: 100vw;
`

export const HeroSection = styled.div`
  padding: 6rem 0 10rem;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  @media (min-width: 768px) {
    padding: 10rem 0;
  }
    position: relative;
`;

export const HeroBg = styled.div`
  position: absolute;
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='2' height='2' viewBox='0 0 4 4'%3E%3Cpath fill='%23141414' fill-opacity='0.6' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  
  top: 0;
  right: 0;
  left: 0;
  width: 100vw;
  height: 30vh;
`

export const HeroContent = styled.div`
  max-width: 48rem;
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  line-height: 1.1;
  letter-spacing-3.6px
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
`;

export const HeroHighlight = styled.span`
  color: #9ca3af;
  display: block;
  overflow: hidden;
`;

export const HeroDescription = styled.p`
  font-size: 1.25rem;
  color: ${props => props.theme.dark ? '#9ca3af' : '#4b5563'};
  font-weight: 400;
  line-height: 1.75;
  margin-bottom: 2.5rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const HeroSocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`

export const HeroSocialLInk = styled.a`

  & > img {
    width: 30px;
    height: 30px;
  }
`
