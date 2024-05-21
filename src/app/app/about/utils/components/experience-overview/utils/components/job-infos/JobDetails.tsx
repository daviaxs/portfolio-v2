import { ReactNode } from 'react'

interface JobDetailsProps {
  company: string
  jobType: string
  startDate: string
  endDate: string
  location: string

  children: ReactNode
}

export function JobDetails({
  company,
  jobType,
  startDate,
  endDate,
  location,
  children,
}: JobDetailsProps) {
  return (
    <div>
      {children}

      <div className="flex gap-2 items-center justify-start font-medium text-[0.8rem]">
        <p>{company}</p>
        <span>·</span>
        <p>{jobType}</p>
      </div>

      <div className="flex gap-1 items-center justify-start font-medium text-[0.8rem] text-grey-100">
        <p>{startDate}</p>
        <span>-</span>
        <p>{endDate}</p>
      </div>

      <p className="text-grey-100 text-[0.8rem]">{location}</p>
    </div>
  )
}
