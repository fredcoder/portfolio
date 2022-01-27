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
} from '@fortawesome/free-brands-svg-icons'
import {
  faDatabase,
  faRocket,
  faUserClock,
  faGlobe,
  faProjectDiagram,
  faCodeBranch,
} from '@fortawesome/free-solid-svg-icons'

function About() {
  const skillItems = [
    { icon: faHtml5, title: 'HTML 5' },
    { icon: faCss3Alt, title: 'CSS 3' },
    { icon: faJs, title: 'Javascript' },
    { icon: faReact, title: 'React JS' },
    { icon: faReact, title: 'React Native' },
    { icon: faDatabase, title: 'SQL' },
    { icon: faMicrosoft, title: 'NET' },
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
              I am a Systems Engineer and Full Stack Developer with over 6+
              years of experience in software engineering and web development.
              Throughout my career I have worked for various technology
              companies, where I have managed to develop various web
              applications and features by using the best programming practices
              such as design patterns, standardized source code and
              human-readable technical documentation.
              <br />
              <br />
              Currently I am located in the city of Melbourne working for a
              software company where in addition to applying my knowledge in
              frontend and backend development, I am also venturing into the
              development of multiplatform mobile applications through the use
              of React Native.
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
                <FontAwesomeIcon icon={item.icon} /> {item.title}
              </span>
            ))}
          </div>
        </section>
      </section>
    </>
  )
}

export default About
