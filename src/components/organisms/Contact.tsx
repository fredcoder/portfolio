import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPaperPlane,
  faMapMarkerAlt,
  faMobileAlt,
} from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Contact() {
  // submitForm = this.submitForm.bind(this);

  const [mailForm, setMailForm] = useState({
    status: '',
    name: true,
    email: true,
    message: true,
    warning: false,
  })

  useEffect(() => {
    AOS.init()
  }, [])

  const inputChange = (value: string) => {
    let name = document.getElementById('name')
    let email = document.getElementById('email')
    let message = document.getElementById('message')
    let warning = document.getElementById('warning')

    if (value === 'name') name?.removeAttribute('class')
    if (value === 'email') email?.removeAttribute('class')
    if (value === 'message') message?.removeAttribute('class')
    warning?.removeAttribute('class')

    let newMailForm = { ...mailForm }
    newMailForm.warning = false
    setMailForm(newMailForm)
  }

  const submitForm = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    const form = ev.target as HTMLFormElement

    /* Form validation */
    let name = document.getElementById('name') as HTMLInputElement
    let email = document.getElementById('email') as HTMLInputElement
    let message = document.getElementById('message') as HTMLInputElement
    let warning = document.getElementById('warning') as HTMLInputElement

    name?.removeAttribute('class')
    email?.removeAttribute('class')
    message?.removeAttribute('class')

    let newMailForm = { ...mailForm }

    if (name?.value === '') {
      newMailForm.name = false
      name?.setAttribute('class', 'invalid')
    }

    if (email?.value === '') {
      newMailForm.email = false
      email.setAttribute('class', 'invalid')
    }

    if (message?.value === '') {
      newMailForm.message = false
      message.setAttribute('class', 'invalid')
    }

    if (name?.value === '' || email?.value === '' || message?.value === '') {
      warning.setAttribute('class', 'visible')
      newMailForm.warning = false
      return
    }
    warning.removeAttribute('class')

    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        newMailForm.status = 'SUCCESS'
      } else {
        newMailForm.status = 'ERROR'
      }
    }
    xhr.send(data)

    setMailForm(newMailForm)
  }

  return (
    <>
      <section id="contact" data-aos="fade-up">
        <section id="wrapper">
          <h1 id="title" data-aos="fade-up">
            Contact
          </h1>
          <hr />
          <div id="flex-box">
            <div id="details" data-aos="fade-up">
              <p>Get in touch!</p>
              <div>
                <span
                  onClick={() => {
                    window.open(`mailto:freddy.clavijo@gmail.com`)
                  }}
                >
                  <FontAwesomeIcon icon={faPaperPlane} />{' '}
                  freddy.clavijo@gmail.com
                </span>
              </div>
              <div>
                <span
                  onClick={() => {
                    document.location.href = `tel:+61 0416 844 858`
                  }}
                >
                  <FontAwesomeIcon icon={faMobileAlt} /> +61 0416 844 858
                </span>
              </div>
              <div>
                <span
                  onClick={() => {
                    window.open(
                      `https://www.google.com/maps/place/Melbourne+VIC`
                    )
                  }}
                >
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> Melbourne, VIC,
                  Australia
                </span>
              </div>
            </div>
            <form
              onSubmit={(ev) => submitForm(ev)}
              action="https://formspree.io/meqpjajk"
              method="POST"
              id="contact-form"
              data-aos="fade-up"
            >
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your Name*"
                onChange={() => inputChange('name')}
              />
              <input
                id="email"
                type="email"
                name="_replyto"
                placeholder="Your Email*"
                onChange={() => inputChange('email')}
              />
              <textarea
                id="message"
                name="message"
                placeholder="Message*"
                data-gramm_editor="false"
                onChange={() => inputChange('message')}
              ></textarea>
              <label id="warning">* Please fill out all fields</label>
              <input type="submit" value="Send" />
            </form>
          </div>
        </section>
      </section>
    </>
  )
}

export default Contact
