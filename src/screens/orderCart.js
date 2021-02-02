import React, { Component } from 'react';
import Navigation from './Navbar'
import Input from 'react-phone-number-input/input'
import 'react-phone-number-input/style.css'
import PaypalExpressBtn from 'react-paypal-express-checkout';
import DatePicker from 'react-datepicker'
import { addDays } from 'date-fns'
import { setHours, setMinutes } from 'date-fns'
import 'react-datepicker/dist/react-datepicker.css'
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TextField } from "@material-ui/core"
import { withStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { Modal, Button, Alert } from 'react-bootstrap'
import Notes from '../components/menuNotes'
import ReviewCard from '../components/orderReviewCard'
import './orderCart.css'
import bakeryInfo from '../bakeryData';

const MyRadio = withStyles({
    root: {
      '&$checked': {
        color: red[900],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

class Order extends Component {
    constructor () {
        super()

        this.state = {
            phoneValue: '',
            showPaypal: false,
            paymentOption: '',
            orderComplete: false,
            orderCount: 0,
            orderList: {},
            orderTotal: 0,
            orderTotalOnline: 0,
            paid: false,
            date: null,
        }

        this.removeOrderItem = this.removeOrderItem.bind(this)
        this.getSessionStorage = this.getSessionStorage.bind(this)
        this.dateTimeChange = this.dateTimeChange.bind(this)
        this.isAvailableDate = this.isAvailableDate.bind(this)
        this.isTimePassed = this.isTimePassed.bind(this)
        this.changePayment = this.changePayment.bind(this)
        this.showPaypalButtons = this.showPaypalButtons.bind(this)
        this.completeOrder = this.completeOrder.bind(this)
        this.onSuccess = this.onSuccess.bind(this)
        this.onCancel = this.onCancel.bind(this)
        this.onError = this.onError.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.formSubmit = this.formSubmit.bind(this)
        // this.changePayment = this.changePayment.bind(this)
    }

    componentDidMount() {
        this.getSessionStorage();

        window.addEventListener("storage", this.getSessionStorage());
       
    }

    getSessionStorage = () => {
        console.log('In get session storage')
        var count = JSON.parse(sessionStorage.getItem('orderCount'))
        var list = JSON.parse(sessionStorage.getItem('orderList'))
        var total = parseFloat(JSON.parse(sessionStorage.getItem('orderTotal')))
        var onlineTotal = 0
        if(total) {
            onlineTotal = ((total * 0.03) + total + 0.30).toFixed(2)
            if(total >= 50.00){
                total = (total - (total * 0.05)).toFixed(2)
                onlineTotal = (onlineTotal - (onlineTotal * 0.05)).toFixed(2)
                this.setState({
                    orderCount: count,
                    orderList: list,
                    orderTotal: total,
                    orderTotalOnline: onlineTotal
                })
            } else {
                this.setState({
                    orderCount: count,
                    orderList: list,
                    orderTotal: total,
                    orderTotalOnline: onlineTotal
                })
            }
        } else {
            this.setState({
                orderCount: count,
                orderList: list,
                orderTotal: 0,
                orderTotalOnline: 0,
            })
        }
    }

    dateTimeChange(date) {

        console.log(date)
        this.setState({date: date})
    }

    isAvailableDate(date) {
        const day = date.getDay()
        return day !== 0 && day !== 2 && day !== 3 && day !== 4 && day !== 6   
    }

    isTimePassed(time) {
        const currentDate = new Date();
        const selectedDate = new Date(time);

        return currentDate.getTime() < selectedDate.getTime();
    }


    removeOrderItem = (e) => {
        e.preventDefault();
        e.stopPropagation();

        // Get the existing data
        var existingOrderList = sessionStorage.getItem('orderList');

        // If no existing data, create an array
        // Otherwise, convert the sessionStorage string to an array
        existingOrderList = existingOrderList ? JSON.parse(existingOrderList) : {};

        var priceToRemove = existingOrderList[e.target.name].price.split('$')
        var amountOfItem = existingOrderList[e.target.name].amount

        // Delete the key we need to remove
        delete existingOrderList[e.target.name]

        // Save back to sessionStorage
        sessionStorage.setItem('orderList', JSON.stringify(existingOrderList));

        var count = JSON.parse(sessionStorage.getItem('orderCount'))
        if (count !== 0 && count > 0){
            count = count - 1
        } else {
            count = 0
        }

        sessionStorage.setItem('orderCount', JSON.stringify(count))

        var total = JSON.parse(sessionStorage.getItem('orderTotal'))
        if (total !== 0 && total > 0) {
            total = total - (parseFloat(priceToRemove[1]).toFixed(2) * amountOfItem)
        } else {
            total = 0
        }

        sessionStorage.setItem('orderTotal', JSON.stringify(parseFloat(total).toFixed(2)))

        this.getSessionStorage()
    }

    showPaypalButtons = (e) => {
        // this preventDefault stopped my radio buttons from working correctly since I was calling it in their change function
        // e.preventDefault();

        //this changes the state according to which button is pushed which will change the className on the container for the paypal buttons
        if (e.target.value === 'cash'){
            this.setState({showPaypal: false})
        } else{
            this.setState({ showPaypal: true });
        }
        
    };

    //This changes the checked status of the payment radio buttons
    changePayment(e){
        e.stopPropagation();
        //this changes the state
        this.setState({ paymentOption: e.target.value });

        //this changes the showPaypal state accordingly
        this.showPaypalButtons(e)
    }

    completeOrder(e){
        e.preventDefault();

        this.setState({ orderComplete: true });
    }

    handleClose(e){
        e.preventDefault();

        this.setState({ orderComplete: false });
    }

    onSuccess = (payment) => {
        // Congratulation, it came here means everything's fine!
        console.log("The payment was succeeded!", payment);
        // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
        this.setState({ paid: true })

    }

    onCancel = (data) => {
        // User pressed "cancel" or close Paypal's popup!
        console.log('The payment was cancelled!', data);
        // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
        alert("Your payment was cancelled! Please click the paypal button to try again or choose the cash option to pay upon delivery.")
    }

    onError = (err) => {
        // The main Paypal's script cannot be loaded or somethings block the loading of that script!
        console.log("Error!", err);
        // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
        // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
        alert("There was an error processing your payment! Please click the paypal button to try again or choose the cash option to pay upon delivery.")

    }

    //For it to work you need an input field with the name attribute and the name attribute must match a heading in the google sheet it's linked to
    formSubmit(e) {
        e.preventDefault();
        e.stopPropagation();
        // this.setState({ orderComplete: true})
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwCsxWYO8f5aFTvvWzrQMYgHPryxbi0TUSlnjIMiabos2vuldpk/exec'
        const form = document.forms['submit-to-google-sheet']
        
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {console.log('Success!', response); this.setState({ orderComplete: true}); sessionStorage.clear(); this.getSessionStorage()})
            .catch(error => console.error('Error!', error.message))
    }


    render() {
        const { orderCount, orderList, orderTotal, orderTotalOnline, orderComplete, showPaypal, paymentOption, paid } = this.state;
        const CLIENT = {
            sandbox:
              "AeiVk9nuJzaPIpEff47oPP11c-_jkbvdIcyPhhhkIKTDsy3UQ4Vf1Tx4u6izJ1V21rHimqbn97luCP6W",
            production:
              "AavQDHb_8SyiZIqB_1wFQGCC88OzfekPL1nreE0t6tnFwPr23Jjuw3hLsnPSRgAgooqgxHFiytLdBnIu"
          };
         
        
        const env = process.env.NODE_ENV === "production" ? "production" : "sandbox";
        const currency = "USD";

        var orderArray = []
        if(orderList){
            Object.keys(orderList).map((key, index) => { 
                const item = orderList[key]
                if(item.option){
                    orderArray.push(`${item.name}: ${item.size}, ${item.option}, ${item.amount}`)
                } else {
                    orderArray.push(`${item.name}: ${item.size}, ${item.amount}`)
                }     
            })
        }

        var orderString = orderArray.join('; ')

        return (
        <section id="order">
            <Navigation orderCount={orderCount}/>
            <div id="orderContainer">
                <div id="orderSectionHeader">
                    <div id="orderSectionHeaderBg">
                        <h1 id="orderHeaderTitle">Your Cart</h1>
                        <Notes notes={bakeryInfo.order.topNotes} textSize={3} textColor="#fff" />
                    </div>
                </div>
                <div id="orderContent">
                    <div id="paymentIdSection">
                        <h2 id="paymentTitle">Payment Section</h2>
                        <Notes notes={bakeryInfo.order.bottomNotes} textSize={3} textColor="#000" />

                        <form name="submit-to-google-sheet" id="orderForm" onSubmit={this.formSubmit}>
                            <div id="billingInfoSection">
                                <h3 id="billingInfoTitle">Billing Information</h3>
                                <div className="form-group">
                                    <label className="orderFormLabel" for="orderFormEmail">Enter your email address: </label>
                                    <input id="orderFormEmail" className="orderFormInputContact" name="email" type="email" placeholder="Email" required/>
                                </div>

                                <div className="form-group">
                                    <label className="orderFormLabel" for="orderFormPhone">Enter your phone number: </label>
                                    <Input
                                        name="phoneNumber"
                                        placeholder="Phone Number"
                                        className="orderFormInputContact"
                                        id="orderFormPhone"
                                        country="US"
                                        value={ this.state.phoneValue }
                                        onChange={ phoneValue => this.setState({ phoneValue }) }
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="orderFormLabel" for="orderFormName">Enter your name for the order: </label>
                                    <input id="orderFormName" className="orderFormInputContact" name="name" type="text" placeholder="Name" required/>
                                </div>

                                <div className="form-group">
                                    <label className="orderFormLabel" for="orderFormAddress">Enter your address: </label>
                                    <input id="orderFormAddress" className="orderFormInputContact" name="address" type="text" placeholder="Your address" required/>
                                </div>

                                <div className="form-group">
                                    <label className="orderFormLabel" for="orderFormDateTime">Pick a delivery or pick up date and time: </label>
                                    <DatePicker 
                                        id="orderFormDateTime"
                                        className="orderFormInputContact"
                                        name="dateTimeNeeded"
                                        selected={this.state.date}
                                        onChange={this.dateTimeChange}
                                        filterDate={this.isAvailableDate}
                                        minDate={addDays(new Date(),1)}
                                        showTimeSelect
                                        filterTime={this.isTimePassed}
                                        minTime={setHours(setMinutes(new Date(),0), 9)}
                                        maxTime={setHours(setMinutes(new Date(),0), 19)}
                                        placeholderText="Select a delivery/pick up day and time"
                                        dateFormat="MM/d/yyyy h:mm aa"
                                    />
                                </div>
                            </div>
                            <div id="paymentInfoSection">
                                <div className="form-group orderFormNotesSection">
                                    <label className="orderFormLabel" for="orderFormNotes"><h4>Notes and requests for your order: </h4></label>
                                    <input id="orderFormNotes" className="orderFormInputNotes" name="notes" type="textarea" placeholder="Additional notes about your order..."/>
                                </div>
                                <label className="hidden" for="orderFormOrderString">Order converted to string for our files</label>
                                <input className="hidden" id="orderFormOrderString" name="yourOrder" readOnly value={orderString}/>
                                <div id="orderTotal" className="form-group">
                                    <label id="orderTotalInputLabel" for="orderTotalInput"><h5>Your total: </h5></label>
                                    <input id="orderTotalInput" name="total" readOnly value={showPaypal ? `$ ${orderTotalOnline}` : `$ ${orderTotal}`}/>
                                </div>
                                <div className="form-group orderFormPaymentSection">
                                    <FormControl component="fieldset">
                                        <FormLabel component="legend" id="paymentChoiceTitle">Payment Options</FormLabel>
                                        <RadioGroup aria-label="paymentChoices" name="paymentType"  onChange={this.changePayment}>
                                            <FormControlLabel className="paymentChoiceItem" value={"online"} control={<MyRadio />} label={"Online Payment Using Paypal"} />
                                            <FormControlLabel className="paymentChoiceItem" value={"cash"} control={<MyRadio />} label={"Pay in Cash"} />
                                        </RadioGroup>
                                    </FormControl>
                                </div>

                                <div id="payPalContainer" className={`${showPaypal ? "" : "hidden"}`}>
                                    <PaypalExpressBtn env={env} client={CLIENT} currency={currency} total={orderTotalOnline} onError={this.onError} onSuccess={this.onSuccess} onCancel={this.onCancel} />
                                </div>

                                <div id="onlinePaymentReceived" className={`${paid ? "" : "hidden"}`}>
                                    <h4>Online payment was completed!</h4>
                                    <h5>Please press the "Place order" button below to send in your order to us!</h5>
                                    <label className="hidden" for="orderFormPaid">Check if you've paid online or will pay in person</label>
                                    <input className="hidden" id="orderFormPaid" name="paid" readOnly value={`${paid ? "Paid Online (Complete)" : "Pay upon delivery/pick up"}`}/>
                                </div>

                                <div id="cashOrOnlinePaymentCanceled" className={`${paymentOption==="cash" ? "" : "hidden"}`}>
                                    <h4>Thank you! You will pay upon delivery.</h4>
                                    <h5>Please press the "Place order" button below to send in your order to us!</h5>
                                </div>

                                <div id="orderFormBtnDiv">
                                    <button type="submit" id="orderFormSubmitButton" onSubmit={this.completeOrder}>Place order</button>
                                </div>

                                <Modal show={orderComplete} onHide={this.handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Order Complete!</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        Your order was sent in and we will message you to confirm your order as soon as we receive it!
                                        To place another order, go back to the Menu and add things to your cart!
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={this.handleClose}>
                                            Close
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </form>
                    </div>
                    <div id="orderReviewSection">
                        <h2 id="reviewTitle">Review Your Cart</h2>
                        { orderList ? 
                            Object.keys(orderList).map((key, index) => {
                                var orderInfo = orderList[key]
                                if(orderInfo.option) {
                                    return <ReviewCard 
                                        itemKey={key} 
                                        name={orderInfo.name} 
                                        price={orderInfo.price}
                                        size={orderInfo.size}
                                        option={orderInfo.option}
                                        amount={orderInfo.amount}
                                        removeItem={this.removeOrderItem}
                                    />
                                } else {
                                    return <ReviewCard 
                                        itemKey={key} 
                                        name={orderInfo.name} 
                                        price={orderInfo.price}
                                        size={orderInfo.size}
                                        option="none"
                                        amount={orderInfo.amount}
                                        removeItem={this.removeOrderItem}
                                    />
                                }
                                
                            }) 
                            : <h3 id="reviewEmptyTitle">Go to the Menu to order</h3>
                        }
                        <div id="totalDiv">
                            <h3>Total: </h3>
                            <h3>{showPaypal ? `$ ${orderTotalOnline}` : `$ ${orderTotal}`}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
};
  
  export default Order;