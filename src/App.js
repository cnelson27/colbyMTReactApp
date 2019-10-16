import React from 'react';
import './App.css';
import Resume from './Resume';
import Footer from './Footer';
import LandingPage from './LandingPage';
import PhotoGallery from './PhotoGallery';

class App extends React.Component {
  state = {
    showResume: false,
    showLandingPage: true,
    showPhotos: false,
    headerImgURL: "images/marchingmen.jpg",
  }

  showResume = () => {
    this.setState(prevState => ({
      showResume: prevState.showResume = true,
      showLandingPage: prevState.showLandingPage = false,
      showPhotos: false
    }))
  }
  showLandingPage = () => {
    this.setState(prevState => ({
      showResume: prevState.showResume = false,
      showLandingPage: prevState.showLandingPage = true,
      showPhotos: false
    }))
  }
  showPhotoGallery = () => {
    this.setState(prevState => ({
      showResume: prevState.showResume = false,
      showLandingPage: prevState.showLandingPage = false,
      showPhotos: true
    }))
  }

  render () {
    return (
      <div id="appContainer">
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <button className="nav-link link-button navbar-brand"  onClick={this.showLandingPage}>Colby Nelson</button>
            </li>
            <li className="nav-item">
              <button className="nav-link link-button"  onClick={this.showResume}>Resume</button>
            </li>
            <li className="nav-item">
              <button className="nav-link link-button"  onClick={this.showPhotoGallery}>Photo Gallery</button>
            </li>
          </ul>
        </nav>
        <div id="mainContent">
          { this.state.showLandingPage ? <LandingPage /> : <div></div> }
          { this.state.showResume ? <Resume /> : <div></div> }
          { this.state.showPhotos ? <PhotoGallery /> : <div></div>}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
