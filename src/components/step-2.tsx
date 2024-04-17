import Image from 'next/image'
import StepWrapper from './step-wrapper'
import clsx from 'clsx'
import Switch from '@/components/switch'
import { FC, Fragment } from 'react'
import { Plan, PlanType } from '@/types/globals'
import { plans } from '@/constants'

interface Props {
  name: Plan
  type: PlanType
  onPlanChange: (plan: Plan) => void
  onSwitch: () => void
}

const Step2: FC<Props> = ({ name, type, onPlanChange, onSwitch }) => {
  return (
    <StepWrapper
      title='Select your plan'
      description='You have the option of monthly or yearly billing.'
    >
      <form>
        <div className='md:flex md:gap-4'>
          {Object.values(plans).map((plan) => (
            <Fragment key={plan.label}>
              <label
                htmlFor={plan.label}
                className={`
                  flex items-start px-3 py-4 border-solid border-light-gray border-[1px] rounded-md cursor-pointer mb-3 
                  md:hover:border-purplish-blue md:flex-col md:grow md:px-4 md:py-5
                  ${clsx({ 'border-purplish-blue bg-alabaster': name === plan.value })}
                `}
              >
                <Image
                  className='mr-4 md:mr-0 md:mb-14'
                  src={`/icon-${plan.label}.svg`}
                  alt={plan.label}
                  width={42}
                  height={42}
                />
                <div>
                  <h3 className='font-medium capitalize lg:text-lg'>{plan.label}</h3>
                  <p className='text-cool-gray lg:text-lg'>
                    ${type === PlanType.Monthly ? plan.price.month : plan.price.year}/{type}
                  </p>
                  {type === PlanType.Yearly && <p className='text-sm'>2 months free</p>}
                </div>
              </label>
              <input
                type='radio'
                className='absolute left-[-999px]'
                id={plan.label}
                name={plan.label}
                onClick={() => {
                  onPlanChange(plan.value)
                }}
              />
            </Fragment>
          ))}
        </div>
        <div className='p-3 flex justify-center items-center bg-alabaster rounded-md md:mt-8'>
          <span className='font-medium lg:text-lg'>Monthly</span>
          <Switch
            active={type === PlanType.Yearly}
            onClick={onSwitch}
          />
          <span className='text-cool-gray font-medium lg:text-lg'>Yearly</span>
        </div>
      </form>
    </StepWrapper>
  )
}

export default Step2
