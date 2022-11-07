import exchangeIcon from '../../assets/exchange.png'
import { FaGift } from 'react-icons/fa'
import { TbDiscount2 } from 'react-icons/tb'

export const ExchangeIcon = () => {
  return (
    <div className='flex h-[28px] w-[36px] items-center justify-center rounded bg-[#F39DBD]'>
      <img className='h-4 w-4' src={exchangeIcon} alt='icon' />
    </div>
  )
}
export const GiftIcon = () => {
  return (
    <div className='flex h-[28px] w-[36px] items-center justify-center rounded bg-[#A2AEDB]'>
      <FaGift className='h-4 w-4 text-[#3855B3]' />
    </div>
  )
}
export const DiscountIcon = () => {
  return (
    <div className='flex h-[28px] w-[36px] items-center justify-center rounded bg-[#FFBD95]'>
      <TbDiscount2 className='h-4 w-4 text-orange' />
    </div>
  )
}
export const DiscountIphoneIcon = () => {
  return (
    <div className='flex h-[28px] w-[36px] items-center justify-center rounded bg-[#AAD9AC]'>
      <TbDiscount2 className='h-4 w-4 text-[#4CAF50]' />
    </div>
  )
}
