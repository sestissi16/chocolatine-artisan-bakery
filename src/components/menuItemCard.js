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
import yourOrder from '../yourOrder';
import SectionDivider from '../assets/borders/black/blackFleurDivider-Transparent.png'
import './menuItemCard.css'
import { render } from 'react-dom';

class ItemCard extends Component {
  
    render() {
        // name, price, description, shortIngredients, longIngredients, option1
        const {section, type, itemKey, name, price, description, shortIngredients, longIngredients, option1, changeTheSize, changeTheOption, addTheItem, itemName, itemSize, itemPrice, itemOption} = this.props
        // const {itemName, itemSize, itemPrice, itemOption} = this.state
        
        var buttonName = section+'.'+type+'.'+itemKey

        var orderInfo = bakeryInfo.menu.smallBatch.orderInfo
        var extraChoices = option1.choices
        return(
            <div id="cardSection">
                <h5>{name}</h5>
                <div className="itemDividerSection">
                    <img src={SectionDivider} alt="Floral Section Divider" className="itemDividerImg"/>
                </div>
                <h6>{description}</h6>
                <h6 className="allergyHeader">Allergy Info:</h6>
                <AccordionItem className="accordionItem">
                    <AccordionHeader className="ingredientsHeader" _expanded={{ background: "#432818 !important", color: "white" }}>
                        <Box flex="1" textAlign="left">
                            {shortIngredients}
                        </Box>
                        <AccordionIcon />
                    </AccordionHeader>
                    <AccordionPanel pb={4} className="ingredientsPanel">
                        {longIngredients}
                    </AccordionPanel>
                </AccordionItem>
                <div className="itemDividerSection">
                    <img src={SectionDivider} alt="Floral Section Divider" className="itemDividerImg"/>
                </div>
                <AccordionItem className="accordionItem">
                    <AccordionHeader className="ingredientsHeader" _expanded={{ background: "#432818 !important", color: "white" }}>
                        <Box flex="1" textAlign="left">
                            Order Options:
                        </Box>
                        <AccordionIcon />
                    </AccordionHeader>
                    <AccordionPanel pb={4} className="ingredientsPanel">
                        <div id="sizeChoice">
                            <h6>Size:</h6>
                            <div className="sizeRadio">
                                <input 
                                    type="radio" 
                                    value={"Sm-"+price.sm} 
                                    name="size" 
                                    id="smSize" 
                                    onChange={changeTheSize}
                                    checked={this.props.itemSize === "Sm"}
                                    style={{height:1.1 +'em', width:1.1+'em',}}
                                />
                                <lable for="smSize" className="itemInputLabel">Small - {price.sm}</lable>
                            </div>
                            <div className="sizeRadio">
                                <input 
                                    type="radio" 
                                    value={"Med-"+price.med} 
                                    name="size" 
                                    id="medSize"
                                    onChange={changeTheSize}
                                    checked={this.props.itemSize === "Med"}
                                    style={{height:1.1 +'em', width:1.1+'em',}}
                                />
                                <lable for="medSize" className="itemInputLabel">Medium - {price.med}</lable>
                            </div>
                            <div className="sizeRadio">
                                <input 
                                    type="radio" 
                                    value={"Lg-"+price.lg} 
                                    name="size" 
                                    id="lgSize"
                                    onChange={changeTheSize}
                                    checked={this.props.itemSize === "Lg"}
                                    style={{height:1.1 +'em', width:1.1+'em',}}
                                /> 
                                <lable for="lgSize" className="itemInputLabel">Large - {price.lg}</lable>
                            </div>
                        </div>
                        <div id="option1Choice">
                            <h6>{option1.title}</h6>
                            {Object.keys(extraChoices).map((key, index) => {
                                var optValue = extraChoices[key];
                                return <div className="extraChoiceRadio">
                                    <input 
                                        type="radio" 
                                        value={optValue} 
                                        name="options"
                                        id={name+key} 
                                        onChange={changeTheOption}
                                        checked={this.props.itemOption === optValue}
                                        style={{height:1.1 +'em', width:1.1+'em',}}
                                    /> 
                                    <lable for={name+key} className="itemInputLabel">{optValue}</lable>
                                </div>
                            })}
                        </div>
                    </AccordionPanel>
                </AccordionItem>
                <div id="addToOrderSection">
                    <button 
                        id="addToOrderButton"
                        name={buttonName}
                        value={name} 
                        onClick={addTheItem}
                    >
                            Add
                    </button>
                </div>
            </div> 
        );
    }
}

ItemCard.defaultProps = {
    name: "Name of the product", 
    price: {
        sm: "Price available upon request",
        med: "Price available upon request",
        lg: "Price available upon request"
    }, 
    description: "Description of the product.", 
    shortIngredients: "Contact us for allergy information", 
    longIngredients: "Contact us for more specific ingredient information.", 
    option1: {
        title: "Contact us if you need adaptations.",
        choices: {
            one: "Need to make something Gluten Free?",
            two: "Want a specific flavor?"
        }
    }
}

export default ItemCard;