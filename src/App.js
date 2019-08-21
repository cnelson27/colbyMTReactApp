import React from 'react';
import './App.css';
import Resume from './Resume';
import Header from './Header';
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
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <button class="nav-link link-button navbar-brand"  onClick={this.showLandingPage}>Colby Nelson</button>
            </li>
            <li class="nav-item">
              <button class="nav-link link-button"  onClick={this.showResume}>Resume</button>
            </li>
            <li class="nav-item">
              <button class="nav-link link-button"  onClick={this.showPhotoGallery}>Photo Gallery</button>
            </li>
          </ul>
        </nav>
        <Header />
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
