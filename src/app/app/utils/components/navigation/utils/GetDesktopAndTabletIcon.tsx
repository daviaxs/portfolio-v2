import { Chat } from '@/shared/assets/svgs/Chat'
import { Star } from '@/shared/assets/svgs/Star'
import { LayoutGrid, ScrollText, Settings2, UserRound } from 'lucide-react'
import { GetNavigationIconProps } from '../navigationLinks'
import { Star2 } from '@/shared/assets/svgs/Star2'

interface GetDesktopAndTabletIconProps {
  iconName: GetNavigationIconProps
  mode?: 'desktop' | 'tablet'
}

export function GetDesktopAndTabletIcon({
  iconName,
  mode,
}: GetDesktopAndTabletIconProps) {
  const icons = {
    home: <UserRound size={25} />,
    pages: <LayoutGrid size={25} />,
    about: <ScrollText size={25} />,
    projects: mode === 'desktop' ? <Star /> : <Star2 />,
    contact: <Chat />,
    settings: <Settings2 size={25} />,
  }

  return icons[iconName]
}
