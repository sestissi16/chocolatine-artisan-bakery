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
import SectionDivider from '../assets/borders/black/blackFlowerThinDivider2-FullLine-Transparent.png'
import './menuItemCard.css'
import { render } from 'react-dom';

class ItemCard extends Component {
    constructor (props) {
        super(props)

        this.state = {
            Name: '',
            Size: '',
            Price: '',
            Option: '',
        }

    }

    // changeSize(e) {
    //     e.stopPropagation();
    //     //this changes the state
    //     if (e.target.value === "Sm") {
    //         this.setState({ itemSize: e.target.value, itemPrice: this.props.price.sm});
    //     } else if (e.target.value === "Med") {
    //         this.setState({ itemSize: e.target.value, itemPrice: this.props.price.med});
    //     } else {
    //         this.setState({ itemSize: e.target.value, itemPrice: this.props.price.lg});
    //     }
        
    // }

    // changeOption(e) {
    //     e.stopPropagation();
    //     //this changes the state
    //     this.setState({ itemOption: e.target.value});
    // }

    // addOrderItem(e) {
        
    //     e.preventDefault();
    //     e.stopPropagation();
    //     this.setState({ itemName: e.target.name});
    //     // console.log(this.state.itemName)
    //     var numberOfItems  = yourOrder.orderList.count
    //     var itemName = e.target.name
    //     var key = e.target.name.replace( /\s/g, '') + numberOfItems
    //     yourOrder.orderList[key] = {name: itemName, price: this.state.itemPrice, size: this.state.itemSize, option: this.state.itemOption};
    //     yourOrder.orderList.count = numberOfItems + 1

    //     console.log(yourOrder.orderList)
    //     this.setState({ itemSize: '', itemOption: ''});
        
    // }
    render() {
        // name, price, description, shortIngredients, longIngredients, option1
        const {section, type, itemKey, name, price, description, shortIngredients, longIngredients, option1, changeTheSize, changeTheOption, addTheItem, itemName, itemSize, itemPrice, itemOption} = this.props
        // const {itemName, itemSize, itemPrice, itemOption} = this.state
        console.log(itemSize)
        var optionName = section+'.'+type+'.'+itemKey+'-option'
        var buttonName = section+'.'+type+'.'+itemKey

        var orderInfo = bakeryInfo.menu.smallBatch.orderInfo
        var extraChoices = option1.choices
        return(
            <div id="cardSection">
                <h5>{name}</h5>
                <div></div>
                <h6>{description}</h6>
                <AccordionItem className="accordionItem">
                    <AccordionHeader className="ingredientsHeader" _expanded={{ background: "#5D663D !important", color: "white" }}>
                        <Box flex="1" textAlign="left">
                            {shortIngredients}
                        </Box>
                        <AccordionIcon />
                    </AccordionHeader>
                    <AccordionPanel pb={4} className="ingredientsPanel">
                        {longIngredients}
                    </AccordionPanel>
                </AccordionItem>
                <div></div>
                <AccordionItem className="accordionItem">
                    <AccordionHeader className="ingredientsHeader" _expanded={{ background: "#5D663D !important", color: "white" }}>
                        <Box flex="1" textAlign="left">
                            Order Options:
                        </Box>
                        <AccordionIcon />
                    </AccordionHeader>
                    <AccordionPanel pb={4} className="ingredientsPanel">
                        <div id="sizeChoice">
                            <div className="sizeRadio">
                                <input 
                                    type="radio" 
                                    value={"Sm-"+price.sm} 
                                    name="size" 
                                    id="smSize" 
                                    onChange={changeTheSize}
                                    checked={this.props.itemSize === "Sm"}
                                />
                                <lable for="smSize">Small - {price.sm}</lable>
                            </div>
                            <div className="sizeRadio">
                                <input 
                                    type="radio" 
                                    value={"Med-"+price.med} 
                                    name="size" 
                                    id="medSize"
                                    onChange={changeTheSize}
                                    checked={this.props.itemSize === "Med"}
                                />
                                <lable for="medSize">Medium - {price.med}</lable>
                            </div>
                            <div className="sizeRadio">
                                <input 
                                    type="radio" 
                                    value={"Lg-"+price.lg} 
                                    name="size" 
                                    id="lgSize"
                                    onChange={changeTheSize}
                                    checked={this.props.itemSize === "Lg"}
                                /> 
                                <lable for="lgSize">Large - {price.lg}</lable>
                            </div>
                        </div>
                        <div></div>
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
                                    /> 
                                    <lable for={name+key}>{optValue}</lable>
                                </div>
                            })}
                        </div>
                    </AccordionPanel>
                </AccordionItem>
                <div id="addToOrderSection">
                    <button 
                        className="addToOrderButton"
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