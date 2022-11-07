import { FaUserCircle } from 'react-icons/fa'
import { HiBell } from 'react-icons/hi'

function NavBar() {
  return (
    <header className='flex h-[70px] max-w-full bg-white'>
      <div className='flex grow items-center justify-between'>
        <div className='ml-6 cursor-pointer text-lg font-bold md:ml-16'>
          LOGO
        </div>
        <div className='relative'>
          <HiBell className='mr-10 h-6 w-6 cursor-pointer text-gray' />
          <div className='absolute -top-1 left-3 flex h-4 w-4 items-center justify-center rounded-full bg-green text-[10px] text-white'>
            1
          </div>
        </div>
      </div>

      <div className='flex h-[70px] w-20 items-center justify-center space-x-4 rounded-bl-[30px] bg-blue text-white md:w-[290px]'>
        <span className='hidden md:block'>Личный кабинет</span>
        <FaUserCircle className='h-8 w-8' />
      </div>
    </header>
  )
}

export default NavBar
