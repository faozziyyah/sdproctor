import React from 'react'
import logo from '../images/logo.png'
import image from '../images/Online test-amico 1.png'
import { Link } from 'react-router-dom'
import image1 from '../images/mdi_checkbox-marked-circle-outline.png'

const Verify = () => {
  return (
    
    <div className='register-container'>

        <section className='identity'>

            <img src={image1} alt='' id='image1' />

            <Link to='/login' className='verifyp'> Identity Verified</Link>

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

export {Verify}