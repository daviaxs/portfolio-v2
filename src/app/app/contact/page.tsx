'use client'

import { Github, Mail, MessageCircleMore, Send, User } from 'lucide-react'
import { InputContact } from './utils/components/input-contact'
import { TextareaContact } from './utils/components/textarea-contact'
import { Button } from '../../../shared/components/button'
import { ButtonSocialMedia } from '@/shared/components/button-social-media/ButtonSocialMedia'
import { Discord } from '@/shared/assets/svgs/Discord'
import { Linkedin } from '@/shared/assets/svgs/Linkedin'
import { Title } from '@/app/utils/Title'
import { LanguageContext } from '@/shared/context/LanguageContext'
import { useContext } from 'react'

export default function ContactPage() {
  const { translations } = useContext(LanguageContext)

  return (
    <div className="flex flex-col items-center justify-start py-6 gap-5 px-20 max-md:px-4">
      <div>
        <Title className="text-center">{translations.contactPage.title}</Title>
        <p className="font-bold text-grey-100 text-[1.2rem] text-center max-md:text-[1rem] max-sm:text-[0.8rem]">
          {translations.contactPage.description}
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
          value={`${process.env.WEB_SITE_URL}/form-sent`}
        />

        <InputContact.Root>
          <User size={30} className="text-grey-200" />

          <InputContact.Input
            id="name"
            placeholder={translations.contactPage.form.inputsPlaceholder.name}
            type="text"
            required
          />
        </InputContact.Root>

        <InputContact.Root>
          <Mail size={30} className="text-grey-200" />

          <InputContact.Input
            id="email"
            placeholder={translations.contactPage.form.inputsPlaceholder.email}
            type="email"
            required
          />
        </InputContact.Root>

        <TextareaContact.Root className="justify-start items-start">
          <MessageCircleMore size={30} className="text-grey-200" />

          <TextareaContact.Textarea
            id="message"
            placeholder={
              translations.contactPage.form.inputsPlaceholder.message
            }
            required
          />
        </TextareaContact.Root>

        <div className="flex items-center justify-start w-full gap-6 max-lg:flex-col max-lg:gap-3">
          <Button.Root type="submit">
            <Button.Text>{translations.contactPage.form.button}</Button.Text>
            <Button.Icon color="blue">
              <Send size={25} />
            </Button.Icon>
          </Button.Root>

          <span className="font-extrabold text-[1.2rem] text-grey-500">
            {translations.contactPage.form.or}
          </span>

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
