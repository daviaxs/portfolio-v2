import React, { HTMLAttributes, ReactElement, ReactNode } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'small' | 'normal'
  color?: 'blue' | 'violet'
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export function ButtonRoot({
  variant = 'normal',
  color = 'blue',
  disabled = false,
  type = 'button',
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
    <button
      className="appearance-none disabled:opacity-50 disabled:cursor-not-allowed"
      type={type}
      disabled={disabled}
    >
      <div
        className={`flex items-center justify-center border-b-[2px] rounded-lg gap-4 transition-colors
        ${color === 'blue' && `bg-blue-600 hover:bg-blue-700 border-blue-800`}
        ${color === 'violet' && `bg-violet-600 hover:bg-violet-700 border-violet-700`}
        ${variant === 'small' && `px-3 py-1 h-[3rem]`}
        ${variant === 'normal' && `px-6 py-2 h-[4rem]`}
      `}
      >
        {childrenWithProps}
      </div>
    </button>
  )
}
