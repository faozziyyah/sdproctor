import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './admin.css'
import logo from '../../images/logo.png'

const Aside = () => {
  return (
    <aside id='aside'>

        <Link to="/" style={{display: 'flex', justifyContent: 'center', alignItems: 'center',
             width: '20%', alignSelf: 'end', marginTop: '2em'
        }}>
            <img src={logo} alt='logo' id='logo' />
        </Link>

        <section className='tabs'>

            <Link to="/" style={{display: 'flex', justifyContent: 'center', alignItems: 'center',
                 width: '20%', alignSelf: 'end', marginTop: '2em'
            }}>
                Set Exam
            </Link>

            <Link to="/" style={{display: 'flex', justifyContent: 'center', alignItems: 'center',
                 width: '20%', alignSelf: 'end', marginTop: '2em'
            }}>
                Users
            </Link>

        </section>

        </aside>
  )
}

export {Aside}