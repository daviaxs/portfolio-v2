import * as Dialog from '@radix-ui/react-dialog'
import { AlignJustify, X } from 'lucide-react'
import './moreLinksDialog.style.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { GetDesktopAndTabletIcon } from '../../GetDesktopAndTabletIcon'
import { navigationLinks } from '../../../navigationLinks'

const moreLinks = navigationLinks.filter(
  (page) =>
    page.link === '/app/home' ||
    page.link === '/app/contact' ||
    page.link === '/app/settings',
)

export function MoreLinksDialog() {
  const pathName = usePathname()

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="w-[35px] rounded-lg cursor-pointer flex flex-col items-center justify-center transition-colors text-center outline-none gap-1">
          <AlignJustify size={25} />

          <p className="font-medium text-sm opacity-70">Mais</p>
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="MoreLinksDialogOverlay" />

        <Dialog.Content className="MoreLinksDialogContent">
          <header className="w-full flex items-center justify-between p-4 border-grey-500 border-b-[1px] border-t-[1px]">
            <p className="font-extrabold text-[1.2rem]">Mais</p>

            <Dialog.Close asChild>
              <div className="hover:bg-grey-500 p-2 rounded-full cursor-pointer transition-colors w-fit">
                <X size={25} />
              </div>
            </Dialog.Close>
          </header>

          <nav className="flex flex-col items-center justify-start w-full h-full gap-4 py-4 px-6 overflow-y-hidden">
            {moreLinks.map((page) => (
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
