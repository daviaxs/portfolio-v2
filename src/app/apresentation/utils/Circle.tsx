interface CircleProps {
  size: string
  dashed: boolean
}

export function Circle({ size, dashed }: CircleProps) {
  const borderStyle = dashed ? 'border-dashed' : 'border-solid'

  return (
    <div
      className={`${size} ${borderStyle} rounded-full border-[4px] border-grey-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
    />
  )
}
