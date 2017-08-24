import React from 'react';
import { InputGroup, Input } from 'reactstrap';

export default class Ingredient extends React.Component {
  render () {
    return (
      <InputGroup id='ingredientinput' size='sm' style={{width: '300px', height: '30px'}}>
        <Input placeholder="Ingredients here!" />
      </InputGroup>

    )
  }
}
