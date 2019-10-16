import React from 'react';
import './HeaderFooter.css';

const year = new Date().getFullYear();

class Footer extends React.Component {
  render () {
    return (
      <div className="footerDiv">
        <p className="footerCopy">Colby Nelson &copy; {year}</p>
      </div>
    );
  }
}

export default Footer;

