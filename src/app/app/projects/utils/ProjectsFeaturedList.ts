import SpiderLinkImg from '@/shared/assets/imgs/spiderlink-banner.png'
import { getTranslations } from '@/shared/utils/getTranslations'

const translations = getTranslations()

export const ProjectsFeaturedList = [
  {
    img: SpiderLinkImg,
    imgAlt: '',

    name: 'SpiderLink',
    description:
      translations.projectsPage.projects.projectsFeatured.spiderLink
        .description,

    techs: [
      'React JS',
      'NextJS 14',
      'TypeScript',
      'Node',
      'Styled Components',
      'Radix UI',
      'Fastify',
      'Cloudinary',
      'Prisma',
      'Zod',
    ],

    deployUrl: 'https://www.spider-link.pro/',
    githubUrl: '',
  },
]
