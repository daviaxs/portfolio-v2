'use client'

import { ProjectCard } from './utils/components/project-card'
import ImgNotLoad from '@/shared/assets/imgs/img-not-load-base.png'
import { ProjectsFeaturedList } from './utils/ProjectsFeaturedList'
import { ProjectsList } from './utils/ProjectsList'
import { Title } from '@/app/utils/Title'
import { LanguageContext } from '@/shared/context/LanguageContext'
import { useContext } from 'react'

export default function ProjectsPage() {
  const { translations } = useContext(LanguageContext)

  return (
    <div className="flex flex-col gap-6 py-4 items-start justify-start w-full h-fit">
      <Title>{translations.projectsPage.title}</Title>

      {ProjectsFeaturedList.map((project, index) => (
        <ProjectCard.RootFeatured key={index}>
          <ProjectCard.Image
            src={project.img || ImgNotLoad}
            alt={project.imgAlt}
          />

          <ProjectCard.Content>
            <ProjectCard.Title>{project.name}</ProjectCard.Title>

            <ProjectCard.Description>
              {project.description}
            </ProjectCard.Description>

            <ProjectCard.Techs>
              {project.techs.map((tech, index) => (
                <ProjectCard.Tech key={index} name={tech} />
              ))}
            </ProjectCard.Techs>

            <ProjectCard.Buttons
              deployUrl={project.deployUrl}
              githubUrl={project.githubUrl}
              deployButtonDisabled={project.deployUrl === ''}
              githubButtonDisabled={project.githubUrl === ''}
            />
          </ProjectCard.Content>
        </ProjectCard.RootFeatured>
      ))}

      {ProjectsList.map((project, index) => (
        <ProjectCard.Root key={index}>
          <ProjectCard.Image
            src={project.img || ImgNotLoad}
            alt={project.imgAlt}
          />

          <ProjectCard.Content>
            <ProjectCard.Title>{project.name}</ProjectCard.Title>

            <ProjectCard.Description>
              {project.description}
            </ProjectCard.Description>

            <ProjectCard.Techs>
              {project.techs.map((tech, index) => (
                <ProjectCard.Tech key={index} name={tech} />
              ))}
            </ProjectCard.Techs>

            <ProjectCard.Buttons
              deployUrl={project.deployUrl}
              githubUrl={project.githubUrl}
              deployButtonDisabled={project.deployUrl === ''}
              githubButtonDisabled={project.githubUrl === ''}
            />
          </ProjectCard.Content>
        </ProjectCard.Root>
      ))}
    </div>
  )
}
