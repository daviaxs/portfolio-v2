export function ExperienceCard() {
  return (
    <div className="flex items-start justify-start gap-2 bg-grey-800 border border-grey-500 w-full rounded px-4 py-2">
      <div>
        <svg
          width="70"
          height="70"
          viewBox="0 0 70 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 4.2C0 1.8804 1.8804 0 4.2 0H65.8C68.1196 0 70 1.8804 70 4.2V65.8C70 68.1196 68.1196 70 65.8 70H4.2C1.8804 70 0 68.1196 0 65.8V4.2Z"
            fill="url(#paint0_linear_604_95)"
          />
          <path
            d="M9.1 19.6C9.1 17.2804 10.9804 15.4 13.3 15.4H36.4C38.7196 15.4 40.6 17.2804 40.6 19.6V70H9.1V19.6Z"
            fill="#9D70F1"
          />
          <path
            d="M28 32.2C28 29.8804 29.8804 28 32.2 28H48.3C50.6196 28 52.5 29.8804 52.5 32.2V70H28V32.2Z"
            fill="#0B011A"
          />
          <path
            d="M44.1 44.1C44.1 41.7804 45.9804 39.9 48.3 39.9H57.4C59.7196 39.9 61.6 41.7804 61.6 44.1V70H44.1V44.1Z"
            fill="#6D2AEA"
          />
          <defs>
            <linearGradient
              id="paint0_linear_604_95"
              x1="8.88834"
              y1="-24.61"
              x2="91.8205"
              y2="22.4738"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0085FF" />
              <stop offset="0.358512" stopColor="#A143FF" />
              <stop offset="1" stopColor="#FF8383" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="flex flex-col items-start justify-start gap-5">
        <div>
          <h2 className="font-extrabold text-[1.5rem] leading-[100%]">Cargo</h2>

          <div className="flex gap-2 items-center justify-start font-medium text-[0.8rem]">
            <p>Empresa</p>
            <span>·</span>
            <p>Tipo de Emprego</p>
          </div>

          <div className="flex gap-1 items-center justify-start font-medium text-[0.8rem] text-grey-100">
            <p>ago de 2021</p>
            <span>-</span>
            <p>o momento</p>
          </div>
        </div>

        <div className="leading-tight font-normal text-[0.8rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          fugiat sint tenetur amet eligendi inventore tempora ducimus sunt
          dolor, distinctio, enim delectus minima debitis earum pariatur vero
          expedita velit voluptatum.
        </div>

        <div className="flex items-start justify-start gap-2">
          <div className="bg-grey-500 px-2 py-1 rounded">
            <p className="font-extrabold">React JS</p>
          </div>
        </div>
      </div>
    </div>
  )
}
