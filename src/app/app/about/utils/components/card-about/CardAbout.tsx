import Image from 'next/image'
import DaviAxsDesenho from '@/shared/assets/imgs/daviaxs-desenho-com-bg.png'

export function CardAbout() {
  return (
    <div className="flex flex-col w-full h-fit p-5 gap-3 rounded bg-grey-800 border border-grey-500">
      <div className="w-full h-fit flex gap-4 items-start">
        <div className="relative w-[5.5rem] h-[5.5rem] rounded-full bg-gradient-to-r from-[#0085ff] via-[#a143ff] to-[#ff8383] z-0">
          <Image
            src={DaviAxsDesenho}
            alt="avatar"
            className="absolute top-[0.25rem] left-[0.25rem] w-[5rem] h-[5rem] rounded-full outline outline-[3px] outline-grey-800 z-10"
          />
        </div>

        <div className="flex flex-col items-start gap-1">
          <h4 className="font-bold text-[2.5rem] leading-[100%]">Sobre mim</h4>
          <span className="h-[8px] w-[60%] bg-grey-500 rounded-full" />
        </div>
      </div>

      <div>
        Lorem Ipsus is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
    </div>
  )
}
