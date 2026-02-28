import styled from "styled-components";
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:hover {
    border-bottom: 1px solid black;
  }
`;