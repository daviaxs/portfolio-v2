import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonSocialMediaProps {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  href: string
}

export function ButtonSocialMedia({
  children,
  href,
  variant = 'primary',
}: ButtonSocialMediaProps) {
  return (
    <Link href={href} target="_blank">
      <button className="appearance-none cursor-pointer" type="button">
        <div
          className={`
            flex items-center justify-center rounded transition-all
            ${variant === 'primary' && `bg-grey-500 border-grey-400 border-b-[2px] hover:bg-violet-400 hover:border-violet-500 p-2 min-w-[3rem] max-w-[3rem] min-h-[3rem] max-h-[3rem]`}
            ${variant === 'secondary' && `bg-grey-800 border-grey-500 border-[1px] hover:bg-grey-700 hover:border-grey-500 h-[4rem] px-[0.8rem]`}
          `}
        >
          {children}
        </div>
      </button>
    </Link>
  )
}
