import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import './Contact.css'

class Contact extends Component {
    constructor () {
        super()

        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.resetContact = this.resetContact.bind(this)
    }

    handleChange(e) {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    stringifyStateValue(stateObject) {
        let stateString = '';

        for (const key in stateObject) {
            stateString = stateString + `${stateObject[key]}`;
        }

        return stateString
    }

    resetContact(e) {
        e.preventDefault();

        this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
        })
    }

    keyboardResetContact(e) {
        e.preventDefault();

        if(e.keyCode === 13){
            this.setState({
                name: '',
                email: '',
                subject: '',
                message: '',
            })
        }

    }

    render() {
        return (
            <section id="contact">
                <div id="contactContainer">
                    <h1 id="contactSectionTitle">Contact Us:</h1>
                    <form name="contact-us" id="contactForm">
                        <div className="form-group">
                            <label for="contactFormEmail">Enter your email address: </label>
                            <input 
                                id="contactFormEmail" 
                                className="contactFormInput" 
                                name="email" 
                                type="email" 
                                placeholder="Email" 
                                value={ this.state.email }
                                onChange={this.handleChange}
                                required
                            />
                        </div>
        
                        <div className="form-group">
                            <label for="contactFormName">Enter your name:</label>
                            <input 
                                id="contactFormName" 
                                className="contactFormInput" 
                                name="name" 
                                type="text" 
                                placeholder="Name" 
                                value={ this.state.name }
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        
                        <div className="form-group">
                            <label for="contactFormSubject">Enter the subject:</label>
                            <input 
                                id="contactFormSubject" 
                                className="contactFormInput" 
                                name="subject" 
                                type="text" 
                                placeholder="Subject" 
                                value={ this.state.subject }
                                onChange={this.handleChange}
                                required
                            />
                        </div>
        
                        <div className="form-group">
                            <label for="contactFormMessage">Enter the message you'd like to send:</label>
                            <textarea 
                                id="contactFormMessage" 
                                className="contactFormInput" 
                                name="message" 
                                type="text-area" 
                                placeholder="Message you'd like to send"
                                value={ this.state.message }
                                onChange={this.handleChange}
                                required
                            />
                        </div>

                        <div id="buttonGroup">
                            <Button
                                variant='success' 
                                type='submit'
                                className="contactFormButton"
                                href={`mailto:artisanbakeriesusa@gmail.com?subject=Note%20From%20${this.state.name}-${this.state.subject}&body=${this.state.message}`}
                            >
                                Send                          
                            </Button>
                            <Button
                                variant='success'
                                className="contactFormButton" 
                                onClick={this.resetContact}
                                onKeyDown={(e) => this.keyboardResetContact(e)}
                            >Clear Form</Button>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
};

export default Contact;
