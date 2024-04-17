import Button from '@/components/button'
import Step1 from '@/components/step-1'
import Step2 from '@/components/step-2'
import Step3 from '@/components/step-3'
import Step4 from '@/components/step-4'
import { useState } from 'react'
import { cloneDeep } from 'lodash-es'
import { PlanType, Plan, AddonKeys } from '@/types/globals'
import Step5 from '@/components/step-5'
import StepNumber from '@/components/step-number'
import { steps } from '@/constants'

export default function MultiStepForm() {
  // 1 - info
  // 2 - plan
  // 3 - addon
  // 4 - summary
  // 5 - finished
  const [currentStep, setCurrentStep] = useState(1)
  const [showValidation, setShowValidation] = useState(false)
  const [data, setData] = useState({
    personalInfo: {
      name: '',
      email: '',
      phone: ''
    },
    plan: {
      name: Plan.Arcade,
      type: PlanType.Monthly
    },
    addons: [] as AddonKeys[]
  })

  const isFirstStep = currentStep === 1
  const isConfirmStep = currentStep === 4
  const isFinishStep = currentStep === 5

  const handleInfoChange = (key: 'name' | 'email' | 'phone', value: string) => {
    const newData = cloneDeep(data)
    newData.personalInfo[key] = value
    setData(newData)
  }

  const handlePlanChange = (plan: Plan) => {
    const newData = cloneDeep(data)
    newData.plan.name = plan
    setData(newData)
  }

  const handleSwitch = () => {
    const newData = cloneDeep(data)
    newData.plan.type = newData.plan.type === PlanType.Monthly ? PlanType.Yearly : PlanType.Monthly
    setData(newData)
  }

  const handleCheckbox = (value: AddonKeys) => {
    const newData = cloneDeep(data)
    const index = newData.addons.indexOf(value)
    if (index > -1) {
      newData.addons.splice(index, 1)
    } else {
      newData.addons.push(value)
    }
    setData(newData)
  }

  const handleNextStep = () => {
    const { name, email, phone } = data.personalInfo
    const hasEmpty = [name, email, phone].some((key) => !Boolean(key.trim()))
    if (hasEmpty) {
      setShowValidation(true)
    } else if (!isFinishStep) {
      setShowValidation(false)
      setCurrentStep((state) => state + 1)
    }
  }

  const handlePreviousStep = () => {
    if (!isFirstStep) {
      setCurrentStep((state) => state - 1)
    }
  }

  const handleChangePlanButton = () => {
    setCurrentStep(2)
  }

  return (
    <section className='min-h-screen md:py-20 md:px-10 md:flex'>
      <div className='bg-sidebar-mobile bg-no-repeat bg-cover h-[172px] md:hidden'>
        <div className='flex justify-center p-7'>
          <ol className='flex items-center'>
            {steps.map((_, index) => {
              const isActive = currentStep === index + 1
              const lastStep = index + 1 === 4
              return (
                <li
                  key={index}
                  className='mr-4 last:mr-0'
                >
                  <StepNumber
                    count={index + 1}
                    active={isActive || (lastStep && isFinishStep)}
                  />
                </li>
              )
            })}
          </ol>
        </div>
      </div>

      <div className='px-4 pb-24 -mt-[72px] md:m-auto md:flex md:bg-white md:rounded-md md:gap-5 md:p-4 lg:w-[1024px] '>
        <div className='hidden md:shrink-0 md:block md:bg-sidebar-desktop md:bg-cover md:bg-no-repeat md:w-[274px] md:h-[568px] md:rounded-md'>
          <ol className='p-8'>
            {steps.map((stepName, index) => {
              const isActive = currentStep === index + 1
              const lastStep = index + 1 === 4
              return (
                <li
                  className='flex items-center mb-8 last:mb-0'
                  key={index}
                >
                  <StepNumber
                    count={index + 1}
                    active={isActive || (lastStep && isFinishStep)}
                  />
                  <div className='ml-6'>
                    <div className='uppercase text-light-gray'>Step {index + 1}</div>
                    <div className='uppercase text-white font-medium'>{stepName}</div>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>

        <div className='grow flex flex-col'>
          {currentStep === 1 && (
            <Step1
              {...data.personalInfo}
              showValidation={showValidation}
              onChange={handleInfoChange}
            />
          )}
          {currentStep === 2 && (
            <Step2
              {...data.plan}
              onPlanChange={handlePlanChange}
              onSwitch={handleSwitch}
            />
          )}
          {currentStep === 3 && (
            <Step3
              planType={data.plan.type}
              selectedAddons={data.addons}
              onCheckbox={handleCheckbox}
            />
          )}
          {currentStep === 4 && (
            <Step4
              planName={data.plan.name}
              planType={data.plan.type}
              selectedAddons={data.addons}
              onChangeButton={handleChangePlanButton}
            />
          )}
          {isFinishStep && <Step5 />}

          {!isFinishStep && (
            <div className='hidden mt-auto p-4 justify-between md:flex lg:px-16'>
              {!isFirstStep && (
                <Button
                  variant='ghost'
                  onClick={handlePreviousStep}
                >
                  Go back
                </Button>
              )}
              {isConfirmStep ? (
                <Button
                  variant='secondary'
                  onClick={handleNextStep}
                >
                  Confirm
                </Button>
              ) : (
                <div className='ml-auto'>
                  <Button onClick={handleNextStep}>Next Step</Button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {!isFinishStep && (
        <div className='fixed bottom-0 left-0 p-4 bg-white w-full flex justify-between md:hidden'>
          {!isFirstStep && (
            <Button
              variant='ghost'
              onClick={handlePreviousStep}
            >
              Go back
            </Button>
          )}
          {isConfirmStep ? (
            <Button
              variant='secondary'
              onClick={handleNextStep}
            >
              Confirm
            </Button>
          ) : (
            <div className='ml-auto'>
              <Button onClick={handleNextStep}>Next Step</Button>
            </div>
          )}
        </div>
      )}
    </section>
  )
}
