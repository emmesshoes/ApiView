import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RandomUserComponent from './components/viewApi/viewApi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RandomUserComponent />
    </>
  )
}

export default App
