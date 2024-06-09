import Image from 'next/image'
import ImgNotLoad from './img-not-load-base.png'
import { Button } from '@/shared/components/button'
import { Github, Rocket } from 'lucide-react'

export function ProjectCard() {
  return (
    <div className="flex items-start justify-start px-4 py-3 gap-4 w-full h-fit bg-grey-900 border border-grey-500 rounded-lg">
      <Image
        src={ImgNotLoad}
        alt=""
        className="w-[10rem] h-[10rem] object-cover rounded-md"
      />

      <div className="flex flex-col gap-2 items-start justify-start">
        <h2 className="font-extrabold text-[1.8rem] leading-[100%]">
          SpiderLink
        </h2>

        <p className="text-grey-100 font-semibold leading-tight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          quaerat numquam neque? Error sit, soluta voluptate corporis molestiae
          nihil ullam reprehenderit vel vitae deleniti, magnam, aliquam tenetur
          sapiente doloremque consequatur. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Neque debitis doloribus architecto
          laboriosam voluptatum eius nemo quibusdam molestiae maiores delectus
          repellat obcaecati quis, commodi vel deserunt exercitationem animi,
          quae earum!
        </p>

        <div className="flex flex-wrap gap-2">
          <div className="flex items-center justify-center gap-1 bg-grey-500 py-1 px-2 rounded-md">
            <div className="w-2 h-2 rounded-full bg-violet-400" />

            <p className="font-bold">ReactJS</p>
          </div>
        </div>

        <div className="flex flex-wrap items-start justify-start gap-4">
          <Button.Root variant="small" color="violet">
            <Button.Text>Deploy</Button.Text>
            <Button.Icon>
              <Rocket />
            </Button.Icon>
          </Button.Root>

          <Button.Root variant="small" color="violet">
            <Button.Text>Github</Button.Text>
            <Button.Icon>
              <Github />
            </Button.Icon>
          </Button.Root>
        </div>
      </div>
    </div>
  )
}
