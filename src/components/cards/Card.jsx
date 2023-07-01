import React from 'react'
import './card.css'
// import cardImage1 from '../../assets/card-img1.svg';
// import cardIndicator from '../../assets/card-indicator.svg';

function Card({image, value, description, indicator, percentage}) {

  return (
    <div className='card-container'>


      <div className='card  border-0'>
        <div className='d-flex'>
          <div className='p-2'>
            <img src={image} alt='transactions' className='card-image' />
          </div>
          <div className=' d-flex flex-column p-2'>
            <h3 className='value mb-0'>{value}</h3>
            <small className='description'>{description}</small>
            <img src={indicator} alt='arrow' className=' img-fluid indicator w-25' />
            <small className='percentage'>{percentage}</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card
