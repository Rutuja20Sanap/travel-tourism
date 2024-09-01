import React from 'react'
import "./card.css"
function card(props) {
  const { ImgURL, title, description } = props;
  return (
    <div className='cards-container'>
      <img src={ImgURL} className='tour-img' />
      <h1 className='title'>{title}</h1>
      <h2 className='description'>{description}</h2>
    </div>
    
  )
}

export default card