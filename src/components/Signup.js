import React from 'react'
import logo from '../images/logo.png'
import image from '../images/Sign up-rafiki (1) 1.png'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='register-container'>

        <section className='registration'>

        <h2>registration</h2>

        <form>

            <fieldset>
                <legend>Name</legend>
                <input type='text' placeholder='Enter your full name here' />
            </fieldset>

            <fieldset>
                <legend>Email</legend>
                <input type='email' placeholder='Enter your email address here' />
            </fieldset>

            <fieldset>
                <legend>Password</legend>
                <input type='password' placeholder='Enter your password here' />
            </fieldset>

            <fieldset>
                <legend>Confirm Password</legend>
                <input type='text' placeholder='Confirm Password' />
            </fieldset>

            <Link className='register-btn' to='/identification'>Register</Link>

        </form>

        </section>

        <aside className='register-left'>

            <img src={logo} alt='logo' id='logo' />
            <img src={image} alt='' id='image' />
        </aside>

    </div>
  )
}

export { Register }