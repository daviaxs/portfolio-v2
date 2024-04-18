import React from 'react'
import './LoadingProgressBar.style.css'

interface LoadingProgressBarProps
  extends React.HTMLAttributes<HTMLSpanElement> {}

export function LoadingProgressBar({ ...props }: LoadingProgressBarProps) {
  return <span className="loader" {...props}></span>
}
