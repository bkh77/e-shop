import { Link } from 'react-router-dom'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import SearchInput from '../components/SearchInput'
import { data } from '../data'
import Card from '../components/Card'
import Pagination from '../components/Pagination'

function Order() {
  return (
    <div className='bg-gray-light rounded-md py-3 px-4 md:py-5 md:px-7'>
      <p className='text-gray text-[12px]'>
        Заявки <MdOutlineArrowForwardIos className='inline' />{' '}
        <span className='text-green'>Оформить заказ</span>
      </p>
      <h3 className='text-blue text-lg md:text-[22px] leading-6 font-semibold mt-7'>
        Оформить заказ
      </h3>

      <SearchInput />

      <p className='text-black font-bold mb-6'>Все товары (121)</p>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6 gap-4 justify-items-center'>
        {data.map((phone) => (
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
