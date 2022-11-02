import NavBar from './components/NavBar.jsx'
import { IconContext } from 'react-icons'
function App() {
  return (
    <div className='App'>
      <IconContext.Provider value={{ className: 'react-icons' }}>
        <NavBar />
      </IconContext.Provider>
      ;
    </div>
  )
}

export default App
