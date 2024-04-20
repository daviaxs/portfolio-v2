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
}

export const navigationLinks: LinkType[] = [
  {
    link: '/app/home',
    icon: 'home',
    title: 'Página inicial',
  },
  {
    link: '/app/pages',
    icon: 'pages',
    title: 'Páginas',
  },
  {
    link: '/app/about',
    icon: 'about',
    title: 'Sobre',
  },
  {
    link: '/app/projects',
    icon: 'projects',
    title: 'Projetos',
  },
  {
    link: '/app/contact',
    icon: 'contact',
    title: 'Contato',
  },
  {
    link: '/app/settings',
    icon: 'settings',
    title: 'Configurações',
  },
]
