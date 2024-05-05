import { useState } from 'react'
import './App.css'
import PageHome from './pages/home/Home'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <PageHome />
    </>
  )
}

export default App
