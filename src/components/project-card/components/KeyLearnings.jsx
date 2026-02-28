import styled from 'styled-components';

const KeyLearnings = ({ learnings }) => {
  return (
    <Container>
      <Header>
        <IconWrapper>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </IconWrapper>
        <Title>Key Learnings</Title>
      </Header>
      
      <LearningsList>
        {learnings.map((learning, index) => (
          <LearningItem key={index}>
            <Bullet>→</Bullet>
            <LearningText>{learning}</LearningText>
          </LearningItem>
        ))}
      </LearningsList>
    </Container>
  );
};

const Container = styled.div`
  padding: 1.25rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.neutralGray};
  border-left: 2px solid ${({ theme }) => theme.colors.textPrimary};
  border-radius: 0 0.375rem 0.375rem 0;
  transition: all 0.3s ease;
  margin-bottom: 0.25rem;

  &:hover {
    border-left-width: 3px;
    background-color: ${({ theme }) => 
      theme.dark ? '#1a1a1a' : '#f3f3f3'
    };
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.875rem;
`;

const IconWrapper = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  align-items: center;
  opacity: 0.7;
`;

const Title = styled.h4`
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
`;

const LearningsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

const LearningItem = styled.li`
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
`;

const Bullet = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  flex-shrink: 0;
  opacity: 0.5;
`;

const LearningText = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.875rem;
  line-height: 1.6;
  font-weight: 400;
`;

export default KeyLearnings;