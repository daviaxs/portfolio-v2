'use client'

import { LanguageContext } from '@/shared/context/LanguageContext'
import { ReactNode, useContext } from 'react'

interface ProjectCardTestProps {
  children: ReactNode
}

export function ProjectCardRootFeatured({ children }: ProjectCardTestProps) {
  const { translations } = useContext(LanguageContext)

  return (
    <div className="relative w-full">
      <div className="absolute top-[-1rem] left-1/2 transform -translate-x-1/2 w-fit from-[#0085ff] via-[#a143ff] via-36% to-[#ff8383] bg-gradient-to-br z-20 px-2 py-1 rounded-xl">
        <p className="font-bold text-nowrap">
          {translations.projectsPage.projects.projectsFeatured.title}
        </p>
      </div>

      <div className="flex items-start justify-start px-4 py-5 gap-4 w-full h-fit bg-grey-900 border-2 border-violet-300 rounded-lg max-md:flex-col max-md:items-center">
        {children}
      </div>
    </div>
  )
}
