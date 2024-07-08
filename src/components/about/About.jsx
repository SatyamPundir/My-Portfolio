import React from 'react'
import ME from '../../assets/Profile_Pic.png'
import { BsAwardFill } from 'react-icons/bs'
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
          <div className="about__content">
            <div className="about__cards">
              <div className="about__card">
                <article>
                  <BsAwardFill />
                  <h5>Experience</h5>
                  <small>2+ Years and Gaining</small>
                </article>
              </div>
              <div className="about__card">
                <article>
                  <BsAwardFill />
                  <h5>Projects</h5>
                  <small>5+ Completed, More in Progress</small>
                </article>
              </div>
              <div className="about__card">
                <article>
                  <BsAwardFill />
                  <h5>Certifications</h5>
                  <small>4+ Certified, Continuously Learning</small>
                </article>
              </div>
            </div>
          </div>

          <p>
          I am a passionate AI/ML and Cloud enthusiast with a strong academic background and hands-on experience in full-stack web development. Currently, I am persuing a Bachelor of Technology in Information Technology from Vellore Institute of Technology. My journey in tech is fueled by a relentless curiosity and a drive to apply academic knowledge to real-world challenges.
          </p>
          <a href="#contact" className='btn btn-primary'>Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default About