import React from 'react';

import './styles.scss';

export default function Header() {
  return (
    <div className="container">
      <h1>FaleMais</h1>
      <div className="menu-container">
        <div className="menu-button">
          <p>Home</p>
        </div>
        <div className="menu-button">
          <p>Pricing</p>
        </div>
        <div className="menu-button">
          <p>About us</p>
        </div>
        <div className="get-started-button">
          <p>Get Started</p>
        </div>
      </div>
    </div>
  );
}
