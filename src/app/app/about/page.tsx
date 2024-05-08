import { CardAbout } from './utils/components/card-about/CardAbout'
import { Separator } from './utils/components/separator/Separator'

export default function AboutPage() {
  return (
    <div className="flex flex-col items-start justify-center py-6 gap-5">
      <CardAbout />

      <Separator />
    </div>
  )
}
