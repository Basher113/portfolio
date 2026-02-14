import Section from "../section/Section";
import ProjectCard from "../project-card/ProjectCard";
import { ProjectsHeader, ProjectsGrid, ProjectsSubtitle, ProjectsTitle } from "./Projects.styles"

const Projects = () => {
    const projects = [
    {
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9wuliAmcuKjD_9jmdWisd_xMZGj8N7khy8kA8p26iMoGvOr8hrS3BC5CpuP6mrVkdYuenTxT_gROUI3ys94rK1RdIM0c6cIM0MEMw2IIeJCbXHGCufKYpZH0T0S6iNoEHXneZMGmyeyPntqGjZ9RQohDAYZfO4NbmNNRlrZiJvzjiQeh54yHKR4VlwZhggL8C4i2xJWvFxu9XKAxbc_bKho29CmmUJ_FYABrrYL2EH6lEEbxZ42LDmBmBKEQgzlOF2bkrAmatuVw',
      badge: 'Academic Project',
      title: 'Lumina Dashboard',
      description: 'A data visualization tool designed to help small businesses track weekly sales metrics and inventory.',
      learnings: [
        'Implemented complex state management using React Context API.',
        'Mastered responsive design patterns for data-heavy interfaces.'
      ],
      tags: ['React', 'Chart.js', 'Firebase'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuqlMs2eaWQnKipIpNLbmnkLKgobnLD2c8FQ4WaELDQ9Um5j_66-ViO-PbDqzX6O8K55zh4D2zSng_FlTZ-nqO0LSg1_OH-CMvLHKRPME9GyYOTiD5FVzO3rfW-Wd2BduTwwIUL54JqNawZisJezNARU3zkyHvX_3KV_MoVYhuqDjXf2bWP5SYbSZzf4KTbPv3gZPqigGDF9LU5uHQ3xnSaw1Zlmwj80ieWCcHWTdfj93F1PmoJUzpVyLbP3mcOERG7ftVA9zSO4c',
      badge: 'Personal Project',
      title: 'Minimal Cart',
      description: 'An exploration into clean UX for e-commerce, focusing on performance and accessible checkout flows.',
      learnings: [
        'Optimized image loading for 30% faster initial page paint.',
        'Implemented WCAG 2.1 accessibility standards across all components.'
      ],
      tags: ['Next.js', 'Tailwind', 'Stripe API'],
      githubUrl: '#',
      liveUrl: '#'
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
              Learning Projects (2023-2024)
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