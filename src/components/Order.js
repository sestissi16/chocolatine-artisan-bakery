import React, { Component } from 'react'
import './Order.css'
import Input from 'react-phone-number-input/input'
import 'react-phone-number-input/style.css'
import PaypalButtons from './PaypalButton'
import {
    Accordion,
    AccordionItem,
    AccordionHeader,
    AccordionPanel,
    AccordionIcon,
    Box
  } from "@chakra-ui/core";
import TitleBorderTop from '../assets/goldOrnateLines-Top4-Transparent.png'
import TitleBorderBottom from '../assets/goldOrnateLines-Bottom4-Transparent.png'

const pricesPerItem = { 
    cookiesChoco: 1.25, 
    cookiesChocoPecan: 1.50,
    muffinsChoco: 1.50,
    muffinsChocoChip: 1.50,
    muffinsLemonPoppy: 1.50,
    muffinsOrangeCranberry: 1.50,
    muffinsBlueberry: 1.50,
    muffinsBerryful: 1.50,
    smallButterCroissant: 1.75,
    largeButterCroissant: 2.25,
    smallAlmondCroissant: 3.00,
    largeAlmondCroissant: 3.50,
    smallChocolateCroissant: 2.25,
    largeChocolateCroissant: 2.75,
    everythingCroissant: 2.00,
    lunchHamCroissant: 3.80,
    lunchTurkeyCroissant: 3.80,
    lunchDeluxHamCroissant: 4.50,
    lunchDeluxTurkeyCroissant: 4.50,
    smallRollCinnamon: 1.75,
    smallRollRaisin: 1.75,
    smallRollRaspberry: 1.75,
    largeRollCinnamon: 3.00,
    largeRollRaisin: 3.00,
    largeRollRaspberry: 3.00,
    smallChocoTwist: 1.75,
    largeChocoTwist: 3.50,
    smallGranolaBar: 1.50,
    largeGranolaBar: 2.00,
    financierAlmond: 2.00,
    coffeecakeAlmond: 2.00,
    fourPackTrufflesClassic: 5.00,
    fourPackTrufflesRumCoco: 5.00,
    fourPackTrufflesOrange: 5.00,
    fourPackTrufflesPeppermint: 5.00,
    fourPackTrufflesMix: 5.00,
    ninePackTrufflesClassic: 10.00,
    ninePackTrufflesRumCoco: 10.00,
    ninePackTrufflesOrange: 10.00,
    ninePackTrufflesPeppermint: 10.00,
    ninePackTrufflesMix: 10.00,
    regularClassicPizza: 2.00,
    regularHerbPizza: 2.20,
    largeClassicPizza: 2.50,
    largeHerbPizza: 2.70,
    turnoverApple: 3.00,
    turnoverNutella: 3.00,
    turnoverRaspberry: 3.00,
    danishApple: 3.00,
    danishClassic: 3.00,
    danishLemon: 3.00,
    danishPeach: 3.00,
    danishApricot: 3.00,
    buns90: 0.80,
    buns110: 0.95,
    buns60: 0.65,
    smallWhiteLoaf: 3.50,
    mediumWhiteLoaf: 5.00,
    largeWhiteLoaf: 7.00,
    smallBrioche: 4.00,
    smallMultigrainLoaf: 4.00,
    mediumBrioche: 5.50,
    mediumMultigrainLoaf: 5.50,
    largeBrioche: 7.50,
    largeMultigrainLoaf: 7.50,
    loafFruitAddOn: 0.50,
    nutellaLoaf: 1.50,
    fruitSugarLoaf: 1.50,
    tenCrostinisEverything: 5.00,
    tenCrostinisCheese: 5.00,
    smallPalmierSugar: 1.75,
    smallPalmierJam: 1.75,
    largePalmierSugar: 2.25,
    largePalmierJam: 2.25,
    fivePackSampler: 12.00,
    tenPackSampler: 19.00,
    fifteenPackSampler: 34.00,
    twentyPackSampler: 44.00,
};
class Order extends Component {
    constructor () {
        super()

        this.state = {
            cookiesChoco: 0,
            cookiesChocoPecan: 0,
            muffinsChocoChip: 0,
            muffinsChoco: 0,
            muffinsLemonPoppy: 0,
            muffinsBlueberry: 0,
            muffinsBerryful: 0,
            muffinsOrangeCranberry: 0,
            smallButterCroissant: 0,
            largeButterCroissant: 0,
            smallAlmondCroissant: 0,
            largeAlmondCroissant: 0,
            smallChocolateCroissant: 0,
            largeChocolateCroissant: 0,
            everythingCroissant: 0,
            lunchHamCroissant: 0,
            lunchTurkeyCroissant: 0,
            lunchDeluxHamCroissant: 0,
            lunchDeluxTurkeyCroissant: 0,
            smallRollCinnamon: 0,
            smallRollRaisin: 0,
            smallRollRaspberry: 0,
            largeRollCinnamon: 0,
            largeRollRaisin: 0,
            largeRollRaspberry: 0,
            smallChocoTwist: 0,
            largeChocoTwist: 0,
            smallGranolaBar: 0,
            largeGranolaBar: 0,
            financierAlmond: 0,
            coffeecakeAlmond: 0,
            fourPackTrufflesMix: 0,
            fourPackTrufflesClassic: 0,
            fourPackTrufflesPeppermint: 0,
            fourPackTrufflesOrange: 0,
            fourPackTrufflesRumCoco: 0,
            ninePackTrufflesMix: 0,
            ninePackTrufflesClassic: 0,
            ninePackTrufflesPeppermint: 0,
            ninePackTrufflesOrange: 0,
            ninePackTrufflesRumCoco: 0,
            regularClassicPizza: 0,
            regularHerbPizza:0,
            largeClassicPizza: 0,
            largeHerbPizza: 0,
            turnoverApple: 0,
            turnoverRaspberry: 0,
            turnoverNutella: 0,
            danishClassic: 0,
            danishPeach: 0,
            danishApricot: 0,
            danishApple: 0,
            danishLemon: 0,
            buns90: 0,
            buns110: 0,
            buns60: 0,
            smallWhiteLoaf: 0,
            mediumWhiteLoaf: 0,
            largeWhiteLoaf: 0,
            smallBriocheLoaf: 0,
            smallMultigrainLoaf: 0,
            mediumBriocheLoaf: 0,
            mediumMultigrainLoaf: 0,
            largeBriocheLoaf: 0,
            largeMultigrainLoaf: 0,
            loafFruitAddOn: 0,
            nutellaLoaf: 0,
            fruitSugarLoaf: 0,
            tenCrostinisEverything: 0,
            tenCrostinisCheese: 0,
            smallPalmierSugar: 0,
            smallPalmierJam: 0,
            largePalmierSugar: 0,
            largePalmierJam:0,
            fivePackSampler: 0,
            tenPackSampler: 0,
            fifteenPackSampler: 0,
            twentyPackSampler: 0,
            yourOrder: [],
            phoneValue: '',
            showPaypal: false,
            paymentOption: '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.resetContact = this.resetOrder.bind(this)
        this.showPaypalButtons = this.showPaypalButtons.bind(this)
        this.changePayment = this.changePayment.bind(this)
        this.addOrderItem = this.addOrderItem.bind(this)
        this.removeOrderItem = this.removeOrderItem.bind(this)
        this.updateOrderItem = this.updateOrderItem.bind(this)
    }

    showPaypalButtons = (e) => {
        // this preventDefault stopped my radio buttons from working correctly since I was calling it in their change function
        // e.preventDefault();

        //this changes the state according to which button is pushed which will change the className on the container for the paypal buttons
        if (e.target.id === 'payInCash'){
            this.setState({showPaypal: false})
        } else{
            this.setState({ showPaypal: true });
        }
        
    };

    //this functions handles the changes from the text areas so the people can view what they're typing and we can pass down the final value from the state to the input
    handleChange(e) {
        e.preventDefault()
        // const numberValue = parseInt(e.target.value)
        // const splitName = e.target.name.match(/[A-Z]+[^A-Z]*|[^A-Z]+/g)
        this.setState({
            [e.target.name]: e.target.value
        })
        
    }

    addOrderItem(e) {
        const itemName = e.target.name
        e.preventDefault();
        e.stopPropagation();
        const yourOrder = [...this.state.yourOrder]
        const indexFound = this.state.yourOrder.findIndex(element => element.item === itemName)
        if (indexFound > -1) {
            const orderInt = parseInt(yourOrder[indexFound].number)
            const newOrderInt = parseInt(e.target.value)
            const newTotal = orderInt + newOrderInt
            yourOrder[indexFound].number = newTotal.toString()
            this.setState({yourOrder})
        } else
        {this.setState({
            yourOrder: [...this.state.yourOrder, {item: e.target.name, number: e.target.value}]
        })}
    }

    removeOrderItem(e) {
        e.preventDefault();
        e.stopPropagation();
        const prevYourOrder = [...this.state.yourOrder]
        const indexToRemove = this.state.yourOrder.findIndex(element => element.item === e.target.name)
        const yourOrder = prevYourOrder.filter((item, arrayIndex) => indexToRemove !== arrayIndex)
        const itemStateName = e.target.name.charAt(0).toLowerCase() + e.target.name.slice(1)
        this.setState({yourOrder, [itemStateName]: 0})
    }

    updateOrderItem(e) {
        e.preventDefault();
        e.stopPropagation();
        const yourOrder = [...this.state.yourOrder]
        const indexFound = this.state.yourOrder.findIndex(element => element.item === e.target.name)
        const itemStateName = e.target.name.charAt(0).toLowerCase() + e.target.name.slice(1)
        if (e.target.value === '+1') {
            const orderInt = parseInt(yourOrder[indexFound].number)
            const newTotal = orderInt + 1
            yourOrder[indexFound].number = newTotal.toString()
            this.setState({yourOrder, [itemStateName]: newTotal})
        } else if (e.target.value === '-1') {
            const orderInt = parseInt(yourOrder[indexFound].number)
            let newTotal = orderInt - 1
            if (newTotal < 0) {
                newTotal = 0
            }
            yourOrder[indexFound].number = newTotal.toString()
            this.setState({yourOrder, [itemStateName]: newTotal})
        }
    }

    //This changes the checked status of the payment radio buttons
    changePayment(e){
        e.stopPropagation();
        //this changes the state
        this.setState({ paymentOption: e.target.value });

        //this changes the showPaypal state accordingly
        this.showPaypalButtons(e)
    }

    //This resets the order form when someone presses place order
    resetOrder(e) {
        e.preventDefault();

        this.setState({
            cookiesChoco: 0,
            cookiesChocoPecan: 0,
            muffinsChocoChip: 0,
            muffinsChoco: 0,
            muffinsLemonPoppy: 0,
            muffinsBlueberry: 0,
            muffinsBerry: 0,
            muffinsOrangeCranberry: 0,
            smallButterCroissant: 0,
            largeButterCroissant: 0,
            smallAlmondCroissant: 0,
            largeAlmondCroissant: 0,
            smallChocolateCroissant: 0,
            largeChocolateCroissant: 0,
            everythingCroissant: 0,
            lunchHamCroissant: 0,
            lunchTurkeyCroissant: 0,
            lunchDeluxHamCroissant: 0,
            lunchDeluxTurkeyCroissant: 0,
            smallRollCinnamon: 0,
            smallRollRaspberry: 0,
            largeRollCinnamon: 0,
            largeRollRaspberry: 0,
            smallChocoTwist: 0,
            largeChocoTwist: 0,
            smallGranolaBar: 0,
            largeGranolaBar: 0,
            financierAlmond: 0,
            coffeecakeAlmond: 0,
            fourPackTrufflesMix: 0,
            fourPackTrufflesClassic: 0,
            fourPackTrufflesPeppermint: 0,
            fourPackTrufflesOrange: 0,
            fourPackTrufflesRumCoco: 0,
            ninePackTrufflesMix: 0,
            ninePackTrufflesClassic: 0,
            ninePackTrufflesPeppermind: 0,
            ninePackTrufflesOrange: 0,
            ninePackTrufflesRumCoco: 0,
            regularPizza: 0,
            largePizza: 0,
            turnoverApple: 0,
            turnoverRaspberry: 0,
            turnoverNutella: 0,
            danishClassic: 0,
            danishPeachApricot: 0,
            danishApple: 0,
            danishLemon: 0,
            buns90: 0,
            buns110: 0,
            buns60: 0,
            smallWhiteLoaf: 0,
            mediumWhiteLoaf: 0,
            largeWhiteLoaf: 0,
            smallBriocheOrMultigrainLoaf: 0,
            mediumBriocheOrMultigrainLoaf: 0,
            largeBriocheOrMultigrainLoaf: 0,
            loafFruitAddOn: 0,
            nutellaOrFruitSugarLoaf: 0,
            tenCrostinisEverything: 0,
            tenCrostinisCheese: 0,
            smallPalmierSugar: 0,
            smallPalmierJam: 0,
            largePalmierSugar: 0,
            largePalmierJam:0,
            fivePackSampler: 0,
            tenPackSampler: 0,
            fifteenPackSampler: 0,
            twentyPackSampler: 0,
            phoneValue: '',
            total: 0,
            paymentOption: '',
            yourOrder: [],
        })
    }

    //This is the script needed to put the contents of the form in the google sheet. 
    //For it to work you need an input field with the name attribute and the name attribute must match a heading in the google sheet it's linked to
    formSubmit(e) {
        e.preventDefault();
        e.stopPropagation();
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwCsxWYO8f5aFTvvWzrQMYgHPryxbi0TUSlnjIMiabos2vuldpk/exec'
        const form = document.forms['submit-to-google-sheet']
        console.log(form);
        console.log(new Date());
        
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => console.log('Success!', response))
          .catch(error => console.error('Error!', error.message))
    }

