import React, { useState } from 'react';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  // const expandMenu = () => {
  //   let showHideMenu = state.showHideMenu;
  //   showHideMenu = (showHideMenu === "hidden") ? "show" : "hidden";
  //   setState({ showHideMenu })
  //   console.log(showHideMenu);
  // }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  // const toggleMenu = () => {
  //   let { isExpanded } = state;
  //   let newExpanded = isExpanded ? false : true
  //   setState({ isExpanded: newExpanded });
  //   console.log("newExpanded: ", newExpanded);
  // }

  const toggleExpandMenu = () => {
    setIsMenuExpanded(!isMenuExpanded);
  }


  // let { isExpanded } = state;
  return (<React.Fragment>
    <header>
      <section id="wrapper">
        <div id="logo">
          {/* <img src={Logo} alt="logo" /> */}
        </div>
        <div id="title">
          {/* <img src={Logo} alt="logo" /> */}
          <a href="#" >Freddy | Developer</a>
        </div>
        <nav id="menu-max">
          <ul>
            <li><a href="#aboutMe">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div id="hamburguer-menu"
          className={isMenuExpanded ? " open" : " collapsed"}
          // data-bs-toggle="collapse"
          // data-bs-target="#navbarCollapse"
          // aria-controls="navbarCollapse"
          // aria-expanded="false"
          // aria-label="Toggle navigation"
          data-bs-toggle="collapsed"
          data-bs-target="#menu-min-options"
          aria-controls="menu-min-options"
          aria-expanded={isMenuExpanded}
          aria-label="Toggle navigation"
          onClick={({ target }) => {
            target.classList.toggle('open');
            console.log("target: ", target);
            toggleExpandMenu()
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
    <div id="hidder"></div>
    <div className="clearfix"></div>
    <nav id="menu-min-options" className={isMenuExpanded ? " show" : " hidden"}>
      <ul>
        <li onClick={toggleMenu}><a href="#aboutMe">About Me</a></li>
        <li onClick={toggleMenu}><a href="#projects">Projects</a></li>
        <li onClick={toggleMenu}><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    <div className="clearfix"></div>
  </React.Fragment>)
}

export default Navbar;
