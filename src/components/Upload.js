import React from 'react'
import logo from '../images/logo.png'
import image from '../images/Images-amico 1.png'
import image1 from '../images/mynaui_image.png'

const Upload = () => {
  return (
    
    <div className='register-container'>

        <section className='identity'>

            <img src={image1} alt='' id='image1' />

            <p className='verifyp'>Upload Your Image</p>

        </section>

        <aside className='register-left'>

            <img src={logo} alt='logo' id='logo' />
            <img src={image} alt='' id='image' />
        </aside>

    </div>
  )
}

export {Upload}