import { MdOutlineArrowForwardIos } from 'react-icons/md'

function EmptyPage({ pageName }) {
  return (
    <div className='h-screen rounded-md bg-gray-light py-5 px-7'>
      <p className='text-[12px] text-gray'>
        Заявки <MdOutlineArrowForwardIos className='inline' />{' '}
        <span className='text-green'>{pageName}</span>
      </p>
      <h3 className='mt-7 text-[22px] font-semibold leading-6 text-blue'>
        {pageName}
      </h3>
    </div>
  )
}

export default EmptyPage
