import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Styles/Navbar.scss';
import Logo from './img/Logo2.png'

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" >
        <Navbar.Brand>
            <img 
            alt='' 
            src={Logo}  
            width="200px"
            height="50px" 
            className="d-inline-block align-top"/>
        </Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        <NavItem><Link to="/about" className='nav-link'>About</Link></NavItem>
      </Navbar>
    )
  }
}

export default Header;
