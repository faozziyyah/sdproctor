import React from 'react'

const Card = ({image, title, text, className, image1}) => {
  return (
    <div className='card'>

        <img src={image} alt='' />
        <div className={className}>
          <img src={image1} alt='' />
        </div>
        <h2>{title}</h2>
        <p>{text}</p>
    </div>
  )
}

export {Card}