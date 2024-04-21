import * as Dialog from '@radix-ui/react-dialog'
import { ArrowRight, X } from 'lucide-react'
import './navigationDialog.style.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { GetDesktopIcon } from '../../GetDesktopIcon'
import { navigationLinks } from '../../../navigationLinks'

const desktopLinks = navigationLinks.filter(
  (link) => link.link !== '/app/pages',
)

export function NavigationDialog() {
  const pathName = usePathname()

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="hover:bg-grey-500 p-2 rounded-full cursor-pointer transition-colors">
          <ArrowRight size={25} />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />

        <Dialog.Content className="DialogContent">
          <header className="w-full flex items-center justify-between p-4 border-grey-500 border-b-[1px]">
            <p className="font-extrabold text-[1.2rem]">Explorar</p>

            <Dialog.Close asChild>
              <div className="hover:bg-grey-500 p-2 rounded-full cursor-pointer transition-colors w-fit">
                <X size={25} />
              </div>
            </Dialog.Close>
          </header>

          <nav className="flex flex-col items-center justify-center w-full gap-4 py-4 px-6">
            {desktopLinks.map((link) => (
              <Link
                key={link.link}
                href={link.link}
                className={`w-full p-3 rounded-lg flex items-center justify-start gap-4 transition-colors text-center ${pathName === link.link ? 'bg-violet-400' : 'hover:bg-grey-500'}`}
              >
                <span
                  className={`${pathName === link.link ? '' : 'opacity-50'}`}
                >
                  {GetDesktopIcon(link.icon)}
                </span>

                <p className="font-extrabold text-[1.1rem]">{link.title}</p>
              </Link>
            ))}
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
