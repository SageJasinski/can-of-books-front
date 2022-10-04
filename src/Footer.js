import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './Styles/Navbar.scss'

class Footer extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand>Code Fellows</Navbar.Brand>
      </Navbar>
    )
  }
}

export default Footer;
