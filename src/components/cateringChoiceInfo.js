import React, { Component } from 'react';
import {
    AccordionItem,
    AccordionHeader,
    AccordionPanel,
    AccordionIcon,
    Box
  } from "@chakra-ui/core";
import SectionDivider from '../assets/borders/black/blackFleurDivider-Transparent.png'
import { FaCheck, FaPlus } from "react-icons/fa"
import './cateringChoiceInfo.css'

class ItemInfo extends Component {
    render(){
        const {name, description, shortIngredients, longIngredients, option1, changeOption, selectCaterOption, itemOption, selectedOptions} = this.props
        
        var extraChoices = option1.choices

        var buttonText = <FaPlus/> + " Select Item"

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
                            Item Options:
                        </Box>
                        <AccordionIcon />
                    </AccordionHeader>
                    <AccordionPanel pb={4} className="ingredientsPanel">
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
                                        onChange={changeOption}
                                        checked={this.props.itemOption === optValue}
                                        style={{height:1.1 +'em', width:1.1+'em',}}
                                    /> 
                                    <lable for={name+key} className="itemInputLabel">{optValue}</lable>
                                </div>
                            })}
                        </div>
                    </AccordionPanel>
                </AccordionItem>
                <div id="addChoiceSection">
                    <button 
                        id="addComboChoiceBtn"
                        name={name}
                        value={itemOption} 
                        onClick={selectCaterOption}
                    >
                            {buttonText}
                    </button>
                </div>
            </div> 
        );
    }
}

ItemInfo.defaultProps = {
    name: "Name of the product", 
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

export default ItemInfo;