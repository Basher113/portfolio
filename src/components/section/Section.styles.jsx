import styled from 'styled-components';

export const SectionContainer = styled.section`
  padding: 6rem 0;
`;

export const SectionGrid = styled.div`
  display: grid;
  gap: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(12, 1fr);
  }
`;

export const SectionHeader = styled.div`
  @media (min-width: 768px) {
    grid-column: span 4 / span 4;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #9ca3af;
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-column: span 8 / span 8;
  }
`;