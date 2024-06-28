import Image from 'next/image'
import DaviAxsDesenho from '@/shared/assets/imgs/daviaxs-desenho-com-bg.png'

export function CardAbout() {
  function getYearsOld() {
    const birthDate = new Date('2006-01-14')
    const currentDate = new Date()
    const diff = currentDate.getTime() - birthDate.getTime()
    const ageDate = new Date(diff)

    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }

  return (
    <div className="flex flex-col w-full h-fit p-5 gap-3 sm:rounded bg-grey-800 border border-grey-500">
      <div className="w-full h-fit flex gap-4 items-start">
        <div className="relative min-w-[5.5rem] min-h-[5.5rem]">
          <div className="absolute min-w-[5.5rem] min-h-[5.5rem] rounded-full bg-gradient-to-r from-[#0085ff] via-[#a143ff] to-[#ff8383] z-0 animate-pulse" />

          <Image
            src={DaviAxsDesenho}
            alt="avatar"
            className="absolute top-[0.25rem] left-[0.25rem] w-[5rem] h-[5rem] rounded-full outline outline-[3px] outline-grey-800 z-10"
          />
        </div>

        <div className="flex flex-col items-start gap-1 mt-1">
          <h4 className="font-bold text-[2.5rem] leading-[100%] max-sm:text-[1.8rem]">
            Sobre mim
          </h4>
          <span className="h-[8px] w-[60%] bg-grey-500 rounded-full" />
        </div>
      </div>

      <p>
        Desenvolvedor fullstack com 3 anos de experiência em projetos próprios,
        meu nome é Davi, um jovem de {getYearsOld()} anos, e sou movido pela
        paixão de criar experiências incríveis através da programação.
        <br />
        <br />
        Conhecimento em React JS, Node, e TypeScript, com experiência na criação
        de aplicações escaláveis, sempre focando no desempenho e na usabilidade
        para o usuário. Minha base sólida em desenvolvimento web facilita a
        adaptação e aprendizado de novas linguagens e ferramentas, permitindo-me
        oferecer soluções eficientes e inovadoras.
        <br />
        <br />
        Comprometido com a excelência, busco sempre aprimorar minhas habilidades
        e estar atualizado com as tendências tecnológicas para entregar produtos
        de alta qualidade.
      </p>
    </div>
  )
}
