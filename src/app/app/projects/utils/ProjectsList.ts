import DxStoreImg from '@/shared/assets/imgs/dx-store.png'
import DtMoneyImg from '@/shared/assets/imgs/dt-money.png'

export const ProjectsList = [
  {
    img: DxStoreImg,
    imgAlt: 'dx-store',
    name: 'DX Store',
    description:
      'DX Store é um site de e-commerce desenvolvido com ReactJS e Prisma, oferecendo aos usuários a oportunidade de explorar e simular compras de produtos eletrônicos. Com a conveniência do login via Google, os visitantes podem experimentar o processo de compra, graças à integração do modo de teste do Stripe.',
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
      'DT Money é um site de gerenciamento de finanças pessoais com um design intuitivo. Registre suas transações com facilidade, veja entradas, saídas e o saldo total. Mantenha suas finanças sob controle de forma simples.',
    techs: ['React JS', 'TypeScript', 'Styled Components', 'Zod', 'Radix-ui'],
    deployUrl: 'https://dt-money-daviaxs.vercel.app',
    githubUrl: 'https://dt-money-daviaxs.vercel.app',
  },
]
