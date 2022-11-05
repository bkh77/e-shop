import NavBar from './components/NavBar.jsx'
import SideBar from './components/SideBar/index.jsx'
import { Routes, Route } from 'react-router-dom'
import { IconContext } from 'react-icons'
import Order from './pages/Order.jsx'
import EmptyPage from './pages/EmptyPage.jsx'
import { menus } from './components/SideBar/menus'

function App() {
  return (
    <IconContext.Provider value={{ className: 'react-icons' }}>
      <div className='font-body tracking-wide box-border'>
        <NavBar />
        <section className='flex flex-row'>
          <SideBar />
          <main className='p-2 md:p-5 grow md:pr-12'>
            <Routes>
              {menus
                .filter((menu) => menu.pathName !== '/order')
                .map(({ pathName, title }) => (
                  <Route
                    key={title}
                    path={pathName}
                    element={<EmptyPage pageName={title} />}
                  />
                ))}
              <Route path='/order' element={<Order />} />
            </Routes>
          </main>
        </section>
      </div>
    </IconContext.Provider>
  )
}

export default App
