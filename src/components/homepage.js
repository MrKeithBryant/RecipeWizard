import React from 'react';
import kitchen from './kitchen.js';
import recimage from '../styles/pictures/Pasta-Pic.jpeg';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

export default class homepage extends React.Component {
  render () {
    return (
    <div className='home'>
      <div>
      <InputGroup id='inputgroup' size='sm' style={{width: '400px'}}>
        <InputGroupAddon>Username</InputGroupAddon>
        <Input placeholder="username" />
      </InputGroup>
      <br />
        <InputGroup id='inputgroup1' size='sm' style={{width: '400px'}}>
          <InputGroupAddon>Password</InputGroupAddon>
          <Input type='password' placeholder='password'/>
        </InputGroup>
        <h1 className='title'> Recipe Wizard </h1>
        <div className='recimage'>
          <img id='recimage' src={recimage}/>
        </div>
      </div>
    </div>
    );
  }
}
