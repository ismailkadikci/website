import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

import image9 from '../../images/img-7.jpg';
import image2 from '../../images/img-2.jpg';
import image3 from '../../images/img-3.jpg';
import image8 from '../../images/img-8.jpg';

function Cards() 
{
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
   
            <CardItem
              src={image9}
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/website/projects'
            />
            <CardItem
              src={image2}
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/website/projects'
            />
            <CardItem
              src={image2}
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/website/projects'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={image3}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/website/projects'
            />
            <CardItem
              src={image8}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/website/contact'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;