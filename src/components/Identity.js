import React from 'react'
import logo from '../images/logo.png'
import image from '../images/Speed test-rafiki (1) 1.png'
//import image1 from '../images/uil_capture.png'
import { ImageCapture } from './Capturing'
import { Link } from 'react-router-dom'

const Identity = () => {
  return (
    
    <div className='register-container'>

        <section className='identity'>

            <ImageCapture />

            <p className='verifyp'>Verify Your Identity</p>

        </section>

        <aside className='register-left'>

            <Link to="/" style={{display: 'flex', justifyContent: 'center', alignItems: 'center',
                 width: '20%', alignSelf: 'end', marginTop: '2em'
            }}>
                <img src={logo} alt='logo' id='logo' />
            </Link>

            <img src={image} alt='' id='image' />
            
        </aside>

    </div>
    
  )
}

export { Identity }