import React from "react";
import ReactDOM from "react-dom";
import scriptLoader from "react-async-script-loader";


 const CLIENT = {
   sandbox:
     "AeiVk9nuJzaPIpEff47oPP11c-_jkbvdIcyPhhhkIKTDsy3UQ4Vf1Tx4u6izJ1V21rHimqbn97luCP6W",
   production:
     "AavQDHb_8SyiZIqB_1wFQGCC88OzfekPL1nreE0t6tnFwPr23Jjuw3hLsnPSRgAgooqgxHFiytLdBnIu"
 };

 const CLIENT_ID =
   process.env.NODE_ENV === "production" ? CLIENT.production : CLIENT.sandbox;

console.log(process.env.NODE_ENV)
//create button here
let PayPalButton = null;

// next create the class and Bind React and ReactDom to window
//as we will be needing them later

class PaypalButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showButtons: false,
      loading: true,
      paid: false,
      showPaypal: props.showStatus,
    };

    window.React = React;
    window.ReactDOM = ReactDOM;
  }

  componentDidMount() {
    console.log(process.env.NODE_ENV)
    const { isScriptLoaded, isScriptLoadSucceed } = this.props;

    if (isScriptLoaded && isScriptLoadSucceed) {
      PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
      this.setState({ loading: false, showButtons: true });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { isScriptLoaded, isScriptLoadSucceed } = nextProps;

    const scriptJustLoaded =
      !this.state.showButtons && !this.props.isScriptLoaded && isScriptLoaded;

    if (scriptJustLoaded) {
      if (isScriptLoadSucceed) {
        PayPalButton = window.paypal.Buttons.driver("react", {
          React,
          ReactDOM
        });
        this.setState({ loading: false, showButtons: true });
      }
    }
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
    const { showButtons, loading, paid } = this.state;
      return (
        <div className="main">
          {loading}
      
          {showButtons && (
              <div>
                <div id="orderInfo">
                  <h2>Items: {this.props.description}</h2>
                  <h2>Total checkout Amount: {this.props.price}</h2>
                </div>
                
                <PayPalButton
                  createOrder={(data, actions) => this.createOrder(data, actions)}
                  onApprove={(data, actions) => this.onApprove(data, actions)}
                />
                <input className="hidden" name="paid" readOnly value='Did not complete online payment'/>
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

 export default scriptLoader(`https://www.paypal.com/sdk/js?client-id=${CLIENT_ID}`)(PaypalButton);

//  view rawReact-PayPal-Imports.js hosted with ❤ by GitHub