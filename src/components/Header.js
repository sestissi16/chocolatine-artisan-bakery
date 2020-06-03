import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <header id="home">
        <div id="headerContainer">
            <div id="homeInfo">
                <h1>Welcome to <span className="spanTitle">Chocolatine</span></h1>
                <br/>
                <h2 id="homeTagline">We make French baked goods with love, so kickstart your day with us!</h2>
            </div>
        </div>
    </header>
  );
};

export default Header;
