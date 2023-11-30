import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
//import { useNavigate } from "react-router-dom"

const Navbar = () => {

  //const navigate = useNavigate();

  return (
    <header>

        <Link to="/" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img src={logo} alt='logo' id='logo1' />
        </Link>

        <nav>

            <Link to="/" className='link'>Home</Link>
            <Link to='/exam' className='link'>Why SD Proctor</Link>
            <Link to='/' className='link'>About</Link>
            <Link to='/' className='link' id='contact'>Contact</Link>
            {/* <Link to="/logout" className='link' onClick={()=>logoutAction()}>Logout</Link>  */}
            <Link to="/login" className='link'>Login</Link>
            
            {/* <Link to='/register' className='link'>Register</Link> */}


        </nav>
    </header>
  )
}

export {Navbar}