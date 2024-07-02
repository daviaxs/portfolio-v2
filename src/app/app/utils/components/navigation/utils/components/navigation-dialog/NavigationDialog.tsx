import * as Dialog from '@radix-ui/react-dialog'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import './navigationDialog.style.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { GetDesktopAndTabletIcon } from '../../GetDesktopAndTabletIcon'
import { navigationLinks } from '../../../navigationLinks'
import { LanguageContext } from '@/shared/context/LanguageContext'
import { useContext } from 'react'

const desktopLinks = navigationLinks.filter((link) => link.link !== '/app/more')

export function NavigationDialog() {
  const pathName = usePathname()
  const { translations } = useContext(LanguageContext)

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="hover:bg-grey-500 p-2 rounded-full cursor-pointer transition-colors">
          <ArrowRight size={25} />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />

        <Dialog.Content className="DialogContent border-grey-500 border-r-[1px]">
          <header className="w-full flex items-center justify-between p-4 border-grey-500 border-b-[1px]">
            <p className="font-extrabold text-[1.2rem]">
              {translations.navigation.navigationDialog.explore}
            </p>

            <Dialog.Close asChild>
              <div className="hover:bg-grey-500 p-2 rounded-full cursor-pointer transition-colors w-fit">
                <ArrowLeft size={25} />
              </div>
            </Dialog.Close>
          </header>

          <nav className="flex flex-col items-center justify-start w-full gap-4 py-4 px-6 overflow-y-auto">
            {desktopLinks.map((page) => (
              <Dialog.Close asChild key={page.link}>
                <Link
                  href={page.link}
                  className={`w-full p-3 rounded-lg flex items-center justify-start gap-4 transition-colors text-center ${pathName === page.link ? 'bg-violet-400' : 'hover:bg-grey-500'}`}
                >
                  <span
                    className={`${pathName === page.link ? '' : 'opacity-50'}`}
                  >
                    {GetDesktopAndTabletIcon({
                      iconName: page.icon,
                      mode: 'desktop',
                    })}
                  </span>

                  <p className="font-extrabold text-[1.1rem]">{page.title}</p>
                </Link>
              </Dialog.Close>
            ))}
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
