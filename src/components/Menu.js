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
import ItemDivider from '../assets/blackOrnamentalLine-Transparent.png'
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
                <div className="savoryGeneralInfo">
                  <h3>Croissants</h3>
                  <h4>2.00 - 3.80</h4>
                </div>
                <AccordionItem>
                  <AccordionHeader className="savoryAccordianHeader" _expanded={{ background: "#942624 !important", color: "white" }}>
                    <Box flex="1" textAlign="left">
                      Click For More Info
                    </Box>
                    <AccordionIcon />
                  </AccordionHeader>
                  <AccordionPanel pb={4} className="savoryAccordianPanel">
                    <ul className="savoryList">
                      <li className="savoryListItem">
                        <h5>Everything Spices</h5>
                        <h5>2.00 ea.</h5>
                      </li>
                      <ul className="savoryItemExplanation">
                        <li><h6>A croissant with herbs de provence sprinkled on top</h6></li>
                        <li><h6>(Contains: wheat, dairy)</h6></li>
                      </ul>
                      <li className="savoryListItem">
                        <h5>Ham and Cheese OR Turkey and Cheese</h5>
                        <h5>3.80 ea.</h5>
                      </li>
                      <ul className="savoryItemExplanation">
                        <li><h6>Ham or turkey and swiss cheese wrapped in croissant dough</h6></li>
                        <li><h6>(Contains: wheat, dairy)</h6></li>
                      </ul>
                    </ul>
                    <p className="savoryFullIngredients">
                      <strong>Full List of Ingredients for croissants: </strong> 
                      Wheat Flour, Butter (Pasteurized Cream), Sugar, Powdered Milk (Nonfat Milk, Vitamin A Palmitate, Vitamin D3), 
                      Salt, Yeast, Dough conditioner (Vegetable Gums - Gum Arabic, Guar Gum - Wheat Flour, Enzymes), Water
                    </p>

                  </AccordionPanel>
                </AccordionItem>
              </div>

              <div id="crostiniContainer">
                <div className="savoryGeneralInfo">
                  <h3>Crostinis</h3>
                  <h4>(Pack of 10) 5.00</h4>
                </div>
                <AccordionItem>
                  <AccordionHeader className="savoryAccordianHeader" _expanded={{ background: "#942624 !important", color: "white" }}>
                    <Box flex="1" textAlign="left">
                      Click For More Info
                    </Box>
                    <AccordionIcon />
                  </AccordionHeader>
                  <AccordionPanel pb={4} className="savoryAccordianPanel">
                    <ul className="savoryList">
                      <li className="savoryListItem">
                        <h5>Everything Spices</h5>
                      </li>
                      <ul className="savoryItemExplanation">
                        <li><h6>Coming Soon</h6></li>
                        <li><h6>(Contains: wheat, dairy)</h6></li>
                      </ul>
                      <li className="savoryListItem">
                        <h5>Cheese Mix</h5>
                      </li>
                      <ul className="savoryItemExplanation">
                        <li><h6>Coming Soon</h6></li>
                        <li><h6>(Contains: wheat, dairy)</h6></li>
                      </ul>
                    </ul>
                    <p className="savoryFullIngredients">
                      <strong>Full List of Ingredients for croissants: </strong> 
                      Coming Soon
                    </p>
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
