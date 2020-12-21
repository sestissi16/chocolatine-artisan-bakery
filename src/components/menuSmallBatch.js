import React, { Component } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionHeader,
    AccordionPanel,
    AccordionIcon,
    Box
  } from "@chakra-ui/core";
import bakeryInfo from '../bakeryData';
import ItemCard from '../components/menuItemCard'
import SectionDivider from '../assets/borders/black/blackFlowerThinDivider2-FullLine-Transparent.png'
import './menuSmallBatch.css'

class SmallBatch extends Component {
    render() {
        const { changeSize, changeOption, addItem, stateItemName, stateItemOption, stateItemPrice, stateItemSize } = this.props
        var orderInfo = bakeryInfo.menu.smallBatch.orderInfo
        var savoryCroissantBasedInfo = bakeryInfo.menu.smallBatch.savory.croissantBased
        var savoryBreadBasedInfo = bakeryInfo.menu.smallBatch.savory.breadBased
        var savoryOtherInfo = bakeryInfo.menu.smallBatch.savory.other
        return(
            <section id="smallBatch">
                <h4 id="smallbatchTitle">Small Batch Options:</h4>
                <div className="sectionDividerDiv">
                    <img src={SectionDivider} alt="ornate black line divider" className="sectionDivider"/>
                </div>
                <div id="smallBatchInfo">
                    <h4 id="orderInfoTitle">Small Batch Ordering Info</h4>
                    <ul>
                        <h5><li>{orderInfo.line1}</li></h5> 
                        
                        <h5><li>{orderInfo.line2}</li></h5>
                        
                        <h5><li>{orderInfo.line3}</li></h5>
                    </ul>
                </div>
                <div className="sectionDividerDiv">
                    <img src={SectionDivider} alt="ornate black line divider" className="sectionDivider"/>
                </div>
                <div id="smallBatchSavory">
                    <h4>Savory Section:</h4>
                    <AccordionItem className="accordionSection">
                        <AccordionHeader className="sectionHeader" _expanded={{ background: "#5D663D !important", color: "white" }}>
                            <Box flex="1" textAlign="left">
                            <h5>Croissant Based</h5>
                            </Box>
                            <AccordionIcon />
                        </AccordionHeader>
                        <AccordionPanel pb={4} className="itemCardPanel">
                            <div id="savoryCroissantBased">
                                {
                                    Object.keys(savoryCroissantBasedInfo).map(function(key, index) {
                                        var savoryInfo = savoryCroissantBasedInfo
                                        if ('option1' in savoryInfo[key]){
                                            return <ItemCard
                                                section="savory"
                                                type="croissantBased"
                                                itemKey={key}
                                                name={savoryInfo[key].name}
                                                description={savoryInfo[key].description}
                                                shortIngredients={savoryInfo[key].shortIngredient}
                                                longIngredients={savoryInfo[key].longIngredient}
                                                price={savoryInfo[key].price}
                                                option1={savoryInfo[key].option1}
                                                changeTheSize={changeSize}
                                                changeTheOption={changeOption}
                                                addTheItem={addItem}
                                                itemName={stateItemName}
                                                itemPrice={stateItemPrice}
                                                itemSize={stateItemSize}
                                                itemOption={stateItemOption}
                                            />
                                        } else {
                                            return <ItemCard
                                                section="savory"
                                                type="croissantBased"
                                                itemKey={key}
                                                name={savoryInfo[key].name}
                                                description={savoryInfo[key].description}
                                                shortIngredients={savoryInfo[key].shortIngredient}
                                                longIngredients={savoryInfo[key].longIngredient}
                                                price={savoryInfo[key].price}
                                                changeTheSize={changeSize}
                                                changeTheOption={changeOption}
                                                addTheItem={addItem}
                                                itemName={stateItemName}
                                                itemPrice={stateItemPrice}
                                                itemSize={stateItemSize}
                                                itemOption={stateItemOption}
                                            />
                                        }
                                    })
                                }
                            </div>
                        </AccordionPanel>
                    </AccordionItem>
                    
                    
                    <div id="savoryBreadBased"></div>
                    <div id="savoryOther"></div>
                </div>
                <div id="smallBatchSweet">

                </div>
                <div id="smallBatchSpecial">

                </div>
            </section>
        );
    }
}

export default SmallBatch;