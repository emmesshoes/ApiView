import { useState } from 'react'
import './App.css'
import HomePage from './pages/home/HomePage'
import ProfilePage from './pages/profile/ProfilePage'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
    <BrowserRouter>
        <Routes>
          
          <Route exact path="/" component={HomePage} />
          <Route path="/profile" component={ProfilePage} /> 
        </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
