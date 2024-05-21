import { Title } from '../Title'
import { ExperienceImg } from './utils/components/ExperienceImg'
import { ExperienceCard } from './utils/components/index'
import VectorImg from '@/shared/assets/imgs/vector-img-gradient.png'
import SpiderLinkImg from '@/shared/assets/imgs/spiderlink-img.png'

export function ExperienceOverview() {
  return (
    <div className="flex flex-col gap-6 items-start justify-start w-full h-fit">
      <Title>Experiência</Title>

      <div className="flex flex-col items-start justify-start gap-4 w-full">
        <ExperienceCard.Root>
          <ExperienceCard.Content>
            <ExperienceImg src={SpiderLinkImg} alt="image" />

            <ExperienceCard.Job.JobDetails
              company="SpiderLink"
              jobType="Freelance"
              startDate="Jan de 2024"
              endDate="Mar de 2024"
              location="Remoto"
            >
              <ExperienceCard.Job.JobDetailsTitle>
                Developer
              </ExperienceCard.Job.JobDetailsTitle>
            </ExperienceCard.Job.JobDetails>
          </ExperienceCard.Content>

          <ExperienceCard.Job.JobDescription>
            Durante o projeto na SpiderLink, fui responsável por desenvolver
            todas as etapas, desde o layout até o front-end e back-end da
            aplicação. O produto se trata de um modelo único de site para
            vendas. A aplicação inclui uma página inicial onde os clientes podem
            selecionar seus pedidos e uma dashboard totalmente editável para o
            administrador do site, permitindo adicionar, editar ou remover
            produtos, entre outras customizações.
          </ExperienceCard.Job.JobDescription>

          <ExperienceCard.Job.JobTags>
            <ExperienceCard.Job.JobTag name="React JS" />
            <ExperienceCard.Job.JobTag name="NextJS 14" />
            <ExperienceCard.Job.JobTag name="TypeScript" />
            <ExperienceCard.Job.JobTag name="Node" />
            <ExperienceCard.Job.JobTag name="Styled Components" />
            <ExperienceCard.Job.JobTag name="Radix UI" />
            <ExperienceCard.Job.JobTag name="Fastify" />
            <ExperienceCard.Job.JobTag name="Cloudinary" />
            <ExperienceCard.Job.JobTag name="Prisma" />
            <ExperienceCard.Job.JobTag name="Zod" />
          </ExperienceCard.Job.JobTags>
        </ExperienceCard.Root>

        <ExperienceCard.Root>
          <ExperienceCard.Content>
            <ExperienceImg src={VectorImg} alt="image" />

            <ExperienceCard.Job.JobDetails
              company="Moldrin"
              jobType="Freelance"
              startDate="Ago de 2021"
              endDate="Jan de 2023"
              location="Remoto"
            >
              <ExperienceCard.Job.JobDetailsTitle>
                Editor
              </ExperienceCard.Job.JobDetailsTitle>
            </ExperienceCard.Job.JobDetails>
          </ExperienceCard.Content>

          <ExperienceCard.Job.JobTags>
            <ExperienceCard.Job.JobTag name="Adobe Photoshop" />
            <ExperienceCard.Job.JobTag name="Adobe After Effects" />
          </ExperienceCard.Job.JobTags>
        </ExperienceCard.Root>
      </div>
    </div>
  )
}
