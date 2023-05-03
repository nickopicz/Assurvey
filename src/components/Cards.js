import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Take popular surveys</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='What are you doing this summer?'
              label='By Eshan Sharma'
              path='/sign-up'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Best travel destinations'
              label='By Nicholas Ciraulo'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Best places to hide a dead body'
              label='By Lauren Ingrahm'
              path='/sign-up'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Why soccer is the best sport'
              label='By Rishabh Dhadda'
              path='/sign-up'
            />
            <CardItem
              src='images/img-8.jpg'
              text='What is your favorite desert?'
              label='By Christopher Roddy'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
