interface JobTagProps {
  name: string
}

export function JobTag({ name }: JobTagProps) {
  return (
    <div className="bg-grey-500 px-2 py-1 rounded">
      <p className="font-extrabold">{name}</p>
    </div>
  )
}
