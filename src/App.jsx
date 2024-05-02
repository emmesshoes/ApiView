import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RandomUserComponent from './components/viewApi/viewApi'
import CloseApproachData from './components/viewApi/nasaView'
import CarouselFade from './components/carrusel/carrusel'
import Tarjeta from './components/ExampleCarouselImage/tarjeta'
import Tarjeta2 from './components/ExampleCarouselImage/tarjeta2'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <div className={darkMode ? 'dark-mode' : ''}>
      <button onClick={toggleDarkMode}>
        Toggle Dark Mode
      </button>
      <RandomUserComponent />
   
      <Tarjeta2 />
      </div>
    </>
  )
}

export default App
