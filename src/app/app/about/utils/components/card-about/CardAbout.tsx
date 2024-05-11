import Image from 'next/image'
import DaviAxsDesenho from '@/shared/assets/imgs/daviaxs-desenho-com-bg.png'

export function CardAbout() {
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
        Olá, seja bem-vindo ao meu mundo digital! Me chamo Davi e tenho a paixão
        de criar experiências incríveis para as pessoas através da programação.
        Sou um jovem de 18 anos, atualmente desenvolvedor fullstack, porém com
        foco no front-end.
        <br />
        <br />
        Sou movido por desafios, e é isso que me motiva a buscar sempre o
        próximo nível em minhas aplicações. Aperfeiçoar cada detalhe, criar
        interfaces intuitivas e dinâmicas, além de proporcionar uma experiência
        única ao usuário, são alguns dos meus objetivos.
        <br />
        <br />
        Estou sempre em busca de novos conhecimentos e tecnologias que possam
        aprimorar minhas habilidades e trazer ainda mais qualidade às minhas
        aplicações. Busco constantemente me atualizar em relação às tendências
        do mercado e estar sempre um passo à frente.
        <br />
        <br />
        Fique à vontade para navegar pelo meu portfólio e conferir alguns dos
        meus projetos. E se precisar de ajuda para criar algo inovador e
        desafiador, entre em contato comigo agora mesmo!
      </p>
    </div>
  )
}
