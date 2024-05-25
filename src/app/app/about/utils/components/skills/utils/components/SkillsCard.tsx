import { TypeScript } from '@/shared/assets/svgs/TypeScript'
import { CodeXml } from 'lucide-react'
import './SkillsCard.style.css'

export function SkillsCard() {
  return (
    <div
      className={`relative w-full h-[40rem] rounded from-[#0085ff] via-[#a143ff] via-36% to-[#ff8383] bg-gradient-to-br z-0`}
    >
      <div className="absolute top-[0.10rem] left-[0.10rem] right-[0.10rem] bottom-[0.10rem] bg-grey-800 rounded z-10 flex flex-col items-center justify-start gap-6 p-4">
        <div className="flex flex-col items-center justify-center gap-2">
          <CodeXml color="#55EE97" size={60} />
          <h4 className="font-bold text-[1.5rem] leading-[100%]">
            Programação
          </h4>
        </div>

        <span className="h-[2px] w-full bg-grey-600 rounded-full" />

        <div className="flex flex-col gap-2 items-center justify-start w-full TechsScroll pr-4">
          <div className="bg-grey-600 w-full p-4 rounded-md flex items-center justify-start gap-4">
            <TypeScript />

            <p className="font-bold text-[1.2rem]">TypeScript</p>
          </div>
        </div>
      </div>
    </div>
  )
}
