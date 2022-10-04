import { Component } from "react";
import './Styles/About.scss'

class Profile extends Component {

  render() {
    /* TODO: render information about the developers */
    return(
      <>
      <h2 className="names">Sage Jasinski</h2>
        <a className="linked" href="https://github.com/SageJasinski">Sage on Github</a>
      <br></br>
        <a className="linked" href="https://www.linkedin.com/in/sage-jasinski-87186a191/">Sage on LinkedIn</a>

      <h2 className="names">Chris Hollis</h2>
        <a className="linked" href="https://github.com/Hollistr/">Chris on Github</a>
        <br></br>
        <a className="linked" href="https://www.linkedin.com/in/christopher-hollis-1ba7871a8/">Chris on LinkedIn</a>
      </>
    )
  }
};

export default Profile;
