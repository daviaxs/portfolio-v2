import { TechCard } from './utils/components/TechCard'

export function MainSkills() {
  return (
    <div className="flex flex-col gap-6 items-start justify-start w-full h-fit">
      <h2 className="font-extrabold text-[2rem]">Principais Habilidades</h2>

      <div className="w-full flex items-center justify-between gap-4">
        <TechCard />
        <TechCard />
      </div>
    </div>
  )
}
