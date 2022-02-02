import React, { Fragment, useEffect } from 'react'
import weatherApp3 from '../../assets/images/weatherApp3.png'
import TheStraighteningTest from '../../assets/images/TheStraighteningTest.png'
import SafeSets from '../../assets/images/SafeSets.png'
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
import { faDatabase, faGlobe } from '@fortawesome/free-solid-svg-icons'
import LargeButton from '../atoms/LargeButton'

function Projects() {
  useEffect(() => {
    AOS.init()
  }, [])

  const projects = [
    {
      image: weatherApp3,
      title: 'Weather App',
      description: `A very handy React application that provides users with the current status of
        the daily and hourly weather forecast in a graphical and highly detailed way.
        Through the geolocation api, real-time data is obtained from OpenWeather's global services.`,
      techs: [faJs, faHtml5, faCss3Alt, faReact],
      url: 'https://fredcoder.github.io/weather/',
    },
    {
      image: TheStraighteningTest,
      title: 'The Straightening Test',
      description: `The straightening test is an interactive game developed for Orthodontics Australia
        in which you can test your ability to identify the straightness of some images or to
        properly straighten a variety of elements in the way an orthodontist would with your teeth.`,
      techs: [faJs, faHtml5, faCss3Alt, faReact],
      url: 'https://thestraighteningtest.com/',
    },
    {
      image: SafeSets,
      title: 'SafeSets',
      description: `A web solution developed to keep track of the most up-to-date health and safety information relevant
        to the community of filmmakers, producers, crew, and industry professionals. This useful application
        allows you to monitor work locations, the number of people per set, the temperature of team members,
        regular sanitation of production sets, among others.`,
      techs: [
        faDatabase,
        faMicrosoft,
        faGlobe,
        faJs,
        faHtml5,
        faCss3Alt,
        faReact,
      ],
      url: '',
    },
  ]

  return (
    <React.Fragment>
      <section id="projects" data-aos="fade-up">
        <section id="wrapper">
          <h1 id="title" data-aos="fade-up">
            Projects
          </h1>
          <hr />
          {projects.map((project, idx) => (
            <Fragment key={project.title}>
              <div
                className={`${idx % 2 === 0 ? 'flex-box' : 'flex-box-reverse'}`}
              >
                <div
                  className={`project-top ${
                    idx % 2 === 0 ? 'project-top-inverse' : ''
                  }`}
                  data-aos={idx % 2 === 0 ? 'fade-right' : 'fade-left'}
                >
                  <img src={project.image} alt={project.title} />
                </div>
                <div
                  className={`project-bottom ${
                    idx % 2 === 0 ? 'project-bottom-inverse' : ''
                  }`}
                  data-aos={idx % 2 === 0 ? 'fade-left' : 'fade-right'}
                >
                  <h2>{project.title}</h2>
                  <p className="description">{project.description}</p>
                  <p className="technologies">
                    Developed with
                    <span>
                      {project.techs.map((tech, index) => (
                        <FontAwesomeIcon key={index} icon={tech} />
                      ))}
                    </span>
                  </p>
                  {project.url && (
                    <div className="button-box">
                      <LargeButton url={project.url} />
                    </div>
                  )}
                </div>
              </div>
              <hr className="separator-line" />
            </Fragment>
          ))}
        </section>
      </section>
      <div className="clearfix"></div>
    </React.Fragment>
  )
}

export default Projects
