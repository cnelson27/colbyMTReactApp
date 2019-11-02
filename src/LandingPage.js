import React from 'react';
import './LandingPage.css';

class LandingPage extends React.Component {
  render () {
    return (
      <div>
        <div className="nameHeading">
          <h1 className="nameText">Colby Nelson</h1>
          <h3 className="nameSubheading">Information Systems Student and Outdoors Enthusiast</h3>
        </div>
        <div className="landingContent">
          <h1>Thanks for visiting!</h1>
          <p>
            I am a student at Brigham Young University, and I am passionate about using technology to improve the world around me. 
            I am currently enrolled in the Masters of Information Systems Management program in the Marriott School of Business at BYU, 
            and I am seeking internship opportunities for the summer of 2020 and full-time opportunities post-graduation in April of 2021.
            I love the outdoors and especially the Northern Rocky Mountain region.
            <br />
            <br />
            With that combination, I am seeking opportunities where I can put my technology interests to use while continuing to enjoy the best the outdoors has to offer.
          </p>
        </div>
    </div>
    );
  }
}

export default LandingPage;

