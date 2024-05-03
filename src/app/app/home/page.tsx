import { WavingHand } from '@/shared/assets/svgs/WavingHand'
import DaviAXSDesenhoViolet from '@/shared/assets/imgs/daviaxs-desenho-violet.png'
import Image from 'next/image'
import { ButtonSocialMedia } from '@/shared/components/button-social-media/ButtonSocialMedia'
import { Github } from 'lucide-react'
import { Discord } from '@/shared/assets/svgs/Discord'
import { Linkedin } from '@/shared/assets/svgs/Linkedin'

export default function HomePage() {
  return (
    <div className="flex items-center justify-between w-full h-full max-lg:flex-col max-lg:justify-start max-lg:items-center max-lg:gap-8 max-lg:pt-5">
      <div className="flex flex-col items-start gap-2">
        <div className="flex gap-1 ml-4 items-center justify-center bg-grey-500 rounded-md py-2 px-4 pointer-events-none max-lg:hidden">
          <WavingHand className="h-[30px] w-[30px]" />

          <p className="text-[1.2rem] font-bold">Hello World</p>
        </div>

        <div className="flex items-center gap-2 h-[11rem] text-nowrap">
          <span className="bg-gradient-to-t w-1 rounded-full from-green-200 to-[#fff] h-full max-lg:hidden" />

          <div className="max-lg:flex max-lg:flex-col max-lg:items-center">
            <p className="font-extrabold text-[2.375rem] max-lg:text-[1.8rem] max-sm:text-[1.4rem]">
              Olá, eu sou
            </p>

            <h3 className="font-extrabold text-[4.75rem] leading-[100%] max-lg:text-[4.2rem] max-sm:text-[3.3rem]">
              Davi Alves
            </h3>

            <p className="font-extrabold text-[2.375rem] text-green-200 decoration-green-200 decoration-2 underline max-lg:text-[1.8rem] max-sm:text-[1.4rem]">
              Desenvolvedor Fullstack
            </p>
          </div>
        </div>

        <div className="w-full flex items-center justify-center gap-4">
          <ButtonSocialMedia href="https://github.com/daviaxs">
            <Github size={31} />
          </ButtonSocialMedia>

          <ButtonSocialMedia href="https://discord.com/users/852904928166281248">
            <Discord />
          </ButtonSocialMedia>

          <ButtonSocialMedia href="https://www.linkedin.com/in/daviaxs/">
            <Linkedin />
          </ButtonSocialMedia>
        </div>
      </div>

      <Image
        src={DaviAXSDesenhoViolet}
        alt="desenho"
        className="lg:h-[75%] object-contain pointer-events-none max-lg:h-fit w-[30rem]"
      />

      <span className="lg:hidden">ㅤ</span>
    </div>
  )
}
