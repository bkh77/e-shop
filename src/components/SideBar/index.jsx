import { useState } from 'react'
import { menus } from './menus'
import { Link, useHref } from 'react-router-dom'

function SideBar() {
  const href = useHref()
  const [activeMenu, setActiveMenu] = useState(href)
  return (
    <aside className='w-16 rounded-tr-[30px] bg-blue py-8 pl-2 text-white md:w-[263px] md:pl-8'>
      {menus.map((menu) => (
        <Link to={menu.pathName} key={menu.title}>
          <div
            onClick={() => setActiveMenu(menu.pathName)}
            className={`flex cursor-pointer items-center space-x-4 rounded-l-full py-4 pl-2 transition duration-150 md:pl-6 ${
              activeMenu === menu.pathName ? 'active' : ''
            }`}
          >
            <span>{menu.icon}</span>
            <span className='hidden md:block'>{menu.title}</span>
          </div>
        </Link>
      ))}
    </aside>
  )
}

export default SideBar
