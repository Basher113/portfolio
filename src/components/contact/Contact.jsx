import { ContactSection, ContactEmail, SocialLink, SocialLinks,  } from "./Contact.styles"

import { Facebook, Github, Linkedin } from "lucide-react";
const Contact = () => {
  return (
    <ContactSection id="contact">
      <h2>Start a Conversation</h2>
      <ContactEmail href="mailto:hello@alexdev.design">
        Basherkalim3@gmail.com
      </ContactEmail>
      <SocialLinks>
        <SocialLink href="https://github.com/Basher113/" target="_blank" rel="noreferrer"><Github size={18}/>GitHub</SocialLink>
        <SocialLink href="https://www.facebook.com/baskokalim" target="_blank" rel="noreferrer"><Facebook size={18}/>Facebook</SocialLink>
        <SocialLink href="#" target="_blank" rel="noreferrer"><Linkedin size={18}/>Linkedin</SocialLink>
      </SocialLinks>
      
    </ContactSection>
  )
}

export default Contact