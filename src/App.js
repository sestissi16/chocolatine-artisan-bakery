import React from 'react';
import Navigation from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Menu from './components/Menu'
import Contact from './components/Contact'
import Order from './components/Order'
// import './App.scss'
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <About />
      <Menu />
      <Contact />
      <Order />
    </div>
  );
}

export default App;
