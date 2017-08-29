import React from 'react';
import kitchen from './kitchen.js';
import recimage from '../styles/pictures/Pasta-Pic.jpeg';
import { Button, InputGroup, InputGroupAddon, InputGroupButton, Input } from 'reactstrap';

export default class homepage extends React.Component {
  constructor(props) {
    super(props)
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {name: '', password: ''};
  }

handleNameChange(event){
  this.setState({name: event.target.value})
  }

handlePasswordChange(event) {
  this.setState({password: event.target.value})
}

handleSubmit(event){
  event.preventDefault();
  alert('Thank you, ' + this.state.name + ', ' + 'successful Login!' + ' Adventure awaits!');
}

      render () {
        return (
        <div className='home'>
          <div className='inputSubmit'>
            <form onSubmit={this.handleSubmit}>
              <InputGroup id='inputgroup' style={{width: '400px'}}>
                <InputGroupAddon>Username</InputGroupAddon>
                <Input type="text" name="username" placeholder="username" value={this.state.name} onChange={this.handleNameChange}/>
              </InputGroup>
                <br />
              <InputGroup id='inputgroup1'>
                <InputGroupAddon>Password</InputGroupAddon>
                <Input type="password" password="password" placeholder="password" value={this.state.password} onChange={this.handlePasswordChange}/>
              </InputGroup>
              <center>
                <Button color='secondary' id='subButton' type='submit' value='Submit' style={{ width: '100px', height: '40px'}}>
                  Submit
                </Button>
              </center>
            </form>
          </div>
              <h1 className='title'> Recipe Wizard </h1>
            <div className='recimage'>
              <img id='recimage' src={recimage}/>
            </div>
        </div>

        );
      }
}
