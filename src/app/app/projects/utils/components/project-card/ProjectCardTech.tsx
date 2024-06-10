interface ProjectCardTechProps {
  name: string
}

export function ProjectCardTech({ name }: ProjectCardTechProps) {
  return (
    <div className="flex items-center justify-center gap-1 bg-grey-500 py-1 px-2 rounded-md">
      <div className="w-2 h-2 rounded-full bg-violet-400" />

      <p className="font-bold">{name}</p>
    </div>
  )
}
