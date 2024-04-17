import { FC, ReactNode } from 'react'

interface Props {
  title: string
  description: string
  children: ReactNode
}

const StepWrapper: FC<Props> = ({ title, description, children }) => {
  return (
    <div className='bg-white py-9 px-6 rounded-md shadow-sm md:shadow-none lg:px-16 '>
      <h2 className='text-2xl font-bold mb-4 lg:text-3xl'>{title}</h2>
      <p className='text-cool-gray mb-4 lg:text-lg'>{description}</p>
      {children}
    </div>
  )
}

export default StepWrapper
