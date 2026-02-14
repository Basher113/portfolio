import React from 'react';
import { 
  Card,
  CardImage,
  CardBadge,
  CardHeader,
  CardTitle,
  CardLinks,
  CardLink,
  CardDescription,
  CardLearnings,
  LearningsTitle,
  LearningsList,
  CardTags,
  CardTag 
} from './ProjectCard.styles';

const ProjectCard = ({ 
  image,
  badge,
  title,
  description,
  learnings = [],
  tags = [],
  githubUrl,
  liveUrl 
}) => {
  return (
    <Card>
      <CardImage image={image}>
        {badge && <CardBadge>{badge}</CardBadge>}
      </CardImage>
      
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardLinks>
          {githubUrl && (
            <CardLink href={githubUrl} aria-label="View code">
              <span className="material-symbols-outlined">code</span>
            </CardLink>
          )}
          {liveUrl && (
            <CardLink href={liveUrl} aria-label="View live demo">
              <span className="material-symbols-outlined">open_in_new</span>
            </CardLink>
          )}
        </CardLinks>
      </CardHeader>
      
      <CardDescription>{description}</CardDescription>
      
      {learnings.length > 0 && (
        <CardLearnings>
          <LearningsTitle>
            <span className="material-symbols-outlined">auto_awesome</span>
            Key Learnings
          </LearningsTitle>
          <LearningsList>
            {learnings.map((learning, index) => (
              <li key={index}>{learning}</li>
            ))}
          </LearningsList>
        </CardLearnings>
      )}
      
      <CardTags>
        {tags.map((tag, index) => (
          <CardTag key={index}>{tag}</CardTag>
        ))}
      </CardTags>
    </Card>
  );
};

export default ProjectCard;