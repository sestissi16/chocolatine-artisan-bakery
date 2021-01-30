import React, { Component } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionHeader,
    AccordionPanel,
    AccordionIcon,
    Box
  } from "@chakra-ui/core";
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from "@chakra-ui/react"
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TextField } from "@material-ui/core"
import { withStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import bakeryInfo from '../bakeryData';
import yourOrder from '../yourOrder';
import './menuItemCard.css'

const MyRadio = withStyles({
    root: {
      '&$checked': {
        color: red[900],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

class ItemCard extends Component {

    render() {
        const {section, type, itemKey, name, pack, price, description, shortIngredients, longIngredients, option1, changeTheSize, changeTheOption, changeTheAmount, addTheItem, itemName, itemSize, itemPrice, itemOption} = this.props
        // const {itemName, itemSize, itemPrice, itemOption} = this.state
        
        var buttonName = section+'.'+type+'.'+itemKey

        var orderInfo = bakeryInfo.menu.smallBatch.orderInfo
        var extraChoices = option1.choices

        return(
            <div id="cardSection">
                <div id="cardNameRow">
                    <h3>{name}</h3>
                    <h3>{pack}</h3>
                </div>
                <div id="cardDescription">
                    <h5>{description}</h5>
                </div>
                <AccordionItem className="accordionItem">
                    <AccordionHeader className="ingredientsHeader" >
                        <Box flex="1" textAlign="left">
                            <h5 className="accordionHeaderTitle">{shortIngredients}</h5>
                        </Box>
                        <AccordionIcon />
                    </AccordionHeader>
                    <AccordionPanel pb={4} className="ingredientsPanel">
                        <h5>{longIngredients}</h5>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem className="accordionItem">
                    <AccordionHeader className="ingredientsHeader" >
                        <Box flex="1" textAlign="left">
                            <h5>Order Options:</h5>
                        </Box>
                        <AccordionIcon />
                    </AccordionHeader>
                    <AccordionPanel pb={4} className="ingredientsPanel">
                        <div id="sizeChoice">
                            <FormControl component="fieldset">
                                <FormLabel component="legend" id="optionTitle">Size</FormLabel>
                                <RadioGroup aria-label="sizes" name="sizes"  onChange={changeTheSize}>
                                    <FormControlLabel className="radioItem" value={"Sm-"+price.sm} control={<MyRadio />} label={"Small - "+price.sm} />
                                    <FormControlLabel className="radioItem" value={"Med-"+price.med} control={<MyRadio />} label={"Medium - "+price.med} />
                                    <FormControlLabel className="radioItem" value={"Lg-"+price.lg} control={<MyRadio />} label={"Large - "+price.lg} />
                                </RadioGroup>
                            </FormControl>
                        </div> 
                        <div id="option1Choice">
                            <FormControl component="fieldset">
                                <FormLabel component="legend" id="optionTitle">{option1.title}</FormLabel>
                                <RadioGroup aria-label="option1" name="option1"  onChange={changeTheOption}>
                                    {Object.keys(extraChoices).map((key, index) => {
                                        var optValue = extraChoices[key];
                                        return <FormControlLabel className="radioItem" value={optValue} control={<MyRadio />} label={optValue} />
                                    })}
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </AccordionPanel>
                </AccordionItem>
                <div id="addToOrderSection">
                    <form id="amountForm" noValidate autoComplete="off">
                        <TextField
                            required
                            fullWidth
                            id="amountInput"
                            label="Amount"
                            type="number"
                            onChange={changeTheAmount}
                            placeholder={0}
                            InputProps={{
                                inputProps: {
                                    min: 0,
                                    max: 15,
                                }
                            }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </form>
                    <button 
                        id="addToOrderButton"
                        name={buttonName+'-'+name}
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