import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <header id="home">
        <div id="headerContainer">
            <div id="homeInfo">
              <div id="homeInfoBorderImage">
                <div id="homeInfoText">
                  <h1 id="homeTitle">Welcome to <span className="spanTitle">Chocolatine</span></h1>
                  <br/>
                  <h2 id="homeTagline">We make European baked goods with love, so kickstart your day with us!</h2>
                  <br/>
                  <h3 id="homeList"> We have warm muffins, buttery biscuits, tasty breads and delicious viennoiseries, and many other delicacies!</h3>
                </div>
              </div>
            </div>
        </div>
    </header>
  );
};

export default Header;