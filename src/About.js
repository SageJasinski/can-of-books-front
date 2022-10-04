import { Component } from "react";
import './Styles/About.scss'

class Profile extends Component {

  render() {
    /* TODO: render information about the developers */
    return(
      <>
      <h2>Sage Jasinski</h2>
        <a href="https://github.com/SageJasinski">Sage on Github</a>
      <br></br>
        <a href="https://www.linkedin.com/in/sage-jasinski-87186a191/">Sage on LinkedIn</a>

      <h2>Chris Hollis</h2>
        <a href="https://github.com/Hollistr/">Chris on Github</a>
      </>
    )
  }
};

export default Profile;
