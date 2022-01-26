import React, { useState } from 'react';
import Logo from '../../assets/images/logo.png';
import '../../App.css';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (<>
    <header>
      <section id="wrapper">
        <div id="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div id="title">
          <img src={Logo} alt="logo" />
          <p>{`Freddy | Developer`}</p>
        </div>
        <nav id="menu-max">
          <ul>
            <li><a href="#aboutMe">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div id="hamburger-menu"
          className={isMenuOpen ? " open" : " collapsed"}
          data-bs-toggle="collapsed"
          data-bs-target="#menu-min-options"
          aria-controls="menu-min-options"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
          onClick={({ target }) => {
            target.classList.toggle('open');
            toggleMenu()
          }}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>
    </header>
    <div id="shadow"></div>
    <div id="hidden"></div>
    <nav id="menu-min-options" className={isMenuOpen ? " show" : " hidden"}>
      <ul>
        <li onClick={toggleMenu}><a href="#aboutMe">About Me</a></li>
        <li onClick={toggleMenu}><a href="#projects">Projects</a></li>
        <li onClick={toggleMenu}><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </>)
}

export default Navbar;
