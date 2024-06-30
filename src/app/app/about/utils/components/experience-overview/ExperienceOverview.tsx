'use client'

import { ExperienceImg } from './utils/components/ExperienceImg'
import { ExperienceCard } from './utils/components/index'
import VectorImg from '@/shared/assets/imgs/vector-img-gradient.png'
import SpiderLinkImg from '@/shared/assets/imgs/spiderlink-img.png'
import { Title } from '@/app/utils/Title'
import { LanguageContext } from '@/shared/context/LanguageContext'
import { useContext } from 'react'

export function ExperienceOverview() {
  const { translations } = useContext(LanguageContext)

  return (
    <div className="flex flex-col gap-6 items-start justify-start w-full h-fit">
      <Title>{translations.aboutPage.experienceOverview.title}</Title>

      <div className="flex flex-col items-start justify-start gap-4 w-full">
        <ExperienceCard.Root>
          <ExperienceCard.Content>
            <ExperienceImg src={SpiderLinkImg} alt="image" />

            <ExperienceCard.Job.JobDetails
              company="SpiderLink"
              jobType={
                translations.aboutPage.experienceOverview.jobs.spiderLink
                  .jobType
              }
              startDate={
                translations.aboutPage.experienceOverview.jobs.spiderLink
                  .startDate
              }
              endDate={
                translations.aboutPage.experienceOverview.jobs.spiderLink
                  .endDate
              }
              location={
                translations.aboutPage.experienceOverview.jobs.spiderLink
                  .location
              }
            >
              <ExperienceCard.Job.JobDetailsTitle>
                {
                  translations.aboutPage.experienceOverview.jobs.spiderLink
                    .jobTitle
                }
              </ExperienceCard.Job.JobDetailsTitle>
            </ExperienceCard.Job.JobDetails>
          </ExperienceCard.Content>

          <ExperienceCard.Job.JobDescription>
            {
              translations.aboutPage.experienceOverview.jobs.spiderLink
                .description
            }
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
              jobType={
                translations.aboutPage.experienceOverview.jobs.moldrin.jobType
              }
              startDate={
                translations.aboutPage.experienceOverview.jobs.moldrin.startDate
              }
              endDate={
                translations.aboutPage.experienceOverview.jobs.moldrin.endDate
              }
              location={
                translations.aboutPage.experienceOverview.jobs.moldrin.location
              }
            >
              <ExperienceCard.Job.JobDetailsTitle>
                {
                  translations.aboutPage.experienceOverview.jobs.moldrin
                    .jobTitle
                }
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
