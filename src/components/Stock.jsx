import React from 'react'
import {
  ExchangeIcon,
  GiftIcon,
  DiscountIcon,
  DiscountIphoneIcon,
} from '../components/icons/CustomIcons'

function Stock({ phone }) {
  const listStock = [
    {
      icon: <ExchangeIcon />,
      title: 'Обменяй свой старый айфон и получи скидку на новый',
      amount: '-400 000 сум',
      check: phone.isExchange,
    },
    {
      icon: <GiftIcon />,
      title: 'Наушники в подарок',
      amount: 'Apple EarPods',
      check: phone.isGift,
    },
    {
      icon: <DiscountIcon />,
      title: 'Скидка 20% на смартфоны',
      amount: '-10 000 сум',
      check: phone.isDiscount,
    },
    {
      icon: <DiscountIphoneIcon />,
      title: 'Скидка на айфоны',
      imei: phone.imei,
      amount: '-10 000 сум',
      check: phone.isDiscountIphone,
    },
  ]

  return (
    <div className='mt-8'>
      <p className='text-green font-bold '>Акции</p>

      {listStock.map(({ icon, title, amount, check, imei }) => (
        <div
          key={title}
          className='flex justify-between mt-4 border-b-2 border-gray pb-3'
        >
          <div className='flex space-x-4'>
            <div>{icon}</div>
            <div className='text-black font-bold'>
              {title} <br />
              {imei && (
                <>
                  {imei} <br />
                </>
              )}
              <span className='text-gray'>{amount}</span>
            </div>
          </div>
          <span>
            <input
              type='checkbox'
              readOnly
              checked={check}
              className='w-5 h-5 rounded border-none appearance-none outline-none ring-2 ring-gray text-white checked:bg-green checked:ring-green'
            />
          </span>
        </div>
      ))}
    </div>
  )
}

export default Stock
