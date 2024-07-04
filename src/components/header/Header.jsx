import React from 'react'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import './header.css'
const Header = () => {
  return (
    <header>

      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Satyam Pundir</h1>
        <h5 className='text-light'>Fullstack Developer</h5>

        <CTA />
        <HeaderSocials/>
        <div className="me">
          <img src="../src/assets/Profile_Pic.png" alt="Profile pic" />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>



    </header>
  )
}

export default Header