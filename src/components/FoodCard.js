import React from 'react';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

export default class FoodCard extends React.Component {
  render () {
    return (
      <div className='ing-container'>
        <div id='ingpic3' />
        <div className='ingblock3'>
          <InputGroup id='ingredientinput' size='sm' style={{width: '300px', height: '30px'}}>
            <Input placeholder="Ingredients here!" />
          </InputGroup>
          <InputGroup id='ingredientinput' size='sm' style={{width: '300px', height: '30px'}}>
            <Input placeholder="Ingredients here!" />
          </InputGroup>
          <InputGroup id='ingredientinput' size='sm' style={{width: '300px', height: '30px'}}>
            <Input placeholder="Ingredients here!" />
          </InputGroup>
          <InputGroup id='ingredientinput' size='sm' style={{width: '300px', height: '30px'}}>
            <Input placeholder="Ingredients here!" />
          </InputGroup>
        </div>
      </div>
    )
  }
}
