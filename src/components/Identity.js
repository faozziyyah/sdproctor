import React from 'react'
import logo from '../images/logo.png'
import image from '../images/Speed test-rafiki (1) 1.png'
import image1 from '../images/uil_capture.png'

const Identity = () => {
  return (
    
    <div className='register-container'>

        <section className='identity'>

            <img src={image1} alt='' id='image1' />

            <p className='verifyp'>Verify Your Identity</p>

        </section>

        <aside className='register-left'>

            <img src={logo} alt='logo' id='logo' />
            <img src={image} alt='' id='image' />
        </aside>

    </div>
    
  )
}

export { Identity }