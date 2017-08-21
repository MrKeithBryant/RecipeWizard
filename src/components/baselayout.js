import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Navbar, NavbarToggler, NavbarBrand, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class BaseLayout extends React.Component {
  render () {
    return (
      <div className='home'>
        <Navbar color="faded" light toggleable>
         <NavbarToggler right onClick={this.toggle} />
         <NavbarBrand href="/">Recipe Wizard</NavbarBrand>
           <Nav className="ml-auto" navbar>
             <NavItem>
               <NavLink href="/kitchen/">Kitchen</NavLink>
             </NavItem>
             <NavItem>
               <NavLink href="/inventory">Inventory</NavLink>
             </NavItem>
           </Nav>
       </Navbar>

        {this.props.children}

      <div className='footer'>
        <center className='copy'> Copyright 2017 </center>
      </div>
      </div>
    )
  }
}
