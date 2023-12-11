import React from 'react'
import logo from '../images/logo.png'
import image from '../images/Online test-amico 1.png'
//import image1 from '../images/Group.png'
import { Link } from 'react-router-dom'
import { ImageVerify } from './ImageVerify'

const Auth = () => {
  return (
    
    <div className='register-container'>

        <section className='identity'>

            <ImageVerify />

           {/* <Link to='/verify' className='verifyp'>Face Authentication</Link> */}

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

export  {Auth}