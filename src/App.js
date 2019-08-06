import React from 'react';
import './App.css';
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
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link navbar-brand" href="/">Colby Nelson</a>
            </li>
            <li class="nav-item">
              <button class="nav-link link-button"  onClick={this.toggleResumeShow}>Resume</button>
            </li>
          </ul>
        </nav>
        <Header />
        <div id="mainContent">
          { this.state.showLandingPage ? <LandingPage /> : <div></div> }
          { this.state.showResume ? <Resume /> : <div></div> }
          
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
