import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/theme';
import { Divider } from './styles/SharedStyles';
import Navigation from './components/navigation/Navigation';
import Hero from './components/hero/Hero';
import Section from './components/section/Section';
import SkillBadge from './components/skill-badge/SkillBadge';

import {
  Wrapper,
  MainContainer,
  AboutText,
  AboutHighlight,
  AboutNotice,
  NoticeIcon,
  SkillsGrid,
  SkillCategory,
  SkillCategoryTitle,
  SkillBadges,
  CurrentFocusBox,
  ProjectsHeader,
  ProjectsTitle,
  ProjectsSubtitle,
  ProjectsGrid,
  ContactSection,
  ContactEmail,
  SocialLinks,
  SocialLink,
  Footer,
} from './App.styles';
import Projects from './components/projects/Projects';

const App = () => {
  const [isDark, setIsDark] = useState(false);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Education' },
    { href: '#contact', label: 'Contact' }
  ];





  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Navigation logoText="Basher Kalim" navItems={navItems} />
      <Wrapper>
      
      <MainContainer>
        <Hero
          title="Hi, I'm Basher!"
          highlight="Full stack Developer."
          description="I turn ideas into web apps, solve real problems, and keep leveling up along the way."
          primaryButton={{ text: 'See My Projects', href: '#projects' }}
          secondaryButton={{ text: 'Get in Touch', href: '#contact' }}
        />

        <Divider />

        <Section id="about" title="About Me">
          <AboutText>
            It started with “let me try this” — and somehow turned into constantly pushing myself to build smarter, cleaner, cooler things.
          </AboutText>
          <AboutHighlight>
            What started as a curiosity in senior high school turned into a hands-on adventure — mostly love it, occasionally hate it 😅. Udemy courses, YouTube tutorials, and CS50 helped me build the basics, while real projects taught me the rest. Learning never stops, and that's the best part.
          </AboutHighlight>
          <AboutNotice>
            <NoticeIcon className="material-symbols-outlined">school</NoticeIcon>
            <p>Currently documenting my progress through weekly technical blog posts and open-source contributions.</p>
          </AboutNotice>
        </Section>

        <Divider />

        <Section id="skills" title="Skills & Stack">
          <CurrentFocusBox>
            <h3>
              <span className="material-symbols-outlined">trending_up</span>
              Current Focus
            </h3>
            <p>Currently exploring TypeScript </p>
          </CurrentFocusBox>

          <SkillsGrid>
            <SkillCategory>
              <SkillCategoryTitle>
                <span className="material-symbols-outlined">palette</span>
                Frontend
              </SkillCategoryTitle>
              <SkillBadges>
                <SkillBadge>HTML5 / CSS3</SkillBadge>
                <SkillBadge>JavaScript (ES6+)</SkillBadge>
                <SkillBadge>React</SkillBadge>
                <SkillBadge>Redux</SkillBadge>
                <SkillBadge>Styled Components</SkillBadge>
                <SkillBadge>Tailwind CSS</SkillBadge>
              </SkillBadges>
            </SkillCategory>

            <SkillCategory>
              <SkillCategoryTitle>
                <span className="material-symbols-outlined">database</span>
                Backend
              </SkillCategoryTitle>
              <SkillBadges>
                <SkillBadge>Node.js</SkillBadge>
                <SkillBadge>Python</SkillBadge>
                <SkillBadge>Express</SkillBadge>
                <SkillBadge>PostgreSQL</SkillBadge>
                <SkillBadge>Prisma ORM</SkillBadge>
              </SkillBadges>
            </SkillCategory>

            <SkillCategory>
              <SkillCategoryTitle>
                <span className="material-symbols-outlined">database</span>
                Devops and tools
              </SkillCategoryTitle>
              <SkillBadges>
                <SkillBadge>Docker</SkillBadge>
                <SkillBadge>Github Actions</SkillBadge>
                <SkillBadge>Git/Github</SkillBadge>
                <SkillBadge>Postman</SkillBadge>
              </SkillBadges>
            </SkillCategory>
          </SkillsGrid>
        </Section>

        <Divider />

        <Projects />
        <Divider />

        <ContactSection id="contact">
          <h2>Start a Conversation</h2>
          <ContactEmail href="mailto:hello@alexdev.design">
            hello@alexdev.design
          </ContactEmail>
          <SocialLinks>
            <SocialLink href="#">GitHub</SocialLink>
            <SocialLink href="#">LinkedIn</SocialLink>
            <SocialLink href="#">Twitter</SocialLink>
          </SocialLinks>
          <Footer>
            © 2024 Alex Dev. Built with passion and constant learning.
          </Footer>
        </ContactSection>
      </MainContainer>

      </Wrapper>
    </ThemeProvider>
  );
};

export default App;