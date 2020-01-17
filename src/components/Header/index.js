import React from 'react';
import Icon from '@mdi/react';
import { mdiAccountOutline, mdiMenu } from '@mdi/js';

import './styles.scss';

export default function Header() {
  return (
    <div className="header">
      <h1>GixDocs</h1>
      <div className="menu">
        <div className="menu__button">
          <p>Home</p>
        </div>
        <div className="menu__button menu__button--selected">
          <p>Pricing</p>
        </div>
        <div className="menu__button">
          <p>About us</p>
        </div>
        <div className="menu__login">
          <Icon path={mdiAccountOutline} />
          <p>Login</p>
        </div>
        <div className="menu__getstarted">
          <p>Get Started</p>
        </div>
      </div>
      <div className="hamburguer">
        <Icon path={mdiMenu} className="hamburguer__icon" />
      </div>
    </div>
  );
}
