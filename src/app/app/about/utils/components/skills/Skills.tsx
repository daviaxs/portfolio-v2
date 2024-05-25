import { CodeXml } from 'lucide-react'
import { Title } from '../Title'
import { SkillsCard } from './utils/components'
import { TypeScript } from '@/shared/assets/svgs/TypeScript'

export function Skills() {
  return (
    <div className="flex flex-col gap-6 items-start justify-start w-full h-fit">
      <Title>Minhas Habilidades</Title>

      <div className="w-full flex items-center justify-between gap-4 max-md:flex-col">
        <SkillsCard.Root>
          <SkillsCard.Header.Header>
            <CodeXml size={60} color="#55EE97" />
            <SkillsCard.Header.HeaderTitle>
              Programação
            </SkillsCard.Header.HeaderTitle>
          </SkillsCard.Header.Header>

          <SkillsCard.Separator />

          <SkillsCard.Techs.Techs>
            <SkillsCard.Techs.Tech>
              <TypeScript />
              <SkillsCard.Techs.TechText>TypeScript</SkillsCard.Techs.TechText>
            </SkillsCard.Techs.Tech>
          </SkillsCard.Techs.Techs>
        </SkillsCard.Root>
      </div>
    </div>
  )
}
