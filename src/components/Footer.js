import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>

      <section className='foot-top'>

        <div className='foot-top-left'>

          <img src={logo} alt='logo' id='logo2' />
          <p>Enhancing remote exams integrity</p>
          <div className='icons'>
            <ion-icon name="logo-whatsapp"></ion-icon>
            <ion-icon name="call-outline"></ion-icon>
            <ion-icon name="mail-outline"></ion-icon>
          </div>

        </div>

        <div className='foot-top-left'>
          
          <Link to='/register' id='link1'>Register</Link>

        </div>

      </section>

      <section className='foot-bottom'>

          <p>&copy; SDproctor 2023</p>

          <div className='foot-nav'>

            <Link to='/' className='link1'>Home</Link>
            <Link to='/' className='link1'>Why SD Proctor</Link>
            <Link to='/' className='link1'>About</Link>
            <Link to='/register' className='link1'>Register</Link>
            <Link to='/' className='link1'>Contact</Link>
            
          </div>
      </section>

    </footer>
  )
}

export {Footer}