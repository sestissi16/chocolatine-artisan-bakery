import React, { Component } from 'react';
import './Order.css'
import Input from 'react-phone-number-input/input'
import 'react-phone-number-input/style.css'

class Order extends Component {

    state = {
        phoneValue: ''
    }

    formSubmit(e) {
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwCsxWYO8f5aFTvvWzrQMYgHPryxbi0TUSlnjIMiabos2vuldpk/exec'
        const form = document.forms['submit-to-google-sheet']
        console.log(new Date());
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => console.log('Success!', response))
          .catch(error => console.error('Error!', error.message))
    }

    render() {
        
        return (
            <section id="order">
                <div id="orderContainer">
                    <form name="submit-to-google-sheet" onSubmit={this.formSubmit} id="orderForm">
                        <div className="form-group">
                            <label for="orderFormEmail">Enter your email address: </label>
                            <input id="orderFormEmail" className="orderFormInput" name="email" type="email" placeholder="Email" required/>
                        </div>

                        <div className="form-group">
                            <label for="orderFormPhone">Enter Phone Number: </label>
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
                            <label for="orderFormName">Enter your name for the order:</label>
                            <input id="orderFormName" className="orderFormInput" name="name" type="text" placeholder="Name" required/>
                        </div>
                        <div className="form-group">
                            <label for="orderFormDate">Enter the date you need the order by:</label>
                            <input id="orderFormDate" className="orderFormInput" name="dateNeeded" type="date" placeholder="Date you want the order by" required/>
                        </div>

                        <div className="form-group">
                            <label for="orderFormTime">Enter the time you need the order by on the date you entered above:</label>
                            <input id="orderFormTime" className="orderFormInput" name="timeNeeded" type="time" placeholder="Time you want the order by" required/>
                        </div>

                        <div className="form-group">
                            <input className="orderFormInput" id="payOnline" name="paymentType" type="radio" value="online"/>
                            <label for="payOnline">Pay Online</label>
                            <input id="payInCash" className="orderFormInput" name="paymentType" type="radio" value="cash"/>
                            <label for="payInCash">Pay In Cash</label>
                        </div>

                        <div className="form-group">
                            <label for="orderFormFood">Enter the food items you'd like to buy:</label>
                            <input id="orderFormFood" className="orderFormInput" name="foodOrdered" type="text" placeholder="Food you want to order"/>
                        </div>

                        <button type="submit">Send</button>
                    </form>
                </div>
            </section>
        );
    }
};

export default Order;
