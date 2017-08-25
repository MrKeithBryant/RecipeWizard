import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Navbar, NavbarToggler, NavbarBrand, Collapse, Nav, NavItem, NavLink } from 'reactstrap';

export default class BaseLayout extends React.Component {
  render () {
    return (
      <div>
      <Navbar color="faded" light toggleable>
        <NavbarBrand href="/">Recipe Wizard</NavbarBrand>
          <Nav className="ml-auto">
            <NavItem>
              <NavLink><Link to="/inventory">Inventory</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/kitchen">Kitchen</Link></NavLink>
            </NavItem>
          </Nav>
      </Navbar>
       <div className="home">
        {this.props.children}
      </div>

      <div className='footer'>
        <center className='copy'> Copyright 2017 </center>
      </div>
      </div>
    )
  }
}
