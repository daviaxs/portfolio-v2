import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonSocialMediaProps {
  children: ReactNode
  href: string
}

export function ButtonSocialMedia({ children, href }: ButtonSocialMediaProps) {
  return (
    <Link href={href} target="_blank">
      <button className="appearance-none cursor-pointer w-[3rem] h-[2rem]">
        <div className="flex items-center justify-center bg-grey-500 border-b-[2px] p-2 border-grey-400 rounded hover:bg-violet-400 hover:border-violet-500 transition-all">
          {children}
        </div>
      </button>
    </Link>
  )
}
