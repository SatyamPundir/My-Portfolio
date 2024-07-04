import React from 'react'
import ME from '../../assets/Profile_Pic.png'
import {BsAwardFill} from 'react-icons/bs'
import './about.css'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="my pic" />
            </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <div className="about__card">
              <article>
                <BsAwardFill/>
                <h5>Experience</h5>
                <small> 3+ Years Work</small>
              </article>
            </div>
            <div className="about__card">
              <article>
                <BsAwardFill/>
                <h5>Experience</h5>
                <small> 3+ Years Work</small>
              </article>
            </div>
            <div className="about__card">
              <article>
                <BsAwardFill/>
                <h5>Experience</h5>
                <small> 3+ Years Work</small>
              </article>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eius facilis at id voluptas pariatur deserunt, ducimus asperiores sit error doloribus vero! Odit porro voluptas deleniti quasi quod et. Ratione rerum rem eum illum velit impedit quidem cum at fugiat?
          </p>
          <a href="#contact" className='btn btn-primary'>Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default About