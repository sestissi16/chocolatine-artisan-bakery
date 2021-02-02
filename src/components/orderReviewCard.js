import React, { Component } from 'react';
import { MdDeleteForever } from 'react-icons/md'
import './orderReviewCard.css'

class ReviewCard extends Component {

    render() {
        const {itemKey, name, price, size, option, amount, removeItem} = this.props
        
        var isOption = true

        if(option === "none") {
            isOption = false
        }

        var fullSize = ''
        if(size === "Sm") {
            fullSize = "Small"
        } else if(size === "Med") {
            fullSize = "Medium"
        } else {
            fullSize = "Large"
        }
        
        return(
            <div id="itemSection">
                <h5 id="itemName">{name}:</h5>
                {isOption ? 
                    (
                        <div id="itemDetails">
                            <div className="itemDiv">
                                <h6 className="detailOfItem">Size: </h6>
                                <h6>{fullSize}</h6>
                            </div>
                            <div className="itemDiv">
                                <h6 className="detailOfItem">Option: </h6>
                                <h6>{option}</h6>
                            </div>
                            <div className="itemDiv">
                                <h6 className="detailOfItem">Price per Amount: </h6>
                                <h6>{price}</h6>
                            </div>
                            <div className="itemDiv">
                                <h6 className="detailOfItem">Amount: </h6>
                                <h6>{amount}</h6>
                            </div>
                        </div>
                    ) :
                    (
                        <div id="itemDetails">
                            <div className="itemDiv">
                                <h6 className="detailOfItem">Size: </h6>
                                <h6>{fullSize}</h6>
                            </div>
                            <div className="itemDiv">
                                <h6 className="detailOfItem">Price per Amount: </h6>
                                <h6>{price}</h6>
                            </div>
                            <div className="itemDiv">
                                <h6 className="detailOfItem">Amount: </h6>
                                <h6>{amount}</h6>
                            </div>
                        </div>
                    )
                }
                <div id="removeItemSection">
                    <button 
                        id="removeOrderItemBtn"
                        name={itemKey}
                        onClick={removeItem}
                    >
                        <MdDeleteForever /> Delete
                    </button>
                </div>
            </div> 
        );
    }
}

export default ReviewCard;