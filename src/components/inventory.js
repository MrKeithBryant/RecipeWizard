import React from 'react';
import { Button, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import FoodCard from './FoodCard';
export default class inventory extends React.Component {
  render () {
    return (
      <div className='home-container'>
        <div className='home'>
          <h1 className='inventory'><center> Inventory </center></h1>
          <FoodCard backgroundImage='/Steaks1.jpeg'/>
          <FoodCard backgroundImage='/CoffeeBeansPic.jpeg'/>
          <FoodCard backgroundImage='/Ribs.jpeg'/>
          <FoodCard backgroundImage='/MultipleIngredientsPic.jpeg'/>
          <div>
            <Button id='wizard' color="secondary">Wizard Ready!</Button>{' '}
          </div>
        </div>
      </div>
    )
  }
}
