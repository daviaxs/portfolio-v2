import { Github, Mail, MessageCircleMore, Send, User } from 'lucide-react'
import { InputContact } from './utils/components/input-contact'
import { TextareaContact } from './utils/components/textarea-contact'
import { Button } from '../../../shared/components/button'
import { ButtonSocialMedia } from '@/shared/components/button-social-media/ButtonSocialMedia'
import { Discord } from '@/shared/assets/svgs/Discord'
import { Linkedin } from '@/shared/assets/svgs/Linkedin'
import { Title } from '@/app/utils/Title'

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-start py-6 gap-5 px-20 max-md:px-4">
      <div>
        <Title className="text-center">Formulário de contato</Title>
        <p className="font-bold text-grey-100 text-[1.2rem] text-center max-md:text-[1rem] max-sm:text-[0.8rem]">
          Se você tem um projeto interessante em mente ou precisa de ajuda em um
          projeto já existente, entre em contato comigo agora mesmo!
        </p>
      </div>

      <form
        className="flex flex-col w-full items-center justify-start gap-[1.5rem]"
        action="https://formsubmit.co/cadwvk@gmail.com"
        method="POST"
      >
        <input
          type="hidden"
          name="_next"
          value="http://localhost:3000/form-sent"
        />

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

        <div className="flex items-center justify-start w-full gap-6 max-lg:flex-col max-lg:gap-3">
          <Button.Root type="submit">
            <Button.Text>Enviar</Button.Text>
            <Button.Icon color="blue">
              <Send size={25} />
            </Button.Icon>
          </Button.Root>

          <span className="font-extrabold text-[1.2rem] text-grey-500">OU</span>

          <div className="flex items-center justify-center gap-3">
            <ButtonSocialMedia
              href="https://github.com/daviaxs"
              variant="secondary"
            >
              <Github size={30} />
            </ButtonSocialMedia>

            <ButtonSocialMedia
              href="https://discord.com/users/852904928166281248"
              variant="secondary"
            >
              <Discord />
            </ButtonSocialMedia>

            <ButtonSocialMedia
              href="https://www.linkedin.com/in/daviaxs/"
              variant="secondary"
            >
              <Linkedin />
            </ButtonSocialMedia>
          </div>
        </div>
      </form>
    </div>
  )
}
