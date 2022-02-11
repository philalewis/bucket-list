import React from 'react'
import './Card.css'

const Card = ({ title, description }) => {
  return (
    <article className='card'>
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  )
}

export default Card