interface TechCardProps {
  type: 'primary' | 'secondary'
}

export function TechCard({ type }: TechCardProps) {
  return (
    <div
      className={`relative w-full h-[8rem] rounded from-[#0085ff] via-[#77b2dc] via-63% to-[#ffffff00] z-0 
        ${type === 'primary' ? 'bg-gradient-to-br' : 'bg-gradient-to-tl'}
      `}
    >
      <div className="absolute top-[0.10rem] left-[0.10rem] right-[0.10rem] bottom-[0.10rem] bg-grey-800 rounded z-10 flex items-center justify-start gap-6 p-4">
        <div className="relative min-w-[4rem] min-h-[4rem]">
          <div className="bg-blue-400 w-full h-full absolute blur-md" />

          <div className="absolute w-full h-full bg-grey-800 rounded-3xl flex items-center justify-center">
            img
          </div>
        </div>

        <div className="flex flex-col items-start justify-start gap-1 h-full">
          <h4 className="font-extrabold text-[1.5rem] leading-[100%]">
            TypeScript
          </h4>

          <p className="leading-[110%] font-semibold text-[0.8rem]">
            Lorem Ipsumis simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
    </div>
  )
}
