import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { data } from '../data'
import { useParams } from 'react-router-dom'
import { prettyCurrency } from '../utils'
import {
  ExchangeIcon,
  GiftIcon,
  DiscountIcon,
  DiscountIphoneIcon,
} from '../components/icons/CustomIcons'
import Stock from '../components/Stock'
import { CartIcon } from '../components/icons/HeroIcons'
import { useState } from 'react'

function Details() {
  const { id } = useParams()
  const phone = data.find((phone) => phone.id === +id)
  const [myCart, setMyCart] = useState([])

  return (
    <div className='bg-gray-light rounded-md py-3 px-4 md:py-5 md:px-7'>
      <p className='text-gray text-[12px]'>
        Заявки <MdOutlineArrowForwardIos className='inline' /> Оформить заказ{' '}
        <MdOutlineArrowForwardIos className='inline' />
        <span className='text-green'>{phone.name} </span>
      </p>
      <div className='bg-white w-full rounded-2xl p-6 mt-6 relative'>
        <div
          className={`bg-pink text-white rounded-full pl-4 flex items-center h-16 absolute -top-5 transition-all duration-300 right-6  ${
            myCart.length ? 'w-[270px]' : 'w-16 pl-5'
          }`}
        >
          <CartIcon />

          <div
            className={`flex flex-row items-center transition-all space-x-4 ml-2 ${
              myCart.length > 0 ? 'block' : 'hidden'
            }`}
          >
            <span>Перейти в корзину</span>
            <div className='w-10 h-10 bg-white text-pink rounded-full text-bold text-center pt-2'>
              {myCart.length}
            </div>
          </div>
        </div>

        <h3 className='text-blue text-lg md:text-[22px] leading-6 font-semibold'>
          {phone.name}
        </h3>

        <div className='flex flex-col lg:flex-row mt-6'>
          <div className='bg-gray-light rounded-2xl relative'>
            <div className='w-[480px]'>
              <img
                src={phone.imgUrl}
                alt={phone.name}
                className='w-full h-full object-cover'
              />
            </div>
            <div className='absolute top-6 left-6 space-y-2'>
              <ExchangeIcon />
              <GiftIcon />
              <DiscountIcon />
              <DiscountIphoneIcon />
            </div>
            <div className='absolute bottom-3 flex justify-center w-full space-x-2'>
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div
                  key={num}
                  className={`w-2 h-2 rounded-full ${
                    num === 1 ? 'bg-blue' : 'bg-gray'
                  }`}
                ></div>
              ))}
            </div>
          </div>

          <div className='px-5 w-full'>
            <p className='text-gray'>Цена телефона</p>
            <p className='mt-2 font-bold text-black'>
              {prettyCurrency(phone.price)}
            </p>

            <p className='text-gray mt-10'>Общая цена (с наценкой)</p>

            <div className='flex justify-between items-center'>
              <p className='mt-2 font-bold text-black'>
                {prettyCurrency(phone.totalPrice)}
              </p>

              <p className='text-gray mt-1 text-sm'>
                <span className='bg-pink text-white p-1 rounded'>
                  от {prettyCurrency(phone.perMonthPrice)}
                </span>{' '}
                x{phone.perMonth}
              </p>
            </div>

            <div className='mt-6 grid grid-cols-4'>
              {[3, 6, 12, 24].map((month) => (
                <div
                  key={month}
                  className={` border-2 py-2 border-green text-center ${
                    month === phone.perMonth ? 'bg-green text-white' : ''
                  } ${
                    month === 3
                      ? 'rounded-l-md'
                      : month === 24
                      ? 'rounded-r-md'
                      : ''
                  }`}
                >
                  {month} мес
                </div>
              ))}
            </div>

            <p className='text-black font-extrabold my-3 text-center'>
              Наценка: 5%
            </p>

            <p className='text-gray mt-10'>Общие характеристики</p>

            <p className='text-black font-bold'>
              Тип: {phone.type} <br />
              Стандарт: {phone.standart} <br />
              Операционная система: {phone.os}
            </p>

            <p className='text-green font-bold mt-10 flex justify-between items-center cursor-pointer'>
              <span>Показать все</span>
              <MdOutlineArrowForwardIos />
            </p>
          </div>
        </div>

        <Stock phone={phone} />

        <button
          onClick={() => setMyCart([...myCart, phone])}
          className='bg-green py-3 w-full mt-6 rounded-full text-white hover:bg-green/80'
        >
          Добавить в корзину
        </button>
      </div>
    </div>
  )
}

export default Details
