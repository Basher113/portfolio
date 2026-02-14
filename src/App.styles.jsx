import styled from 'styled-components';


export const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`


export const MainContainer = styled.main`
  padding: 0 1.5rem;
  width: 100%;
`;

export const AboutText = styled.p`
  font-size: 1.5rem;
  line-height: 1.75;
`;

export const AboutHighlight = styled.p`
  font-size: 1.125rem;
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.75;
`;

export const AboutNotice = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  border: 1px dashed ${props => props.theme.colors.border};
  border-radius: 0.5rem;

  p {
    font-size: 0.875rem;
    font-weight: 500;
  }
`;

export const NoticeIcon = styled.span`
  color: #9ca3af;
`;

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

  .material-symbols-outlined {
    font-size: 1.25rem;
  }
`;

export const SkillBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
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

export const ContactSection = styled.section`
  padding: 8rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h2 {
    font-size: 0.875rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #9ca3af;
    margin-bottom: 2.5rem;
  }
`;

export const ContactEmail = styled.a`
  font-size: 1.875rem;
  font-weight: 900;
  margin-bottom: 3rem;
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease;
  word-break: break-all;

  &:hover {
    color: #9ca3af;
  }

  @media (min-width: 768px) {
    font-size: 3.75rem;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 4rem;
`;

export const SocialLink = styled.a`
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: inherit;
  text-decoration: none;
  transition: text-decoration 0.3s ease;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`;

export const Footer = styled.p`
  color: #9ca3af;
  font-size: 0.75rem;
`;

