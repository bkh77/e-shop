import { useState } from 'react'
import { menus } from './menus'
import { Link, useHref } from 'react-router-dom'

function SideBar() {
  const href = useHref()
  const [activeMenu, setActiveMenu] = useState(href)
  return (
    <aside className='w-[263px] bg-blue rounded-tr-[30px] text-white pl-8 py-8'>
      {menus.map((menu) => (
        <Link to={menu.pathName} key={menu.title}>
          <div
            onClick={() => setActiveMenu(menu.pathName)}
            className={`flex items-center space-x-4 py-4 pl-6 rounded-l-full cursor-pointer transition duration-150 ${
              activeMenu === menu.pathName ? 'active' : null
            }`}
          >
            <span>{menu.icon}</span>
            <span>{menu.title}</span>
          </div>
        </Link>
      ))}
    </aside>
  )
}

export default SideBar
