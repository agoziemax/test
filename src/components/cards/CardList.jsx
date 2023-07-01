import React from 'react'
import './card.css';
import images from '../../assets/images';
import Card from './Card'


 const cardData = [
   {
     id: 1,
     image: images.cardImage1,
     value: '750',
     description: 'Transactions',
     indicator: images.cardIndicator,
     percentage: '4%(30days)',
   },
   {
     id: 2,
     image: images.cardImage2,
     value: '2000',
     description: 'Customers',
     indicator: images.cardIndicator,
     percentage: '4%(30days)',
   },
   {
     id: 3,
     image: images.cardImage3,
     value: '900',
     description: 'Agents',
     indicator: images.cardIndicator,
     percentage: '4%(30days)',
   },
 ];

function CardList () {
  return (
    <div className='d-flex gap-4 flex-wrap'>
      {cardData.map((card) => (
        <Card
          key={card.id}
          image={card.image}
          value={card.value}
          description={card.description}
          indicator={card.indicator}
          percentage={card.percentage}
        />
      ))}
    </div>
  );
}

export default CardList
