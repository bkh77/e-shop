import NavBar from './components/NavBar.jsx'
import SideBar from './components/SideBar/index.jsx'
import { IconContext } from 'react-icons'

function App() {
  return (
    <IconContext.Provider value={{ className: 'react-icons' }}>
      <main className='font-body tracking-wide'>
        <NavBar />
        <section className='flex'>
          <SideBar />
        </section>
      </main>
    </IconContext.Provider>
  )
}

export default App
