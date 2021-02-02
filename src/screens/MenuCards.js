import React, { Component } from 'react';
import Navigation from './Navbar'
import { Button } from "react-bootstrap"
import Notes from '../components/menuNotes'
import SmallBatchSection from '../components/menuSmallBatch'
import yourOrder from '../yourOrder';
import './MenuCards.css'
import bakeryInfo from '../bakeryData';

class Menu extends Component {
    constructor () {
        super()

        this.state = {
            orderType: '',
            showSmall: false,
            showCatering: false,
            yourOrder: [],
            itemName: '',
            itemSize: '',
            itemPrice: '',
            itemOption: '',
            itemAmount: parseFloat('').toFixed(2),
            caterOption: {},
            orderCount: 0,
        }

        this.orderTypeSelect = this.orderTypeSelect.bind(this)
        this.addOrderItem = this.addOrderItem.bind(this)
        this.changeSize = this.changeSize.bind(this)
        this.changeOption = this.changeOption.bind(this)
        this.changeAmount = this.changeAmount.bind(this)
        this.addCaterOption = this.addCaterOption.bind(this)
        this.removeCaterOption = this.removeCaterOption.bind(this)
        this.addCaterCombo = this.addCaterCombo.bind(this)
        this.getOrderCount = this.getOrderCount.bind(this)
    }

    componentDidMount() {
        this.getOrderCount();
    }

    getOrderCountUpdate() {
        this.setState({orderCount: JSON.parse(sessionStorage.getItem('orderCount'))});
    }

    getOrderCount() {
        var existingOrderCount = sessionStorage.getItem('orderCount');

        existingOrderCount = existingOrderCount ? JSON.parse(existingOrderCount) : 0;

        this.setState({orderCount: existingOrderCount});
    }

    orderTypeSelect(e){
        e.preventDefault();

        yourOrder.orderType = e.target.value
        if(e.target.value === "smallBatch"){
            this.setState({ orderType: e.target.value, 
                showSmall: true, 
                showCatering: false, 
                showWholesale: false
            })
        }
        else if(e.target.value === "catering"){
            this.setState({ orderType: e.target.value, 
                showSmall: false, 
                showCatering: true, 
                showWholesale: false
            })
        }    
    }

    changeSize = (e) => {
        var valueSplit = e.target.value.split("-")
        var size = valueSplit[0]
        var price = valueSplit[1]
        e.stopPropagation();
        //this changes the state
        if (size === "Sm") {
            this.setState({ itemSize: size, itemPrice: price});
        } else if (size === "Med") {
            this.setState({ itemSize: size, itemPrice: price});
        } else {
            this.setState({ itemSize: size, itemPrice: price});
        }
        
    }

    changeOption = (e) => {
        e.stopPropagation();
        //this changes the state
        this.setState({ itemOption: e.target.value});
    }

    changeAmount = (e) => {
        e.stopPropagation();
        if(e.target.value < 0){
            alert("Sorry but you can't have negative amounts of orders!")
            this.setState()
        } else {
            this.setState({ itemAmount: e.target.value})
        }
    }

    addCaterOption = (e, Combo) => {
        e.stopPropagation();
        // target key needs to be the choice name
        // target value needs to be item option choice
        if(Combo === "Sides" || Object.keys(this.state.caterOption).length === 2 ){
            alert("You've already selected the max amount for this combo!")
        } else if (Object.keys(this.state.caterOption).length === 3 ){
            alert("You've already selected the max amount for this combo!")
        } else {
            this.setState({ caterOption: {
                [e.target.name]: e.target.value
            }})

            this.setState({ itemOption: '' })
        }
    }

    removeCaterOption = (e) => {
        e.stopPropagation();
        delete this.state.caterOption[e.target.name]
        console.log(this.state.caterOption)
    }

