import NavBar from './components/NavBar.jsx'
import SideBar from './components/SideBar/index.jsx'
import Order from './pages/Order.jsx'
import EmptyPage from './pages/EmptyPage.jsx'
import Details from './pages/Detailes.jsx'
import { Routes, Route } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { menus } from './components/SideBar/menus'

function App() {
  return (
    <IconContext.Provider value={{ className: 'react-icons' }}>
      <div className='box-border font-body tracking-wide'>
        <NavBar />
        <section className='flex flex-row'>
          <SideBar />
          <main className='grow p-2 md:p-5'>
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
              <Route path='/order/:id' element={<Details />} />
            </Routes>
          </main>
        </section>
      </div>
    </IconContext.Provider>
  )
}

export default App
