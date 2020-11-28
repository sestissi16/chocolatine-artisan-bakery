import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
  Box
} from "@chakra-ui/core";
import LeftTitleBorder from '../assets/borders/black/blackFlowerThinDivider3-LeftEnd-Transparent.png'
import RightTitleBorder from '../assets/borders/black/blackFlowerThinDivider3-RightEnd-Transparent.png'
import SectionDivider from '../assets/borders/black/blackFlowerThinDivider2-FullLine-Transparent.png'
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
          <div id="menuSectionNav">
            <h2>Menu Sections</h2>
            <div id="menuSectionNavLinks">
              <a href="#menu-savory" className="smoothscroll menuNavBorder"><h3>Savory Items</h3></a>
              <a href="#menu-sweets" className="smoothscroll menuNavBorder"><h3>Sweet Items</h3></a>
              <a href="#menu-bread-and-pizza" className="smoothscrolling menuNavBorder"><h3>Bread/Pizza Items</h3></a>
              <a href="#menu-samplers" className="smoothscrolling"><h3>Samplers / Meal Packs</h3></a>
            </div>
          </div>
          <div id="menu-savory">
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
                        <h5>Butter</h5>
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
                        <h5>Lunch Croissant Square</h5>
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
                        <li><h6>(Contains: wheat)</h6></li>
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
                      <strong>Full List of Ingredients for Crostinis: </strong> 
                      Enriched Wheat Flour (Wheat Flour, Niacin, Reduced Iron, Thiamine Mononitrate, Riboflavin, Folic Acid, Malted Barley Flour, Ascorbic Acid), 
                      Shortening (Palm Oil, Beta Carotene (Color)), Water, Vital Wheat Gluten, Salt
                      <br/>
                      <strong> - Everything Spices Crostini Ingredients:</strong>
                      Ingredients for Crostinis plus a blend of herbs and spices
                      <br/>
                      <strong> - Everything Spices Crostini Ingredients:</strong>
                      Ingredients for Crostinis plus a cheese Mix
                    </p>
                  </AccordionPanel>
                </AccordionItem>
              </div>
            </Accordion>
          </div>
          
          <div id="menu-sweets">
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
                        <h5>Butter</h5>
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
                      Ingredients from Croissants plus Chocolate Chips, Pastry Cream (eggs, butter, milk, cornstarch, flour, vanilla extract, sugar, salt)
                    </p>

                  </AccordionPanel>
                </AccordionItem>
              </div>

              <div id="rollsContainer">
                <div className="sweetGeneralInfo">
                  <h3>Rolls / Palmiers</h3>
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
                        <h5>Cinnamon Pecan Roll</h5>
                        <h5>1.75 sm | 3.00 lg</h5>
                      </li>
                      <ul className="sweetItemExplanation">
                        <li><h6>Rolled croissant dough filled with pastry cream, cinnamon and pecans</h6></li>
                        <li><h6>(Contains: wheat, dairy (milk, butter))</h6></li>
                      </ul>
                      <li className="sweetListItem">
                        <h5>Raisin Roll</h5>
                        <h5>1.75 sm | 3.00 lg</h5>
                      </li>
                      <ul className="sweetItemExplanation">
                        <li><h6>Rolled croissant dough filled with patry cream and Raisins</h6></li>
                        <li><h6>(Contains: wheat, dairy (milk, butter))</h6></li>
                      </ul>
                      <li className="sweetListItem">
                        <h5>Raspberry Roll</h5>
                        <h5>1.75 sm | 3.00 lg</h5>
                      </li>
                      <ul className="sweetItemExplanation">
                        <li><h6>Rolled croissant dough filled with raspberry jam</h6></li>
                        <li><h6>(Contains: wheat, dairy (butter))</h6></li>
                      </ul>
                      <li className="sweetListItem">
                        <h5>Sugar Palmier</h5>
                        <h5>1.75 sm | 2.25 lg</h5>
                      </li>
                      <ul className="sweetItemExplanation">
                        <li><h6>Rolled puff pastry dough filled with sugar and cinnamon</h6></li>
                        <li><h6>(Contains: wheat)</h6></li>
                      </ul>
                      <li className="sweetListItem">
                        <h5>Jam Palmier</h5>
                        <h5>1.75 sm | 2.25 lg</h5>
                      </li>
                      <ul className="sweetItemExplanation">
                        <li><h6>Rolled puff pastry dough filled with raspberry jam</h6></li>
                        <li><h6>(Contains: wheat)</h6></li>
                      </ul>
                    </ul>
                    <p className="sweetFullIngredients">
                      <strong>Full List of Ingredients for Rolls: </strong> 
                      Wheat Flour, Butter (Pasteurized Cream), Sugar, Powdered Milk (Nonfat Milk, Vitamin A Palmitate, Vitamin D3), 
                      Salt, Yeast, Dough conditioner (Vegetable Gums - Gum Arabic, Guar Gum - Wheat Flour, Enzymes), 
                      Water, Pastry Cream (eggs, butter, milk, cornstarch, flour, vanilla extract, sugar, salt)
                      <br/>
                      <strong> - Ingredients for Cinnamon Rolls: </strong>
                      Ingredients for the Rolls plus cinnamon and pecans
                      <br/>
                      <strong> - Ingredients for Raisin Rolls: </strong>
                      Ingredients for the Rolls plus Raisins
                      <br/>
                      <strong> - Ingredients for Raspberry Rolls: </strong>
                      Ingredients for the Rolls plus raspberry jam
                      <br/>
                      <strong>Full List of Ingredients for Palmiers: </strong>
                      Enriched Wheat Flour (Wheat Flour, Niacin, Reduced Iron, Thiamine Mononitrate, Riboflavin, Folic Acid, Malted Barley Flour, Ascorbic Acid), 
                      Shortening (Palm Oil, Beta Carotene (Color)), Water, Vital Wheat Gluten, Salt, Sugar, Cinnamon
                      <br/>
                      <strong> - Ingredients for Jam Palmier: </strong>
                      Ingredients for the Rolls plus raspberry Jam
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
                        <h5>Classic Danish</h5>
                      </li>
                      <ul className="sweetItemExplanation">
                        <li><h6>Danish with a cream cheese filling</h6></li>
                        <li><h6>(Contains: wheat, dairy)</h6></li>
                      </ul>
                      <li className="sweetListItem">
                        <h5>Peach/Apricot Danish</h5>
                      </li>
                      <ul className="sweetItemExplanation">
                        <li><h6>Danish with a cream cheese and peach or apricot filling (based on seasonal availability)</h6></li>
                        <li><h6>(Contains: wheat, dairy)</h6></li>
                      </ul>
                      <li className="sweetListItem">
                        <h5>Apple Danish</h5>
                      </li>
                      <ul className="sweetItemExplanation">
                        <li><h6>Danish with a apple compote filling</h6></li>
                        <li><h6>(Contains: wheat, dairy)</h6></li>
                      </ul>
                      <li className="sweetListItem">
                        <h5>Lemon Danish</h5>
                      </li>
                      <ul className="sweetItemExplanation">
                        <li><h6>Danish with a lemon custard filling</h6></li>
                        <li><h6>(Contains: wheat, dairy)</h6></li>
                      </ul>
                    </ul>
                    <p className="sweetFullIngredients">
                      <strong>Full List of Ingredients for Danishes: </strong> 
                      Wheat Flour, Butter (Pasteurized Cream), Sugar, Powdered Milk (Nonfat Milk, Vitamin A Palmitate, Vitamin D3), 
                      Salt, Yeast, Dough conditioner (Vegetable Gums - Gum Arabic, Guar Gum - Wheat Flour, Enzymes), Water
                      <br/>
                      <strong> - Regular Danish Ingredients: </strong>
                      Ingredients for Danishes plus cream cheese
                      <br/>
                      <strong> - Peach/Apricot Danish Ingredients: </strong>
                      Ingredients for Danishes plus cream cheese and peaches/apricots
                      <br/>
                      <strong> - Lemon Danish Ingredients: </strong>
                      Ingredients for Danishes plus lemon custard
                      <br/>
                      <strong> - Apple Danish Ingredients: </strong>
                      Ingredients for Danishes plus apple compote
                    </p>
                  </AccordionPanel>
                </AccordionItem>
              </div>

              <div id="coffeCakeContainer">
                <div className="sweetGeneralInfo">
                  <h3>Coffe Cake / Financiers</h3>
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
                      Vanilla Extract (Water, Popylene Glycol, Vanillin, Caramel Color, Sodium Benzoate, Citric Acid), Salt, Cocoa Powder, Sour Cream
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
                        <h5>Lemon Poppyseed Muffin</h5>
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
                      <strong> - Lemon Poppyseed Muffin Ingredients: </strong>
                      Ingredients for Muffins plus Poppyseeds, Lemon Extract (Ethyl Alcohol, Natural Flavors)
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
            
              <div id="cookiesContainer">
                <div className="sweetGeneralInfo">
                  <h3>Cookies</h3>
                  <h4>1.25 - 1.50</h4>
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
                        <h5>Chocolate Chip</h5>
                        <h5>1.25 ea.</h5>
                      </li>
                      <ul className="sweetItemExplanation">
                        <li><h6>Cookies with Chocolate Chips</h6></li>
                        <li><h6>(Contains: wheat, dairy (butter, eggs))</h6></li>
                      </ul>
                      <li className="sweetListItem">
                        <h5>Choco Pecan</h5>
                        <h5>1.50 ea.</h5>
                      </li>
                      <ul className="sweetItemExplanation">
                        <li><h6>Cookies with Chocolate Chips and pecans</h6></li>
                        <li><h6>(Contains: wheat, dairy (butter, eggs), tree nuts)</h6></li>
                      </ul>
                    </ul>
                    <p className="sweetFullIngredients">
                      <strong>Full List of Ingredients for Cookies: </strong> 
                      Flour, Butter, Vanilla, Eggs, Sugar
                      <br/>
                      <strong> - Chocolate Chip Ingredients: </strong>
                      Ingredients for Cookies plus chocolate chips
                      <br/>
                      <strong> - Choco Pecan Ingredients: </strong>
                      Ingredients for Cookies plus chocolate chips, pecans
                    </p>
                  </AccordionPanel>
                </AccordionItem>
              </div>

              <div id="trufflesContainer">
                <div className="sweetGeneralInfo">
                  <h3>Truffles</h3>
                  <h4>5.00 (for 4) | 10.00 (for 9)</h4>
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
                        <h5>Classic</h5>
                      </li>
                      <ul className="sweetItemExplanation">
                        <li><h6>Chocolate truffles rolled in cocoa powder</h6></li>
                        <li><h6>(Contains: dairy (heavy whipping cream))</h6></li>
                      </ul>
                      <li className="sweetListItem">
                        <h5>Peppermint</h5>
                      </li>
                      <ul className="sweetItemExplanation">
                        <li><h6>Chocolate truffles with peppermint flavoring rolled in cocoa powder</h6></li>
                        <li><h6>(Contains: dairy (heavy whipping cream))</h6></li>
                      </ul>
                      <li className="sweetListItem">
                        <h5>Orange</h5>
                      </li>
                      <ul className="sweetItemExplanation">
                        <li><h6>Chocolate truffles with orange flavoring rolled in cocoa powder</h6></li>
                        <li><h6>(Contains: dairy (heavy whipping cream))</h6></li>
                      </ul>
                      <li className="sweetListItem">
                        <h5>Rum and Coconut</h5>
                      </li>
                      <ul className="sweetItemExplanation">
                        <li><h6>Chocolate truffles with rum and Coconut flavoring rolled in coconut shavings</h6></li>
                        <li><h6>(Contains: dairy (heavy whipping cream), coconut)</h6></li>
                      </ul>
                      <li className="sweetListItem">
                        <h5>Mix of 4</h5>
                      </li>
                      <ul className="sweetItemExplanation">
                        <li><h6>Get one of each flavor or tell us your preference</h6></li>
                      </ul>
                      <li className="sweetListItem">
                        <h5>Mix of 9</h5>
                      </li>
                      <ul className="sweetItemExplanation">
                        <li><h6>Get three classics, two peppermint, two orange, and two rum and coconut tell us your preference</h6></li>
                      </ul>
                    </ul>
                    <p className="sweetFullIngredients">
                      <strong>Full List of Ingredients for Truffles: </strong> 
                      Baking Chocolate (70% cocoa), Heavy Whipping Cream, Vanilla Extract
                      <br/>
                      <strong> - Classic Ingredients: </strong>
                      Ingredients for Truffles plus Cocoa Powder
                      <br/>
                      <strong> - Peppermint Ingredients: </strong>
                      Ingredients for Truffles plus Peppermint Extract, Crystal Sugar, Dried Mint
                      <br/>
                      <strong> - Orange Ingredients: </strong>
                      Ingredients for Truffles plus Orange Extract, Cocoa Powder, Nutmeg, Cinnamon
                      <br/>
                      <strong> - Rum and Coconut Ingredients: </strong>
                      Ingredients for Truffles plus Rum Extract, Coconut Extract, Coconut shavings
                    </p>
                  </AccordionPanel>
                </AccordionItem>
              </div>

              <div id="granolaBarsContainer">
                <div className="sweetGeneralInfo">
                  <h3>Homemade Granola Bars</h3>
                  <h4>1.50 - 2.00</h4>
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
                        <h5>Seasonal Flavors</h5>
                        <h5>sm 1.50 ea. | lg 2.00 ea.</h5>
                      </li>
                      <ul className="sweetItemExplanation">
                        <li><h6>Granola mixed with seasonal trail mix and binded with chocolate in a neat bar</h6></li>
                        <li><h6>(Contains: tree nuts, soy, gluten, dairy (milk powder))</h6></li>
                      </ul>
                    </ul>
                    <p className="sweetFullIngredients">
                      <strong>Full List of Ingredients for Granola Bars: </strong> 
                      Baker's Chocoalte (70% Cocoa), Agave Syrup or Honey, Sunflower Kernels, Raisins, Oats, Sugar, Canola Oil, 
                      Rice Flour, Cornstarch, Salt, Natural Flavor, Barley Malt Syrup, Herb Blend (Includes Cardamon, Nutmeg), Tree Nuts, 
                      Wheat, Soy, Peanuts, Cocoa Candies (Confectionary Coating [Sugar, Hydrogenated Palm Kernel Oil, Cocoa Powder, Whey Powder, Nonfat Milk Powder,
                      Soy Lecithin, Vanilla], Sugar, Less Than 1% of Artificial Coloring [Includes Yellow 6 Lake, Yellow 6, Yellow 5 Lake, Blue 1 Lake, Red 40 Lake, Blue 2 Lake], 
                      Gum Acacia, Corn Syrup, Confectioner's glaze)
                      <br/>
                    </p>
                  </AccordionPanel>
                </AccordionItem>
              </div>
            
            </Accordion>
          </div>

          <div id="menu-bread-and-pizza">
            <h2 id="menuBreadPizzaTitle">Bread/Pizza Items:</h2>
            <img src={SectionDivider} alt="black ornamental divider" className="sectionDivider"/>
            <Accordion defaultIndex={[0]} allowMultiple>
              <div id="pizzaContainer">
                <div className="breadPizzaGeneralInfo">
                  <h3>Par-Baked Pizza Doughs</h3>
                  <h4>2.00 - 2.70</h4>
                </div>
                <AccordionItem>
                  <AccordionHeader className="breadPizzaAccordianHeader" _expanded={{ background: "#2D1B10 !important", color: "white" }}>
                    <Box flex="1" textAlign="left">
                      Click For More Info
                    </Box>
                    <AccordionIcon />
                  </AccordionHeader>
                  <AccordionPanel pb={4} className="breadPizzaAccordianPanel">
                    <ul className="breadPizzaList">
                      <li className="breadPizzaListItem">
                        <h5>Classic</h5>
                        <h5>2.00 reg. | 2.50 lg</h5>
                      </li>
                      <ul className="breadPizzaItemExplanation">
                        <li><h6>Plain pizza dough that's par-baked and ready for your toppings!</h6></li>
                        <li><h6>(Contains: wheat)</h6></li>
                      </ul>
                      <li className="breadPizzaListItem">
                        <h5>Rosemary and Thyme infused Pizza Dough</h5>
                        <h5>2.20 reg. | 2.70 lg</h5>
                      </li>
                      <ul className="breadPizzaItemExplanation">
                        <li><h6>Pizza dough with rosemary and thyme mixed in that's par-baked!</h6></li>
                        <li><h6>(Contains: wheat)</h6></li>
                      </ul>
                    </ul>
                    <p className="breadPizzaFullIngredients">
                      <strong>Full List of Ingredients for Pizza Dough: </strong> 
                      Water, Flour, Sugar, Salt, Oil, Yeast
                      <br/> 
                      <strong> - Rosemary and Thyme Pizza Dough: </strong>
                      Ingredients from Pizza Dough plus Rosemary and Thyme
                    </p>

                  </AccordionPanel>
                </AccordionItem>
              </div>

              <div id="bunsContainer">
                <div className="breadPizzaGeneralInfo">
                  <h3>Buns / Sliders</h3>
                  <h4>0.65 - 1.50</h4>
                </div>
                <AccordionItem>
                  <AccordionHeader className="breadPizzaAccordianHeader" _expanded={{ background: "#2D1B10 !important", color: "white" }}>
                    <Box flex="1" textAlign="left">
                      Click For More Info
                    </Box>
                    <AccordionIcon />
                  </AccordionHeader>
                  <AccordionPanel pb={4} className="breadPizzaAccordianPanel">
                    <ul className="breadPizzaList">
                      <li className="breadPizzaListItem">
                        <h5>Brioche Bun (90 grams)</h5>
                        <h5>0.80 ea.</h5>
                      </li>
                      <ul className="breadPizzaItemExplanation">
                        <li><h6>Smaller brioche bun perfect for sandwiches, burgers, or just by itself.</h6></li>
                        <li><h6>(Contains: wheat, dairy (milk, eggs, butter))</h6></li>
                      </ul>
                      <li className="breadPizzaListItem">
                        <h5>Brioche Bun (110 grams)</h5>
                        <h5>0.95 ea.</h5>
                      </li>
                      <ul className="breadPizzaItemExplanation">
                        <li><h6>Larger brioche bun perfect for sandwiches, burgers, or just by itself.</h6></li>
                        <li><h6>(Contains: wheat, dairy (milk, eggs, butter))</h6></li>
                      </ul>
                      <li className="breadPizzaListItem">
                        <h5>Brioche Sliders</h5>
                        <h5>0.65 ea.</h5>
                      </li>
                      <ul className="breadPizzaItemExplanation">
                        <li><h6>Small brioche bun perfect for sliders.</h6></li>
                        <li><h6>(Contains: wheat, dair (milk, eggs, butter))</h6></li>
                      </ul>
                    </ul>
                    <p className="breadPizzaFullIngredients">
                      <strong>Full List of Ingredients for Buns/Sliders: </strong> 
                      Wheat Flour, Butter (Pasteurized Cream), Eggs, Sugar, Powdered Milk (Nonfat Milk, Vitamin A Palmitate, Vitamin D3), 
                      Salt, Yeast, Dough conditioner (Vegetable Gums - Gum Arabic, Guar Gum - Wheat Flour, Enzymes), Water
                    </p>
                  </AccordionPanel>
                </AccordionItem>
              </div>

              <div id="loafsContainer">
                <div className="breadPizzaGeneralInfo">
                  <h3>Loafs</h3>
                  <h4>3.50 - 7.50</h4>
                </div>
                <AccordionItem>
                  <AccordionHeader className="breadPizzaAccordianHeader" _expanded={{ background: "#2D1B10 !important", color: "white" }}>
                    <Box flex="1" textAlign="left">
                      Click For More Info
                    </Box>
                    <AccordionIcon />
                  </AccordionHeader>
                  <AccordionPanel pb={4} className="breadPizzaAccordianPanel">
                    <ul className="breadPizzaList">
                      <li className="breadPizzaListItem">
                        <h5>White Loaf</h5>
                        <h5>sm. 3.50 | med. 5.00 | lg. 7.00</h5>
                      </li>
                      <ul className="breadPizzaItemExplanation">
                        <li><h6>A classic bread loaf.</h6></li>
                        <li><h6>(Contains: wheat, dairy (milk))</h6></li>
                      </ul>
                      <li className="breadPizzaListItem">
                        <h5>Brioche Loaf</h5>
                        <h5>sm. 4.00 | med. 5.50 | lg. 7.50</h5>
                      </li>
                      <ul className="breadPizzaItemExplanation">
                        <li><h6>A more sweet bread loaf.</h6></li>
                        <li><h6>Add 50 cents to add dried fruits to the loaf</h6></li>
                        <li><h6>(Contains: wheat, dairy (eggs, butter, milk))</h6></li>
                      </ul>
                      <li className="breadPizzaListItem">
                        <h5>Multi-grain Loaf</h5>
                        <h5>sm. 4.00 | med. 5.50 | lg. 7.50</h5>
                      </li>
                      <ul className="breadPizzaItemExplanation">
                        <li><h6>Bread loaf with a mix of grains</h6></li>
                        <li><h6>Add 50 cents to add dried fruits to the loaf</h6></li>
                        <li><h6>(Contains: wheat)</h6></li>
                      </ul>
                      <li className="breadPizzaListItem">
                        <h5>Nutella Loaf</h5>
                        <h5>1.50 ea.</h5>
                      </li>
                      <ul className="breadPizzaItemExplanation">
                        <li><h6>Brioche loaf with Nutella inside.</h6></li>
                        <li><h6>(Contains: wheat, dair (milk, eggs, butter), tree nuts)</h6></li>
                      </ul>
                      <li className="breadPizzaListItem">
                        <h5>Fruit and Sugar Loaf</h5>
                        <h5>1.50 ea.</h5>
                      </li>
                      <ul className="breadPizzaItemExplanation">
                        <li><h6>Brioche loaf with dried fruits inside and topped with crystal sugar. </h6></li>
                        <ul>
                          <li><h6>The fruits depend on availability but are usually Raisins, pineapples, cranberries, and apricots</h6></li>
                        </ul>
                        <li><h6>(Contains: wheat, dair (milk, eggs, butter), tree nuts)</h6></li>
                      </ul>
                    </ul>
                    <p className="breadPizzaFullIngredients">
                      <strong>Full List of Ingredients for White Loafs: </strong> 
                      Wheat Flour, Water, Salt, Sugar, Milk
                      <br/>
                      <strong>Full List of Ingredients for Brioche Loafs: </strong>
                      Wheat Flour, Water, Butter (Pasteurized Cream), Eggs, Sugar, Powdered Milk (Nonfat Milk, Vitamin A Palmitate, Vitamin D3),
                      Salt, Dough conditioner (Vegetable Gums - Arabic Gum, Guar Gum - Wheat Flour, Enzymes), Yeast
                      <br/>
                      <strong> - Nutella Loafs Ingredients: </strong>
                      Ingredients for Brioche Loafs plus Nutella (Sugar, Palm Oil, Skim Milk, Cocoa, Soy, Lecithin as Emulsifier, Vanillin, Hazelnuts)
                      <br/>
                      <strong> - Fruit and Sugar Loafs Ingredients: </strong>
                      Ingredients for Brioche Loafs plus Dried Fruits (Raisins, Pineapples, Cranberries, Apricot)
                      <br/>
                      <strong>Full List of Ingredients for Multigrain Loafs: </strong>
                      Wheat Flour, Water, Rye Flour, Mix of Grains (Pumpkin Seeds, Sunflower Seeds, Sesame Seeds, Poppyseeds, Oats), Salt, Malt, Yeast
                    </p>
                  </AccordionPanel>
                </AccordionItem>
              </div>
            </Accordion>
          </div>

          <div id="menu-samplers">
            <h2 id="menuSamplerTitle">Sampler Boxes:</h2>
            <img src={SectionDivider} alt="black ornamental divider" className="sectionDivider"/>
            <Accordion defaultIndex={[0]} allowMultiple>
              <div id="samplerContainer">
                <div className="samplerGeneralInfo">
                  <h3>Samplers / Meal Packages</h3>
                  <h4>12.00 - 58.90</h4>
                </div>
                <AccordionItem>
                  <AccordionHeader className="samplerAccordianHeader" _expanded={{ background: "#694226 !important", color: "white" }}>
                    <Box flex="1" textAlign="left">
                      Click For More Info
                    </Box>
                    <AccordionIcon />
                  </AccordionHeader>
                  <AccordionPanel pb={4} className="samplerAccordianPanel">
                    <ul className="samplerList">
                      <li className="samplerListItem">
                        <h5>5 pack Sampler</h5>
                        <h5>12.00</h5>
                      </li>
                      <ul className="samplerItemExplanation">
                        <li><h6>1 Chocolate Croissant, 1 Almond Croissant, 1 Butter Croissant, 1 Ham and Cheese Lunch Croissant, and 1 Apple Turnover.</h6></li>
                        <li><h6>(Contains: wheat, dairy (milk, eggs, butter), tree nuts, soy)</h6></li>
                      </ul>
                      <li className="samplerListItem">
                        <h5>10 pack Sampler</h5>
                        <h5>19.00</h5>
                      </li>
                      <ul className="samplerItemExplanation">
                        <li><h6>
                          1 Chocolate Croissant, 1 Almond Croissant, 1 Butter Croissant, 1 Ham and Cheese Lunch Croissant, 1 Apple Turnover, 
                          1 Sugar Palmier, 1 Almond Vanilla Financier, 1 Choco Pecan Cookie, and 2 90g Buns.
                        </h6></li>
                        <li><h6>(Contains: wheat, dairy (milk, eggs, butter), tree nuts, soy)</h6></li>
                      </ul>
                      <li className="samplerListItem">
                        <h5>15 pack Sampler</h5>
                        <h5>34.00</h5>
                      </li>
                      <ul className="samplerItemExplanation">
                        <li><h6>
                          1 Chocolate Croissant, 1 Almond Croissant, 1 Butter Croissant, 1 Ham and Cheese Lunch Croissant, 1 Turkey and Cheese Lunch Croissant,  
                          1 Apple Turnover, 1 Raspberry Turnover, 1 Sugar Palmier, 1 Jam Palmier, 1 Almond Vanilla Financier, 1 Cinnamon Roll, 
                          1 Choco Pecan Cookie, 1 Chocoate Twist, and 2 90g Buns.
                        </h6></li>
                        <li><h6>(Contains: wheat, dairy (milk, eggs, butter), tree nuts, soy)</h6></li>
                      </ul>
                      <li className="samplerListItem">
                        <h5>20 pack Sampler</h5>
                        <h5>44.00</h5>
                      </li>
                      <ul className="samplerItemExplanation">
                        <li><h6>
                          1 Chocolate Croissant, 1 Almond Croissant, 1 Butter Croissant, 1 Ham and Cheese Lunch Croissant, 1 Turkey and Cheese Lunch Croissant,  
                          2 Apple Turnover, 1 Raspberry Turnover, 1 Nutella Turnover, 1 Sugar Palmier, 1 Jam Palmier, 1 Almond Vanilla Financier, 1 Cinnamon Roll, 
                          2 Choco Pecan Cookie, 1 Chocoate Twist, and 4 90g Buns.
                        </h6></li>
                        <li><h6>(Contains: wheat, dairy (milk, eggs, butter), tree nuts, soy)</h6></li>
                      </ul>
                      <li className="samplerListItem">
                        <h5>4 person Meal Pack</h5>
                        <h5>20.90</h5>
                      </li>
                      <ul className="samplerItemExplanation">
                        <li><h6>
                          4 hamburger buns, 2 individual sandwich loafs, 1 par-baked pizza dough, 2 everything croissants, 
                          2 Ham and Cheese Croissants, and 1 ten pack of cheese crostinis
                        </h6></li>
                        <li><h6>(Contains: wheat, dairy (milk, eggs, butter))</h6></li>
                      </ul>
                      <li className="samplerListItem">
                        <h5>8 person Meal Pack</h5>
                        <h5>41.90</h5>
                      </li>
                      <ul className="samplerItemExplanation">
                        <li><h6>
                          8 hamburger buns, 4 individual sandwich loafs, 2 par-baked pizza doughs, 4 everything croissants, 
                          4 Ham and Cheese Croissants, 1 ten pack of cheese crostini, and 1 ten pack of everything spices crostinis
                        </h6></li>
                        <li><h6>(Contains: wheat, dairy (milk, eggs, butter))</h6></li>
                      </ul>
                      <li className="samplerListItem">
                        <h5>4 person Dessert Pack</h5>
                        <h5>22.80</h5>
                      </li>
                      <ul className="samplerItemExplanation">
                        <li><h6>
                            2 Chocoloate Croissants, 4 Choco Twists, 1 Apple Turnover, 1 Strawberry Turnover,
                            2 coffecakes, 1 jam sandwich cookie (NEW), and 1 chocolate sandwich cookie (NEW)
                        </h6></li>
                        <li><h6>(Contains: wheat, dairy (milk, eggs, butter), tree nuts)</h6></li>
                      </ul>
                      <li className="samplerListItem">
                        <h5>8 person Dessert Pack</h5>
                        <h5>41.50</h5>
                      </li>
                      <ul className="samplerItemExplanation">
                        <li><h6>
                            4 Chocoloate Croissants, 6 Choco Twists, 2 Apple Turnovers, 2 Strawberry Turnovers,
                            4 muffins, 2 coffecakes, 1 jam sandwich cookie (NEW), and 1 chocolate sandwich cookie (NEW)
                        </h6></li>
                        <li><h6>(Contains: wheat, dairy (milk, eggs, butter), tree nuts)</h6></li>
                      </ul>
                      <li className="samplerListItem">
                        <h5>8 person Meal and Dessert Combo Pack</h5>
                        <h5>41.90</h5>
                      </li>
                      <ul className="samplerItemExplanation">
                        <li><h6>
                            8 hamburger buns, 2 par-baked pizza dough, 4 everything croissants, 4 Chocoloate Croissants, 1 ten pack of cheese crostini,
                            6 coffecakes
                        </h6></li>
                        <li><h6>(Contains: wheat, dairy (milk, eggs, butter), tree nuts)</h6></li>
                      </ul>
                      <li className="samplerListItem">
                        <h5>12 person Meal and Dessert Combo Pack</h5>
                        <h5>58.90</h5>
                      </li>
                      <ul className="samplerItemExplanation">
                        <li><h6>
                            12 hamburger buns, 3 par-baked pizza dough, 6 everything croissants, 6 Chocoloate Croissants, 1 ten pack of cheese crostini,
                            8 coffecakes
                        </h6></li>
                        <li><h6>(Contains: wheat, dairy (milk, eggs, butter), tree nuts)</h6></li>
                      </ul>
                    </ul>
                    <p className="samplerFullIngredients">
                      For the full list of ingredients please see the items in the sections above.
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