    render() {
        const { showPaypal, paymentOption, yourOrder } = this.state;
        let orderArray = [];
        let itemStateName
        let total = 0;
        
        if (yourOrder.length === 0){
            total = 0
        } else {
            yourOrder.forEach((element) => {
                orderArray.push(`${element.item}: ${element.number}`)
                itemStateName = element.item.charAt(0).toLowerCase() + element.item.slice(1)
                total = parseInt(total) + (parseInt(element.number) * pricesPerItem[itemStateName])
            })
            
        }

        const orderString = orderArray.join(', ')

        const onlineTotal = ((total * 0.03) + total + 0.30).toFixed(2)

        const order = {
            price: onlineTotal,
            description: orderString,
            name: 'Your order',    
        };
        
        return (
            <section id="order">
                <div id="orderContainer">
                    <div id="orderSectionTitle">
                        <img src={TitleBorderTop} alt="gold ornamental top border" id="aboutTitleTopBorder"/>
                        <h1 id="orderTitleText">Make an Order:</h1>
                        <img src={TitleBorderBottom} alt="gold ornamental bottom border" id="aboutTitleBottomBorder"/>
                    </div>
                    <form name="submit-to-google-sheet" id="orderForm" onSubmit={this.formSubmit}>
                        <div id="orderRow1">
                            <div className="form-group">
                                <label className="orderFormLabel" for="orderFormEmail">Enter your email address: </label>
                                <input id="orderFormEmail" className="orderFormInput" name="email" type="email" placeholder="Email" required/>
                            </div>

                            <div className="form-group">
                                <label className="orderFormLabel" for="orderFormPhone">Enter Phone Number: </label>
                                <Input
                                    name="phoneNumber"
                                    placeholder="Phone Number"
                                    className="orderFormInput"
                                    id="orderFormPhone"
                                    country="US"
                                    value={ this.state.phoneValue }
                                    onChange={ phoneValue => this.setState({ phoneValue }) }
                                />
                            </div>

                            <div className="form-group">
                                <label className="orderFormLabel" for="orderFormName">Enter your name for the order:</label>
                                <input id="orderFormName" className="orderFormInput" name="name" type="text" placeholder="Name" required/>
                            </div>
                        </div>
                        
                        <div id="orderRow2">
                            <div className="form-group">
                                <label className="orderFormLabel" for="orderFormAddress">Enter your address:</label>
                                <input id="orderFormAddress" className="orderFormInput" name="address" type="text" placeholder="Your address" required/>
                            </div>
                        </div>

                        <div id="orderRow3">
                            <div className="form-group">
                                <label className="orderFormLabel" for="orderFormDate">Enter the date you need the order by:</label>
                                <input id="orderFormDate" className="orderFormInput" name="dateNeeded" type="date" placeholder="Date you want the order by" required/>
                            </div>

                            <div className="form-group">
                                <label className="orderFormLabel" for="orderFormTime">Enter the time you need the order by on the date you entered above:</label>
                                <input id="orderFormTime" className="orderFormInput" name="timeNeeded" type="time" placeholder="Time you want the order by" required/>
                            </div>
                        </div>
                        

                        <div id="orderFormSelection">
                           
                            <div id="orderFormSelectFood">
                                <h3>Select what you'd like to order!</h3>
                                <Accordion defaultIndex={[0]} allowMultiple id="orderFormSelectionAccordion">
                                    <div id="orderCookies" className="orderFoodItem">
                                        <AccordionItem>
                                            <AccordionHeader className="orderAccordianHeader" _expanded={{ background: "#5D663D !important", color: "white" }}>
                                                <Box flex="1" textAlign="left">
                                                    Cookies
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionHeader>
                                            <AccordionPanel pb={4} className="orderAccordianPanel">
                                                <ul className="orderList">
                                                    <li className="orderListItem">
                                                        <label className="orderItemLabel" for="itemCookiesChoco">Chocolate Chip Cookies:</label>
                                                        <input 
                                                            id="itemCookiesChoco" 
                                                            className="orderItemNum" 
                                                            name="cookiesChoco" 
                                                            value={ this.state.cookiesChoco }
                                                            onChange={this.handleChange}
                                                            type="number"/>
                                                        <button className="addToOrderButton" name="CookiesChoco" value={this.state.cookiesChoco} onClick={this.addOrderItem}>Add to Order</button>
                                                    </li>
                                                    <li className="orderListItem">
                                                    <label className="orderItemLabel" for="itemCookiesChocoPecan">Chocolate Chip and Pecan Cookies:</label>
                                                    <input 
                                                        id="itemCookiesChocoPecan" 
                                                        className="orderItemNum" 
                                                        name="cookiesChocoPecan" 
                                                        value={ this.state.cookiesChocoPecan }
                                                        onChange={this.handleChange}
                                                        type="number"/>
                                                    <button className="addToOrderButton" name="CookiesChocoPecan" value={this.state.cookiesChocoPecan} onClick={this.addOrderItem}>Add to Order</button>
                                                </li>
                                                </ul>
                                            </AccordionPanel>
                                        </AccordionItem>
                                    </div>
                                    <div id="orderMuffins" className="orderFoodItem">
                                        <AccordionItem>
                                            <AccordionHeader className="orderAccordianHeader" _expanded={{ background: "#5D663D !important", color: "white" }}>
                                                <Box flex="1" textAlign="left">
                                                    Muffins
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionHeader>
                                            <AccordionPanel pb={4} className="orderAccordianPanel">
                                                <ul className="orderList">
                                                    <li className="orderListItem">
                                                        <label className="orderItemLabel" for="itemMuffinsChoco">Chocolate Muffins:</label>
                                                        <input 
                                                            id="itemMuffinsChoco" 
                                                            className="orderItemNum" 
                                                            name="muffinsChoco" 
                                                            value={ this.state.muffinsChoco }
                                                            onChange={this.handleChange}
                                                            type="number"/>
                                                        <button 
                                                            className="addToOrderButton" 
                                                            name="MuffinsChoco" 
                                                            value={this.state.muffinsChoco}
                                                             onClick={this.addOrderItem}
                                                        >
                                                            Add to Order
                                                        </button>
                                                    </li>
                                                    <li className="orderListItem">
                                                        <label className="orderItemLabel" for="itemMuffinsChocoChip">Chocolate Chip Muffins:</label>
                                                        <input 
                                                            id="itemMuffinsChocoChip" 
                                                            className="orderItemNum" 
                                                            name="muffinsChocoChip" 
                                                            value={ this.state.muffinsChocoChip }
                                                            onChange={this.handleChange}
                                                            type="number"/>
                                                        <button 
                                                            className="addToOrderButton" 
                                                            name="MuffinsChocoChip" 
                                                            value={this.state.muffinsChocoChip} 
                                                            onClick={this.addOrderItem}
                                                        >
                                                            Add to Order
                                                        </button>
                                                    </li>
                                                    <li className="orderListItem">
                                                        <label className="orderItemLabel" for="itemMuffinsLemonPoppy">Lemon Poppy seed Muffins:</label>
                                                        <input 
                                                            id="itemMuffinsLemonPoppy" 
                                                            className="orderItemNum" 
                                                            name="muffinsLemonPoppy" 
                                                            value={ this.state.muffinsLemonPoppy}
                                                            onChange={this.handleChange}
                                                            type="number"/>
                                                        <button 
                                                            className="addToOrderButton" 
                                                            name="MuffinsLemonPoppy" 
                                                            value={this.state.muffinsLemonPoppy} 
                                                            onClick={this.addOrderItem}
                                                        >
                                                            Add to Order
                                                        </button>
                                                    </li>
                                                    <li className="orderListItem">
                                                        <label className="orderItemLabel" for="itemMuffinsBlueberry">Blueberry Muffins:</label>
                                                        <input 
                                                            id="itemMuffinsBlueberry" 
                                                            className="orderItemNum" 
                                                            name="muffinsBlueberry" 
                                                            value={ this.state.muffinsBlueberry}
                                                            onChange={this.handleChange}
                                                            type="number"/>
                                                        <button 
                                                            className="addToOrderButton" 
                                                            name="MuffinsBlueberry" 
                                                            value={this.state.muffinsBlueberry} 
                                                            onClick={this.addOrderItem}
                                                        >
                                                            Add to Order
                                                        </button>
                                                    </li>
                                                    <li className="orderListItem">
                                                        <label className="orderItemLabel" for="itemMuffinsBerryful">Berry-ful Muffins:</label>
                                                        <input 
                                                            id="itemMuffinsBerryful" 
                                                            className="orderItemNum" 
                                                            name="muffinsBerryful" 
                                                            value={ this.state.muffinsBerryful}
                                                            onChange={this.handleChange}
                                                            type="number"/>
                                                        <button 
                                                            className="addToOrderButton" 
                                                            name="MuffinsBerryful" 
                                                            value={this.state.muffinsBerryful} 
                                                            onClick={this.addOrderItem}
                                                        >
                                                            Add to Order
                                                        </button>
                                                    </li>
                                                    <li className="orderListItem">
                                                        <label className="orderItemLabel" for="itemMuffinsOrangeCranberry">Orange Cranberry Muffins:</label>
                                                        <input 
                                                            id="itemMuffinsOrangeCranberry" 
                                                            className="orderItemNum" 
                                                            name="muffinsOrangeCranberry" 
                                                            value={ this.state.muffinsOrangeCranberry}
                                                            onChange={this.handleChange}
                                                            type="number"/>
                                                        <button 
                                                            className="addToOrderButton" 
                                                            name="MuffinsOrangeCranberry" 
                                                            value={this.state.muffinsOrangeCranberry} 
                                                            onClick={this.addOrderItem}
                                                        >
                                                            Add to Order
                                                        </button>
                                                    </li>
                                                </ul>
                                            </AccordionPanel>
                                        </AccordionItem>
                                    </div>
                                    <div id="orderCroissants" className="orderFoodItem">
                                        <AccordionItem>
                                            <AccordionHeader className="orderAccordianHeader" _expanded={{ background: "#942624 !important", color: "white" }}>
                                                <Box flex="1" textAlign="left">
                                                    Croissants
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionHeader>
                                            <AccordionPanel pb={4} className="orderAccordianPanel">
                                                <ul className="orderList">
                                                    <div className="orderItemRowContainer">
                                                        <li className="orderListItem">
                                                            <label className="orderItemLabel" for="itemCroissantsButterSmall">Small Butter Croissants:</label>
                                                            <input 
                                                                id="itemCroissantsButterSmall" 
                                                                className="orderItemNum" 
                                                                name="smallButterCroissant" 
                                                                value={ this.state.smallButterCroissant }
                                                                onChange={this.handleChange}
                                                                type="number"/>
                                                            <button 
                                                                className="addToOrderButton"
                                                                name="SmallButterCroissant" 
                                                                value={this.state.smallButterCroissant} 
                                                                onClick={this.addOrderItem}
                                                            >
                                                                Add to Order
                                                            </button>
                                                        </li>
                                                        <li className="orderListItem">
                                                            <label className="orderItemLabel" for="itemCroissantsButterLarge">Large Butter Croissants:</label>
                                                            <input 
                                                                id="itemCroissantsButterLarge" 
                                                                className="orderItemNum" 
                                                                name="largeButterCroissant" 
                                                                value={ this.state.largeButterCroissant }
                                                                onChange={this.handleChange}
                                                                type="number"/>
                                                            <button 
                                                                className="addToOrderButton"
                                                                name="LargeButterCroissant" 
                                                                value={this.state.largeButterCroissant} 
                                                                onClick={this.addOrderItem}
                                                            >
                                                                Add to Order
                                                            </button>
                                                        </li>
                                                    </div>
                                                    <li className="orderListItem">
                                                        <label className="orderItemLabel" for="itemCroissantsEverything">Everything Croissants:</label>
                                                        <input 
                                                            id="itemCroissantsEverything" 
                                                            className="orderItemNum" 
                                                            name="everythingCroissant" 
                                                            value={ this.state.everythingCroissant }
                                                            onChange={this.handleChange}
                                                            type="number"/>
                                                        <button 
                                                            className="addToOrderButton"
                                                            name="EverythingCroissant" 
                                                            value={this.state.everythingCroissant} 
                                                            onClick={this.addOrderItem}
                                                        >
                                                            Add to Order
                                                        </button>
                                                    </li>
                                                    <div className="orderItemRowContainer">
                                                        <li className="orderListItem">
                                                            <label className="orderItemLabel" for="itemCroissantsLunchHam">Ham Square Croissants:</label>
                                                            <input 
                                                                id="itemCroissantsLunchHam" 
                                                                className="orderItemNum" 
                                                                name="lunchHamCroissant" 
                                                                value={ this.state.lunchHamCroissant }
                                                                onChange={this.handleChange}
                                                                type="number"/>
                                                            <button 
                                                                className="addToOrderButton"
                                                                name="LunchHamCroissant" 
                                                                value={this.state.lunchHamCroissant} 
                                                                onClick={this.addOrderItem}
                                                            >
                                                                Add to Order
                                                            </button>
                                                        </li>
                                                        <li className="orderListItem">
                                                            <label className="orderItemLabel" for="itemCroissantsLunchTurkey">Turkey Square Croissants:</label>
                                                            <input 
                                                                id="itemCroissantsLunchTurkey" 
                                                                className="orderItemNum" 
                                                                name="lunchTurkeyCroissant" 
                                                                value={ this.state.lunchTurkeyCroissant }
                                                                onChange={this.handleChange}
                                                                type="number"/>
                                                            <button 
                                                                className="addToOrderButton"
                                                                name="LunchTurkeyCroissant" 
                                                                value={this.state.lunchTurkeyCroissant} 
                                                                onClick={this.addOrderItem}
                                                            >
                                                                Add to Order
                                                            </button>
                                                        </li>
                                                    </div>
                                                    <div className="orderItemRowContainer">
                                                        <li className="orderListItem">
                                                            <label className="orderItemLabel" for="itemCroissantsLunchDeluxHam">Ham Delux Croissants:</label>
                                                            <input 
                                                                id="itemCroissantsLunchDeluxHam" 
                                                                className="orderItemNum" 
                                                                name="lunchDeluxHamCroissant" 
                                                                value={ this.state.lunchDeluxHamCroissant }
                                                                onChange={this.handleChange}
                                                                type="number"/>
                                                            <button 
                                                                className="addToOrderButton"
                                                                name="lunchDeluxHamCroissant" 
                                                                value={this.state.lunchDeluxHamCroissant} 
                                                                onClick={this.addOrderItem}
                                                            >
                                                                Add to Order
                                                            </button>
                                                        </li>
                                                        <li className="orderListItem">
                                                            <label className="orderItemLabel" for="itemCroissantsLunchDeluxTurkey">Turkey Delux Croissants:</label>
                                                            <input 
                                                                id="itemCroissantsLunchDeluxTurkey" 
                                                                className="orderItemNum" 
                                                                name="lunchDeluxTurkeyCroissant" 
                                                                value={ this.state.lunchDeluxTurkeyCroissant }
                                                                onChange={this.handleChange}
                                                                type="number"/>
                                                            <button 
                                                                className="addToOrderButton"
                                                                name="LunchDeluxTurkeyCroissant" 
                                                                value={this.state.lunchDeluxTurkeyCroissant} 
                                                                onClick={this.addOrderItem}
                                                            >
                                                                Add to Order
                                                            </button>
                                                        </li>
                                                    </div>
                                                    <div className="orderItemRowContainer">
                                                        <li className="orderListItem">
                                                            <label className="orderItemLabel" for="itemCroissantsAlmondSmall">Small Almond Croissants:</label>
                                                            <input 
                                                                id="itemCroissantsAlmondSmall" 
                                                                className="orderItemNum" 
                                                                name="smallAlmondCroissant" 
                                                                value={ this.state.smallAlmondCroissant }
                                                                onChange={this.handleChange}
                                                                type="number"/>
                                                            <button 
                                                                className="addToOrderButton"
                                                                name="SmallAlmondCroissant" 
                                                                value={this.state.smallAlmondCroissant} 
                                                                onClick={this.addOrderItem}
                                                            >
                                                                Add to Order
                                                            </button>
                                                        </li>
                                                        <li className="orderListItem">
                                                            <label className="orderItemLabel" for="itemCroissantsAlmondLarge">Large Almond Croissants:</label>
                                                            <input 
                                                                id="itemCroissantsAlmondLarge" 
                                                                className="orderItemNum" 
                                                                name="largeAlmondCroissant" 
                                                                value={ this.state.largeAlmondCroissant}
                                                                onChange={this.handleChange}
                                                                type="number"/>
                                                            <button 
                                                                className="addToOrderButton"
                                                                name="LargeAlmondCroissant" 
                                                                value={this.state.largeAlmondCroissant} 
                                                                onClick={this.addOrderItem}
                                                            >
                                                                Add to Order
                                                            </button>
                                                        </li>
                                                    </div>
                                                    <div className="orderItemRowContainer">
                                                        <li className="orderListItem">
                                                            <label className="orderItemLabel" for="itemCroissantsChocolateSmall">Small Chocolate Croissants:</label>
                                                            <input 
                                                                id="itemCroissantsChocolateSmall" 
                                                                className="orderItemNum" 
                                                                name="smallChocolateCroissant" 
                                                                value={ this.state.smallChocolateCroissant}
                                                                onChange={this.handleChange}
                                                                type="number"/>
                                                            <button 
                                                                className="addToOrderButton"
                                                                name="SmallChocolateCroissant" 
                                                                value={this.state.smallChocolateCroissant} 
                                                                onClick={this.addOrderItem}
                                                            >
                                                                Add to Order
                                                            </button>
                                                        </li>
                                                        <li className="orderListItem">
                                                            <label className="orderItemLabel" for="itemCroissantsChocolateLarge">Large Chocolate Croissants:</label>
                                                            <input 
                                                                id="itemCroissantsChocolateLarge" 
                                                                className="orderItemNum" 
                                                                name="largeChocolateCroissant" 
                                                                value={ this.state.largeChocolateCroissant }
                                                                onChange={this.handleChange}
                                                                type="number"/>
                                                            <button 
                                                                className="addToOrderButton"
                                                                name="LargeChocolateCroissant" 
                                                                value={this.state.largeChocolateCroissant} 
                                                                onClick={this.addOrderItem}
                                                            >
                                                                Add to Order
                                                            </button>
                                                        </li>
                                                    </div>
                                                    <div className="orderItemRowContainer">
                                                        <li className="orderListItem">
                                                            <label className="orderItemLabel" for="itemCroissantsChocoTwistsSmall">Small Choco Twists Croissants:</label>
                                                            <input 
                                                                id="itemCroissantsChocoTwistsSmall" 
                                                                className="orderItemNum" 
                                                                name="smallChocoTwistsCroissant" 
                                                                value={ this.state.smallChocoTwist}
                                                                onChange={this.handleChange}
                                                                type="number"/>
                                                            <button 
                                                                className="addToOrderButton"
                                                                name="SmallChosmallChocoTwist" 
                                                                value={this.state.smallChocoTwist} 
                                                                onClick={this.addOrderItem}
                                                            >
                                                                Add to Order
                                                            </button>
                                                        </li>
                                                        <li className="orderListItem">
                                                            <label className="orderItemLabel" for="itemCroissantsChocoTwistsLarge">Large Choco Twists Croissants:</label>
                                                            <input 
                                                                id="itemCroissantsChocoTwistsLarge" 
                                                                className="orderItemNum" 
                                                                name="largeChocoTwistsCroissant" 
                                                                value={ this.state.largeChocoTwist}
                                                                onChange={this.handleChange}
                                                                type="number"/>
                                                            <button 
                                                                className="addToOrderButton"
                                                                name="LargeChocoTwist" 
                                                                value={this.state.largeChocoTwist} 
                                                                onClick={this.addOrderItem}
                                                            >
                                                                Add to Order
                                                            </button>
                                                        </li>
                                                    </div>
                                                </ul>
                                            </AccordionPanel>
                                        </AccordionItem>
                                    </div>
                                    <div id="orderCrostini" className="orderFoodItem">
                                        <AccordionItem>
                                            <AccordionHeader className="orderAccordianHeader" _expanded={{ background: "#942624 !important", color: "white" }}>
                                                <Box flex="1" textAlign="left">
                                                    Crostinis
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionHeader>
                                            <AccordionPanel pb={4} className="orderAccordianPanel">
                                                <ul className="orderList">
                                                    <li className="orderListItem">
                                                        <label className="orderItemLabel" for="itemCrostinisEverything">Everything Croistinis (packs of 10):</label>
                                                        <input 
                                                            id="itemCrostinisEverything" 
                                                            className="orderItemNum" 
                                                            name="tenCrostinisEverything" 
                                                            value={ this.state.tenCrostinisEverything}
                                                            onChange={this.handleChange}
                                                            type="number"/>
                                                        <button 
                                                            className="addToOrderButton"
                                                            name="TenCrostinisEverything" 
                                                            value={this.state.tenCrostinisEverything} 
                                                            onClick={this.addOrderItem}
                                                        >
                                                            Add to Order
                                                        </button>
                                                    </li>
                                                    <li className="orderListItem">
                                                        <label className="orderItemLabel" for="itemCrostinisCheese">Cheese Croistinis (packs of 10):</label>
                                                        <input 
                                                            id="itemCrostinisCheese" 
                                                            className="orderItemNum" 
                                                            name="tenCrostinisCheese" 
                                                            value={ this.state.tenCrostinisCheese}
                                                            onChange={this.handleChange}
                                                            type="number"/>
                                                        <button 
                                                            className="addToOrderButton"
                                                            name="TenCrostinisCheese" 
                                                            value={this.state.tenCrostinisCheese} 
                                                            onClick={this.addOrderItem}
                                                        >
                                                            Add to Order
                                                        </button>
                                                    </li>
                                                </ul>
                                            </AccordionPanel>
                                        </AccordionItem>
                                    </div>
                                    <div id="orderRollsPalmiers" className="orderFoodItem">
                                        <AccordionItem>
                                            <AccordionHeader className="orderAccordianHeader" _expanded={{ background: "#5D663D !important", color: "white" }}>
                                                <Box flex="1" textAlign="left">
                                                    Rolls and Palmiers
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionHeader>
                                            <AccordionPanel pb={4} className="orderAccordianPanel">
                                                <ul className="orderList">
                                                    <div id="orderItemRowContainer">
                                                        <li className="orderListItem">
                                                            <label className="orderItemLabel" for="itemRollsCinnamonSmall">Small Cinnamon Rolls:</label>
                                                            <input 
                                                                id="itemRollsCinnamonSmall" 
                                                                className="orderItemNum" 
                                                                name="smallRollCinnamon" 
                                                                value={ this.state.smallRollCinnamon}
                                                                onChange={this.handleChange}
                                                                type="number"/>
                                                            <button 
                                                                className="addToOrderButton"
                                                                name="SmallRollCinnamon" 
                                                                value={this.state.smallRollCinnamon} 
                                                                onClick={this.addOrderItem}
                                                            >
                                                                Add to Order
                                                            </button>
                                                        </li>
                                                        <li className="orderListItem">
                                                            <label className="orderItemLabel" for="itemRollsCinnamonLarge">Large Cinnamon Rolls:</label>
                                                            <input 
                                                                id="itemRollsCinnamonLarge" 
                                                                className="orderItemNum" 
                                                                name="largeRollCinnamon" 
                                                                value={ this.state.largeRollCinnamon}
                                                                onChange={this.handleChange}
                                                                type="number"/>
                                                            <button 
                                                                className="addToOrderButton"
                                                                name="LargeRollCinnamon" 
                                                                value={this.state.largeRollCinnamon} 
                                                                onClick={this.addOrderItem}
                                                            >
                                                                Add to Order
                                                            </button>
                                                        </li>
                                                    </div>
                                                    <div id="orderItemRowContainer">
                                                        <li className="orderListItem">
                                                            <label className="orderItemLabel" for="itemRollsRaisinSmall">Small Raisin Rolls:</label>
                                                            <input 
                                                                id="itemRollsRaisinSmall" 
                                                                className="orderItemNum" 
                                                                name="smallRollRaisin" 
                                                                value={ this.state.smallRollRaisin}
                                                                onChange={this.handleChange}
                                                                type="number"/>
                                                            <button 
                                                                className="addToOrderButton"
                                                                name="SmallRollRaisin" 
                                                                value={this.state.smallRollRaisin} 
                                                                onClick={this.addOrderItem}
                                                            >
                                                                Add to Order
                                                            </button>
                                                        </li>
                                                        <li className="orderListItem">
                                                            <label className="orderItemLabel" for="itemRollsRaisinLarge">Large Raisin Rolls:</label>
                                                            <input 
                                                                id="itemRollsRaisinLarge" 
                                                                className="orderItemNum" 
                                                                name="largeRollRaisin" 
                                                                value={ this.state.largeRollRaisin}
                                                                onChange={this.handleChange}
                                                                type="number"/>
                                                            <button 
                                                                className="addToOrderButton"
                                                                name="LargeRollRaisin" 
                                                                value={this.state.largeRollRaisin} 
                                                                onClick={this.addOrderItem}
                                                            >
                                                                Add to Order
                                                            </button>
                                                        </li>
                                                    </div>
                                                    <div id="orderItemRowContainer">
                                                        <li className="orderListItem">
                                                            <label className="orderItemLabel" for="itemRollsRaspberrySmall">Small Raspberry Rolls:</label>
                                                            <input 
                                                                id="itemRollsRaspberrySmall" 
                                                                className="orderItemNum" 
                                                                name="smallRollRaspberry" 
                                                                value={ this.state.smallRollRaspberry}
                                                                onChange={this.handleChange}
                                                                type="number"/>
                                                            <button 
                                                                className="addToOrderButton"
                                                                name="SmallRollRaspberry" 
                                                                value={this.state.smallRollRaspberry} 
                                                                onClick={this.addOrderItem}
                                                            >
                                                                Add to Order
                                                            </button>
                                                        </li>
                                                        <li className="orderListItem">
                                                            <label className="orderItemLabel" for="itemRollsRaspberryLarge">Large Raspberry Rolls:</label>
                                                            <input 
                                                                id="itemRollsRaspberryLarge" 
                                                                className="orderItemNum" 
                                                                name="largeRollRaspberry" 
                                                                value={ this.state.largeRollRaspberry}
                                                                onChange={this.handleChange}
                                                                type="number"/>
                                                            <button 
                                                                className="addToOrderButton"
                                                                name="LargeRollRaspberry" 
                                                                value={this.state.largeRollRaspberry} 
                                                                onClick={this.addOrderItem}
                                                            >
                                                                Add to Order
                                                            </button>
                                                        </li>
                                                    </div>
                                                    <div id="orderItemRowContainer">
                                                        <li className="orderListItem">
                                                            <label className="orderItemLabel" for="itemPalmiersJamSmall">Small Jam Palmier:</label>
                                                            <input 
                                                                id="itemPalmiersJamSmall" 
                                                                className="orderItemNum" 
                                                                name="smallPalmierJam" 
                                                                value={ this.state.smallPalmierJam}
                                                                onChange={this.handleChange}
                                                                type="number"/>
                                                            <button 
                                                                className="addToOrderButton"
                                                                name="SmallPalmierJam" 
                                                                value={this.state.smallPalmierJam} 
                                                                onClick={this.addOrderItem}
                                                            >
                                                                Add to Order
                                                            </button>
                                                        </li>
                                                        <li className="orderListItem">
                                                            <label className="orderItemLabel" for="itemPalmiersJamLarge">Large Jam Palmier:</label>
                                                            <input 
                                                                id="itemPalmiersJamLarge" 
                                                                className="orderItemNum" 
                                                                name="largePalmierJam" 
                                                                value={ this.state.largePalmierJam}
                                                                onChange={this.handleChange}
                                                                type="number"/>
                                                            <button 
                                                                className="addToOrderButton"
                                                                name="LargePalmierJam" 
                                                                value={this.state.largePalmierJam} 
                                                                onClick={this.addOrderItem}
                                                            >
                                                                Add to Order
                                                            </button>
                                                        </li>
                                                    </div>
                                                    <div id="orderItemRowContainer">
                                                        <li className="orderListItem">
                                                            <label className="orderItemLabel" for="itemPalmiersSugarSmall">Small Sugar Palmier:</label>
                                                            <input 
                                                                id="itemPalmiersSugarSmall" 
                                                                className="orderItemNum" 
                                                                name="smallPalmierSugar" 
                                                                value={ this.state.smallPalmierSugar}
                                                                onChange={this.handleChange}
                                                                type="number"/>
                                                            <button 
                                                                className="addToOrderButton"
                                                                name="SmallPalmierSugar" 
                                                                value={this.state.smallPalmierSugar} 
                                                                onClick={this.addOrderItem}
                                                            >
                                                                Add to Order
                                                            </button>
                                                        </li>
                                                        <li className="orderListItem">
                                                            <label className="orderItemLabel" for="itemPalmiersSugarLarge">Large Sugar Palmier:</label>
                                                            <input 
                                                                id="itemPalmiersSugarLarge" 
                                                                className="orderItemNum" 
                                                                name="largePalmierSugar" 
                                                                value={ this.state.largePalmierSugar}
                                                                onChange={this.handleChange}
                                                                type="number"/>
                                                            <button 
                                                                className="addToOrderButton"
                                                                name="LargePalmierSugar" 
                                                                value={this.state.largePalmierSugar} 
                                                                onClick={this.addOrderItem}
                                                            >
                                                                Add to Order
                                                            </button>
                                                        </li>
                                                    </div>
                                                </ul>

                                            </AccordionPanel>
                                        </AccordionItem>
                                    </div>
                                    <div id="orderTurnovers" className="orderFoodItem">
                                        <AccordionItem>
                                            <AccordionHeader className="orderAccordianHeader" _expanded={{ background: "#5D663D !important", color: "white" }}>
                                                <Box flex="1" textAlign="left">
                                                    Turnovers
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionHeader>
                                            <AccordionPanel pb={4} className="orderAccordianPanel">
                                                <ul className="orderList">
                                                    <li className="orderListItem">
                                                        <label className="orderItemLabel" for="itemTurnoversApple">Apple Turnovers:</label>
                                                        <input 
                                                            id="itemTurnoversApple" 
                                                            className="orderItemNum" 
                                                            name="turnoverApple" 
                                                            value={ this.state.turnoverApple}
                                                            onChange={this.handleChange}
                                                            type="number"/>
                                                        <button 
                                                            className="addToOrderButton"
                                                            name="TurnoverApple" 
                                                            value={this.state.turnoverApple} 
                                                            onClick={this.addOrderItem}
                                                        >
                                                            Add to Order
                                                        </button>
                                                    </li>
                                                    <li className="orderListItem">
                                                        <label className="orderItemLabel" for="itemTurnoversNutella">Nutella Turnovers:</label>
                                                        <input 
                                                            id="itemTurnoversNutella" 
                                                            className="orderItemNum" 
                                                            name="turnoverNutella" 
                                                            value={ this.state.turnoverNutella}
                                                            onChange={this.handleChange}
                                                            type="number"/>
                                                        <button 
                                                            className="addToOrderButton"
                                                            name="TurnoverNutella" 
                                                            value={this.state.turnoverNutella} 
                                                            onClick={this.addOrderItem}
                                                        >
                                                            Add to Order
                                                        </button>
                                                    </li>
                                                    <li className="orderListItem">
                                                        <label className="orderItemLabel" for="itemTurnoversRaspberry">Raspberry Turnovers:</label>
                                                        <input 
                                                            id="itemTurnoversRaspberry" 
                                                            className="orderItemNum" 
                                                            name="turnoverRaspberry" 
                                                            value={ this.state.turnoverRaspberry}
                                                            onChange={this.handleChange}
                                                            type="number"/>
                                                        <button 
                                                            className="addToOrderButton"
                                                            name="TurnoverRaspberry" 
                                                            value={this.state.turnoverRaspberry} 
                                                            onClick={this.addOrderItem}
                                                        >
                                                            Add to Order
                                                        </button>
                                                    </li>
                                                </ul>
                                            </AccordionPanel>
                                        </AccordionItem>
                                    </div>
                                    <div id="orderDanishes" className="orderFoodItem">
                                        <AccordionItem>
                                            <AccordionHeader className="orderAccordianHeader" _expanded={{ background: "#5D663D !important", color: "white" }}>
                                                <Box flex="1" textAlign="left">
                                                    Danishes
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionHeader>
                                            <AccordionPanel pb={4} className="orderAccordianPanel">
                                                <ul className="orderList">
                                                    <li className="orderListItem">
                                                        <label className="orderItemLabel" for="itemDanishesClassic">Classic Danishes:</label>
                                                        <input 
                                                            id="itemDanishesClassic" 
                                                            className="orderItemNum" 
                                                            name="danishClassic" 
                                                            value={ this.state.danishClassic}
                                                            onChange={this.handleChange}
                                                            type="number"/>
                                                        <button 
                                                            className="addToOrderButton"
                                                            name="DanishClassic" 
                                                            value={this.state.danishClassic} 
                                                            onClick={this.addOrderItem}
                                                        >
                                                            Add to Order
                                                        </button>
                                                    </li>
                                                    <li className="orderListItem">
                                                        <label className="orderItemLabel" for="itemDanishesPeach">Peach Danishes:</label>
                                                        <input 
                                                            id="itemDanishesPeach" 
                                                            className="orderItemNum" 
                                                            name="danishPeach" 
                                                            value={ this.state.danishPeach}
                                                            onChange={this.handleChange}
                                                            type="number"/>
                                                        <button 
                                                            className="addToOrderButton"
                                                            name="DanishPeach" 
                                                            value={this.state.danishPeach} 
                                                            onClick={this.addOrderItem}
                                                        >
                                                            Add to Order
                                                        </button>
                                                    </li>
                                                    <li className="orderListItem">
                                                        <label className="orderItemLabel" for="itemDanishesApricot">Apricot Danishes:</label>
                                                        <input 
                                                            id="itemDanishesApricot" 
                                                            className="orderItemNum" 
                                                            name="danishApricot" 
                                                            value={ this.state.danishApricot}
                                                            onChange={this.handleChange}
                                                            type="number"/>
                                                        <button 
                                                            className="addToOrderButton"
                                                            name="DanishApricot" 
                                                            value={this.state.danishApricot} 
                                                            onClick={this.addOrderItem}
                                                        >
                                                            Add to Order
                                                        </button>
                                                    </li>
                                                    <li className="orderListItem">
                                                        <label className="orderItemLabel" for="itemDanishesApple">Apple Danishes:</label>
                                                        <input 
                                                            id="itemDanishesApple" 
                                                            className="orderItemNum" 
                                                            name="danishApple" 
                                                            value={ this.state.danishApple}
                                                            onChange={this.handleChange}
                                                            type="number"/>
                                                        <button 
                                                            className="addToOrderButton"
                                                            name="DanishApple" 
                                                            value={this.state.danishApple} 
                                                            onClick={this.addOrderItem}
                                                        >
                                                            Add to Order
                                                        </button>
                                                    </li>
                                                    <li className="orderListItem">
                                                        <label className="orderItemLabel" for="itemDanishesLemon">Lemon Danishes:</label>
                                                        <input 
                                                            id="itemDanishesLemon" 
                                                            className="orderItemNum" 
                                                            name="danishLemon" 
                                                            value={ this.state.danishLemon}
                                                            onChange={this.handleChange}
                                                            type="number"/>
                                                        <button 
                                                            className="addToOrderButton"
                                                            name="DanishLemon" 
                                                            value={this.state.danishLemon} 
                                                            onClick={this.addOrderItem}
                                                        >
                                                            Add to Order
                                                        </button>
                                                    </li>
                                                </ul>
                                            </AccordionPanel>
                                        </AccordionItem>
                                    </div>
                                    <div id="orderFinancierCoffeecake" className="orderFoodItem">
                                        <AccordionItem>
                                            <AccordionHeader className="orderAccordianHeader" _expanded={{ background: "#5D663D !important", color: "white" }}>
                                                <Box flex="1" textAlign="left">
                                                    Financiers / Coffeecakes
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionHeader>
                                            <AccordionPanel pb={4} className="orderAccordianPanel">
                                                <ul className="orderList">
                                                    <li className="orderListItem">
                                                        <label className="orderItemLabel" for="itemFinancierAlmond">Almond Vanilla Financiers:</label>
                                                        <input 
                                                            id="itemFinancierAlmond" 
                                                            className="orderItemNum" 
                                                            name="financierAlmond" 
                                                            value={ this.state.financierAlmond}
                                                            onChange={this.handleChange}
                                                            type="number"/>
                                                        <button 
                                                            className="addToOrderButton"
                                                            name="FinancierAlmond" 
                                                            value={this.state.financierAlmond} 
                                                            onClick={this.addOrderItem}
                                                        >
                                                            Add to Order
                                                        </button>
                                                    </li>
                                                    <li className="orderListItem">
                                                        <label className="orderItemLabel" for="itemCoffeecakeAlmond">Almond Coffeecakes:</label>
                                                        <input 
                                                            id="itemCoffeecakeAlmond" 
                                                            className="orderItemNum" 
                                                            name="coffeecakeAlmond" 
                                                            value={ this.state.coffeecakeAlmond}
                                                            onChange={this.handleChange}
                                                            type="number"/>
                                                        <button 
                                                            className="addToOrderButton"
                                                            name="CoffeecakeAlmond" 
                                                            value={this.state.coffeecakeAlmond} 
                                                            onClick={this.addOrderItem}
                                                        >
                                                            Add to Order
                                                        </button>
                                                    </li>
                                                </ul>
                                            </AccordionPanel>
                                        </AccordionItem>
                                    </div>
                                    <div id="orderTruffles" className="orderFoodItem">
                                        <AccordionItem>
                                            <AccordionHeader className="orderAccordianHeader" _expanded={{ background: "#5D663D !important", color: "white" }}>
                                                <Box flex="1" textAlign="left">
                                                    Truffles
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionHeader>
                                            <AccordionPanel pb={4} className="orderAccordianPanel">
                                                <ul className="orderList">
                                                    <div id="orderItemRowContainer">
                                                        <li className="orderListItem">
                                                            <label className="orderItemLabel" for="itemTrufflesClassic4">Classic Truffles (4 pack):</label>
                                                            <input 
                                                                id="itemTrufflesClassic4" 
                                                                className="orderItemNum" 
                                                                name="fourPackTrufflesClassic" 
                                                                value={ this.state.fourPackTrufflesClassic}
                                                                onChange={this.handleChange}
                                                                type="number"/>
                                                            <button 
                                                                className="addToOrderButton"
                                                                name="FourPackTrufflesClassic" 
                                                                value={this.state.fourPackTrufflesClassic} 
                                                                onClick={this.addOrderItem}
                                                            >
                                                                Add to Order
                                                            </button>
                                                        </li>
                                                        <li className="orderListItem">
                                                            <label className="orderItemLabel" for="itemTrufflesClassic9">Classic Truffles (9 pack):</label>
                                                            <input 
                                                                id="itemTrufflesClassic9" 
                                                                className="orderItemNum" 
                                                                name="ninePackTrufflesClassic" 
                                                                value={ this.state.ninePackTrufflesClassic}
                                                                onChange={this.handleChange}
                                                                type="number"/>
                                                            <button 
                                                                className="addToOrderButton"
                                                                name="NinePackTrufflesClassic" 
                                                                value={this.state.ninePackTrufflesClassic} 
                                                                onClick={this.addOrderItem}
                                                            >
                                                                Add to Order
                                                            </button>
                                                        </li>
                                                    </div>
                                                    <div id="orderItemRowContainer">
                                                        <li className="orderListItem">
                                                            <label className="orderItemLabel" for="itemTrufflesPeppermint4">Peppermint Truffles (4 pack):</label>
                                                            <input 
                                                                id="itemTrufflesPeppermint4" 
                                                                className="orderItemNum" 
                                                                name="fourPackTrufflesPeppermint" 
                                                                value={ this.state.fourPackTrufflesPeppermint}
                                                                onChange={this.handleChange}
                                                                type="number"/>
                                                            <button 
                                                                className="addToOrderButton"
                                                                name="FourPackTrufflesPeppermint" 
                                                                value={this.state.fourPackTrufflesPeppermint} 
                                                                onClick={this.addOrderItem}
                                                            >
                                                                Add to Order
                                                            </button>
                                                        </li>
                                                        <li className="orderListItem">
                                                            <label className="orderItemLabel" for="itemTrufflesPeppermint9">Peppermint Truffles (9 pack):</label>
                                                            <input 
                                                                id="itemTrufflesPeppermint9" 
                                                                className="orderItemNum" 
                                                                name="ninePackTrufflesPeppermint" 
                                                                value={ this.state.ninePackTrufflesPeppermint}
                                                                onChange={this.handleChange}
                                                                type="number"/>
                                                            <button 
                                                                className="addToOrderButton"
                                                                name="NinePackTrufflesPeppermint" 
                                                                value={this.state.ninePackTrufflesPeppermint} 
                                                                onClick={this.addOrderItem}
                                                            >
                                                                Add to Order
                                                            </button>
                                                        </li>
                                                    </div>
                                                    <div id="orderItemRowContainer">
                                                        <li className="orderListItem">
                                                            <label className="orderItemLabel" for="itemTrufflesOrange4">Orange Truffles (4 pack):</label>
                                                            <input 
                                                                id="itemTrufflesOrange4" 
                                                                className="orderItemNum" 
                                                                name="fourPackTrufflesOrange" 
                                                                value={ this.state.fourPackTrufflesOrange}
                                                                onChange={this.handleChange}
                                                                type="number"/>
                                                            <button 
                                                                className="addToOrderButton"
                                                                name="FourPackTrufflesOrange" 
                                                                value={this.state.fourPackTrufflesOrange} 
                                                                onClick={this.addOrderItem}
                                                            >
                                                                Add to Order
                                                            </button>
                                                        </li>
                                                        <li className="orderListItem">
                                                            <label className="orderItemLabel" for="itemTrufflesOrange9">Orange Truffles (9 pack):</label>
                                                            <input 
                                                                id="itemTrufflesOrange9" 
                                                                className="orderItemNum" 
                                                                name="ninePackTrufflesOrange" 
                                                                value={ this.state.ninePackTrufflesOrange}
                                                                onChange={this.handleChange}
                                                                type="number"/>
                                                            <button 
                                                                className="addToOrderButton"
                                                                name="NinePackTrufflesOrange" 
                                                                value={this.state.ninePackTrufflesOrange} 
                                                                onClick={this.addOrderItem}
                                                            >
                                                                Add to Order
                                                            </button>
                                                        </li>
                                                    </div>
                                                    <div id="orderItemRowContainer">
                                                        <li className="orderListItem">
                                                            <label className="orderItemLabel" for="itemTrufflesRumCoco4">Rum and Coconut Truffles (4 pack):</label>
                                                            <input 
                                                                id="itemTrufflesRumCoco4" 
                                                                className="orderItemNum" 
                                                                name="fourPackTrufflesRumCoco" 
                                                                value={ this.state.fourPackTrufflesRumCoco}
                                                                onChange={this.handleChange}
                                                                type="number"/>
                                                            <button 
                                                                className="addToOrderButton"
                                                                name="FourPackTrufflesRumCoco" 
                                                                value={this.state.fourPackTrufflesRumCoco} 
                                                                onClick={this.addOrderItem}
                                                            >
                                                                Add to Order
                                                            </button>
                                                        </li>
                                                        <li className="orderListItem">
                                                            <label className="orderItemLabel" for="itemTrufflesRumCoco9">Rum and Coconut Truffles (9 pack):</label>
                                                            <input 
                                                                id="itemTrufflesRumCoco9" 
                                                                className="orderItemNum" 
                                                                name="ninePackTrufflesRumCoco" 
                                                                value={ this.state.ninePackTrufflesRumCoco}
                                                                onChange={this.handleChange}
                                                                type="number"/>
                                                            <button 
                                                                className="addToOrderButton"
                                                                name="NinePackTrufflesRumCoco" 
                                                                value={this.state.ninePackTrufflesRumCoco} 
                                                                onClick={this.addOrderItem}
                                                            >
                                                                Add to Order
                                                            </button>
                                                        </li>
                                                    </div>
                                                    <div id="orderItemRowContainer">
                                                        <li className="orderListItem">
                                                            <label className="orderItemLabel" for="itemTrufflesMix4">Mix of Truffles (4 pack):</label>
                                                            <input 
                                                                id="itemTrufflesMix4" 
                                                                className="orderItemNum" 
                                                                name="fourPackTrufflesMix" 
                                                                value={ this.state.fourPackTrufflesMix}
                                                                onChange={this.handleChange}
                                                                type="number"/>
                                                            <button 
                                                                className="addToOrderButton"
                                                                name="FourPackTrufflesMix" 
                                                                value={this.state.fourPackTrufflesMix} 
                                                                onClick={this.addOrderItem}
                                                            >
                                                                Add to Order
                                                            </button>
                                                        </li>
                                                        <li className="orderListItem">
                                                            <label className="orderItemLabel" for="itemTrufflesMix9">Mix of Truffles (9 pack):</label>
                                                            <input 
                                                                id="itemTrufflesMix9" 
                                                                className="orderItemNum" 
                                                                name="ninePackTrufflesMix" 
                                                                value={ this.state.ninePackTrufflesMix}
                                                                onChange={this.handleChange}
                                                                type="number"/>
                                                            <button 
                                                                className="addToOrderButton"
                                                                name="NinePackTrufflesMix" 
                                                                value={this.state.ninePackTrufflesMix} 
                                                                onClick={this.addOrderItem}
                                                            >
                                                                Add to Order
                                                            </button>
                                                        </li>
                                                    </div>
                                                </ul>
                                            </AccordionPanel>
                                        </AccordionItem>
                                    </div>
                                    <div id="orderGranolaBars" className="orderFoodItem">
                                        <AccordionItem>
                                            <AccordionHeader className="orderAccordianHeader" _expanded={{ background: "#5D663D !important", color: "white" }}>
                                                <Box flex="1" textAlign="left">
                                                    Granola Bars
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionHeader>
                                            <AccordionPanel pb={4} className="orderAccordianPanel">
                                                <ul className="orderList">
                                                    <div id="orderItemRowContainer">
                                                        <li className="orderListItem">
                                                            <label className="orderItemLabel" for="itemGranolaBarsSmall">Small Granola Bars:</label>
                                                            <input 
                                                                id="itemGranolaBarsSmall" 
                                                                className="orderItemNum" 
                                                                name="smallGranolaBar" 
                                                                value={ this.state.smallGranolaBar}
                                                                onChange={this.handleChange}
                                                                type="number"/>
                                                            <button 
                                                                className="addToOrderButton"
                                                                name="SmallGranolaBar" 
                                                                value={this.state.smallGranolaBar} 
                                                                onClick={this.addOrderItem}
                                                            >
                                                                Add to Order
                                                            </button>
                                                        </li>
                                                        <li className="orderListItem">
                                                            <label className="orderItemLabel" for="itemGranolaBarsLarge">Large Granola Bars:</label>
                                                            <input 
                                                                id="itemGranolaBarsLarge" 
                                                                className="orderItemNum" 
                                                                name="largeGranolaBar" 
                                                                value={ this.state.largeGranolaBar}
                                                                onChange={this.handleChange}
                                                                type="number"/>
                                                            <button 
                                                                className="addToOrderButton"
                                                                name="LargeGranolaBar" 
                                                                value={this.state.largeGranolaBar} 
                                                                onClick={this.addOrderItem}
                                                            >
                                                                Add to Order
                                                            </button>
                                                        </li>
                                                    </div>
                                                </ul>
                                            </AccordionPanel>
                                        </AccordionItem>
                                    </div>
                                    <div id="orderPizza" className="orderFoodItem">
                                        <AccordionItem>
                                            <AccordionHeader className="orderAccordianHeader" _expanded={{ background: "#2D1B10 !important", color: "white" }}>
                                                <Box flex="1" textAlign="left">
                                                    Par-Baked Pizza Dough
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionHeader>
                                            <AccordionPanel pb={4} className="orderAccordianPanel">
                                                <ul className="orderList">
                                                    <div id="orderItemRowContainer">
                                                        <li className="orderListItem">
                                                            <label className="orderItemLabel" for="itemPizzaClassicReg">Regular Classic Pizza Dough:</label>
                                                            <input 
                                                                id="itemPizzaClassicReg" 
                                                                className="orderItemNum" 
                                                                name="regularClassicPizza" 
                                                                value={ this.state.regularClassicPizza}
                                                                onChange={this.handleChange}
                                                                type="number"/>
                                                            <button 
                                                                className="addToOrderButton"
                                                                name="RegularClassicPizza" 
                                                                value={this.state.regularClassicPizza} 
                                                                onClick={this.addOrderItem}
                                                            >
                                                                Add to Order
                                                            </button>
                                                        </li>
                                                        <li className="orderListItem">
                                                            <label className="orderItemLabel" for="itemPizzaClassicLarge">Large Classic Pizza Dough:</label>
                                                            <input 
                                                                id="itemPizzaClassicLarge" 
                                                                className="orderItemNum" 
                                                                name="largeClassicPizza" 
                                                                value={ this.state.largeClassicPizza}
                                                                onChange={this.handleChange}
                                                                type="number"/>
                                                            <button 
                                                                className="addToOrderButton"
                                                                name="LargeClassicPizza" 
                                                                value={this.state.largeClassicPizza} 
                                                                onClick={this.addOrderItem}
                                                            >
                                                                Add to Order
                                                            </button>
                                                        </li>
                                                    </div>
                                                    <div id="orderItemRowContainer">
                                                        <li className="orderListItem">
                                                            <label className="orderItemLabel" for="itemPizzaHerbReg">Regular Rosemary and Thyme Pizza Dough:</label>
                                                            <input 
                                                                id="itemPizzaHerbReg" 
                                                                className="orderItemNum" 
                                                                name="regularHerbPizza" 
                                                                value={ this.state.regularHerbPizza}
                                                                onChange={this.handleChange}
                                                                type="number"/>
                                                            <button 
                                                                className="addToOrderButton"
                                                                name="RegularHerbPizza" 
                                                                value={this.state.regularHerbPizza} 
                                                                onClick={this.addOrderItem}
                                                            >
                                                                Add to Order
                                                            </button>
                                                        </li>
                                                        <li className="orderListItem">
                                                            <label className="orderItemLabel" for="itemPizzaHerbLarge">Large Rosemary and Thyme Pizza Dough:</label>
                                                            <input 
                                                                id="itemPizzaHerbLarge" 
                                                                className="orderItemNum" 
                                                                name="largeHerbPizza" 
                                                                value={ this.state.largeHerbPizza}
                                                                onChange={this.handleChange}
                                                                type="number"/>
                                                            <button 
                                                                className="addToOrderButton"
                                                                name="LargeHerbPizza" 
                                                                value={this.state.largeHerbPizza} 
                                                                onClick={this.addOrderItem}
                                                            >
                                                                Add to Order
                                                            </button>
                                                        </li>
                                                    </div>
                                                </ul>
                                            </AccordionPanel>
                                        </AccordionItem>
                                    </div>
                                </Accordion>
                            </div>
                            <div id="orderFormYourSelection">
                                <h3>Your Order Summary:</h3>
                                <ul>
                                    {this.state.yourOrder.map(order => (
                                        <li className="yourOrderListItem" key={order.item}>
                                            <button className="minus1Button" name={order.item} value='-1' onClick={this.updateOrderItem}>Subtract 1</button>
                                            {order.item}: {order.number}
                                            <button className="add1Button" name={order.item} value='+1' onClick={this.updateOrderItem}>Add 1</button>
                                            <button className="deleteOrderItem" name={order.item} onClick={this.removeOrderItem}>Delete Item</button>
                                        </li>
                                    ))}
                                </ul>
                                <input className="hidden" name="yourOrder" readOnly value={orderString}/>
                                <div id="orderTotal">
                                    <label for="orderTotalInput">Your total:</label>
                                    <input id="orderTotalInput" name="total" readOnly value={showPaypal ? onlineTotal : total}/>
                                </div>
                            </div>
                        </div>
                        
                        <div className="form-group">
                            <label className="orderFormLabel" for="orderFormNotes">Notes and requests for your order: </label>
                            <input id="orderFormNotes" className="orderFormInput" name="notes" type="textarea" placeholder="Additional notes about the order..."/>
                        </div>

                        <div className="form-group">
                            <h5>Choose a payment option:</h5>
                            <div id="payRadioOnline">
                                <input  
                                    onChange={this.changePayment} 
                                    checked={paymentOption === "online"}
                                    className="orderFormInput" 
                                    id="payOnline" 
                                    name="paymentType" 
                                    type="radio" 
                                    value="online"
                                />
                                <label className="orderFormLabel" for="payOnline">Pay Online</label>
                            </div>
                            
                            <div id="payRadioCash">
                                <input 
                                    onChange={this.changePayment} 
                                    checked={paymentOption === "cash"}
                                    id="payInCash" 
                                    className="orderFormInput" 
                                    name="paymentType" 
                                    type="radio" 
                                    value="cash"
                                />
                                <input className="hidden" name={paymentOption === "cash" ? "paid" : ""} value="Pay on Delivery"/>
                                <label className="orderFormLabel" for="payInCash">Pay In Cash</label>
                            </div>
                        </div>

                        

                        <div id="payPalContainer" className={`${showPaypal ? "" : "hidden"}`}>
                            <PaypalButtons name={order.name} description={order.description} price={order.price} showStatus={showPaypal} />
                        </div>

                        <button type="submit" onSubmit={this.resetOrder}>Place order</button>
                        
                    </form>
                </div>
            </section>
        );
    };
}

export default Order;
