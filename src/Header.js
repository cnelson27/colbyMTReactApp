import React from 'react';
import './HeaderFooter.css';

class Header extends React.Component {
  render () {
    return (
      <div className="mastheadSection">
        <div className="nameHeading">
          <h1 className="nameText">Colby Nelson</h1>
          <h3 className="nameSubheading">Information Systems Student and Outdoors Enthusiast</h3>
        </div>
      </div>
    );
  }
}

export default Header;