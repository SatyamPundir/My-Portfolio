import React from 'react'
import SITE1 from '../../assets/site1.png'
import SITE2 from '../../assets/site2.png'
import SITE3 from '../../assets/site3.avif'
import SITE4 from '../../assets/site4.avif'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent Work</h5>
      <h2>Project</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={SITE1} alt="" />
          </div>
          <h3>This is a Portfolio Title</h3>
          <div className="portfolio__item-cta">

          <a href="https://github.com" className='btn'>Github</a>
          <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>

        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={SITE1} alt="" />
          </div>
          <h3>This is a Portfolio Title</h3>
          <div className="portfolio__item-cta">

          <a href="https://github.com" className='btn'>Github</a>
          <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={SITE4} alt="" />
          </div>
          <h3>This is a Portfolio Title</h3>
          <div className="portfolio__item-cta">

          <a href="https://github.com" className='btn'>Github</a>
          <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>


        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={SITE1} alt="" />
          </div>
          <h3>This is a Portfolio Title</h3>
          <div className="portfolio__item-cta">

          <a href="https://github.com" className='btn'>Github</a>
          <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio