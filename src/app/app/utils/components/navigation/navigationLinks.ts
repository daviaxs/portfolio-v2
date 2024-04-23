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

export const navigationLinks: LinkType[] = [
  {
    link: '/app/home',
    icon: 'home',
    title: 'Página inicial',
    tabletAndMobileTitle: 'Início',
  },
  {
    link: '/app/about',
    icon: 'about',
    title: 'Sobre',
    tabletAndMobileTitle: 'Sobre',
  },
  {
    link: '/app/projects',
    icon: 'projects',
    title: 'Projetos',
    tabletAndMobileTitle: 'Projetos',
  },
  {
    link: '/app/contact',
    icon: 'contact',
    title: 'Contato',
    tabletAndMobileTitle: 'Contato',
  },
  {
    link: '/app/settings',
    icon: 'settings',
    title: 'Configurações',
    tabletAndMobileTitle: 'Config',
  },
]
