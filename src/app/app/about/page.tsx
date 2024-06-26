import { CardAbout } from './utils/components/card-about/CardAbout'
import { ExperienceOverview } from './utils/components/experience-overview/ExperienceOverview'
import { MainSkills } from './utils/components/main-skills/MainSkills'
import { Separator } from './utils/components/separator/Separator'
import { Skills } from './utils/components/skills/Skills'

export default function AboutPage() {
  return (
    <div className="flex flex-col items-start justify-center py-6 gap-5">
      <CardAbout />

      <Separator />

      <MainSkills />

      <Separator />

      <Skills />

      <Separator />

      <ExperienceOverview />
    </div>
  )
}
