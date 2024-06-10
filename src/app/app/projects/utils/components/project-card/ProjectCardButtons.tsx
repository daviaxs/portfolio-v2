import { Button } from '@/shared/components/button'
import { Github, Rocket } from 'lucide-react'
import Link from 'next/link'

interface ProjectCardButtonsProps {
  deployUrl: string
  githubUrl: string
}

export function ProjectCardButtons({
  deployUrl,
  githubUrl,
}: ProjectCardButtonsProps) {
  return (
    <div className="flex items-start justify-start gap-4">
      <Link href={deployUrl} target="_blank">
        <Button.Root variant="small" color="violet">
          <Button.Text>Deploy</Button.Text>
          <Button.Icon>
            <Rocket />
          </Button.Icon>
        </Button.Root>
      </Link>

      <Link href={githubUrl} target="_blank">
        <Button.Root variant="small" color="violet">
          <Button.Text>Github</Button.Text>
          <Button.Icon>
            <Github />
          </Button.Icon>
        </Button.Root>
      </Link>
    </div>
  )
}
