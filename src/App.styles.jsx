import styled from 'styled-components';


export const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`


export const MainContainer = styled.main`
  padding: 0 1.5rem;
  width: 100%;
`;


export const ProjectsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 4rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const ProjectsSubtitle = styled.h2`
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #9ca3af;
  margin-bottom: 1rem;
`;

export const ProjectsTitle = styled.h3`
  font-size: 2.25rem;
  font-weight: 900;
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;


export const Footer = styled.p`
  color: #9ca3af;
  font-size: 0.75rem;
`;

