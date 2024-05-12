import { TechCard } from './utils/components'

export function MainSkills() {
  return (
    <div className="flex flex-col gap-6 items-start justify-start w-full h-fit">
      <h2 className="font-extrabold text-[2rem]">Principais Habilidades</h2>

      <div className="w-full flex items-center justify-between gap-4">
        <TechCard.Root type="primary">
          <TechCard.Content>
            <TechCard.Img />

            <TechCard.Texts
              title="React"
              description="Biblioteca JavaScript para construção de interfaces de usuário."
            />
          </TechCard.Content>
        </TechCard.Root>

        <TechCard.Root type="secondary">
          <TechCard.Content>
            <TechCard.Img />

            <TechCard.Texts
              title="TypeScript"
              description="Superset JavaScript que adiciona tipagem estática ao código."
            />
          </TechCard.Content>
        </TechCard.Root>
      </div>
    </div>
  )
}
