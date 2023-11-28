import React, { useState, useEffect} from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const Navbar = () => {

  const navigate = useNavigate();
 
  const logoutAction = () => {
      axios.post('https://demo.schautomate.com.ng/logout',{}, { headers:{Authorization: 'Bearer ' + localStorage.getItem('token')}})
      .then((r) => {
          localStorage.setItem('token', "")
         navigate("/");
      })
      .catch((e) => {
          console.log(e)
      });
  }

  return (
    <header>

        <img src={logo} alt='logo' id='logo1' />

        <nav>

            <Link to="/" className='link'>Home</Link>
            <Link to='/exam' className='link'>Why SD Proctor</Link>
            <Link to='/' className='link'>About</Link>
            <Link to='/' className='link' id='contact'>Contact</Link>
            <Link to="/logout" className='link' onClick={()=>logoutAction()}>Logout</Link>  
            <Link to="/login" className='link'>Login</Link>
            
            {/* <Link to='/register' className='link'>Register</Link> */}


        </nav>
    </header>
  )
}

export {Navbar}