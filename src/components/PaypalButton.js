import React from "react";
import ReactDOM from "react-dom";
import SmartPaymentButtons, { PayPalSDKWrapper } from 'react-smart-payment-buttons';


 const CLIENT = {
   sandbox:
     "AeiVk9nuJzaPIpEff47oPP11c-_jkbvdIcyPhhhkIKTDsy3UQ4Vf1Tx4u6izJ1V21rHimqbn97luCP6W",
   production:
     "AavQDHb_8SyiZIqB_1wFQGCC88OzfekPL1nreE0t6tnFwPr23Jjuw3hLsnPSRgAgooqgxHFiytLdBnIu"
 };

 const REACT_APP_PAYPAL_CLIENT_ID =
   process.env.NODE_ENV === "production" ? CLIENT.production : CLIENT.sandbox;


// next create the class and Bind React and ReactDom to window
//as we will be needing them later

class PaypalButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showButtons: true,
      paid: false,
      showPaypal: props.showStatus,
    };

    window.React = React;
    window.ReactDOM = ReactDOM;
  }

  createOrder = (data, actions) => {
    
    return actions.order.create({
      
      purchase_units: [
        {
          name: `${this.props.name}`,
          description: `${this.props.description}`,
          amount: {
            currency_code: "USD",
            value: this.props.price,
          }
        }
      ]
    });
  };

  onApprove = (data, actions) => {
    actions.order.capture().then(details => {
      const paymentData = {
        payerID: data.payerID,
        orderID: data.orderID
      };
      console.log("Payment Approved: ", paymentData);
      this.setState({ showButtons: false, paid: true });
    });
  };
  

  render() {
    const { showButtons, paid } = this.state;
      return (
        <div className="main">
      
          {showButtons && (
              <div>
                <div id="orderInfo">
                  <h2>Items: {this.props.description}</h2>
                  <h2>Total checkout Amount: {this.props.price}</h2>
                </div>

                <PayPalSDKWrapper clientId={REACT_APP_PAYPAL_CLIENT_ID}>
                    <SmartPaymentButtons
                    createOrder={(data, actions) => this.createOrder(data, actions)}
                    onApprove={(data, actions) => this.onApprove(data, actions)}
                    />
                </PayPalSDKWrapper>
    
                <input className="hidden" name="paid" readOnly value='Did not complete online payment'/>
                <h4>If this message doesn't go away, then something has gone wrong with the Paypal payment system! Please select, pay in cash instead and then click the Place Order button.</h4>
              </div>
            )}
  
          {paid && (
            <div className="main">
              <h2>
                Congrats! You paid for your order!
              </h2>
              <h2>Click on the Place Order button below to finish your order.</h2>
              <input className="hidden" name="paid" readOnly value='Completed Payment'/>
            </div>
          )}

        </div>
    );
  }

 }

 export default (PaypalButton);

//  view rawReact-PayPal-Imports.js hosted with ❤ by GitHub