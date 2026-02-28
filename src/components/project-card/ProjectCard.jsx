import { ExternalLink, Github, Sparkle } from 'lucide-react';
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
import KeyLearnings from './components/KeyLearnings';

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
      <a href={liveUrl} target='_blank' rel="noreferrer">
      <CardImage image={image}>
        {badge && <CardBadge>{badge}</CardBadge>}
      </CardImage>
      </a>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardLinks>
          {githubUrl && (
            <CardLink href={githubUrl} target='_blank' rel="noreferrer" aria-label="View code">
              <Github size={20}/>
            </CardLink>
          )}
          {liveUrl && (
            <CardLink href={liveUrl} rel="noreferrer" aria-label="View live demo">
              <ExternalLink size={20}/>
            </CardLink>
          )}
        </CardLinks>
      </CardHeader>
      
      <CardDescription>{description}</CardDescription>
      
      {learnings.length > 0 && (
        <KeyLearnings learnings={learnings}/>
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