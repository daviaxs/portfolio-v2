import { Chat } from '@/shared/assets/svgs/Chat'
import { Star } from '@/shared/assets/svgs/Star'
import { ScrollText, Settings2, UserRound } from 'lucide-react'
import { GetNavigationIconProps } from '../navigationLinks'

export function GetDesktopIcon(iconName: GetNavigationIconProps) {
  const icons = {
    home: <UserRound size={25} />,
    pages: null,
    about: <ScrollText size={25} />,
    projects: <Star />,
    contact: <Chat />,
    settings: <Settings2 size={25} />,
  }

  return icons[iconName]
}
