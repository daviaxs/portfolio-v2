import { Button } from '@/shared/components/button'
import { Title } from '../utils/Title'
import { Undo2 } from 'lucide-react'
import Link from 'next/link'
import { AnimatePage } from '../app/animatePage'

export default function FormSent() {
  return (
    <AnimatePage>
      <main className="flex flex-col items-center justify-center gap-4 w-full h-full">
        <div>
          <Title className="text-center">Formulario enviado!</Title>

          <p className="font-bold text-[1.2rem] text-center text-grey-100 max-sm:text-[1rem]">
            Seu formulário foi entregue com sucesso! <br />
            Aguarde minha resposta em breve.
          </p>
        </div>

        <Link href="http://localhost:3000/app/home">
          <Button.Root>
            <Button.Text>Voltar</Button.Text>
            <Button.Icon>
              <Undo2 color="#fff" size={25} />
            </Button.Icon>
          </Button.Root>
        </Link>
      </main>
    </AnimatePage>
  )
}
