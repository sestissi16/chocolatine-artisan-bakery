import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
  Box
} from "@chakra-ui/core";
import LeftTitleBorder from '../assets/blackFlowerThinDivider3-LeftEnd-Transparent.png'
import RightTitleBorder from '../assets/blackFlowerThinDivider3-RightEnd-Transparent.png'
import SectionDivider from '../assets/blackFlowerThinDivider2-FullLine-Transparent.png'
import './Menu.css'

const Menu = () => {
  return (
    <section id="menu">
        <div id="menuContainer">
          <div id="menuTitle">
            <img src={LeftTitleBorder} alt="left ornamental title border" id="leftTitleBorder"/>
            <h1 id="menuSectionTitle">Menu:</h1>
            <img src={RightTitleBorder} alt="right ornamental title border" id="rightTitleBorder"/>
          </div>
          <div id="menuSavoryContainer">
            <h2 id="menuSavoryTitle">Savory Items:</h2>
            <img src={SectionDivider} alt="black ornamental divider" id="savoryDivider"/>
            <Accordion defaultIndex={[0]} allowMultiple>
              <div id="croissantContainer">
                <div id="croissantGeneralInfo">
                  <h3>Croissants</h3>
                  <h4>2.00 - 3.80</h4>
                </div>
                <AccordionItem>
                  <AccordionHeader id="croissantAccordianHeader" _expanded={{ background: "#942624 !important", color: "white" }}>
                    <Box flex="1" textAlign="left">
                      Click For More Info
                    </Box>
                    <AccordionIcon />
                  </AccordionHeader>
                  <AccordionPanel pb={4} id="croissantAccordianPanel">
                    <ul id="croissantList">
                      <li className="croissantListItem">
                        <h6>Everything</h6>
                        <h6>2.00 ea.</h6>
                      </li>
                      <ul className="croissantItemExplanation">
                        <li>A croissant with herbs de provence sprinkled on top</li>
                      </ul>
                      <li className="croissantListItem">
                        <h6>Ham and Cheese OR Turkey and Cheese</h6>
                        <h6>3.80 ea.</h6>
                      </li>
                      <ul className="croissantItemExplanation">
                        <li>Ham or turkey and swiss cheese wrapped in croissant dough</li>
                      </ul>
                    </ul>
                  </AccordionPanel>
                </AccordionItem>
              </div>
            </Accordion>
          </div>
        </div>
    </section>
  );
};

export default Menu;
