'use client'

import { ArrowRight } from 'lucide-react'
import { navigationLinks } from './navigationLinks'
import Link from 'next/link'
import { GetDesktopIcon } from './GetDesktopIcon'
import { usePathname } from 'next/navigation'

const desktopLinks = navigationLinks.filter(
  (link) => link.link !== '/app/pages',
)

export function NavigationDesktop() {
  const pathName = usePathname()

  return (
    <aside className="h-full w-[5rem] bg-grey-900 border-r-[1px] border-grey-500 flex flex-col items-center justify-start">
      <header className="border-b-[1px] border-grey-500 w-full py-4 flex items-center justify-center mb-4">
        <div className="hover:bg-grey-500 p-2 rounded-full cursor-pointer transition-colors">
          <ArrowRight size={25} />
        </div>
      </header>

      <nav className="flex flex-col items-center justify-center w-full gap-4">
        {desktopLinks.map((link) => (
          <Link
            href={link.link}
            key={link.link}
            className={`w-fit p-3 rounded-lg flex items-center justify-center transition-colors text-center ${pathName === link.link ? 'bg-violet-400' : 'hover:bg-grey-500'}`}
          >
            <span className={`${pathName === link.link ? '' : 'opacity-50'}`}>
              {GetDesktopIcon(link.icon)}
            </span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}
