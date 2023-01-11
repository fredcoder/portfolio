import React, { useEffect } from 'react'
import photo from '../../assets/images/photo3.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faJs,
  faHtml5,
  faCss3Alt,
  faReact,
  faMicrosoft,
  faDocker,
  faNpm,
} from '@fortawesome/free-brands-svg-icons'
import {
  faDatabase,
  faRocket,
  faUserClock,
  faGlobe,
  faProjectDiagram,
  faCodeBranch,
} from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

function About() {
  const experience = new Date().getFullYear() - 2013
  const skillItems = [
    { icon: faHtml5, title: 'HTML 5' },
    { icon: faCss3Alt, title: 'CSS 3' },
    { icon: faJs, title: 'JavaScript' },
    { icon: faJs, title: 'TypeScript' },
    { icon: faDocker, title: 'Docker' },
    { icon: faReact, title: 'React JS' },
    { icon: faReact, title: 'React Native' },
    { icon: faNpm, title: 'NPM Packages' },
    { icon: faDatabase, title: 'SQL' },
    { icon: faMicrosoft, title: '.NET' },
    { icon: faGlobe, title: 'WebAPI' },
    { icon: faRocket, title: 'Azure DevOps' },
    { icon: faCodeBranch, title: 'GIT' },
    { icon: faUserClock, title: 'Scrum' },
    { icon: faProjectDiagram, title: 'Project Management' },
  ]

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <section id="aboutMe" data-aos="fade-up">
        <section id="wrapper">
          <img src={photo} alt="photo3" data-aos="fade-up" />
          <h1 id="title" data-aos="fade-up">
            About Me
          </h1>
          <hr />
          <div data-aos="fade-up">
            <p id="description">
              I am a Systems Engineer by profession with over {experience} years
              of experience working mainly as a Full-Stack Developer for
              multiple companies in the services and technology sector. I have
              had the opportunity to contribute to various projects designing
              and developing Databases, Services, Web APIs, and Web and Mobile
              applications applying the best programming practices such as SOLID
              principles and design patterns.
              <br />
              <br />
              In recent years, my work has been mostly focused on web and mobile
              development using ReactJS and React Native respectively where I
              have consolidated great expertise.
              <br />
              <br />
              Whether you are interested in my work to be part of a development
              team or want me to contribute to a project, please leave me a
              message and I will get back to you as soon as possible.
              <br />
              <br />
            </p>
          </div>
          <h2 id="title" data-aos="fade-up">
            My Skills
          </h2>
          <div id="skills" data-aos="fade-up">
            {skillItems.map((item) => (
              <span key={item.title}>
                <FontAwesomeIcon icon={item.icon as IconProp} /> {item.title}
              </span>
            ))}
          </div>
        </section>
      </section>
    </>
  )
}

export default About
