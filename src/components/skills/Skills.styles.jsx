import styled from "styled-components";

export const CurrentFocusBox = styled.div`
  padding: 1.5rem;
  background-color: ${props => props.theme.colors.neutralGray};
  border-radius: 0.5rem;
  margin-bottom: 3rem;

  h3 {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #9ca3af;
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    .material-symbols-outlined {
      font-size: 0.875rem;
    }
  }

  p {
    font-size: 0.875rem;
    font-weight: 500;
  }

  @media (min-width: 768px) {
    grid-column: span 4 / span 4;
    margin-bottom: 0;
  }
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-column: span 8 / span 8;
  }
`;

export const SkillCategory = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SkillCategoryTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const SkillBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;