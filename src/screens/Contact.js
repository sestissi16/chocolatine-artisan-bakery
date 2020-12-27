import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import BlackLineDivider from '../assets/borders/black/blackFlowerDivider-Transparent-Cropped.png'
import Navigation from './Navbar'
import TitleFrame from '../assets/backgrounds/contactUsDarkRed.png'
import TitleFrameSm from '../assets/backgrounds/contactUsDarkRedSm.png'
// import { FacebookProvider, Page } from 'react-facebook';
import Iframe from 'react-iframe'
import yourOrder from '../yourOrder'
import './Contact.css'
import bakeryInfo from '../bakeryData';

class Contact extends Component {
    constructor () {
        super()

        this.state = {
            name: '',
            email: '',
            subject: '',
            subjectRadio: '',
            message: '',
            width: '500',
        }

        this.handleChange = this.handleChange.bind(this)
        this.resetContact = this.resetContact.bind(this)
        this.changeSubject = this.changeSubject.bind(this)
    }

    /**
     * Calculate & Update state of width
     */
    updateDimensions() {
        if(window.innerWidth < 500 && window.innerWidth > 450) {
            this.setState({ width: '450'});
        } else if(window.innerWidth < 450 && window.innerWidth > 400) {
            this.setState({ width: '400'})
        } else if(window.innerWidth < 400 && window.innerWidth > 340){
            this.setState({ width: '340'})
        } else if(window.innerWidth < 340){
            this.setState({ width: '320'})
        } else if(window.innerWidth > 500){
            this.setState({width: '550'})
        } else {
        // let update_width  = window.innerWidth-100;
        // let update_height = Math.round(update_width/4.4);
        // this.setState({ width: update_width, height: update_height });
        }
    }

    /**
     * Add event listener for updating the width state
     */
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    /**
     * Remove event listener for updating the width state
     */
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    handleChange(e) {
        e.preventDefault()
        this.setState({
            [e.target.type]: e.target.value
        })
    }

    changeSubject(e) {
        e.preventDefault();
        this.setState({
            subjectRadio: e.target.value,
            subject: bakeryInfo.contactUs.formSubjects[e.target.value],
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
        var orderCount = yourOrder.orderList.count
        return (
            <section id="contact">
                <Navigation orderCount={orderCount}/>
                <div id="contactContainer">
                    <div id="contactTitle">
                        <img src={TitleFrame} alt="Contact Us Title with Vintage Frame" id="contactTitleImage" class="tabletDesktopSize"/>
                        <img src={TitleFrameSm} alt="Contact Us Title with Vintage Frame" id="contactTitleImage" class="mobileSize"/>
                    </div>
                    <form name="contact-us" id="contactSection">
                        <h1 id="contactFormTitle">Contact Form:</h1>
                        <img src={BlackLineDivider} alt="ornamental divider" className="contactDivider"/>
                        <div id="contactFormSubTitle">
                            {
                                Object.keys(bakeryInfo.contactUs.formDescript).map((key, index) => {
                                    var descript = bakeryInfo.contactUs.formDescript
                                    return <h2>{descript[key]}</h2>
                                })
                            }
                        </div>
                        <div id="contactForm">
                            <div className="form-group">
                                <label className="contactFormLabel" for="contactFormEmail">Enter your email address: </label>
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
                                <label className="contactFormLabel" for="contactFormName">Enter your name:</label>
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
                                <h5>Why would you like to message us today?</h5>
                                <div id="subjectRadioRow">
                                    <div className="form-check">
                                        <input 
                                            id="cateringRadio" 
                                            className="contactFormRadio" 
                                            name="subjectFormRadio"
                                            value="caterInquiry" 
                                            type="radio" 
                                            onChange={this.changeSubject}
                                            checked={this.state.subjectRadio === "caterInquiry"}
                                            style={{height:1.1 +'em', width:1.1+'em',}}
                                        />
                                        <label className="contactFormLabel" for="contactFormName">Catering order or inquiry</label>
                                    </div>
                                    <div className="form-check">
                                        <input 
                                            id="wholesaleRadio" 
                                            className="contactFormRadio" 
                                            name="subjectFormRadio"
                                            value="wholesaleInquiry" 
                                            type="radio" 
                                            onChange={this.changeSubject}
                                            checked={this.state.subjectRadio === "wholesaleInquiry"}
                                            style={{height:1.1 +'em', width:1.1+'em',}}
                                        />
                                        <label className="contactFormLabel" for="contactFormName">Wholesale order or inquiry</label>
                                    </div>
                                    <div className="form-check">
                                        <input 
                                            id="customizationRadio" 
                                            className="contactFormRadio" 
                                            name="subjectFormRadio"
                                            value="customizationInquiry" 
                                            type="radio" 
                                            onChange={this.changeSubject}
                                            checked={this.state.subjectRadio === "customizationInquiry"}
                                            style={{height:1.1 +'em', width:1.1+'em',}}
                                        />
                                        <label className="contactFormLabel" for="contactFormName">Customization inquiries</label>
                                    </div>
                                    <div className="form-check">
                                        <input 
                                            id="otherRadio" 
                                            className="contactFormRadio" 
                                            name="subjectFormRadio"
                                            value="otherInquiry" 
                                            type="radio" 
                                            onChange={this.changeSubject}
                                            checked={this.state.subjectRadio === "otherInquiry"}
                                            style={{height:1.1 +'em', width:1.1+'em',}}
                                        />
                                        <label className="contactFormLabel" for="contactFormName">Other inquiries</label>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <label className="contactFormLabel" for="contactFormSubject">Pick and option above to fill out the first portion of the subject and then fill in your question:</label>
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
                                <label className="contactFormLabel" for="contactFormMessage">Enter the message you'd like to send:</label>
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
                        </div>
                    </form>
                    <div id="fb-container">
                        <h2 id="contactFacebookTitle">Our <a id="contactFacebookLink" href="www.facebook.com/ArtisanBakeries">Facebook Page</a>:</h2>
                        <h3 id="contactFacebookSubTitle">Here you can message us and check out our posts and events for new specialities and promos.</h3>
                        <Iframe url={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FArtisanBakeries&tabs=timeline%2C%20messages%2C%20events&width=${this.state.width}&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=605332897003313`} 
                            height="700px"
                            id="fb-iframe"
                            style={{border: 'none' , overflow: 'hidden'}}
                            display="initial"
                            scrolling="yes" 
                            frameborder="0px"
                            allowTransparency="true"
                            allow="encrypted-media"
                        /> 
                    </div>
                </div>
                
            </section>
        );
    }
};

export default Contact;
