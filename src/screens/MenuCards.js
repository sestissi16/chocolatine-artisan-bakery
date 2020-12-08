import React from 'react';
import { Button } from "react-bootstrap"
// import {
//   Accordion,
//   AccordionItem,
//   AccordionHeader,
//   AccordionPanel,
//   AccordionIcon,
//   Box
// } from "@chakra-ui/core";
import TopNotes from '../components/menuTopNotes'
import TitleFrame from '../assets/backgrounds/menuLightGreen.png'
import TitleFrameSm from '../assets/backgrounds/menuLightGreenSm.png'
import SectionDivider from '../assets/borders/black/blackFlowerThinDivider2-FullLine-Transparent.png'
import './MenuCards.css'

const Menu = () => {

    return (
      <section id="menu">
          <div id="menuContainer">
            <div id="menuSectionTitle">
                <img src={TitleFrame} alt="About Us Title with Vintage Frame" id="menuTitleImage" class="tabletDesktopSize"/>
                <img src={TitleFrameSm} alt="About Us Title with Vintage Frame" id="menuTitleImage" class="mobileSize"/>
            </div>
            <TopNotes></TopNotes>
            <div id="menuSectionNav">
              <h2 id="menuOrderTypesTitle">Ordering Types</h2>
              <section id="OrderingTypesSection">
                <Button
                    variant="success"
                    className="orderTypeBtn"
                    size="lg"
                >
                    Small Batch Orders
                </Button>
                <Button
                    variant="success"
                    className="orderTypeBtn"
                    size="lg"
                >
                    Catering
                </Button>
                <Button
                    variant="success"
                    className="orderTypeBtn"
                    size="lg"
                >
                    Wholesale
                </Button>
              </section>
            </div>
  
            
  
            
  
            <div id="menuNotesBottom">
              <h4>* Our food is made in a cottage food operation that is not subject to government food safety inspection.</h4>
              <h4>* Our food is made in the same area as nut products and gluten products. <a href="#contact" className="smoothscrool">Message us</a> if you need your food prepared in a different way.</h4>
            </div>
          </div>
      </section>
    );
  };
  
  export default Menu;