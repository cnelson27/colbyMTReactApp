import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Resume from './Resume';

class App extends React.Component {
  state = {
    showResume: false
  }

  toggleResumeShow = () => {
    this.setState(prevState => ({
      showResume: !prevState.showResume
    }))
  }

  render () {
    return (
      <div id="mainContent">
        <div class="mastheadSection">
          <Navbar />
          <div class="nameHeading">
            <h1 class="nameText">Colby Nelson</h1>
            <h3 class="nameSubheading">Information Systems Student and Outdoors Enthusiast</h3>
          </div>
        </div>
        <div className="row">
      </div>
        <div id="contentSection">
          <button onClick={this.toggleResumeShow}>
            Click to Show Resume
          </button>
          {this.state.showResume ? <Resume /> : <div></div>}
        </div>
      </div>
    );
  }
}

export default App;
