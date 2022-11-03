import {
  HomeIcon,
  OrderIcon,
  BagIcon,
  StarIcon,
  CartIcon,
} from '../icons/HeroIcons.jsx'

export const menus = [
  {
    pathName: 'home',
    title: 'Главная',
    icon: <HomeIcon />,
  },
  {
    pathName: 'order-list',
    title: 'Заказы',
    icon: <OrderIcon />,
  },
  {
    pathName: 'products',
    title: 'Товары',
    icon: <BagIcon />,
  },
  {
    pathName: 'reviews',
    title: 'Отзывы',
    icon: <StarIcon />,
  },
  {
    pathName: 'order',
    title: 'Оформить заказ',
    icon: <CartIcon />,
  },
]
