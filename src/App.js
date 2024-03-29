import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Header from './Header'
import MainContent from './MainContent';
import Footer from './Footer'

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
