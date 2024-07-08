import React from 'react'
import SITE1 from '../../assets/portfolio.png'
import SITE2 from '../../assets/googledocs.png'
import SITE3 from '../../assets/AI_ML_project.png'
import SITE4 from '../../assets/eduloop.png'
import SITE5 from '../../assets/keyLogger.png'
import docs from "../../assets/KeyLogger.pdf";

import './portfolio.css'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent Work</h5>
      <h2>Project</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img className='first' src={SITE1} alt="" />
          </div>
          <h3>My Portfolio Website (Front-End ReactJs)</h3>
          <div className="portfolio__item-cta">

          <a href="https://github.com/SatyamPundir/My-Portfolio" className='btn btn-primary' target='_blank'>Github</a>
          {/* <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a> */}
          </div>

        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={SITE2} alt="" />
          </div>
          <h3>Google Docs Clone (FullStack)</h3>
          <div className="portfolio__item-cta">

          <a href="https://github.com/SatyamPundir/Google-Docs-Clone/tree/main" className='btn btn-primary' target='_blank'>Github</a>
          {/* <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a> */}
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={SITE3} alt="" />
          </div>
          <h3>Deep Learning Logo Classification (CNN)</h3>
          <div className="portfolio__item-cta">

          <a href="https://github.com/SatyamPundir/Logo-Detection-CNN" className='btn btn-primary' target='_blank'>Github</a>
          {/* <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a> */}
          </div>
        </article>


        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={SITE4} alt="" />
          </div>
          <h3>EduLoop MEAN Stack Project</h3>
          <div className="portfolio__item-cta">

          <a href="https://github.com/SatyamPundir/Eduloop" className='btn btn-primary' target='_blank'>Github</a>
          {/* <a href="../" className='btn btn-primary' target='_blank'>Live Demo</a> */}
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={SITE5} alt="" />
          </div>
          <h3>Key Logger Attack</h3>
          <div className="portfolio__item-cta">

          <a href="https://github.com/SatyamPundir/KeyLoggerServer" className='btn' target='_blank'>Github</a>
          <a href={docs} className='btn btn-primary' download="KeyLogger.pdf" target='_blank'>Documentation </a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio