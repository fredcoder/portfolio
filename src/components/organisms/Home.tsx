import React from 'react'
import Logo from '../atoms/Logo'
import Spinner from '../atoms/Spinner'

function Home() {
  return (
    <section id="home">
      <section id="wrapper">
        <h1 id="title">Hi! I'm Freddy</h1>
        <p id="description">
          I am a Melbourne based system engineer and web developer.
          <br />
          I create custom websites to help business do better online.
          <br />
          <br />
          Take a look at some of my work below and{' '}
          <a id="contactLink" href="#contact">
            get in touch!
          </a>
        </p>
      </section>
      <div id="water-mark">
        <Logo />
      </div>
      <Spinner />
    </section>
  )
}

export default Home
