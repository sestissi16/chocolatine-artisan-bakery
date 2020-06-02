import React, { Component } from 'react';
import './Order.css'

class Order extends Component {

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
                        <input className="orderFormInput" name="email" type="email" placeholder="Email" required/>
                        <input className="orderFormInput" name="name" type="text" placeholder="Name"/>
                        <input className="orderFormInput" name="dateNeeded" type="date" placeholder="Date you want the order by"/>
                        <input className="orderFormInput" name="timeNeeded" type="time" placeholder="Time you want the order by"/>
                        <input className="orderFormInput" id="payOnline" name="payOnline" type="radio" value="yes"/>
                        <label for="payOnline">Pay Online</label>
                        <input className="orderFormInput" name="payInCash" type="radio" value="yes"/>
                        <label for="payInCash">Pay In Cash</label>
                        <input className="orderFormInput" name="foodOrdered" type="text" placeholder="Food you want to order"/>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </section>
        );
    }
};

export default Order;
