import { ExperienceContent } from './ExperienceContent'
import { ExperienceImg } from './ExperienceImg'
import { ExperienceCardRoot } from './ExperienceRootCard'
import { JobDescription } from './job-infos/JobDescription'
import { JobDetails } from './job-infos/JobDetails'
import { JobDetailsTitle } from './job-infos/JobDetailsTitle'
import { JobTag } from './job-infos/JobTag'
import { JobTags } from './job-infos/JobTags'

export const ExperienceCard = {
  Root: ExperienceCardRoot,
  Content: ExperienceContent,
  Img: ExperienceImg,
  Job: {
    JobDetails,
    JobDetailsTitle,
    JobDescription,
    JobTags,
    JobTag,
  },
}
