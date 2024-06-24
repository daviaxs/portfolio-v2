import { InputHTMLAttributes } from 'react'

interface InputProps extends React.HTMLAttributes<HTMLFormElement> {
  type: InputHTMLAttributes<HTMLInputElement>['type']
  id: string
  placeholder: string
  required?: boolean
}

export function Input({ id, placeholder, type, required }: InputProps) {
  return (
    <input
      id={id}
      name={id}
      type={type}
      className="w-full text-bold text-grey-50 text-[1.2rem] placeholder:font-bold placeholder-grey-200"
      placeholder={placeholder}
      required={required}
      autoComplete="off"
    />
  )
}
