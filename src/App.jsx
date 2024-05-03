import { useState } from 'react'
import './App.css'
import Tarjeta2 from './components/ExampleCarouselImage/tarjeta2'
import DrawerLeft from './components/drawer/Drawer'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      
      
      <DrawerLeft />
   
     
      
    </>
  )
}

export default App
