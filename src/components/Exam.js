import React from 'react'
import image from '../images/Ellipse 1.png'
import { Link } from 'react-router-dom'
import videocam from '../images/fluent_video-48-regular.png'
import './Exam.css';

const Exam = () => {
  return (
    <div className='exam-container'>

      <section className='exam-header'>

        <div className='header-left'>

          <img src={image} alt='' />
          <p>welcome Adebimpr</p>

        </div>

        <div className='header-right'>

          <p>0hrs: 05mins: 60seconds</p>
          <Link to='/logout'>Logout</Link>

        </div>

      </section>

      <section className='exam-body'>

        <div className='body-left'>

          <h2>question 1</h2>
          <p>A data type that can be used to declare a minimum of 10 million characters is called ?</p>
          
          <div>
            <input type='radio' value='letters' />
            <label for='letters'>Letters</label>
          </div>
          
          <div>
            <input type='radio' value='Codes' />
            <label for='Codes'>Codes</label>
          </div>
          
          <div>
            <input type='radio' value='Strings' />
            <label for='Strings'>Strings</label>
          </div>
          
          <div>
            <input type='radio' value='Numerics' />
            <label for='Numerics'>Numerics</label>
          </div>

        </div>

        <img src={videocam} alt='' />

      </section>

    </div>
  )
}

export {Exam}