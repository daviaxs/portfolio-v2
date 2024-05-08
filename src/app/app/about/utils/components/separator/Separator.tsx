import { CircleArrowDown } from 'lucide-react'

export function Separator() {
  return (
    <div className="w-full flex items-center justify-center gap-2">
      <span className="h-[2px] w-full bg-grey-600 rounded-full" />
      <CircleArrowDown size={35} color="#1C1C1C" />
      <span className="h-[2px] w-full bg-grey-600 rounded-full" />
    </div>
  )
}
