import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (      
      <nav className="orange darken-2">
        <div className="nav-wrapper container">
          <a href="#" class="brand-logo">Training Log</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#" className="waves-effect">Activities</a></li>
            <li><a href="#" className="waves-effect">About</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;