import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './Styles/Navbar.scss'
import './Styles/footer.scss'

class Footer extends React.Component {
  render() {
    return (
      <Navbar className="foot" collapseOnSelect expand="lg">
        <Navbar.Brand>Code Fellows</Navbar.Brand>
      </Navbar>
    )
  }
}

export default Footer;
