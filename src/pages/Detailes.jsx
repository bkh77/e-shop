import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { data } from '../data'
import { useParams } from 'react-router-dom'
import { prettyCurrency } from '../utils'
import { CartIcon } from '../components/icons/HeroIcons'
import { useState } from 'react'
import Stock from '../components/Stock'
import {
  ExchangeIcon,
  GiftIcon,
  DiscountIcon,
  DiscountIphoneIcon,
} from '../components/icons/CustomIcons'

function Details() {
  const { id } = useParams()
  const phone = data.find((phone) => phone.id === +id)
  const [myCart, setMyCart] = useState([])

  return (
    <div className='rounded-md bg-gray-light py-3 px-4 md:py-5 md:px-7'>
      <p className='text-[12px] text-gray'>
        Заявки <MdOutlineArrowForwardIos className='inline' /> Оформить заказ{' '}
        <MdOutlineArrowForwardIos className='inline' />
        <span className='text-green'>{phone.name} </span>
      </p>
      <div className='relative mt-6 w-full rounded-2xl bg-white p-6'>
        <div
          className={`absolute -top-5 right-6 flex h-16 cursor-pointer items-center rounded-full bg-pink pl-4 text-white transition-all duration-300  ${
            myCart.length ? 'w-[270px]' : 'w-16 pl-5'
          }`}
        >
          <CartIcon />

          <div
            className={`ml-2 flex flex-row items-center space-x-4 transition-all ${
              myCart.length > 0 ? 'block' : 'hidden'
            }`}
          >
            <span>Перейти в корзину</span>
            <div className='text-bold h-10 w-10 rounded-full bg-white pt-2 text-center text-pink'>
              {myCart.length}
            </div>
          </div>
        </div>

        <h3 className='text-lg font-semibold leading-6 text-blue md:text-[22px]'>
          {phone.name}
        </h3>

        <div className='mt-6 flex flex-col lg:flex-row'>
          <div className='relative rounded-2xl bg-gray-light'>
            <div className='w-full md:w-[480px]'>
              <img
                src={phone.imgUrl}
                alt={phone.name}
                className='h-full w-full object-cover'
              />
            </div>
            <div className='absolute top-6 left-6 space-y-2'>
              <ExchangeIcon />
              <GiftIcon />
              <DiscountIcon />
              <DiscountIphoneIcon />
            </div>
            <div className='absolute bottom-3 flex w-full justify-center space-x-2'>
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div
                  key={num}
                  className={`h-2 w-2 rounded-full ${
                    num === 1 ? 'bg-blue' : 'bg-gray'
                  }`}
                ></div>
              ))}
            </div>
          </div>

          <div className='w-full px-5'>
            <p className='text-gray'>Цена телефона</p>
            <p className='mt-2 font-bold text-black'>
              {prettyCurrency(phone.price)}
            </p>

            <p className='mt-10 text-gray'>Общая цена (с наценкой)</p>

            <div className='flex flex-col md:flex-row items-center justify-between'>
              <p className='mt-2 font-bold text-black'>
                {prettyCurrency(phone.totalPrice)}
              </p>

              <p className='mt-1 text-sm text-gray'>
                <span className='rounded bg-pink p-1 text-white'>
                  от {prettyCurrency(phone.perMonthPrice)}
                </span>{' '}
                x{phone.perMonth}
              </p>
            </div>

            <div className='mt-6 grid grid-cols-4'>
              {[3, 6, 12, 24].map((month) => (
                <div
                  key={month}
                  className={` border-2 border-green py-2 text-center ${
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

            <p className='my-3 text-center font-extrabold text-black'>
              Наценка: 5%
            </p>

            <p className='mt-10 text-gray'>Общие характеристики</p>

            <p className='font-bold text-black'>
              Тип: {phone.type} <br />
              Стандарт: {phone.standart} <br />
              Операционная система: {phone.os}
            </p>

            <p className='mt-10 flex cursor-pointer items-center justify-between font-bold text-green'>
              <span>Показать все</span>
              <MdOutlineArrowForwardIos />
            </p>
          </div>
        </div>

        <Stock phone={phone} />

        <button
          onClick={() => setMyCart([...myCart, phone])}
          className='mt-6 w-full rounded-full bg-green py-3 text-white hover:bg-green/80'
        >
          Добавить в корзину
        </button>
      </div>
    </div>
  )
}

export default Details
