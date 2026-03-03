import ProjectCard from "../project-card/ProjectCard";
import { ProjectsHeader, ProjectsGrid, ProjectsSubtitle, ProjectsTitle } from "./Projects.styles"
import BoardPapsImage from "../../assets/BoardPaps.webp"
import PapuStoreImage from "../../assets/PapuStore.webp"
import ShowcialsImage from "../../assets/Showcials.webp"
const Projects = () => {
    const projects = [
    {
      image: BoardPapsImage,
      badge: 'Personal Project',
      title: 'BoardPaps',
      description: 'A full-stack project management application built to organize projects, manage tasks efficiently, and provide clear visibility into workflow progress.',
      learnings: [
        'Engineered a LexoRank-based ordering system to support scalable drag-and-drop prioritization without expensive re-indexing',
        'Built role-based access control (RBAC) with team invitations and permission management.',
        'Integrated Clerk for secure authentication and user management.',
        'Used Resend email service for transactional emails, invitations and notifications.'
      ],
      tags: ['React', 'Clerk', 'express'],
      githubUrl: 'https://github.com/Basher113/BoardPaps',
      liveUrl: 'https://board-paps.vercel.app'
    },
    {
      image: ShowcialsImage,
      badge: 'Personal Project',
      title: 'Showcials',
      description: 'Full-stack platform where users can share show reviews, like and comment on posts, recommend shows to friends, and track watched and favorite content.',
      learnings: [
        'Integrated TanStack Query for efficient server-state management with caching, background refetching, and optimistic updates.',
        'Leveraged TMDB API to fetch real-time movie and TV show data.',
        'Implemented cursor based pagination.',
      ],
      tags: ['React', 'TanStack Query', 'TMDB API', 'Express'],
      githubUrl: 'https://github.com/Basher113/Showcials',
      
    },
    {
      image: PapuStoreImage,
      badge: 'Personal Project',
      title: "Papu'Store",
      description: 'A modern full-stack e-commerce app built with secure authentication and lightning-fast data handling at its core.',
      learnings: [
        'Designed and implemented secure custom authentication flows with protected routes and session handling.',
        'Optimized server-state management using Redux Toolkit Query with caching, auto-refetching, and request deduplication.',
        'Integrated Paymongo for secure payment processing and checkout workflows.',
      ],
      tags: ['React', 'Expressjs', 'Paymongo'],
      liveUrl: 'https://papu-store.vercel.app'
    }
  ];
  return (
    <section id="projects" style={{padding: "6rem 0"}}>
      <ProjectsHeader>
            <div>
              <ProjectsSubtitle>Featured Work</ProjectsSubtitle>
              <ProjectsTitle>Recent Projects</ProjectsTitle>
            </div>
            <span style={{ fontSize: '0.875rem', color: '#9ca3af' }}>
              Learning Projects (2025-2026)
            </span>
          </ProjectsHeader>

          <ProjectsGrid>
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </ProjectsGrid>
        </section>
  )
}

export default Projects