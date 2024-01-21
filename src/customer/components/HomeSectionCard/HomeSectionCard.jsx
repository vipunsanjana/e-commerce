import React from 'react'

const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>

      <div className='h-[13rem] w-[10rem]'>
        <img className='object-cover object-top w-full h-full' src="https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/0/10_5.jpg" alt="" srcset="" />
      </div>

      <div className='p-4'>
        <h3 className='text-lg font-medium text-gray-900'>nofilter</h3>
        <p className='mt-2 text-sm text-gray-500'>Men solid pure cot</p>
      </div>

    </div>
  )
}

export default HomeSectionCard