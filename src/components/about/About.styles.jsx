import styled from "styled-components";
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