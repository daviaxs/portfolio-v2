'use client'

import { navigationLinks } from './navigationLinks'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as Tooltip from '@radix-ui/react-tooltip'
import { NavigationDialog } from './utils/components/navigation-dialog/NavigationDialog'
import { GetDesktopIcon } from './utils/GetDesktopIcon'

const desktopLinks = navigationLinks.filter(
  (link) => link.link !== '/app/pages',
)

export function NavigationDesktop() {
  const pathName = usePathname()

  return (
    <aside className="h-full w-[5rem] bg-grey-900 border-r-[1px] border-grey-500 flex flex-col items-center justify-start">
      <header className="border-b-[1px] border-grey-500 w-full py-4 flex items-center justify-center mb-4">
        <NavigationDialog />
      </header>

      <nav className="flex flex-col items-center justify-center w-full gap-4">
        {desktopLinks.map((link) => (
          <Tooltip.Provider key={link.link}>
            <Tooltip.Root delayDuration={400}>
              <Tooltip.Trigger>
                <Link
                  href={link.link}
                  className={`w-fit p-3 rounded-lg flex items-center justify-center transition-colors text-center ${pathName === link.link ? 'bg-violet-400' : 'hover:bg-grey-500'}`}
                >
                  <span
                    className={`${pathName === link.link ? '' : 'opacity-50'}`}
                  >
                    {GetDesktopIcon(link.icon)}
                  </span>
                </Link>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  side="left"
                  className="bg-grey-500 p-2 rounded ml-2 font-semibold text-[1rem]"
                >
                  {link.title}
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        ))}
      </nav>
    </aside>
  )
}
