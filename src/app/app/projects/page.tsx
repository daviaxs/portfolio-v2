import { Title } from '../about/utils/components/Title'
import { ProjectCard } from './utils/components/ProjectCard'

export default function HomePage() {
  return (
    <div className="flex flex-col gap-6 py-4 items-start justify-start w-full h-fit">
      <Title>Projetos</Title>

      <ProjectCard />
    </div>
  )
}
