import React from 'react';
import './App.css';
import Home from './Components/Home/Home.js';
import About from './Components/About/About.js';
import Portfolio from './Components/Portfolio/Portfolio.js';
import Capability from './Components/Capability/Capability.js';
import Client from './Components/Client/Client.js';
import Contact from './Components/Contact/Contact.js';
import Weighet from './Components/Weighet/Weighet.js';
import Header from './Components/Header/Header.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Portfolio/>
      <Capability/>
      <Client/>
      <Contact/>
      <Weighet/>
    </div>
  );
}

export default App;
