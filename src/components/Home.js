import React from 'react'
import { Navbar } from './Navbar'
import image from '../images/Editing body text-rafiki 1.png'
import image1 from '../images/Group 72.png'
import image2 from '../images/Group 59.png'
import image3 from '../images/Group 58.png'
import image4 from '../images/Group 73.png'
import image5 from '../images/carbon_idea.png'
import image6 from '../images/healthicons_health-data-security-outline.png'
import image7 from '../images/efficiency-svgrepo-com 2.png'
import { Card } from './Card'

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

        <section className='whysd'>

            <Card 
                image = {image2}
                title = 'Academic Integrity'
                text = 'SDProctor help prevent and identify instances of cheating during assessments. Their presence ensures that students are evaluated fairly.' 
            />

            <Card 
                image = {image3}
                title = 'Accessibility'
                text = 'SDproctor offer services that make it easy for students to take exams and assessments from wherever they are.' 
            />

            <Card 
                image = {image4}
                title = 'Prevent cheating'
                text = 'Our websites employ technologies, including AI,Webcam monitoring,to  deter and identify cheating behaviors e.g seeking unauthorized help or using prohibited resources.' 
            />

            <Card 
                className = 'image5'
                image1 = {image5}
                title = 'Data Security'
                text = 'Our proctoring platform plays a role, in safeguarding information and hold holding confidentiality also ensuring student data are secured.' 
            />

            <Card 
                className = 'image6'
                image1 = {image6}
                title = 'Innovation'
                text = 'Our website incorporate,AI powered monitoring and secure data transmission.They play a role,in the modernization of technology.' 
            />

            <Card 
                className = 'image7'
                image1 = {image7}
                title = 'Efficiency'
                text = 'We make  assessment process more efficient, by automating,monitoring and minimizing reliance, on proctors.' 
            />

        </section>

    </>
  )
}

export {Home}