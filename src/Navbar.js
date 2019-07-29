import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="/">Colby Nelson</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Resume</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
