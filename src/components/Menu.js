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
          <div id="menuNotesTop">
            <h3>* Here's a list of everything we offer so you know what to <a href="#order" className="smoothscroll">order</a>!</h3>
            <h3>* Our food can be made gluten free or low sugar if needed and we take flavor requests! <a href="#contact" className="smoothscroll">Message us</a> to see what we can do.</h3>
          </div>
          <div id="menuSavoryContainer">
            <h2 id="menuSavoryTitle">Savory Items:</h2>
            <img src={SectionDivider} alt="black ornamental divider" className="sectionDivider"/>
            <Accordion defaultIndex={[0]} allowMultiple>
              <div id="croissantContainer">
                <div className="savoryGeneralInfo">
                  <h3>Croissants</h3>
                  <h4>2.00 - 4.50</h4>
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
                        <h5>Regular</h5>
                        <h5>1.75 sm. | 2.25 lg</h5>
                      </li>
                      <ul className="savoryItemExplanation">
                        <li><h6>Just a nice buttery croissant</h6></li>
                        <li><h6>(Contains: wheat, dairy (milk, butter))</h6></li>
                      </ul>
                      <li className="savoryListItem">
                        <h5>Everything Spices</h5>
                        <h5>2.00 ea.</h5>
                      </li>
                      <ul className="savoryItemExplanation">
                        <li><h6>A croissant with a blend of herbs and spices sprinkled on top</h6></li>
                        <li><h6>(Contains: wheat, dairy (milk, butter))</h6></li>
                      </ul>
                      <li className="savoryListItem">
                        <h5>Lunch Croissant</h5>
                        <h5>3.80 ea.</h5>
                      </li>
                      <ul className="savoryItemExplanation">
                        <li><h6>Ham or turkey and swiss cheese wrapped in croissant dough</h6></li>
                        <li><h6>(Contains: wheat, dairy (milk, butter))</h6></li>
                      </ul>
                      <li className="savoryListItem">
                        <h5>Lunch Croissant Delux</h5>
                        <h5>4.50 ea.</h5>
                      </li>
                      <ul className="savoryItemExplanation">
                        <li><h6>Regular croissant with a bechamel sauce, ham or turkey, and cheese filling topped with more bechamel sauce and cheese</h6></li>
                        <li><h6>(Contains: wheat, dairy (milk, butter))</h6></li>
                      </ul>
                    </ul>
                    <p className="savoryFullIngredients">
                      <strong>Full List of Ingredients for croissants: </strong> 
                      Wheat Flour, Butter (Pasteurized Cream), Sugar, Powdered Milk (Nonfat Milk, Vitamin A Palmitate, Vitamin D3), 
                      Salt, Yeast, Dough conditioner (Vegetable Gums - Gum Arabic, Guar Gum - Wheat Flour, Enzymes), Water
                      <br/>
                      <strong> - Lunch Croissant Ingredients: </strong>
                      Ingredients for the croissants plus Cheese, Ham or Turkey
                      <br/>
                      <strong> - Lunch Croissant Delux Ingredients: </strong>
                      Ingredients for the croissants plus Butter (Pasteurized Cream), Flour, Milk, Nutmeg, Cheese, Ham or Turkey
                    </p>

                  </AccordionPanel>
                </AccordionItem>
              </div>

              <div id="crostiniContainer">
                <div className="savoryGeneralInfo">
                  <h3>Crostinis</h3>
                  <h4>5.00 for 10</h4>
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
                        <li><h6>Our take on a breadstick using puff pastry with a blend of herbs and Spices</h6></li>
                        <li><h6>(Contains: wheat, dairy)</h6></li>
                      </ul>
                      <li className="savoryListItem">
                        <h5>Cheese Mix</h5>
                      </li>
                      <ul className="savoryItemExplanation">
                        <li><h6>Our take on a breadstick using puff pastry with melted cheese on top</h6></li>
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
          <div id="menuSweetContainer">
            <h2 id="menuSweetTitle">Sweet Items:</h2>
            <img src={SectionDivider} alt="black ornamental divider" className="sectionDivider"/>
            <Accordion defaultIndex={[0]} allowMultiple>
              <div id="croissantContainer">
                <div className="sweetGeneralInfo">
                  <h3>Croissants</h3>
                  <h4>1.75 - 3.50</h4>
                </div>
                <AccordionItem>
                  <AccordionHeader className="sweetAccordianHeader" _expanded={{ background: "#5D663D !important", color: "white" }}>
                    <Box flex="1" textAlign="left">
                      Click For More Info
                    </Box>
                    <AccordionIcon />
                  </AccordionHeader>
                  <AccordionPanel pb={4} className="sweetAccordianPanel">
                    <ul className="sweetList">
                      <li className="sweetListItem">
                        <h5>Regular</h5>
                        <h5>1.75 sm | 2.25 lg</h5>
                      </li>
                      <ul className="sweetItemExplanation">
                        <li><h6>Just a nice buttery croissant</h6></li>
                        <li><h6>(Contains: wheat, dairy (milk, butter))</h6></li>
                      </ul>
                      <li className="sweetListItem">
                        <h5>Almond Croissant</h5>
                        <h5>3.00 sm | 3.50 lg</h5>
                      </li>
                      <ul className="sweetItemExplanation">
                        <li><h6>Croissant filled with almond creme and topped with almonds</h6></li>
                        <li><h6>(Contains: wheat, dairy (milk, eggs, butter), tree nutes)</h6></li>
                      </ul>
                      <li className="sweetListItem">
                        <h5>Chocolate Croissant</h5>
                        <h5>2.25 sm | 2.75 lg</h5>
                      </li>
                      <ul className="sweetItemExplanation">
                        <li><h6>Croissant with chocolate inside</h6></li>
                        <li><h6>(Contains: wheat, dairy (milk, butter))</h6></li>
                      </ul>
                      <li className="sweetListItem">
                        <h5>Chocolate Twist</h5>
                        <h5>1.75 sm | 3.50 lg</h5>
                      </li>
                      <ul className="sweetItemExplanation">
                        <li><h6>Croissant dough filled with pastry cream and chocolate chips and then twisted into a braid</h6></li>
                        <li><h6>(Contains: wheat, dairy (milk, butter))</h6></li>
                      </ul>
                    </ul>
                    <p className="sweetFullIngredients">
                      <strong>Full List of Ingredients for Croissants: </strong> 
                      Wheat Flour, Butter (Pasteurized Cream), Sugar, Powdered Milk (Nonfat Milk, Vitamin A Palmitate, Vitamin D3), 
                      Salt, Yeast, Dough conditioner (Vegetable Gums - Gum Arabic, Guar Gum - Wheat Flour, Enzymes), Water
                      <br/> 
                      <strong> - Almond Croissants: </strong>
                      Ingredients from Croissants plus Almond Extract (Water, Alcohol, and Oil of Bitter Almond), 
                      Vanilla Extract (Water, Natural Vanilla Extract, Ethyl Alcohol, Fructose), Almond Slices
                      <br/> 
                      <strong> - Chocolate Croissants: </strong>
                      Ingredients from Croissants plus Chocolate Batons (44% cocoa)
                      <br/> 
                      <strong> - Chocolate Twists: </strong>
                      Ingredients from Croissants plus Chocolate Chips, Pastry Creme (eggs, butter, milk, cornstarch, flour, vanilla extract, sugar, salt)
                    </p>

                  </AccordionPanel>
                </AccordionItem>
              </div>

              <div id="rollsContainer">
                <div className="sweetGeneralInfo">
                  <h3>Rolls</h3>
                  <h4>1.75 - 3.00</h4>
                </div>
                <AccordionItem>
                  <AccordionHeader className="sweetAccordianHeader" _expanded={{ background: "#5D663D !important", color: "white" }}>
                    <Box flex="1" textAlign="left">
                      Click For More Info
                    </Box>
                    <AccordionIcon />
                  </AccordionHeader>
                  <AccordionPanel pb={4} className="sweetAccordianPanel">
                    <ul className="sweetList">
                      <li className="sweetListItem">
                        <h5>Raspberry</h5>
                        <h5>1.75 sm | 3.00 lg</h5>
                      </li>
                      <ul className="sweetItemExplanation">
                        <li><h6>A roll with raspberry filling</h6></li>
                        <li><h6>(Contains: wheat, dairy (milk, butter))</h6></li>
                      </ul>
                      <li className="sweetListItem">
                        <h5>Cinnamon Pecan</h5>
                        <h5>1.75 sm | 3.00 lg</h5>
                      </li>
                      <ul className="sweetItemExplanation">
                        <li><h6>A classic cinnamon roll with pecans</h6></li>
                        <li><h6>(Contains: wheat, dairy (milk, butter))</h6></li>
                      </ul>
                    </ul>
                    <p className="sweetFullIngredients">
                      <strong>Full List of Ingredients for Rolls: </strong> 
                      Coming soon
                    </p>

                  </AccordionPanel>
                </AccordionItem>
              </div>

              <div id="turnoversContainer">
                <div className="sweetGeneralInfo">
                  <h3>Turnovers</h3>
                  <h4>3.00 ea.</h4>
                </div>
                <AccordionItem>
                  <AccordionHeader className="sweetAccordianHeader" _expanded={{ background: "#5D663D !important", color: "white" }}>
                    <Box flex="1" textAlign="left">
                      Click For More Info
                    </Box>
                    <AccordionIcon />
                  </AccordionHeader>
                  <AccordionPanel pb={4} className="sweetAccordianPanel">
                    <ul className="sweetList">
                      <li className="sweetListItem">
                        <h5>Apple Turnover</h5>
                      </li>
                      <ul className="sweetItemExplanation">
                        <li><h6>Turnover with an apple compote filling</h6></li>
                        <li><h6>(Contains: wheat, dairy, soy, tree nuts)</h6></li>
                      </ul>
                      <li className="sweetListItem">
                        <h5>Nutella Turnover</h5>
                      </li>
                      <ul className="sweetItemExplanation">
                        <li><h6>Turnover with a nutella filling</h6></li>
                        <li><h6>(Contains: wheat, dairy, soy, tree nuts)</h6></li>
                      </ul>
                      <li className="sweetListItem">
                        <h5>Raspberry Jam Turnover</h5>
                      </li>
                      <ul className="sweetItemExplanation">
                        <li><h6>Turnover with a raspberry jam filling</h6></li>
                        <li><h6>(Contains: wheat, dairy, soy, tree nuts)</h6></li>
                      </ul>
                    </ul>
                    <p className="sweetFullIngredients">
                      <strong>Full List of Ingredients for Turnovers: </strong> 
                      Enriched Wheat Flour (niacin, reduced iron, thiamine mononitrate, riboflavin, folic acid), Malted Barley Flour, Water, 
                      Butter (pasteurized cream), Ascorbic acid as dough conditioner, Shortening (Palm oil, Beta carotene - color - Water, Vital Gluten), 
                      Salt, Almond Extract (Water, Alcohol and Oil of Bitter Almond)
                      <br/>
                      <strong> - Nutella Turnover Ingredients: </strong>
                      Ingredients for Turnovers plus Nutella Filling (Sugar, Palm Oil, Skim Milk, Cocoa, Soy, Lecithin as Emulsifier, Vanillin, Hazelnuts)
                      <br/>
                      <strong> - Apple Turnover Ingredients: </strong>
                      Ingredients for Turnovers plus Apple Filling (Sugar, Apple, Fruit Pectin, Citric Acid)
                      <br/>
                      <strong> - Raspberry Jam Turnover Ingredients: </strong>
                      Ingredients for Turnovers plus Raspberry Jam Filling (Sugar, Raspberries, Fruit Pectin, Citric Acid)
                    </p>
                  </AccordionPanel>
                </AccordionItem>
              </div>

              <div id="danishesContainer">
                <div className="sweetGeneralInfo">
                  <h3>Danishes</h3>
                  <h4>3.00 ea.</h4>
                </div>
                <AccordionItem>
                  <AccordionHeader className="sweetAccordianHeader" _expanded={{ background: "#5D663D !important", color: "white" }}>
                    <Box flex="1" textAlign="left">
                      Click For More Info
                    </Box>
                    <AccordionIcon />
                  </AccordionHeader>
                  <AccordionPanel pb={4} className="sweetAccordianPanel">
                    <ul className="sweetList">
                      <li className="sweetListItem">
                        <h5>Regular Danish</h5>
                      </li>
                      <ul className="sweetItemExplanation">
                        <li><h6>Danish with a cream cheese filling</h6></li>
                        <li><h6>(Contains: wheat, dairy)</h6></li>
                      </ul>
                      <li className="sweetListItem">
                        <h5>Peach Danish</h5>
                      </li>
                      <ul className="sweetItemExplanation">
                        <li><h6>Danish with a cream cheese and peach filling</h6></li>
                        <li><h6>(Contains: wheat, dairy)</h6></li>
                      </ul>
                      <li className="sweetListItem">
                        <h5>Apricot Danish</h5>
                      </li>
                      <ul className="sweetItemExplanation">
                        <li><h6>Danish with a cream cheese and Apricot filling</h6></li>
                        <li><h6>(Contains: wheat, dairy)</h6></li>
                      </ul>
                    </ul>
                    <p className="sweetFullIngredients">
                      <strong>Full List of Ingredients for Danishes: </strong> 
                      Coming Soon
                      <br/>
                      <strong> - Peach Danish Ingredients: </strong>
                      Ingredients for Danishes plus ...
                      <br/>
                      <strong> - Apricot Danish Ingredients: </strong>
                      Ingredients for Danishes plus ...
                    </p>
                  </AccordionPanel>
                </AccordionItem>
              </div>

              <div id="coffeCakeContainer">
                <div className="sweetGeneralInfo">
                  <h3>Coffe Cake/Financiers</h3>
                  <h4>2.00 ea.</h4>
                </div>
                <AccordionItem>
                  <AccordionHeader className="sweetAccordianHeader" _expanded={{ background: "#5D663D !important", color: "white" }}>
                    <Box flex="1" textAlign="left">
                      Click For More Info
                    </Box>
                    <AccordionIcon />
                  </AccordionHeader>
                  <AccordionPanel pb={4} className="sweetAccordianPanel">
                    <ul className="sweetList">
                      <li className="sweetListItem">
                        <h5>Almond Vanilla Financier</h5>
                      </li>
                      <ul className="sweetItemExplanation">
                        <li><h6>An almond and vanilla flavored financier which is similar to a coffee cake</h6></li>
                        <li><h6>(Contains: wheat, dairy, tree nuts)</h6></li>
                      </ul>
                      <li className="sweetListItem">
                        <h5>Almond Coffe Cake</h5>
                      </li>
                      <ul className="sweetItemExplanation">
                        <li><h6>An almond flavored coffee cake</h6></li>
                        <li><h6>(Contains: wheat, dairy, tree nuts)</h6></li>
                      </ul>
                    </ul>
                    <p className="sweetFullIngredients">
                      <strong>Full List of Ingredients for Almond Vanilla Financier: </strong> 
                      Egg Whites, Sugar, Hi Gluten Flour, Salt, Almond Flour, Almond Meal, Butter (Pasteurized Cream), 
                      Vanilla Extract (Water, Natural Vanilla Extract, Ethyl Alcohol, Fructose)
                      <br/>
                      <strong>Full List of Ingredients for Almond Coffe Cake: </strong>
                      Enriched Wheat Flour (Niacin, Reduced iron, thiamine Mononitrate, Riboflavin, Folic Acid), Eggs, Butter (Pasteurized Cream), 
                      Almond Flour, Almond Extract (Water, Alcohol and Oil of Bitter Almond), 
                      Vanilla Extract (Water, Popylene Glycol, Vanillin, Caramel Color, Sodium Benzoate, Citric Acid), Salt
                    </p>
                  </AccordionPanel>
                </AccordionItem>
              </div>
              
              <div id="muffinsContainer">
                <div className="sweetGeneralInfo">
                  <h3>Muffins</h3>
                  <h4>1.50 ea.</h4>
                </div>
                <AccordionItem>
                  <AccordionHeader className="sweetAccordianHeader" _expanded={{ background: "#5D663D !important", color: "white" }}>
                    <Box flex="1" textAlign="left">
                      Click For More Info
                    </Box>
                    <AccordionIcon />
                  </AccordionHeader>
                  <AccordionPanel pb={4} className="sweetAccordianPanel">
                    <ul className="sweetList">
                      <li className="sweetListItem">
                        <h5>Chocolate Chip Muffin</h5>
                      </li>
                      <ul className="sweetItemExplanation">
                        <li><h6>Muffin with Chocolate Chips</h6></li>
                        <li><h6>(Contains: wheat, soy)</h6></li>
                      </ul>
                      <li className="sweetListItem">
                        <h5>Chocolate Muffin</h5>
                      </li>
                      <ul className="sweetItemExplanation">
                        <li><h6>Chocolate Muffin with Chocolate Chips or Cherries</h6></li>
                        <li><h6>(Contains: wheat, soy)</h6></li>
                      </ul>
                      <li className="sweetListItem">
                        <h5>Lemon Poppy seed Muffin</h5>
                      </li>
                      <ul className="sweetItemExplanation">
                        <li><h6>Lemon flavored muffin with poppyseeds</h6></li>
                        <li><h6>(Contains: wheat)</h6></li>
                      </ul>
                      <li className="sweetListItem">
                        <h5>Blueberry Muffin</h5>
                      </li>
                      <ul className="sweetItemExplanation">
                        <li><h6>Muffin with blueberries</h6></li>
                        <li><h6>(Contains: wheat)</h6></li>
                      </ul>
                      <li className="sweetListItem">
                        <h5>Berry-ful Muffin</h5>
                      </li>
                      <ul className="sweetItemExplanation">
                        <li><h6>Muffin with blueberries and blackberries</h6></li>
                        <li><h6>(Contains: wheat)</h6></li>
                      </ul>
                      <li className="sweetListItem">
                        <h5>Orange Cranberry Muffin</h5>
                      </li>
                      <ul className="sweetItemExplanation">
                        <li><h6>Orange flavored muffin with cranberries</h6></li>
                        <li><h6>(Contains: wheat)</h6></li>
                      </ul>
                    </ul>
                    <p className="sweetFullIngredients">
                      <strong>Full List of Ingredients for Muffins: </strong> 
                      Wheat Flour, Baking Powder (Corn Starch, Sodium Bicarbonate, Sodium Aluminum Sulfate, Monocalcium Phosphate), Salt, 
                      Sugar, Canola oil
                      <br/>
                      <strong> - Chocolate and Chocolate Chip Muffin Ingredients: </strong>
                      Ingredients for Muffins plus Chocolate Powder (Cocoa), Chocolate Chips (Sugar, Cocoa Butter, Soy Lecithin, Natural Vanilla Extract) or Cherries
                      <br/>
                      <strong> - Lemon Poppy seed Muffin Ingredients: </strong>
                      Ingredients for Muffins plus Poppy seeds, Lemon Extract (Ethyl Alcohol, Natural Flavors)
                      <br/>
                      <strong> - Blueberry Muffin Ingredients: </strong>
                      Ingredients for Muffins plus Blueberries
                      <br/>
                      <strong> - Berry-ful Muffin Ingredients: </strong>
                      Ingredients for Muffins plus Blueberries, Blackberries
                      <br/>
                      <strong> - Orange Cranberry Muffin Ingredients: </strong>
                      Ingredients for Muffins plus Cranberries, Orange Extract (Alcohol, Water, Oil Of Orange)
                    </p>
                  </AccordionPanel>
                </AccordionItem>
              </div>
            </Accordion>
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
