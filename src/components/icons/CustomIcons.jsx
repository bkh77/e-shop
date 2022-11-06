import React from 'react'
import exchangeIcon from '../../assets/exchange.png'
import { FaGift } from 'react-icons/fa'
import { TbDiscount2 } from 'react-icons/tb'

export const ExchangeIcon = () => {
  return (
    <div className='w-[36px] h-[28px] bg-[#F39DBD] rounded flex justify-center items-center'>
      <img className='w-4 h-4' src={exchangeIcon} alt='icon' />
    </div>
  )
}
export const GiftIcon = () => {
  return (
    <div className='w-[36px] h-[28px] bg-[#A2AEDB] rounded flex justify-center items-center'>
      <FaGift className='w-4 h-4 text-[#3855B3]' />
    </div>
  )
}
export const DiscountIcon = () => {
  return (
    <div className='w-[36px] h-[28px] bg-[#FFBD95] rounded flex justify-center items-center'>
      <TbDiscount2 className='w-4 h-4 text-orange' />
    </div>
  )
}
export const DiscountIphoneIcon = () => {
  return (
    <div className='w-[36px] h-[28px] bg-[#AAD9AC] rounded flex justify-center items-center'>
      <TbDiscount2 className='w-4 h-4 text-[#4CAF50]' />
    </div>
  )
}
