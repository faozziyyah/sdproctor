import React from 'react'
import { Navbar } from './Navbar'
import image from '../images/Editing body text-rafiki 1.png'
import image1 from '../images/Group 72.png'

const Home = () => {
  return (
    <>

        <Navbar />

        <section id='hero'>

            <article>
                <h2>Enhancing the Integrity of Online Examinations</h2>
                <p>At SD proctor we are foused  on creating  more secured/ safe methods for students to take exams</p>
                <button>Learn More</button>
            </article>

            <img src={image} alt='' />

        </section>

        <section id='about'>

            <img src={image1} alt='' />

            <article>
                <h2>Why SDproctor?</h2>
                <p>Studies has shown that the conventional way of conducting examinations, 
                    where supervisors keep an eye on students has long served as a deterrent to academic misconduct. 
                    However, as education goes beyond limits and classrooms become virtual, 
                    guaranteeing the genuineness and honesty of assessments has become a complex task. 
                    for this reason the need, for a proctoring website is very essential to solve/ improve the following:
                </p>
            </article>

        </section>

    </>
  )
}

export {Home}