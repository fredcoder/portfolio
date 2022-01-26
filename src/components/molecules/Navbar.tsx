import React, { useState } from 'react'
import Logo from '../../assets/images/logo.png'
import '../../App.css'
import Hamburger from '../atoms/Hamburger'

function Navbar() {
  const menuItems = [
    { title: 'About Me', link: '#aboutMe' },
    { title: 'Projects', link: '#projects' },
    { title: 'Contact', link: '#contact' },
  ]

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <header>
        <section id="wrapper">
          <div id="logo">
            <img src={Logo} alt="logo" />
          </div>
          <div id="title">
            <img src={Logo} alt="logo" />
            <p>Freddy | Developer</p>
          </div>
          <nav id="menu-max">
            <ul>
              {menuItems.map((item) => (
                <li key={item.title}>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </nav>
          <Hamburger isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </section>
      </header>
      <div id="shadow" />
      <div id="hidden" />
      <nav id="menu-min-options" className={isMenuOpen ? ' show' : ' hidden'}>
        <ul>
          {menuItems.map((item) => (
            // <li key={item.title}>
            //   <button onClick={toggleMenu} type="button">
            //     <a href={item.link}>{item.title}</a>
            //   </button>
            // </li>
            <li key={item.title} onClick={toggleMenu}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Navbar
