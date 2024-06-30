'use client'

import { CodeXml, Palette } from 'lucide-react'
import { SkillsCard } from './utils/components'
import { programmingSkills } from './programming-skills'
import { designSkills } from './design-skills'
import { Title } from '@/app/utils/Title'
import { LanguageContext } from '@/shared/context/LanguageContext'
import { useContext } from 'react'

export function Skills() {
  const { translations } = useContext(LanguageContext)

  return (
    <div className="flex flex-col gap-6 items-start justify-start w-full h-fit">
      <Title>{translations.aboutPage.skills.title}</Title>

      <div className="w-full flex items-center justify-between gap-4 max-md:flex-col">
        <SkillsCard.Root>
          <SkillsCard.Header.Header>
            <CodeXml size={60} color="#55EE97" />
            <SkillsCard.Header.HeaderTitle>
              {translations.aboutPage.skills.skillsCardsTitles.developer}
            </SkillsCard.Header.HeaderTitle>
          </SkillsCard.Header.Header>

          <SkillsCard.Separator />

          <SkillsCard.Techs.Techs>
            {programmingSkills.map((skill, index) => (
              <SkillsCard.Techs.Tech key={index}>
                <div className="max-w-[3rem] min-w-[3rem] flex items-center justify-center">
                  {skill.icon}
                </div>

                <SkillsCard.Techs.TechText>
                  {skill.name}
                </SkillsCard.Techs.TechText>
              </SkillsCard.Techs.Tech>
            ))}
          </SkillsCard.Techs.Techs>
        </SkillsCard.Root>

        <SkillsCard.Root>
          <SkillsCard.Header.Header>
            <Palette size={60} color="#55EE97" />
            <SkillsCard.Header.HeaderTitle>
              {translations.aboutPage.skills.skillsCardsTitles.design}
            </SkillsCard.Header.HeaderTitle>
          </SkillsCard.Header.Header>

          <SkillsCard.Separator />

          <SkillsCard.Techs.Techs>
            {designSkills.map((skill, index) => (
              <SkillsCard.Techs.Tech key={index}>
                <div className="max-w-[3rem] min-w-[3rem] flex items-center justify-center">
                  {skill.icon}
                </div>

                <SkillsCard.Techs.TechText>
                  {skill.name}
                </SkillsCard.Techs.TechText>
              </SkillsCard.Techs.Tech>
            ))}
          </SkillsCard.Techs.Techs>
        </SkillsCard.Root>
      </div>
    </div>
  )
}
