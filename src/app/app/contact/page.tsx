import { Mail, MessageCircleMore, User } from 'lucide-react'
import { Title } from '../utils/components/Title'
import { InputContact } from './utils/components/input-contact'
import { TextareaContact } from './utils/components/textarea-contact'

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-start py-6 gap-5 px-20">
      <div>
        <Title className="text-center">Formulário de contato</Title>
        <p className="font-bold text-grey-100 text-[1.2rem] text-center">
          Se você tem um projeto interessante em mente ou precisa de ajuda em um
          projeto já existente, entre em contato comigo agora mesmo!
        </p>
      </div>

      <form className="flex flex-col w-full items-center justify-start gap-[1.5rem]">
        <InputContact.Root>
          <User size={30} className="text-grey-200" />

          <InputContact.Input
            id="name"
            placeholder="Nome"
            type="text"
            required
          />
        </InputContact.Root>

        <InputContact.Root>
          <Mail size={30} className="text-grey-200" />

          <InputContact.Input
            id="email"
            placeholder="Email"
            type="email"
            required
          />
        </InputContact.Root>

        <TextareaContact.Root className="justify-start items-start">
          <MessageCircleMore size={30} className="text-grey-200" />

          <TextareaContact.Textarea
            id="message"
            placeholder="Digite sua mensagem..."
            required
          />
        </TextareaContact.Root>
      </form>
    </div>
  )
}
