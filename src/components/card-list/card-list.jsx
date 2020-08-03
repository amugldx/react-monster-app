import React from 'react';

import Card from '../card/card.jsx';

import './card-list.css';

const card = (props) => (
  <div className='card-list'>
    {
      props.monsters.map(monster => <Card key={monster.id} monster={monster}/>)
    }
  </div>
)

export default card;