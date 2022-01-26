import React from 'react'

type HamburgerPropTypes = {
  isMenuOpen: boolean
  toggleMenu: () => void
}

function Hamburger({ isMenuOpen, toggleMenu }: HamburgerPropTypes) {
  return (
    <div
      id="hamburger-menu"
      className={isMenuOpen ? ' open' : ' collapsed'}
      data-bs-toggle="collapsed"
      data-bs-target="#menu-min-options"
      aria-controls="menu-min-options"
      aria-expanded={isMenuOpen}
      aria-label="Toggle navigation"
      onClick={({ target }) => {
        toggleMenu()
        ;(target as Element).classList.toggle('open')
      }}
    >
      <span />
      <span />
      <span />
      <span />
    </div>
  )
}

export default Hamburger
