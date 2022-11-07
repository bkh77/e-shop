import { FiSearch } from 'react-icons/fi'

function SearchInput() {
  return (
    <div className='my-6 flex flex-row items-center'>
      <input
        className='grow rounded-l-full border-none py-3 px-6 outline-none'
        type='text'
        placeholder='Поиск по названию товара'
      />
      <button className='rounded-r-full bg-green  py-3 px-4 text-white hover:bg-green/80 md:px-10'>
        <FiSearch className='h-6 w-6' />
      </button>
    </div>
  )
}

export default SearchInput
