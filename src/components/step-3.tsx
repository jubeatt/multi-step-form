import { AddonKeys, PlanType } from '@/types/globals'
import StepWrapper from './step-wrapper'
import { FC, Fragment } from 'react'
import { addons } from '@/constants'
import Checkbox from './checkbox'

interface Props {
  planType: PlanType
  selectedAddons: string[]
  onCheckbox: (value: AddonKeys) => void
}

const Step3: FC<Props> = ({ planType, selectedAddons, onCheckbox }) => {
  return (
    <StepWrapper
      title='Pick add-ons'
      description='Add-ons help enhance your gaming experience.'
    >
      <form>
        {Object.values(addons).map((addon) => (
          <Fragment key={addon.label}>
            {
              <label
                className={`
                  flex items-center mb-3 last:mb-0 p-3 rounded-md border-light-gray border-[1px] cursor-pointer md:hover:border-purplish-blue lg:px-6
                  ${selectedAddons.includes(addon.value) ? 'border-purplish-blue bg-alabaster' : 'border-light-gray'}
                `}
              >
                <div className='w-5 h-5 mr-3 lg:mr-6'>
                  <Checkbox
                    checked={selectedAddons.includes(addon.value)}
                    onChange={() => onCheckbox(addon.value as AddonKeys)}
                  />
                </div>
                <div className='mr-3'>
                  <h3 className='font-medium lg:text-lg'>{addon.label}</h3>
                  <p className='text-cool-gray text-sm lg:text-base'>{addon.description}</p>
                </div>
                <span className='ml-auto text-purplish-blue lg:text-sm'>
                  +${planType === PlanType.Monthly ? addon.price.month : addon.price.year}/{planType}
                </span>
              </label>
            }
          </Fragment>
        ))}
      </form>
    </StepWrapper>
  )
}

export default Step3
