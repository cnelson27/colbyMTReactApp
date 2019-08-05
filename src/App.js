import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Resume from './Resume';
import Header from './Header';
import Footer from './Footer';
import LandingPage from './LandingPage';

class App extends React.Component {
  state = {
    showResume: false,
    showLandingPage: true
  }

  toggleResumeShow = () => {
    this.setState(prevState => ({
      showResume: !prevState.showResume,
      showLandingPage: ! prevState.showLandingPage
    }))
  }

  render () {
    return (
      <div id="appContainer">
        <Navbar />
        <Header />
        <div id="mainContent">
          { this.state.showLandingPage ? <LandingPage /> : <div></div> }
          { this.state.showResume ? <Resume /> : <div></div> }
          <button onClick={this.toggleResumeShow}>
            Click to Show Resume
          </button>
          
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
