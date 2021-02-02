import React, { Component } from 'react';
import Navigation from './Navbar'
import './Wholesale.css'


class Wholesale extends Component {
    constructor () {
        super()

        this.state = {
            orderCount: 0,
        }

        this.getSessionStorage = this.getSessionStorage.bind(this)
    }

    componentDidMount() {
        this.getSessionStorage();

        window.addEventListener("storage", this.getSessionStorage());
       
    }

    getSessionStorage = () => {
        var count = JSON.parse(sessionStorage.getItem('orderCount'))
        this.setState({orderCount: count})
    }


    render() {
        const { orderCount } = this.state
        return (
        <section id="wholesale">
            <Navigation orderCount={orderCount}/>
            <div id="wholesaleContainer">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeYdjy0AsiMUy2yvnFFaRUkj7MmIcbbAfhDQjphk2b-P-2VkA/viewform?embedded=true" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="Wholesale Request Form">Loading…</iframe>
            </div>
        </section>
        );
    }
};
  
  export default Wholesale;