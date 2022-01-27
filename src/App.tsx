import React from 'react'
import './App.css'
import Navbar from './components/molecules/Navbar'
import About from './components/organisms/About'
import Home from './components/organisms/Home'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
    </>
  )
}

export default App
