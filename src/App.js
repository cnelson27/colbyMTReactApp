import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Resume from './Resume';
import Header from './Header';
import Footer from './Footer';

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
      <div id="appContainer">
        <Navbar />
        <Header />
        <div id="mainContent">
          <button onClick={this.toggleResumeShow}>
            Click to Show Resume
          </button>
          {this.state.showResume ? <Resume /> : <div></div>}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
