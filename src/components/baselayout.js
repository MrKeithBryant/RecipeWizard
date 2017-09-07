import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Navbar, NavbarToggler, NavbarBrand, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class BaseLayout extends React.Component {
  render () {
    return (
        <div>
          <Navbar id='Nbar' color="faded" light toggleable>
            <NavbarBrand href="/" style={{color: 'darkgoldenrod'}}>Recipe Wizard</NavbarBrand>
            <Nav className="ml-auto">
            <NavItem>
              <NavLink><Link to="/kitchen"style={{color: 'darkgoldenrod'}}>Kitchen</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/inventory" style={{color: 'darkgoldenrod'}}>Inventory</Link></NavLink>
            </NavItem>
            </Nav>
          </Navbar>
        <div className="home">
          {this.props.children}
        </div>

        <div className='footer'>
          <center className='copy' style={{color: 'darkgoldenrod'}}> Copyright 2017 </center>
        </div>

        </div>

    )
  }
}
