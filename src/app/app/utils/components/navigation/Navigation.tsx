'use client'

import { NavigationMobile } from './NavigationMobile'
import { NavigationDesktop } from './NavigationDesktop'
import { NavigationTablet } from './NavigationTablet'
import { useWindowWidth } from '@/shared/hooks/useWindowWidth'

const navigationComponents = {
  mobile: NavigationMobile,
  desktop: NavigationDesktop,
  tablet: NavigationTablet,
}

export function Navigation() {
  const { width } = useWindowWidth()
  const { mobile, desktop, tablet } = navigationComponents

  if (width <= 450) {
    return mobile()
  }

  if (width <= 976) {
    return tablet()
  }

  return desktop()
}
