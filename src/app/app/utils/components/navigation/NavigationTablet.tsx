'use client'

import { navigationLinks } from './navigationLinks'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { GetDesktopAndTabletIcon } from './utils/GetDesktopAndTabletIcon'
import { MouseEvent, useState } from 'react'
import { Retangle } from './utils/Retangle'
import { motion } from 'framer-motion'

const tabletLinks = navigationLinks.filter((link) => link.link !== '/app/more')

export function NavigationTablet() {
  const [isNavigation, setIsNavigation] = useState(false)
  const pathName = usePathname()

  function handleNavigation(
    event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
  ) {
    if (isNavigation) {
      event.preventDefault()
    }

    setIsNavigation(true)
    setTimeout(() => setIsNavigation(false), 500)
  }

  return (
    <menu className="h-fit w-full bg-grey-700 border-grey-500 flex items-center justify-center absolute rounded-tr-lg rounded-tl-lg bottom-0 px-4 py-2">
      <nav className="flex items-end justify-between w-full gap-4 overflow-hidden">
        {tabletLinks.map((page) => (
          <Link
            key={page.link}
            href={page.link}
            onClick={(event) => handleNavigation(event)}
            className="w-fit rounded-lg flex items-center justify-center transition-colors text-center"
          >
            <div
              className={`
              flex flex-col items-center justify-end gap-1 
              ${pathName === page.link || page.icon === 'projects' ? '' : 'opacity-70'} 
            `}
            >
              {pathName === page.link && page.icon !== 'projects' && (
                <motion.span
                  className="h-1 w-full rounded-full bg-green-400 mb-1"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              )}

              {GetDesktopAndTabletIcon({
                iconName: page.icon,
                mode: 'tablet',
              })}

              <p
                className={`font-medium text-sm ${page.icon === 'projects' && pathName !== '/app/projects' ? 'opacity-70' : ''}`}
              >
                {page.tabletAndMobileTitle}
              </p>
            </div>
          </Link>
        ))}
      </nav>

      <Retangle className="absolute bottom-[3.6rem] z-[-1] mr-4" />
    </menu>
  )
}
