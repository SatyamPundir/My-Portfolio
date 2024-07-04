import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import './experience.css'

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Devlopment</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>HTML</h4>
              <small className="text-light">Experience</small>

              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>JAVASCRIPT</h4>
              <small className="text-light">Experience</small>
              </div>              
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>

              <h4>CSS</h4>
              <small className="text-light">Experience</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>

              <h4>REACT</h4>
              <small className="text-light">Experience</small>
              </div>
            </article>

          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Devlopment</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>

              <h4>NODE JS</h4>
              <small className="text-light">Experience</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>

              <h4>MongoDB</h4>
              <small className="text-light">Experience</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>

              <h4>SQLPLUS</h4>
              <small className="text-light">Experience</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>

              <h4>PYTHON</h4>
              <small className="text-light">Experience</small>
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience