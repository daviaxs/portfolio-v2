'use client'

import Image from 'next/image'
import DaviAxsDesenho from '@/shared/assets/imgs/daviaxs-desenho-com-bg.png'
import { LanguageContext } from '@/shared/context/LanguageContext'
import { useContext } from 'react'

export function CardAbout() {
  const { translations } = useContext(LanguageContext)

  function getYearsOld() {
    const birthDate = new Date('2006-01-14')
    const currentDate = new Date()
    const diff = currentDate.getTime() - birthDate.getTime()
    const ageDate = new Date(diff)

    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }

  return (
    <div className="flex flex-col w-full h-fit p-5 gap-3 sm:rounded bg-grey-800 border border-grey-500">
      <div className="w-full h-fit flex gap-4 items-start">
        <div className="relative min-w-[5.5rem] min-h-[5.5rem]">
          <div className="absolute min-w-[5.5rem] min-h-[5.5rem] rounded-full bg-gradient-to-r from-[#0085ff] via-[#a143ff] to-[#ff8383] z-0 animate-pulse" />

          <Image
            src={DaviAxsDesenho}
            alt="avatar"
            className="absolute top-[0.25rem] left-[0.25rem] w-[5rem] h-[5rem] rounded-full outline outline-[3px] outline-grey-800 z-10"
          />
        </div>

        <div className="flex flex-col items-start gap-1 mt-1">
          <h4 className="font-bold text-[2.5rem] leading-[100%] max-sm:text-[1.8rem]">
            {translations.aboutPage.title}
          </h4>
          <span className="h-[8px] w-[60%] bg-grey-500 rounded-full" />
        </div>
      </div>

      <p>
        {translations.aboutPage.textAbout.part1} {getYearsOld()}{' '}
        {translations.aboutPage.textAbout.part2}
        <br />
        <br />
        {translations.aboutPage.textAbout.part3}
        <br />
        <br />
        {translations.aboutPage.textAbout.part4}
      </p>
    </div>
  )
}
