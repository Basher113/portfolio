import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/theme';
import { Divider } from './styles/SharedStyles';
import Navigation from './components/navigation/Navigation';
import Hero from './components/hero/Hero';
import Section from './components/section/Section';


import {
  Wrapper,
  MainContainer,
  AboutText,
  AboutHighlight,
  AboutNotice,
  NoticeIcon,

} from './App.styles';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';

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
        <Hero />

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
          <Skills />
        </Section>

        <Divider />

        <Projects />
        <Divider />

        <Contact />
      </MainContainer>

      </Wrapper>
    </ThemeProvider>
  );
};

export default App;