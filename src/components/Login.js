import React from 'react'
import logo from '../images/logo.png'
import image from '../images/Computer login-rafiki 1.png'

const Login = () => {
  return (
    <div className='register-container'>

        <section className='registration'>

        <h2>login</h2>

        <form>

            <fieldset>
                <legend>Email</legend>
                <input type='email' placeholder='Enter your email address here' />
            </fieldset>

            <fieldset>
                <legend>Password</legend>
                <input type='password' placeholder='Enter your password here' />
            </fieldset>

            <button className='login-btn'>Login</button>

            <p className='enquiry'>Don't have an account ? <a href='http'>Register</a></p>

        </form>

        </section>

        <aside className='register-left'>

            <img src={logo} alt='logo' id='logo' />
            <img src={image} alt='' id='image' />
        </aside>

    </div>
  )
}

export { Login }