    addCaterCombo = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if(this.state.itemSize === '' || (Object.keys(this.state.caterOption).length === 0 && this.state.caterOption.constructor === Object)){
            alert("Please make sure you choose a size for your combo and choose your items!")
        } else {
            this.setState({ itemName: e.target.name });
            var numberOfItems = yourOrder.orderList.count;
            var key = e.target.name.replace( /\s/g, '') + numberOfItems
            yourOrder.orderList.list[key] = {
                name: e.target.name,
                price: this.state.itemPrice,
                size: this.state.itemSize,
                items: this.state.caterOption
            }
            yourOrder.orderList.count = numberOfItems + 1
            this.setState({ itemSize: '', caterOption: {}, itemOption: '' })
        }
    }

    addOrderItem = (e) => {
        
        e.preventDefault();
        e.stopPropagation();
        // Checks to make sure size property has been chosen
        if(this.state.itemSize === ''){
            alert("Please choose a size before adding an item to your order!")
        }else{
            // Get the existing data
            var existingOrderList = sessionStorage.getItem('orderList');
            var existingOrderCount = sessionStorage.getItem('orderCount');
            var existingTotal = sessionStorage.getItem('orderTotal')

            // If no existing data, set to 0
            existingOrderCount = existingOrderCount ? JSON.parse(existingOrderCount) : 0;

            // If no existing data, create an array
            // Otherwise, convert the sessionStorage string to an array
            existingOrderList = existingOrderList ? JSON.parse(existingOrderList) : {};

            existingTotal = existingTotal ? parseFloat(JSON.parse(existingTotal)).toFixed(2) : 0;

            // Get Item Information
            var targetNameSplit = e.target.name.split("-")
            var itemName = targetNameSplit[1]
            var priceSplit = this.state.itemPrice.split("$")
            var key = targetNameSplit[0].replace( /\s/g, '') + existingOrderCount
            if(this.state.itemOption) {
                yourOrder.orderList.list[key] = {name: itemName, price: this.state.itemPrice, size: this.state.itemSize, option: this.state.itemOption, amount: this.state.itemAmount};
            } else {
                yourOrder.orderList.list[key] = {name: itemName, price: this.state.itemPrice, size: this.state.itemSize, amount: this.state.itemAmount};
            }
            console.log(yourOrder.orderList.list, existingOrderCount)

            // Add new data to sessionStorage Array
            existingOrderList[key] = yourOrder.orderList.list[key];
            // Add one to count
            existingOrderCount = existingOrderCount + 1

            console.log(existingTotal, parseFloat(priceSplit[1]).toFixed(2) * this.state.itemAmount)

            existingTotal = parseFloat(existingTotal) + (priceSplit[1] * this.state.itemAmount)

            console.log(existingOrderList, existingOrderCount, existingTotal)

            // Save back to sessionStorage
            sessionStorage.setItem('orderList', JSON.stringify(existingOrderList));
            
            sessionStorage.setItem('orderCount', JSON.stringify(existingOrderCount));

            sessionStorage.setItem('orderTotal', JSON.stringify(parseFloat(existingTotal).toFixed(2)));

            this.setState({ itemSize: '', itemOption: '', itemPrice: '', itemAmount: parseFloat('').toFixed(2)});
        }
        this.getOrderCountUpdate()
    }

    render() {
        const { showSmall, showCatering, orderCount } = this.state;

        return (
        <section id="menu">
            <Navigation orderCount={orderCount}/>
            <div id="menuContainer">
                <div id="menuSectionHeader">
                    <div id="menuHeaderBg">
                        <h1 id="menuHeaderTitle">Menu</h1>
                        <h2 id="menuHeaderSubTitle">Small Batch Menu / Catering Menu</h2>
                        <Notes notes={bakeryInfo.menu.topNotes} textSize={3} textColor="#fff"></Notes>
                        <div id="menuSectionNav">
                            <h2 id="menuOrderTypesTitle">Ordering Types:</h2>
                            <section id="OrderingTypesSection">
                                <div className="orderTypeDiv">
                                    <Button
                                        variant="success"
                                        className="orderTypeBtn"
                                        size="lg"
                                        value="smallBatch"
                                        onClick={this.orderTypeSelect}
                                    >
                                        Small Batch Orders
                                    </Button>
                                    <h5>{bakeryInfo.menu.smallBatch.description}</h5>
                                </div>
                                <div className="orderTypeDiv">
                                    <Button
                                        variant="success"
                                        className="orderTypeBtn"
                                        size="lg"
                                        value="catering"
                                        onClick={this.orderTypeSelect}
                                    >
                                        Catering
                                    </Button>
                                    <h5>{bakeryInfo.menu.cateringInfo.description}</h5>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                <div id="menuSectionCards">
                    <div id="smallBatchSection" className={`${showSmall ? "" : "hidden"}`}>
                        <SmallBatchSection changeSize={this.changeSize} changeOption={this.changeOption} changeAmount={this.changeAmount} addItem={this.addOrderItem} stateItemName={this.state.itemName} stateItemPrice={this.state.itemPrice} stateItemOption={this.state.itemOption} stateItemSize={this.state.itemSize} stateItemAmount={this.state.itemAmount}></SmallBatchSection>
                    </div>
                    <div id="cateringSection" className={`${showCatering ? "" : "hidden"}`}>
                        {/* <h3>Online Catering Order System Coming Soon!</h3>
                        <h3>At this time, <a href="/Contact" className="smoothscroll contactLink">Contact Us by email</a> with what you're interested in having.</h3>
                        <h3>You can look at our Small Batch offerings or inquiry about certain pastries that you already love!</h3> */}
                        {/* <Catering changeSize={this.changeSize} caterOption={this.addCaterOption} removeCaterOption={this.removeCaterOption} addCombo={this.addCaterCombo} stateItemName={this.state.itemName} stateItemOption={this.state.itemOption} stateItemSize={this.state.itemSize} stateCaterOption={this.state.caterOption}/> */}
                        {/* <p>Catering</p> */}
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScUd-uTT9z2ItOHfr4EjE32AZuKfYP5bteqVFyzg03LJu5Ejw/viewform?embedded=true" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="Catering Request Form">Loading…</iframe>
                    </div>
                </div>
    
                <div id="menuNotesBottom">
                    <div id="menuNotesBottomBg">
                        <Notes notes={bakeryInfo.menu.bottomNotes} textSize={4} textColor="#000"></Notes>
                    </div>
                </div>
            </div>
        </section>
        );
    }
};
  
  export default Menu;