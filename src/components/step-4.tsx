import { AddonKeys, Plan, PlanType } from '@/types/globals'
import Button from './button'
import StepWrapper from './step-wrapper'
import { FC } from 'react'
import { plans, addons } from '@/constants'

interface Props {
  planName: Plan
  planType: PlanType
  selectedAddons: AddonKeys[]
  onChangeButton: () => void
}

const Step4: FC<Props> = ({ planName, planType, selectedAddons, onChangeButton }) => {
  const { price } = plans[planName]
  const isMonthly = planType === PlanType.Monthly

  const calculateTotal = () => {
    let result = 0
    for (const addon of selectedAddons) {
      result += isMonthly ? addons[addon].price.month : addons[addon].price.year
    }
    result += isMonthly ? plans[planName].price.month : plans[planName].price.year
    return result
  }

  return (
    <StepWrapper
      title='Finishing up'
      description='Double-check everything looks OK before confirming.'
    >
      <div className='bg-alabaster rounded-sm py-5 px-3 mb-7'>
        <div>
          <h2 className='font-medium lg:text-lg'>
            <span className='capitalize'>{planName}</span> ({isMonthly ? 'Monthly' : 'Yearly'})
          </h2>
          <div className='flex justify-between'>
            <Button
              variant='link'
              onClick={onChangeButton}
            >
              Change
            </Button>
            <span className='font-bold lg:text-lg'>
              ${isMonthly ? price.month : price.year}/{planType}
            </span>
          </div>
        </div>
        {selectedAddons.length > 0 && (
          <>
            <hr className='h-[1px] bg-light-gray my-3' />
            <ul>
              {selectedAddons.map((addon) => (
                <li
                  key={addon}
                  className='flex justify-between mb-3 last:mb-0 lg:text-lg'
                >
                  <span className='text-cool-gray'>{addons[addon].label}</span>
                  <span>
                    +${isMonthly ? addons[addon].price.month : addons[addon].price.year}/{planType}
                  </span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
      <div className='flex justify-between px-3 lg:text-lg'>
        <span className='text-cool-gray'>Total (per {isMonthly ? 'month' : 'year'})</span>
        <span className='text-lg font-bold text-purplish-blue'>
          +${calculateTotal()}/{planType}
        </span>
      </div>
    </StepWrapper>
  )
}

export default Step4
