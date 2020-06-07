import React, { Component } from 'react'
import './Order.css'
import Input from 'react-phone-number-input/input'
import 'react-phone-number-input/style.css'
import PaypalButtons from './PaypalButton'

const pricesPerItem = { cookiesChoco: 1.50, cookiesChocoPecan: 1.75};
class Order extends Component {
    constructor () {
        super()

        this.state = {
            cookiesChoco: 0,
            cookiesChocoPecan: 0,
            phoneValue: '',
            showPaypal: false,
            paymentOption: '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.resetContact = this.resetOrder.bind(this)
        this.showPaypalButtons = this.showPaypalButtons.bind(this)
        this.changePayment = this.changePayment.bind(this)
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
        this.setState({
            [e.target.name]: e.target.value
        })
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
            phoneValue: '',
            total: 0,
            paymentOption: '',
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
        const total = (this.state.cookiesChoco * pricesPerItem.cookiesChoco) + (this.state.cookiesChocoPecan * pricesPerItem.cookiesChocoPecan);
        const order = {
            price: total,
            description: `Chocolate Chip Cookies: ${this.state.cookiesChoco} and Chocolate Chip Pecan Cookies: ${this.state.cookiesChocoPecan}`,
            name: 'Your order',    
        };
        const { showPaypal, paymentOption } = this.state;

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
                                <label className="orderFormLabel" for="orderFormDate">Enter the date you need the order by:</label>
                                <input id="orderFormDate" className="orderFormInput" name="dateNeeded" type="date" placeholder="Date you want the order by" required/>
                            </div>

                            <div className="form-group">
                                <label className="orderFormLabel" for="orderFormTime">Enter the time you need the order by on the date you entered above:</label>
                                <input id="orderFormTime" className="orderFormInput" name="timeNeeded" type="time" placeholder="Time you want the order by" required/>
                            </div>
                        </div>
                        

                        <div className="form-group">
                            <label className="orderFormLabel" for="orderFormFood">Enter the food items you'd like to buy:</label>
                            <div id="orderFormFood">
                                <div className="orderFoodItem">
                                    <h4 id="cookieTitle">Cookies:</h4>
                                    <label className="orderItemLabel" for="itemCookies">Number of Cookies Chocolate Chip:</label>
                                    <input 
                                        id="itemCookies" 
                                        className="orderItemNum" 
                                        name="cookiesChoco" 
                                        value={ this.state.cookiesChoco }
                                        onChange={this.handleChange}
                                        type="number"/>

                                    <label className="orderItemLabel" for="itemCookies">Number of Cookies Chocolate Chip and Pecans:</label>
                                    <input 
                                        id="itemCookies" 
                                        className="orderItemNum" 
                                        name="cookiesChocoPecan" 
                                        value={ this.state.cookiesChocoPecan }
                                        onChange={this.handleChange}
                                        type="number"/>

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

                        <div id="orderTotal">
                            <label for="orderTotalInput">Your total:</label>
                            <input id="orderTotalInput" name="total" readOnly value={total}/>
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
