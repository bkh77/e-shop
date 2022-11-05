import React from 'react'
import { FiSearch } from 'react-icons/fi'

function SearchInput() {
  return (
    <div className='my-6 flex flex-row items-center'>
      <input
        className='py-3 px-6 rounded-l-full grow outline-none'
        type='text'
        placeholder='Поиск по названию товара'
      />
      <button className='bg-green hover:bg-green/80  rounded-r-full py-3 px-10 text-white'>
        <FiSearch className='w-6 h-6' />
      </button>
    </div>
  )
}

export default SearchInput
