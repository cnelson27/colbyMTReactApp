import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Content from './Content';

function App() {
  return (
    <div id="mainContent">
      <div class="mastheadSection">
        <Navbar />
        <div class="nameHeading">
          <h1 class="nameText">Colby Nelson</h1>
          <h3 class="nameSubheading">Information Systems Student and Outdoors Enthusiast</h3>
        </div>
      </div>
      <Content />
    </div>
  );
}



export default App;
