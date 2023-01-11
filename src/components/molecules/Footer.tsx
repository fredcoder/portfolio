import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      <p id="description">
        <span>
          <a href="https://www.linkedin.com/in/freddy-clavijo-3b144453/">
            <FontAwesomeIcon icon={faLinkedin as IconProp} />
          </a>
        </span>
        <span>
          <a href="https://www.instagram.com/fredcoder/">
            <FontAwesomeIcon icon={faInstagram as IconProp} />
          </a>
        </span>
        <span>
          <a href="https://github.com/fredcoder">
            <FontAwesomeIcon icon={faGithub as IconProp} />
          </a>
        </span>
      </p>
      <p id="copy">&copy; {year} | Fredcoder</p>
    </footer>
  )
}

export default Footer
