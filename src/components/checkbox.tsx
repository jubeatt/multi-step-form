import React, { FC } from 'react'

interface Props {
  checked: boolean
  onChange: () => void
}

const Checkbox: FC<Props> = ({ checked, onChange }) => {
  return (
    <input
      type='checkbox'
      className='appearance-none w-full h-full border-light-gray border-[1px] border-solid rounded-sm flex justify-center items-center before:w-3 before:h-2 before:border-[2px] before:border-l-0 before:border-b-0 before:border-white before:rotate-[135deg] before:-mt-1 before:opacity-0 before:transition-opacity checked:bg-purplish-blue checked:border-purplish-blue checked:before:opacity-100'
      checked={checked}
      onChange={onChange}
    />
  )
}

export default Checkbox
