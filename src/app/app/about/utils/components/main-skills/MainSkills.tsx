import { TypeScript } from '@/shared/assets/svgs/TypeScript'
import { TechCard } from './utils/components'
import { ReactIcon } from '@/shared/assets/svgs/React'
import { Title } from '../Title'

export function MainSkills() {
  return (
    <div className="flex flex-col gap-6 items-start justify-start w-full h-fit">
      <Title>Principais habilidades</Title>

      <div className="w-full flex items-center justify-between gap-4 max-md:flex-col">
        <TechCard.Root type="primary">
          <TechCard.Content>
            <TechCard.Img blurColor="#007ACC">
              <TypeScript />
            </TechCard.Img>

            <TechCard.Texts
              title="TypeScript"
              description=" É uma versão de JavaScript com verificação de tipo estático, oferecendo um conjunto mais robusto de ferramentas para desenvolvimento em larga escala."
            />
          </TechCard.Content>
        </TechCard.Root>

        <TechCard.Root type="secondary">
          <TechCard.Content>
            <TechCard.Img blurColor="#00D8FF">
              <ReactIcon />
            </TechCard.Img>

            <TechCard.Texts
              title="React"
              description="É uma biblioteca JavaScript para criar interfaces de usuário eficientes e reutilizáveis, ideal para aplicações de página única."
            />
          </TechCard.Content>
        </TechCard.Root>
      </div>
    </div>
  )
}
