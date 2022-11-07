import { Link } from 'react-router-dom'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import SearchInput from '../components/SearchInput'
import { data } from '../data'
import Card from '../components/Card'
import Pagination from '../components/Pagination'
import { useState } from 'react'

function Order() {
  const [search, setSerach] = useState('')
  return (
    <div className='rounded-md bg-gray-light py-3 px-4 md:py-5 md:px-7'>
      <p className='text-[12px] text-gray'>
        Заявки <MdOutlineArrowForwardIos className='inline' />{' '}
        <span className='text-green'>Оформить заказ</span>
      </p>
      <h3 className='mt-7 text-lg font-semibold leading-6 text-blue md:text-[22px]'>
        Оформить заказ
      </h3>

      <SearchInput value={search} change={setSerach} />

      <p className='mb-6 font-bold text-black'>Все товары (121)</p>

      <div className='grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6'>
        {data
          .filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((phone) => (
            <Link to={`/order/${phone.id}`} key={phone.id}>
              <Card phone={phone} />
            </Link>
          ))}
      </div>
      <Pagination />
    </div>
  )
}

export default Order
