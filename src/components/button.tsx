import clsx from 'clsx'
import { DetailedHTMLProps, ButtonHTMLAttributes, FC } from 'react'

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'link'
}

const Button: FC<Props> = ({ children, variant = 'primary', ...props }) => {
  return (
    <button
      {...props}
      className={`px-6 py-3 cursor-pointer rounded-md font-medium lg:text-lg
        ${clsx({
          'bg-marine-blue text-white md:hover:opacity-80': variant === 'primary'
        })}
        ${clsx({
          'text-white bg-purplish-blue md:hover:opacity-80': variant === 'secondary'
        })}
        ${clsx({
          'text-cool-gray md:hover:text-marine-blue': variant === 'ghost'
        })}
        ${clsx({
          'text-cool-gray underline md:hover:text-purplish-blue font-normal !p-0': variant === 'link'
        })}
      `}
    >
      {children}
    </button>
  )
}

export default Button
