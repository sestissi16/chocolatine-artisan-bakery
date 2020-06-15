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

const pricesPerItem = { 
    cookiesChoco: 1.25, 
    cookiesChocoPecan: 1.50,
    muffins: 1.50,
    smallButterCroissant: 1.75,
    largeButterCroissant: 2.25,
    smallAlmondCroissant: 3.00,
    largeAlmondCroissant: 3.50,
    smallChocolateCroissant: 2.25,
    largeChocolateCroissant: 2.75,
    everythingCroissant: 2.00,
    lunchCroissant: 3.80,
    lunchDeluxCroissant: 4.50,
    smallRoll: 1.75,
    largeRoll: 3.00,
    smallChocoTwist: 1.75,
    largeChocoTwist: 3.50,
    smallGranolaBar: 1.50,
    largeGranolaBar: 2.00,
    financierCoffecake: 2.00,
    fourPackTruffles: 5.00,
    ninePackTruffles: 10.00,
    regularPizza: 2.00,
    largePizza: 2.50,
    turnoverOrDanish: 3.00,
    buns90: 0.80,
    buns110: 0.95,
    buns60: 0.65,
    smallWhiteLoaf: 3.50,
    mediumWhiteLoaf: 5.00,
    largeWhiteLoaf: 7.00,
    smallBriocheOrMultigrainLoaf: 4.00,
    mediumBriocheOrMultigrainLoaf: 5.50,
    largeBriocheOrMultigrainLoaf: 7.50,
    loafFruitAddOn: 0.50,
    nutellaOrFruitSugarLoaf: 1.50,
    tenCrostinis: 5.00,
    smallPalmier: 1.75,
    largePalmier: 2.25,
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
            ninePackTrufflesPeppermint: 0,
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
        const numberValue = parseInt(e.target.value)
        // const splitName = e.target.name.match(/[A-Z]+[^A-Z]*|[^A-Z]+/g)
        this.setState({
            [e.target.name]: numberValue
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
        yourOrder.forEach((element) => {
            orderArray.push(`${element.item}: ${element.number}`)
        })
        const orderString = orderArray.join(', ')
        console.log(orderString)
        const total = 
            (this.state.cookiesChoco * pricesPerItem.cookiesChoco) + 
            (this.state.cookiesChocoPecan * pricesPerItem.cookiesChocoPecan) + 
            ((this.state.muffinsBerry + this.state.muffinsBlueberry + this.state.muffinsChoco + 
                this.state.muffinsChocoChip + this.state.muffinsLemonPoppy + this.state.muffinsOrangeCranberry) * pricesPerItem.muffins) +
            (this.state.smallButterCroissant * pricesPerItem.smallButterCroissant) +
            (this.state.largeButterCroissant * pricesPerItem.largeButterCroissant) +
            (this.state.smallAlmondCroissant * pricesPerItem.smallAlmondCroissant) +
            (this.state.largeAlmondCroissant * pricesPerItem.largeAlmondCroissant) +
            (this.state.smallChocolateCroissant * pricesPerItem.smallChocolateCroissant) +
            (this.state.largeChocolateCroissant * pricesPerItem.largeChocolateCroissant) +
            (this.state.everythingCroissant * pricesPerItem.everythingCroissant) +
            ((this.state.lunchHamCroissant + this.state.lunchTurkeyCroissant) * pricesPerItem.lunchCroissant) +
            ((this.state.lunchDeluxHamCroissant + this.state.lunchDeluxTurkeyCroissant) * pricesPerItem.lunchDeluxCroissant) +
            (this.state.smallChocoTwist * pricesPerItem.smallChocoTwist) +
            ((this.state.smallRollCinnamon + this.state.smallRollRaspberry) * pricesPerItem.smallRoll) +
            ((this.state.largeRollCinnamon + this.state.smallRollRaspberry) * pricesPerItem.largeRoll) +
            (this.state.smallGranolaBar * pricesPerItem.smallGranolaBar) +
            (this.state.largeGranolaBar * pricesPerItem.largeGranolaBar) +
            ((this.state.coffeecakeAlmond + this.state.financierAlmond) * pricesPerItem.financierCoffecake) +
            ((this.state.fourPackTrufflesClassic + this.state.fourPackTrufflesMix + this.state.fourPackTrufflesOrange + 
                this.state.fourPackTrufflesPeppermint + this.state.fourPackTrufflesRumCoco) * pricesPerItem.fourPackTruffles) +
            ((this.state.ninePackTrufflesClassic + this.state.ninePackTrufflesMix + this.state.ninePackTrufflesOrange + 
                this.state.ninePackTrufflesPeppermint + this.state.ninePackTrufflesRumCoco) * pricesPerItem.ninePackTruffles) +
            (this.state.regularPizza * pricesPerItem.regularPizza) +
            (this.state.largePizza * pricesPerItem.largePizza) +
            ((this.state.turnoverApple + this.state.turnoverNutella + this.state.turnoverRaspberry + 
                this.state.danishApple + this.state.danishClassic + this.state.danishLemon + this.state.danishPeachApricot) * pricesPerItem.turnoverOrDanish) +
            (this.state.buns60 * pricesPerItem.buns60) +
            (this.state.buns90 * pricesPerItem.buns90) +
            (this.state.buns110 * pricesPerItem.buns110) +
            (this.state.smallWhiteLoaf * pricesPerItem.smallWhiteLoaf) +
            (this.state.mediumWhiteLoaf * pricesPerItem.mediumWhiteLoaf) +
            (this.state.largeWhiteLoaf * pricesPerItem.largeWhiteLoaf) +
            ((this.state.smallBriocheLoaf + this.state.smallMultigrainLoaf) * pricesPerItem.smallBriocheOrMultigrainLoaf) +
            ((this.state.mediumBriocheLoaf + this.state.mediumMultigrainLoaf) * pricesPerItem.mediumBriocheOrMultigrainLoaf) +
            ((this.state.largeBriocheLoaf + this.state.largeMultigrainLoaf) * pricesPerItem.largeBriocheOrMultigrainLoaf) +
            (this.state.loafFruitAddOn * pricesPerItem.loafFruitAddOn) +
            ((this.state.nutellaLoaf + this.state.fruitSugarLoaf) * pricesPerItem.nutellaOrFruitSugarLoaf) +
            ((this.state.tenCrostinisCheese + this.state.tenCrostinisEverything) * pricesPerItem.tenCrostinis) +
            ((this.state.smallPalmierJam + this.state.smallPalmierSugar) * pricesPerItem.smallPalmier) +
            ((this.state.largePalmierJam + this.state.largePalmierSugar) * pricesPerItem.largePalmier) +
            (this.state.fivePackSampler * pricesPerItem.fivePackSampler) +
            (this.state.tenPackSampler * pricesPerItem.tenPackSampler) +
            (this.state.fifteenPackSampler * pricesPerItem.fifteenPackSampler) +
            (this.state.twentyPackSampler * pricesPerItem.twentyPackSampler)
        ;

        const onlineTotal = (total * 0.03) + total + 0.30

        const order = {
            price: onlineTotal,
            description: orderString,
            name: 'Your order',    
        };
        
        return (
            <section id="order">
                <div id="orderContainer">
                    <h1 id="orderSectionTitle">Make an Order:</h1>
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
                                <Accordion defaultIndex={[0]} allowMultiple>
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
                                                    <button name="CookiesChoco" value={this.state.cookiesChoco} onClick={this.addOrderItem}>Add to Order</button>
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
                                                    <button name="CookiesChocoPeacan" value={this.state.cookiesChocoPecan} onClick={this.addOrderItem}>Add to Order</button>
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
                                                    <button name="MuffinsChoco" value={this.state.muffinsChoco} onClick={this.addOrderItem}>Add to Order</button>
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
                                                    <button name="MuffinsChocoChip" value={this.state.muffinsChocoChip} onClick={this.addOrderItem}>Add to Order</button>
                                                </li>
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
