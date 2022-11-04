import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { HiBell } from 'react-icons/hi'

function NavBar() {
  return (
    <header className='max-w-full bg-white h-[70px] flex'>
      <div className='flex justify-between items-center w-full'>
        <div className='ml-16 text-lg cursor-pointer font-bold'>LOGO</div>
        <div className='relative'>
          <HiBell className='text-gray w-6 h-6 mr-10 cursor-pointer' />
          <div className='w-4 h-4 bg-green rounded-full text-white flex justify-center items-center text-[10px] absolute -top-1 left-3'>
            1
          </div>
        </div>
      </div>

      <div className='bg-blue h-[70px] w-[292px] rounded-bl-[30px] text-white flex justify-center items-center space-x-4'>
        <span>Личный кабинет</span>
        <FaUserCircle className='w-8 h-8' />
      </div>
    </header>
  )
}

export default NavBar
