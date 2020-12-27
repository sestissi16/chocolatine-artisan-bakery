import React, { Component } from 'react';
import {
    AccordionItem,
    AccordionHeader,
    AccordionPanel,
    AccordionIcon,
    Box
  } from "@chakra-ui/core";
import bakeryInfo from '../bakeryData';
import SectionDivider from '../assets/borders/black/blackFleurDivider-Transparent.png'
import ItemInfo from './cateringChoiceInfo'
import './menuItemCard.css'

class ItemCard extends Component {
  
    render() {
        const {combo, description, choices, changeTheSize, changeTheOption, caterItemOption, removeCaterOption, addTheCombo, itemName, itemSize, itemOption, selectedOptions} = this.props
        const price = "TBD we'll discuss pricing with you"
        
        return(
            <div id="cardSection">
                <h6>{description}</h6>
                <div className="itemDividerSection">
                    <img src={SectionDivider} alt="Floral Section Divider" className="itemDividerImg"/>
                </div>
                <div id="sizeChoiceCater">
                    <h6>Size:</h6>
                    <div className="sizeRadio">
                        <input 
                            type="radio" 
                            value={"Sm-"+price} 
                            name="size" 
                            id="smSize" 
                            onChange={changeTheSize}
                            checked={this.props.itemSize === "Sm"}
                            style={{height:1.1 +'em', width:1.1+'em',}}
                        />
                        <lable for="smSize" className="itemInputLabel">Small - {price}</lable>
                    </div>
                    <div className="sizeRadio">
                        <input 
                            type="radio" 
                            value={"Lg-"+price} 
                            name="size" 
                            id="lgSize"
                            onChange={changeTheSize}
                            checked={this.props.itemSize === "Lg"}
                            style={{height:1.1 +'em', width:1.1+'em',}}
                        /> 
                        <lable for="lgSize" className="itemInputLabel">Large - {price}</lable>
                    </div>
                </div>
                <div className="itemDividerSection">
                    <img src={SectionDivider} alt="Floral Section Divider" className="itemDividerImg"/>
                </div>
                <AccordionItem className="accordionItem">
                    <AccordionHeader className="ingredientsHeader" _expanded={{ background: "#432818 !important", color: "white" }}>
                        <Box flex="1" textAlign="left">
                            Item Choices:
                        </Box>
                        <AccordionIcon />
                    </AccordionHeader>
                    <AccordionPanel pb={4} className="ingredientsPanel">
                        <div id="comboChoices">
                            {Object.keys(choices).map((key, index) => {
                                var item = choices[key]
                                return <ItemInfo
                                    name={item.name}
                                    description={item.description}
                                    shortIngredients={item.shortIngredients}
                                    longIngredients={item.longIngredients}
                                    option1={item.option1}
                                    changeOption={changeTheOption}
                                    selectCaterOption={caterItemOption}
                                    itemOption={itemOption}
                                    selectedOptions={selectedOptions}
                                />
                            })}
                        </div>
                    </AccordionPanel>
                </AccordionItem>
                <div id="choiceReviewSection">
                        {
                            Object.keys(this.state.selectedOptions).map((key, index) => {
                                console.log(key)
                            })
                        }
                </div>
                <div id="addToOrderSection">
                    <button 
                        id="addToOrderButton"
                        name={combo}
                        onClick={addTheCombo}
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
    description: "Description of the product.", 
    option1: {
        title: "Contact us if you need adaptations.",
        choices: {
            one: "Need to make something Gluten Free?",
            two: "Want a specific flavor?"
        }
    }
}

export default ItemCard;