import React from 'react'
import './App.css'
import Navbar from './components/molecules/Navbar'
import About from './components/organisms/About'
import Contact from './components/organisms/Contact'
import Home from './components/organisms/Home'
import Projects from './components/organisms/Projects'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default App
