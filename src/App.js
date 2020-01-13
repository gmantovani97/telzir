import React from 'react';

import './styles/global.scss';

import Header from './components/Header';
import Pricing from './pages/Pricing';

export default function App() {
  return (
    <>
      <Header />
      <Pricing />
    </>
  );
}
