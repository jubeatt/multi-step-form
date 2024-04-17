import clsx from 'clsx'
import React, { FC, ReactElement } from 'react'

interface Props {
  active: boolean
  count: number
}

const StepNumber: FC<Props> = ({ active, count }) => {
  return (
    <div
      className={`
        w-10 h-10 rounded-full flex justify-center items-center border-white font-bold border-solid
        ${active ? 'text-marine-blue bg-light-blue' : 'text-white border-[1px]'}
      `}
    >
      {count}
    </div>
  )
}

export default StepNumber
