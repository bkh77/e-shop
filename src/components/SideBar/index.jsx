import { useState } from 'react'
import { menus } from './menus'

function SideBar() {
  const [activeMenu, setActiveMenu] = useState('home')
  return (
    <div className='w-[263px] h-screen bg-blue rounded-tr-[30px] text-white pl-8 py-8'>
      {menus.map((menu) => (
        <div
          onClick={() => setActiveMenu(menu.pathName)}
          key={menu.title}
          className={`flex items-center space-x-4 py-4 pl-6 rounded-l-full cursor-pointer transition duration-150 ${
            activeMenu === menu.pathName ? 'active' : null
          }`}
        >
          <span>{menu.icon}</span>
          <span>{menu.title}</span>
        </div>
      ))}
    </div>
  )
}

export default SideBar
