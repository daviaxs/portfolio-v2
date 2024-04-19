import { WavingHand } from '@/shared/assets/svgs/WavingHand'
import DaviAxsDesenho from '@/shared/assets/imgs/daviaxs-desenho.png'
import Image from 'next/image'
import { Button } from '@/shared/components/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function ApresentationPage() {
  return (
    <main className="flex flex-col items-center justify-center py-[1rem]">
      <div>
        <div className="flex items-center justify-center">
          <p className="font-bold text-[1.5rem] text-grey-50">Hello world</p>

          <WavingHand className="w-[2.5rem]" />
        </div>

        <h1 className="font-extrabold text-[2.5rem] text-center leading-none text-grey-50 max-md:text-[1.8rem]">
          Seja bem-vindo ao meu mundo digital!
        </h1>

        <p className="text-grey-200 font-medium text-[1rem] text-center mt-2 max-md:text-[0.7rem]">
          Explore meu portfólio, descubra meus projetos e mergulhe no mundo da
          programação comigo!
        </p>
      </div>

      <Image
        src={DaviAxsDesenho}
        alt="davi-desenho"
        priority
        className="h-[25rem] w-auto aspect-auto max-sm:h-[18rem] mt-4"
      />

      <Link href="/app/home">
        <Button.Root>
          <Button.Text>Continuar</Button.Text>
          <Button.Icon>
            <ArrowRight size={25} />
          </Button.Icon>
        </Button.Root>
      </Link>
    </main>
  )
}
