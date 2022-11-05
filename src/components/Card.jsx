import { prettyCurrency, shortTitle } from '../utils'
import {
  ExchangeIcon,
  GiftIcon,
  DiscountIcon,
} from '../components/icons/CustomIcons'

export const Card = ({ phone }) => {
  return (
    <div className=' bg-white rounded-xl p-3 w-full h-full sm:w-[192px] sm:h-[268px]'>
      <div className='bg-gray-light rounded-lg h-[168px] relative'>
        <img
          className='w-full h-full max-md:object-top object-cover'
          src={phone.imgUrl}
          alt={phone.name}
        />
        <div className='absolute  top-3 left-2 space-y-1'>
          {phone.isExchange && <ExchangeIcon />}
          {phone.isGift && <GiftIcon />}
          {phone.isDiscount && <DiscountIcon />}
        </div>
      </div>

      <div className='text-black text-sm mt-1'>
        <p>{shortTitle(phone.name)}</p>

        <p className='font-bold'>{prettyCurrency(phone.totalPrice)}</p>
      </div>

      <p className='text-gray mt-1 text-sm'>
        <span className='bg-pink text-white p-1 rounded'>
          от {prettyCurrency(phone.perMonthPrice)}
        </span>{' '}
        x{phone.perMonth}
      </p>
    </div>
  )
}

export default Card
