import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

interface ExperienceImgProps {
  src: string | StaticImport
  alt?: string
}

export function ExperienceImg({ src, alt = '' }: ExperienceImgProps) {
  return (
    <Image
      src={src}
      alt={alt}
      className="w-[5rem] h-[5rem] rounded-lg object-contain"
    />
  )
}
