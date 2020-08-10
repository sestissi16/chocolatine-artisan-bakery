import React, { Component } from 'react';
import Iframe from 'react-iframe'
import topBorder from '../assets/blackFractalVarietyEuropeanPatterBorders-Top3.png'
import bottomBorder from '../assets/blackFractalVarietyEuropeanPatterBorders-Bottom3.png'
import './Header.css'

class Header extends Component {
    constructor () {
        super()

        this.state = {
            width: '500',
        }
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


    render () {
        return (
            <header id="home">
                <div id="headerContainer">
                    <div id="homeInfo">
                    <div id="homeInfoBorderImage">
                        <div id="homeInfoText">
                        <h1 id="homeTitle">Welcome to <span className="spanTitle">Chocolatine</span></h1>
                        <br/>
                        <h2 id="homeTagline">We make European baked goods with love, so kickstart your day with us!</h2>
                        <br/>
                        <h3 id="homeList"> We have warm muffins, buttery biscuits, tasty breads and delicious viennoiseries, and many other delicacies!</h3>
                        </div>
                    </div>
                    </div>
                    <div id="fb-container">
                        <img src={topBorder} alt="top ornamental border" id="fbTopBorder"/>
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
                        <img src={bottomBorder} alt="bottom ornamental border" id="fbBottomBorder"/>
                    </div>
                </div>
            </header>
        );
    };
};

export default Header;
