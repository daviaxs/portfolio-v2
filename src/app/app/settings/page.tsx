import { Title } from '@/app/utils/Title'
import { Brazil } from '@/shared/assets/svgs/Brazil'
import { UnitedStates } from '@/shared/assets/svgs/UnitedStates'
import { Globe } from 'lucide-react'

export default function Settings() {
  return (
    <div className="flex flex-col gap-6 py-4 items-start justify-start w-full h-fit">
      <Title>Configurações</Title>

      <div className="flex flex-col justify-start items-start rounded-md w-full h-fit p-[1.2rem] gap-6 bg-grey-800">
        <div className="flex items-center justify-center gap-4">
          <Globe size={40} strokeWidth={1} />
          <h2 className="font-bold text-[2rem]">Idioma</h2>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <button className="flex items-center justify-between bg-grey-700 rounded-md p-4 cursor-pointer">
            <h4 className="font-bold text-[1.2rem]">Portugues</h4>

            <div className="flex items-center justify-center gap-2">
              <span className="font-bold text-grey-200">PT-BR</span>
              <Brazil />
            </div>
          </button>

          <button className="flex items-center justify-between bg-grey-700 rounded-md p-4 cursor-pointer">
            <h4 className="font-bold text-[1.2rem]">Inglês</h4>

            <div className="flex items-center justify-center gap-2">
              <span className="font-bold text-grey-200">EN</span>
              <UnitedStates />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
