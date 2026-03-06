import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/theme';
import { Divider } from './styles/SharedStyles';
import Navigation from './components/navigation/Navigation';
import Hero from './components/hero/Hero';
import Section from './components/section/Section';
import ResumeModal from './components/resume-modal/ResumeModal';


import {
  Wrapper,
  MainContainer,
} from './App.styles';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import GridBackground from './components/grid-background/GridBackground';
import Education from './components/education/Education';
import About from './components/about/About';

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />
      <GridBackground />
      <Navigation 
        onResumeClick={() => setIsResumeModalOpen(true)} 
      />
      
      <Wrapper>
      
      <MainContainer>
        {/* HERO SECTION */}
        <Hero />

        <Divider />

        <Section id="about" title="About Me">
          <About />
        </Section>

        <Divider />

        <Section id="skills" title="Skills & Stack">
          <Skills />
        </Section>

        <Divider />

        <Projects />
        <Divider />

        <Education />
        <Divider />

        <Contact />
      </MainContainer>

      <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={() => setIsResumeModalOpen(false)} 
      />

      </Wrapper>
    </ThemeProvider>
  );
};

export default App;