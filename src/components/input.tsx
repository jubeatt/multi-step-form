import { Field } from '@/types/globals'
import clsx from 'clsx'
import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  type: Field['type']
  error?: boolean
}

const Input: FC<Props> = ({ type = 'text', error = false, ...props }) => {
  return (
    <input
      {...props}
      type={type}
      className={`
        outline-none w-full border-light-gray py-2 px-4  border-[1px] rounded-md 
        ${clsx({ 'focus:border-purplish-blue': !error })}
        ${clsx({ 'border-strawberry-red': error })}
      `}
    />
  )
}

export default Input
