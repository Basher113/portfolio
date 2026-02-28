import styled from 'styled-components';
import EducationCard from './components/education-card/EducationCard';

const Education = () => {
  const educationData = [
     {
    title: 'Full-Stack JavaScript Path',
    institution: 'The Odin Project',
    period: '2025',
    description: 'Completed a comprehensive full-stack curriculum covering modern web development, including JavaScript, React, Node.js, databases, and real-world project building. Emphasized hands-on learning, problem solving, and production-ready application architecture.',
    type: 'education'
  },
  {
    title: 'CS50’s Introduction to Programming with Python',
    institution: 'Harvard University',
    period: '2025',
    description: 'Developed strong programming fundamentals using Python, focusing on problem solving, algorithms, data structures, testing, and writing clean, maintainable code.',
    type: 'certificate',
    certificate: {
      title: "CS50P: Introduction to Programming with Python Certificate",
      url: "https://certificates.cs50.io/a6c4629b-6328-46cf-9e53-7e1323c6f9a8.pdf?size=letter"
    }
  },
  {
    title: 'Docker & Kubernetes: The Complete Guide',
    institution: 'Stephen Grider (Udemy)',
    period: '2026-present',
    description: 'Learned containerization, and deployment strategies, including Docker workflows, and production-grade DevOps practices.',
    type: 'education'
  }
  ];

  return (
    <Section id="education">
      <Container>
        <SectionHeader>
          <Label>Learning & Credentials</Label>
          <Heading>Education & Certificates</Heading>
        </SectionHeader>

        <Grid>
          {educationData.map((item, index) => (
            <EducationCard
              key={index}
              title={item.title}
              institution={item.institution}
              period={item.period}
              description={item.description}
              type={item.type}
              certificate={item.certificate}
            />
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  padding: 6rem 0;
  
  @media (max-width: 768px) {
    padding: 5rem 0;
  }
`;

const Container = styled.div`
  margin: 0 auto;

`;

const SectionHeader = styled.div`
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const Label = styled.h2`
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textTertiary};
  margin: 0 0 1rem 0;
`;

const Heading = styled.h3`
  font-size: 2.25rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
  line-height: 1.1;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`;

export default Education;