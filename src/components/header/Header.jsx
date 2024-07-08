import React from 'react'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import './header.css'
const Header = () => {
  return (
    <header>

      <div className="container header__container">
        <div className='intro'>
          <h5>Hello I'm</h5>
          <h1>Satyam Pundir</h1>
          <h5 className='text-light'>FullStack Developer</h5>
          <h5 className='text-light'>Passionate AI/ML and Cloud enthusiast</h5>
        </div>

        <CTA />
        <HeaderSocials/>
        <div className='photo'>
          <div className="me">
            <img src="../src/assets/DP_NOBG.png" alt="Profile pic" />
          </div>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>



    </header>
  )
}

export default Header