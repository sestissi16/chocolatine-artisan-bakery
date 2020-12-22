import React, { Component } from 'react';
import Navigation from './Navbar'
import { Button, Alert } from "react-bootstrap"
import Notes from '../components/menuNotes'
import TitleFrame from '../assets/backgrounds/menuLightGreen.png'
import TitleFrameSm from '../assets/backgrounds/menuLightGreenSm.png'
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
            showWholesale: false,
            yourOrder: [],
            itemName: '',
            itemSize: '',
            itemPrice: '',
            itemOption: '',
            count: 0,
        }

        this.orderTypeSelect = this.orderTypeSelect.bind(this)
        this.addOrderItem = this.addOrderItem.bind(this)
        this.changeSize = this.changeSize.bind(this)
        this.changeOption = this.changeOption.bind(this)
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
        else {
            this.setState({ orderType: e.target.value, 
                showSmall: false, 
                showCatering: false, 
                showWholesale: true
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

    addOrderItem = (e) => {
        
        e.preventDefault();
        e.stopPropagation();
        if(this.state.itemSize === ''){
            alert("Please choose a size before adding an item to your order!")
        }else{
            this.setState({ itemName: e.target.name});
            // console.log(this.state.itemName)
            var numberOfItems  = yourOrder.orderList.count
            var itemName = e.target.value
            var key = e.target.name.replace( /\s/g, '') + numberOfItems
            yourOrder.orderList[key] = {name: itemName, price: this.state.itemPrice, size: this.state.itemSize, option: this.state.itemOption};
            yourOrder.orderList.count = numberOfItems + 1
    
            console.log(yourOrder.orderList)
            this.setState({ itemSize: '', itemOption: ''});
        }
    }

    render() {
        const { showSmall, showCatering, showWholesale } = this.state;
        var orderCount = yourOrder.orderList.count
        return (
        <section id="menu">
            <Navigation orderCount={orderCount}/>
            <div id="menuContainer">
                <div id="menuSectionTitle">
                    <img src={TitleFrame} alt="About Us Title with Vintage Frame" id="menuTitleImage" class="tabletDesktopSize"/>
                    <img src={TitleFrameSm} alt="About Us Title with Vintage Frame" id="menuTitleImage" class="mobileSize"/>
                </div>
                <Notes notes={bakeryInfo.menu.topNotes} textSize={3}></Notes>
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
                        </div>
                        <div className="orderTypeDiv">
                            <Button
                                variant="success"
                                className="orderTypeBtn"
                                size="lg"
                                value="wholesale"
                                onClick={this.orderTypeSelect}
                            >
                                Wholesale
                            </Button>
                        </div>
                    </section>
                </div>
                <div id="menuSectionCards">
                    <div id="smallBatchSection" className={`${showSmall ? "" : "hidden"}`}>
                        <SmallBatchSection changeSize={this.changeSize} changeOption={this.changeOption} addItem={this.addOrderItem} stateItemName={this.state.itemName} stateItemPrice={this.state.itemPrice} stateItemOption={this.state.itemOption} stateItemSize={this.state.itemSize}></SmallBatchSection>
                    </div>
                    <div id="cateringSection" className={`${showCatering ? "" : "hidden"}`}>
                        <p>Catering</p>
                    </div>
                    <div id="wholesaleSection" className={`${showWholesale ? "" : "hidden"}`}>
                        <p>Wholesale</p>
                    </div>
                </div>
    
                <div id="menuNotesBottom">
                    <Notes notes={bakeryInfo.menu.bottomNotes} textSize={5}></Notes>
                {/* <h4>* Our food is made in a cottage food operation that is not subject to government food safety inspection.</h4>
                <h4>* Our food is made in the same area as nut products and gluten products. <a href="#contact" className="smoothscrool">Message us</a> if you need your food prepared in a different way.</h4> */}
                </div>
            </div>
        </section>
        );
    }
};
  
  export default Menu;