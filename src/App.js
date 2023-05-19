import React from 'react';

import {
  Footer,
  Blog,
  Possibilities,
  Features,
  WhatGPT3,
  Header,
} from './containers/index.js';
import { CTA, Brand, Navbar } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibilities />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
