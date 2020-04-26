
import './App.css';
import React from 'react';

import Header from './component/Header';
import Navigation from './component/Navigation';
import Main from './component/Main';
import Footer from './component//Footer';

function App() {
  return (
    <div className="weather-channel__container">
      <Header />
      <Navigation />
      <Main />
      <Footer />
    </div>
  )
}

export default App;