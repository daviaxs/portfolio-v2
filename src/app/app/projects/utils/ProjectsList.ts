import DxStoreImg from '@/shared/assets/imgs/dx-store.png'
import DtMoneyImg from '@/shared/assets/imgs/dt-money.png'

import { getTranslations } from '@/shared/utils/getTranslations'

const translations = getTranslations()

export const ProjectsList = [
  {
    img: DxStoreImg,
    imgAlt: 'dx-store',
    name: 'DX Store',
    description:
      translations.projectsPage.projects.projects.dxStore.description,

    techs: [
      'React JS',
      'Next-auth',
      'TypeScript',
      'Prisma',
      'Tailwind CSS',
      'Stripe',
    ],
    deployUrl: 'https://dx-store.vercel.app',
    githubUrl: 'https://github.com/daviaxs/DX-Store',
  },

  {
    img: DtMoneyImg,
    imgAlt: 'dt-money',
    name: 'DT Money',
    description:
      translations.projectsPage.projects.projects.dtMoney.description,

    techs: ['React JS', 'TypeScript', 'Styled Components', 'Zod', 'Radix-ui'],
    deployUrl: 'https://dt-money-daviaxs.vercel.app',
    githubUrl: 'https://dt-money-daviaxs.vercel.app',
  },
]
