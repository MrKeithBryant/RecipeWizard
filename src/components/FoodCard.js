import React from 'react';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

export default class FoodCard extends React.Component {
  render () {
    const {backgroundImage} = this.props;

    const style = {
      backgroundImage: `url('${backgroundImage}')`
    };

    console.log(style);

    return (
      <div className='ing-container'>
        <div className='ingpic'  style={style} />
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
