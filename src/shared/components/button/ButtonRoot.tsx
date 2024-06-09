import React, { HTMLAttributes, ReactElement, ReactNode } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'small' | 'normal'
  color?: 'blue' | 'violet'
}

export function ButtonRoot({
  variant = 'normal',
  color = 'blue',
  children,
}: ButtonProps) {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const typeChild = child as ReactElement<ButtonProps>

      return React.cloneElement(typeChild, { variant, color })
    }

    return child
  })

  return (
    <button className="appearance-none">
      <div
        className={`flex items-center justify-center border-b-[2px] rounded-lg gap-4 transition-colors
        ${color === 'blue' ? 'bg-blue-600' : 'bg-violet-600'}
        ${color === 'blue' ? 'hover:bg-blue-700' : 'hover:bg-violet-700'}
        ${color === 'blue' ? 'border-blue-800' : 'border-violet-700'}
        ${variant === 'small' ? 'px-3' : 'px-6'}
        ${variant === 'small' ? 'py-1' : 'py-2'}
      `}
      >
        {childrenWithProps}
      </div>
    </button>
  )
}
