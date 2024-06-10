import { Title } from '../about/utils/components/Title'
import { ProjectCard } from './utils/components/project-card'
import ImgNotLoad from './utils/components/img-not-load-base.png'

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-6 py-4 items-start justify-start w-full h-fit">
      <Title>Projetos</Title>

      <ProjectCard.RootFeatured>
        <ProjectCard.Image src={ImgNotLoad} alt="" />

        <ProjectCard.Content>
          <ProjectCard.Title>SpiderLink</ProjectCard.Title>

          <ProjectCard.Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
            praesentium porro distinctio assumenda autem, iure natus at hic
            iusto quas numquam ratione maxime! Temporibus accusamus beatae
            ratione similique magnam numquam!
          </ProjectCard.Description>

          <ProjectCard.Techs>
            <ProjectCard.Tech name="React" />
            <ProjectCard.Tech name="Next.js" />
            <ProjectCard.Tech name="TailwindCSS" />
          </ProjectCard.Techs>

          <ProjectCard.Buttons
            deployUrl="https://spiderlink.vercel.app"
            githubUrl=""
          />
        </ProjectCard.Content>
      </ProjectCard.RootFeatured>

      <ProjectCard.Root>
        <ProjectCard.Image src={ImgNotLoad} alt="" />

        <ProjectCard.Content>
          <ProjectCard.Title>SpiderLink</ProjectCard.Title>

          <ProjectCard.Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
            praesentium porro distinctio assumenda autem, iure natus at hic
            iusto quas numquam ratione maxime! Temporibus accusamus beatae
            ratione similique magnam numquam! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Assumenda fuga commodi dolore, sunt
            consequatur eum velit accusamus illum vel iste deserunt porro iure
            expedita eaque qui, quo, odio dolor facilis? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Molestiae aspernatur porro,
            obcaecati quasi modi soluta sint iusto? Aliquid voluptatibus
            repellendus aut, dolor fugit voluptates, perspiciatis saepe dolorum
            sequi nobis ipsa?
          </ProjectCard.Description>

          <ProjectCard.Techs>
            <ProjectCard.Tech name="React" />
            <ProjectCard.Tech name="Next.js" />
            <ProjectCard.Tech name="TailwindCSS" />
          </ProjectCard.Techs>

          <ProjectCard.Buttons
            deployUrl="https://spiderlink.vercel.app"
            githubUrl=""
          />
        </ProjectCard.Content>
      </ProjectCard.Root>
    </div>
  )
}
