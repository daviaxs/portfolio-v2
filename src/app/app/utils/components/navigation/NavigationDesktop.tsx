'use client'

import { navigationLinks } from './navigationLinks'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as Tooltip from '@radix-ui/react-tooltip'
import { NavigationDialog } from './utils/components/navigation-dialog/NavigationDialog'
import { GetDesktopAndTabletIcon } from './utils/GetDesktopAndTabletIcon'
import { MouseEvent, useState } from 'react'

const desktopLinks = navigationLinks.filter((page) => page.link !== '/app/more')

export function NavigationDesktop() {
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
    <aside className="h-full w-[5rem] bg-grey-900 border-r-[1px] border-grey-500 flex flex-col items-center justify-start z-20">
      <header className="border-b-[1px] border-grey-500 w-full py-4 flex items-center justify-center">
        <NavigationDialog />
      </header>

      <nav className="flex flex-col items-center justify-start w-full gap-4 overflow-y-auto py-4">
        {desktopLinks.map((page) => (
          <Tooltip.Provider key={page.link}>
            <Tooltip.Root delayDuration={600}>
              <Tooltip.Trigger>
                <Link
                  href={page.link}
                  onClick={(event) => handleNavigation(event)}
                  className={`w-fit p-3 rounded-lg flex items-center justify-center transition-colors text-center ${pathName === page.link ? 'bg-violet-400' : 'hover:bg-grey-500'}`}
                >
                  <span
                    className={`${pathName === page.link ? '' : 'opacity-50'}`}
                  >
                    {GetDesktopAndTabletIcon({
                      iconName: page.icon,
                      mode: 'desktop',
                    })}
                  </span>
                </Link>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  side="left"
                  className="bg-grey-500 border border-grey-400/50 p-2 rounded ml-5 font-semibold text-[1rem] z-[999]"
                >
                  {page.title}
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        ))}
      </nav>
    </aside>
  )
}
