import { ReactNode } from 'react'

interface TechCardImgProps {
  blurColor: string
  children: ReactNode
}

export function TechCardImg({ blurColor, children }: TechCardImgProps) {
  return (
    <div className="relative min-w-[4rem] min-h-[4rem]">
      <div
        className={`w-full h-full absolute blur-md`}
        style={{ backgroundColor: blurColor, opacity: '0.7' }}
      />

      <div className="absolute w-full h-full bg-grey-800 rounded-3xl flex items-center justify-center">
        {children}
      </div>
    </div>
  )
}
