import { Title } from '../Title'
import { ExperienceCard } from './utils/components/ExperienceCard'

export function ExperienceOverview() {
  return (
    <div className="flex flex-col gap-6 items-start justify-start w-full h-fit">
      <Title>Experiência</Title>

      <ExperienceCard />
    </div>
  )
}
