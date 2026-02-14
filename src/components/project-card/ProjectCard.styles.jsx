import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardImage = styled.div`
  aspect-ratio: 16 / 9;
  width: 100%;
  border-radius: 0.75rem;
  overflow: hidden;
  margin-bottom: 1.5rem;
  background-color: ${props => props.theme.dark ? '#1f1f1f' : '#f7f7f7'};
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  position: relative;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardBadge = styled.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 10;
  background-color: ${props => props.theme.dark ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.9)'};
  padding: 0.25rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
`;

export const CardTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 700;
`;

export const CardLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

export const CardLink = styled.a`
  color: inherit;
  transition: color 0.3s ease;

  &:hover {
    color: #9ca3af;
  }

  .material-symbols-outlined {
    font-size: 1.25rem;
  }
`;

export const CardDescription = styled.p`
  color: ${props => props.theme.dark ? '#9ca3af' : '#4b5563'};
  margin-bottom: 1rem;
`;

export const CardLearnings = styled.div`
  margin-bottom: 1.5rem;
`;

export const LearningsTitle = styled.p`
  font-size: 0.75rem;
  font-weight: 700;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  .material-symbols-outlined {
    font-size: 0.75rem;
  }
`;

export const LearningsList = styled.ul`
  font-size: 0.875rem;
  color: ${props => props.theme.dark ? '#9ca3af' : '#4b5563'};
  list-style: disc;
  list-style-position: inside;

  li {
    margin-bottom: 0.25rem;
  }
`;

export const CardTags = styled.div`
  display: flex;
  gap: 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: -0.025em;
`;

export const CardTag = styled.span`
  color: #9ca3af;
`;