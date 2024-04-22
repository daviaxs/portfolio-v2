export type GetNavigationIconProps =
  | 'home'
  | 'pages'
  | 'about'
  | 'projects'
  | 'contact'
  | 'settings'

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
    link: '/app/pages',
    icon: 'pages',
    title: 'Páginas',
    tabletAndMobileTitle: 'Páginas',
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
