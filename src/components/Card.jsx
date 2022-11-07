import { prettyCurrency, shortTitle } from '../utils'
import {
  ExchangeIcon,
  GiftIcon,
  DiscountIcon,
} from '../components/icons/CustomIcons'

export const Card = ({ phone }) => {
  return (
    <div className=' h-full w-full rounded-xl bg-white p-3 sm:h-[268px] sm:w-[192px]'>
      <div className='relative h-[168px] overflow-hidden rounded-lg bg-gray-light'>
        <img
          className='h-full w-full object-cover max-md:object-top '
          src={phone.imgUrl}
          alt={phone.name}
        />
        <div className='absolute  top-3 left-2 space-y-1'>
          {phone.isExchange && <ExchangeIcon />}
          {phone.isGift && <GiftIcon />}
          {phone.isDiscount && <DiscountIcon />}
        </div>
      </div>

      <div className='mt-1 text-sm text-black'>
        <p>{shortTitle(phone.name)}</p>

        <p className='font-bold'>{prettyCurrency(phone.totalPrice)}</p>
      </div>

      <p className='mt-1 text-sm text-gray'>
        <span className='rounded bg-pink p-1 text-white'>
          от {prettyCurrency(phone.perMonthPrice)}
        </span>{' '}
        x{phone.perMonth}
      </p>
    </div>
  )
}

export default Card
