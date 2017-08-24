import React from 'react';
import { Button, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import FoodCard from './FoodCard';
import Ingredient from './Ingredient';

export default class inventory extends React.Component {
  render () {
    return (
      <div className='home-container'>
        <div className='home'>
          <h1 className='inventory'><center> Inventory </center></h1>
          <FoodCard backgroundImage='/Steaks1.jpeg'>
            <Ingredient />
            <Ingredient />
            <Ingredient />
            <Ingredient />
          </FoodCard>
          <FoodCard backgroundImage='/CoffeeBeansPic.jpeg'>
            <Ingredient />
            <Ingredient />
            <Ingredient />
            <Ingredient />
          </FoodCard>
          <FoodCard backgroundImage='/Ribs.jpeg'>
            <Ingredient />
            <Ingredient />
            <Ingredient />
            <Ingredient />
          </FoodCard>
          <FoodCard backgroundImage='/MultipleIngredientsPic.jpeg'>
            <Ingredient />
            <Ingredient />
            <Ingredient />
            <Ingredient />
          </FoodCard>
          <div>
            <Button id='wizard' color="secondary">Wizard Ready!</Button>{' '}
          </div>
        </div>
      </div>
    )
  }
}
