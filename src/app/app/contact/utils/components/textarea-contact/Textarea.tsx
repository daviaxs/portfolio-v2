interface TextareaProps extends React.HTMLAttributes<HTMLFormElement> {
  id: string
  placeholder: string
  required?: boolean
}

export function Textarea({ id, placeholder, required }: TextareaProps) {
  return (
    <textarea
      id={id}
      name={id}
      className="w-full min-h-[5rem] max-h-[12rem] text-bold bg-grey-800 text-grey-50 text-[1.2rem] placeholder:font-bold placeholder-grey-200 focus:outline-none"
      placeholder={placeholder}
      required={required}
      autoComplete="off"
    />
  )
}
