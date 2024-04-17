import clsx from 'clsx'
import React, { FC } from 'react'

interface Props {
  active: boolean
  onClick?: () => void
}

const Switch: FC<Props> = ({ active, onClick }) => {
  return (
    <span
      className={`
        flex items-center mx-5 w-12 h-6 p-1 bg-marine-blue rounded-full cursor-pointer after:w-4 after:h-4 after:bg-white  after:rounded-full after:translate-x-0 after:transition-transform
        ${clsx({ 'after:translate-x-6': active })}
      `}
      onClick={onClick}
    />
  )
}

export default Switch
