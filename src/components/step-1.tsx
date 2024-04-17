import { FC } from 'react'
import StepWrapper from './step-wrapper'
import Input from '@/components/input'
import { Field } from '@/types/globals'
import { formFields } from '@/constants'

interface Props {
  name: string
  email: string
  phone: string
  showValidation: boolean
  onChange: (key: Field['key'], value: string) => void
}

const Step1: FC<Props> = ({ showValidation, onChange, ...props }) => {
  return (
    <StepWrapper
      title='Personal info'
      description='Please provide your name, email address, and phone number.'
    >
      <form>
        {formFields.map((field) => {
          const invalid = !Boolean(props[field.key].trim())
          return (
            <div
              className='mb-4'
              key={field.key}
            >
              <label
                className='flex text-sm mb-1 lg:text-base'
                htmlFor={field.key}
              >
                {field.label}
                {showValidation && invalid && (
                  <span className='ml-auto font-medium text-strawberry-red'>This field is required</span>
                )}
              </label>
              <Input
                type={field.type}
                id={field.key}
                name={field.key}
                placeholder={field.placeholder}
                value={props[field.key]}
                error={showValidation && invalid}
                onChange={(e) => onChange(field.key, e.target.value)}
              />
            </div>
          )
        })}
      </form>
    </StepWrapper>
  )
}

export default Step1
