import React from 'react';
import styled from 'styled-components';

const EducationCard = ({ 
  title, 
  institution, 
  period, 
  description,
  type = 'education', // 'education' or 'certificate'
  certificate 
}) => {
  return (
    <Card>
      <CardHeader>
        <HeaderTop>
          <TitleWrapper>
            <Title>{title}</Title>
            {type === 'certificate' && (
              <Badge>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                Certified
              </Badge>
            )}
          </TitleWrapper>
          <Period>{period}</Period>
        </HeaderTop>
        
        <Institution>{institution}</Institution>
      </CardHeader>

      <Description>{description}</Description>
      {certificate && <a href={certificate.url} target='_blank' rel="noreferrer">{certificate.title}</a>}
    </Card>
  );
};

const Card = styled.div`
  padding: 1.75rem;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.colors.textPrimary};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s;
  }

  &:hover {
    transform: translateY(-2px);
    &::before {
      transform: scaleX(1);
    }
  }
`;

const CardHeader = styled.div`
  margin-bottom: 1rem;
`;

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 0.625rem;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1;
`;

const Title = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
  line-height: 1.4;
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.625rem;
  background-color: ${({ theme }) => theme.colors.neutralGray};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  border-radius: 0.25rem;
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.textSecondary};
  white-space: nowrap;

  svg {
    flex-shrink: 0;
  }
`;

const Period = styled.span`
  font-size: 0.8125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textSecondary};
  white-space: nowrap;
  padding: 0.25rem 0.75rem;
  background-color: ${({ theme }) => theme.colors.neutralGray};
  border-radius: 0.25rem;
  letter-spacing: 0.01em;
`;

const Institution = styled.p`
  font-size: 0.9375rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
`;

const Description = styled.p`
  font-size: 0.9375rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
`;



export default EducationCard;