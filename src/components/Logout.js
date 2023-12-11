import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {

    const navigate = useNavigate()
  
    function logout () {
      localStorage.clear()
      navigate('/login')
    }

  return (
    <button className='btn-logout' onClick={logout}>Log out</button>
  )
}

export {Logout}