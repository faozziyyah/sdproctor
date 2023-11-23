import React from 'react'
import logo from '../images/logo.png'
import image from '../images/Online test-amico 1.png'
import image1 from '../images/mdi_checkbox-marked-circle-outline.png'

const Verify = () => {
  return (
    
    <div className='register-container'>

        <section className='identity'>

            <img src={image1} alt='' id='image1' />

            <p className='verifyp'>Identity Verified</p>

        </section>

        <aside className='register-left'>

            <img src={logo} alt='logo' id='logo' />
            <img src={image} alt='' id='image' />
        </aside>

    </div>
  )
}

export {Verify}