interface TechCardTextsProps {
  title: string
  description: string
}

export function TechCardTexts({ description, title }: TechCardTextsProps) {
  return (
    <div className="flex flex-col items-start justify-start gap-1 h-full">
      <h4 className="font-extrabold text-[1.5rem] leading-[100%]">{title}</h4>

      <p className="leading-[110%] font-semibold text-[0.8rem]">
        {description}
      </p>
    </div>
  )
}
