export function Brazil(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={42}
      height={31}
      viewBox="0 0 42 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_719_186)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 .5h42v30H0V.5z"
          fill="url(#paint0_linear_719_186)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 .5h42v30H0V.5z"
          fill="url(#paint1_linear_719_186)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.843 16.046c-.466-.302-.456-.796 0-1.091l15.314-9.91c.465-.3 1.23-.295 1.686 0l15.314 9.91c.465.3.456.795 0 1.09l-15.314 9.91c-.466.3-1.23.295-1.686 0l-15.314-9.91z"
          fill="#FDD216"
        />
        <path
          d="M21 22.5a7 7 0 100-14 7 7 0 000 14z"
          fill="url(#paint2_linear_719_186)"
        />
        <mask
          id="a"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={14}
          y={8}
          width={14}
          height={15}
        >
          <path d="M21 22.5a7 7 0 100-14 7 7 0 000 14z" fill="#fff" />
        </mask>
        <g mask="url(#a)">
          <path
            d="M13.8 14.447c.53-.43 2.925-.08 7.069 1.026 2.948.786 6.345 2.523 7.123 3.483l.63.777 1.553-1.259-.629-.777c-1.1-1.358-4.842-3.271-8.162-4.157-5.172-1.38-7.516-1.721-8.843-.647l-.777.63 1.258 1.554.777-.63z"
            fill="#fff"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_719_186"
          x1={2100}
          y1={0.5}
          x2={2100}
          y2={3000.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_719_186"
          x1={2100}
          y1={0.5}
          x2={2100}
          y2={3000.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#05AB41" />
          <stop offset={1} stopColor="#019C39" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_719_186"
          x1={714}
          y1={8.5}
          x2={714}
          y2={1408.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#053087" />
          <stop offset={1} stopColor="#012877" />
        </linearGradient>
        <clipPath id="clip0_719_186">
          <rect y={0.5} width={42} height={30} rx={4} fill="#fff" />
        </clipPath>
      </defs>
    </svg>
  )
}
