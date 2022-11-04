import React from 'react'
import { MdOutlineArrowForwardIos } from 'react-icons/md'

function EmptyPage({ pageName }) {
  return (
    <div className='bg-gray-light h-screen rounded-md py-5 px-7'>
      <p className='text-gray text-[12px]'>
        Заявки <MdOutlineArrowForwardIos className='inline' />{' '}
        <span className='text-green'>{pageName}</span>
      </p>
      <h3 className='text-blue text-[22px] leading-6 font-semibold mt-7'>
        {pageName}
      </h3>
    </div>
  )
}

export default EmptyPage
