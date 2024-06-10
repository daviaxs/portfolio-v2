import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

interface ProjectCardImageProps {
  src: string | StaticImport
  alt: string
}

export function ProjectCardImage({ src, alt }: ProjectCardImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      className="w-[10rem] h-[10rem] object-cover rounded-md"
    />
  )
}
