import { Database, TrendingUp, Cog, Palette } from "lucide-react"

import { CurrentFocusBox, SkillsGrid, SkillCategory, SkillBadges, SkillCategoryTitle } from "./Skills.styles"
import SkillBadge from "../skill-badge/SkillBadge"
const Skills = () => {
  return (
    <>
      

      <SkillsGrid>
        <SkillCategory>
          <SkillCategoryTitle>
            <Palette size={18}/>
            Frontend
          </SkillCategoryTitle>
          <SkillBadges>
            <SkillBadge>HTML5 / CSS3</SkillBadge>
            <SkillBadge>JavaScript (ES6+)</SkillBadge>
            <SkillBadge>React</SkillBadge>
            <SkillBadge>Redux</SkillBadge>
            <SkillBadge>Tanstack Query</SkillBadge>
            <SkillBadge>Styled Components</SkillBadge>
            <SkillBadge>Tailwind CSS</SkillBadge>
          </SkillBadges>
        </SkillCategory>

        <SkillCategory>
          <SkillCategoryTitle>
            <Database size={18}/>
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
            <Cog size={18}/>
            Devops and tools
          </SkillCategoryTitle>
          <SkillBadges>
            <SkillBadge>Docker</SkillBadge>
            <SkillBadge>Nginx</SkillBadge>
            <SkillBadge>Git/Github</SkillBadge>
            <SkillBadge>Github Actions</SkillBadge>
            <SkillBadge>Postman</SkillBadge>
          </SkillBadges>
        </SkillCategory>
      </SkillsGrid>

      <CurrentFocusBox>
        <h3>
          <TrendingUp size={16}/>
          Current Focus
        </h3>
        <p>Currently exploring TypeScript </p>
      </CurrentFocusBox>
    </>
  )
}

export default Skills