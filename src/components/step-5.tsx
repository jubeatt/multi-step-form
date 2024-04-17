import Image from 'next/image'

const Step5 = () => {
  return (
    <div className='bg-white py-[76px] px-6 rounded-md shadow-sm text-center md:shadow-none md:px-16 md:max-w-[640px] md:m-auto'>
      <div className='flex justify-center mb-6'>
        <Image
          width={60}
          height={60}
          className='md:w-[90px] md:h-[90px]'
          src='/icon-thank-you.svg'
          alt='thank you'
        />
      </div>
      <h2 className='text-2xl font-bold mb-3 md:text-4xl md:mb-6'>Thank you!</h2>
      <p className='text-cool-gray md:text-lg'>
        Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support,
        please feel free to email us at support@loremgaming.com.
      </p>
    </div>
  )
}

export default Step5
