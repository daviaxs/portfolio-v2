export function Figma(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M26.667 26.667a6.667 6.667 0 100-13.334 6.667 6.667 0 000 13.334z"
        fill="#19BCFE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.333 40A6.667 6.667 0 0020 33.333v-6.666h-6.667a6.667 6.667 0 100 13.333z"
        fill="#09CF83"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.333 26.667H20V13.333h-6.667a6.667 6.667 0 000 13.334z"
        fill="#A259FF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.333 13.333H20V0h-6.667a6.667 6.667 0 000 13.333z"
        fill="#F24E1E"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.667 13.333H20V0h6.667a6.667 6.667 0 010 13.333z"
        fill="#FF7262"
      />
    </svg>
  )
}
