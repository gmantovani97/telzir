import React from 'react';

import Header from './components/Header';
import Pricing from './pages/Pricing';
import GlobalStyle from './styles/global';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Pricing />
    </>
  );
}
