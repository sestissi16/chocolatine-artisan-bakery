import React, { Component } from 'react';
import {
    AccordionItem,
    AccordionHeader,
    AccordionPanel,
    AccordionIcon,
    Box
  } from "@chakra-ui/core";
import bakeryInfo from '../bakeryData';
import ComboCard from '../components/menuComboCard'
import SectionDivider from '../assets/borders/black/blackFlowerThinDivider2-FullLine-Transparent.png'
import './menuCatering.css'

class Catering extends Component {
    render() {
        const { changeSize, changeOption, caterOption, removeCaterOption, addCombo, stateItemName, stateItemOption, stateItemSize, stateCaterOption } = this.props
        var orderInfo = bakeryInfo.menu.cateringInfo.orderInfo
        var caterBreakfast = bakeryInfo.menu.cateringInfo.cateringMenu.breakfast
        var caterLunchDinner = bakeryInfo.menu.cateringInfo.cateringMenu.lunchDinner
        var caterSides = bakeryInfo.menu.cateringInfo.cateringMenu.sides
        var caterDesserts = bakeryInfo.menu.cateringInfo.cateringMenu.desserts

        return(
            <section id="Catering">
                <h4 id="cateringTitle">Small Batch Options:</h4>
                <div className="sectionDividerDiv">
                    <img src={SectionDivider} alt="ornate black line divider" className="sectionDivider"/>
                </div>
                <div id="cateringInfo">
                    <h4 id="cateringOrderInfoTitle">Catering Ordering Info</h4>
                    <ul>
                        <h5><li>{orderInfo.line1}</li></h5> 
                        
                        <h5><li>{orderInfo.line2}</li></h5>
                        
                        <h5><li>{orderInfo.line3}</li></h5>
                    </ul>
                </div>
                <div className="sectionDividerDiv">
                    <img src={SectionDivider} alt="ornate black line divider" className="sectionDivider"/>
                </div>
                <div id="cateringCombos">
                    <h4>Combo Section:</h4>
                    <AccordionItem className="accordionSection">
                        <AccordionHeader className="sectionHeader" _expanded={{ background: "#5D663D !important", color: "white" }}>
                            <Box flex="1" textAlign="left">
                            <h5>Breakfast Combos</h5>
                            </Box>
                            <AccordionIcon />
                        </AccordionHeader>
                        <AccordionPanel pb={4} className="itemCardPanel">
                            <div id="breakfastCombos">
                                <ComboCard
                                    combo="Breakfast"
                                    description={caterBreakfast.description}
                                    choices={caterBreakfast.choices}
                                    changeTheSize={changeSize}
                                    changeTheOption={changeOption}
                                    caterItemOption={caterOption}
                                    removeCaterOption={removeCaterOption}
                                    addTheCombo={addCombo}
                                    itemName={stateItemName}
                                    itemSize={stateItemSize}
                                    itemOption={stateItemOption}
                                    selectedOptions={stateCaterOption}
                                />
                            </div>
                        </AccordionPanel>
                    </AccordionItem>
                    
                    <AccordionItem className="accordionSection">
                        <AccordionHeader className="sectionHeader" _expanded={{ background: "#5D663D !important", color: "white" }}>
                            <Box flex="1" textAlign="left">
                            <h5>Lunch/Dinner Combos</h5>
                            </Box>
                            <AccordionIcon />
                        </AccordionHeader>
                        <AccordionPanel pb={4} className="itemCardPanel">
                            <div id="lunchDinnerCombos">
                                <ComboCard
                                    combo="Lunch / Dinner"
                                    description={caterLunchDinner.description}
                                    choices={caterLunchDinner.choices}
                                    changeTheSize={changeSize}
                                    changeTheOption={changeOption}
                                    caterItemOption={caterOption}
                                    removeCaterOption={removeCaterOption}
                                    addTheCombo={addCombo}
                                    itemName={stateItemName}
                                    itemSize={stateItemSize}
                                    itemOption={stateItemOption}
                                    selectedOptions={stateCaterOption}
                                />
                            </div>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className="accordionSection">
                        <AccordionHeader className="sectionHeader" _expanded={{ background: "#5D663D !important", color: "white" }}>
                            <Box flex="1" textAlign="left">
                            <h5>Sides</h5> 
                            </Box>
                            <AccordionIcon />
                        </AccordionHeader>
                        <AccordionPanel pb={4} className="itemCardPanel">
                            <div id="sideCombos">
                                <ComboCard
                                    combo="Sides"
                                    description={caterSides.description}
                                    choices={caterSides.choices}
                                    changeTheSize={changeSize}
                                    changeTheOption={changeOption}
                                    caterItemOption={caterOption}
                                    removeCaterOption={removeCaterOption}
                                    addTheCombo={addCombo}
                                    itemName={stateItemName}
                                    itemSize={stateItemSize}
                                    itemOption={stateItemOption}
                                    selectedOptions={stateCaterOption}
                                />
                            </div>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className="accordionSection">
                        <AccordionHeader className="sectionHeader" _expanded={{ background: "#5D663D !important", color: "white" }}>
                            <Box flex="1" textAlign="left">
                            <h5>Dessert Combos</h5> 
                            </Box>
                            <AccordionIcon />
                        </AccordionHeader>
                        <AccordionPanel pb={4} className="itemCardPanel">
                            <div id="dessertCombos">
                                <ComboCard
                                    combo="Desserts"
                                    description={caterDesserts.description}
                                    choices={caterDesserts.choices}
                                    changeTheSize={changeSize}
                                    changeTheOption={changeOption}
                                    caterItemOption={caterOption}
                                    removeCaterOption={removeCaterOption}
                                    addTheCombo={addCombo}
                                    itemName={stateItemName}
                                    itemSize={stateItemSize}
                                    itemOption={stateItemOption}
                                    selectedOptions={stateCaterOption}
                                />
                            </div>
                        </AccordionPanel>
                    </AccordionItem>
                    
                </div>
            </section>
        );
    }
}

export default Catering;