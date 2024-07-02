import { getTranslations } from '@/shared/utils/getTranslations'

export type GetNavigationIconProps =
  | 'home'
  | 'about'
  | 'projects'
  | 'contact'
  | 'settings'
  | 'more'

type LinkType = {
  link: string
  icon: GetNavigationIconProps
  title: string
  tabletAndMobileTitle?: string
}

const translations = getTranslations()

export const navigationLinks: LinkType[] = [
  {
    link: '/app/home',
    icon: 'home',
    title: translations.navigation.navigationLinksTitles.home,
    tabletAndMobileTitle:
      translations.navigation.navigationLinksTitles.homeTablet,
  },
  {
    link: '/app/about',
    icon: 'about',
    title: translations.navigation.navigationLinksTitles.about,
    tabletAndMobileTitle: translations.navigation.navigationLinksTitles.about,
  },
  {
    link: '/app/projects',
    icon: 'projects',
    title: translations.navigation.navigationLinksTitles.projects,
    tabletAndMobileTitle:
      translations.navigation.navigationLinksTitles.projects,
  },
  {
    link: '/app/contact',
    icon: 'contact',
    title: translations.navigation.navigationLinksTitles.contact,
    tabletAndMobileTitle: translations.navigation.navigationLinksTitles.contact,
  },
  {
    link: '/app/settings',
    icon: 'settings',
    title: translations.navigation.navigationLinksTitles.settings,
    tabletAndMobileTitle:
      translations.navigation.navigationLinksTitles.settings,
  },
]
