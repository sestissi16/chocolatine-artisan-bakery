import React, { Component } from 'react';
import {
    AccordionItem,
    AccordionHeader,
    AccordionPanel,
    AccordionIcon,
    Box
  } from "@chakra-ui/core";
import bakeryInfo from '../bakeryData';
import ItemCard from '../components/menuItemCard'
import SectionDivider from '../assets/borders/black/blackFlowerThinDivider2-FullLine-Transparent.png'
import './menuSmallBatch.css'

class SmallBatch extends Component {
    
    isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }
    render() {
        const { changeSize, changeOption, addItem, stateItemName, stateItemOption, stateItemPrice, stateItemSize } = this.props
        var orderInfo = bakeryInfo.menu.smallBatch.orderInfo
        var savoryCroissantBasedInfo = bakeryInfo.menu.smallBatch.savory.croissantBased
        var savoryBreadBasedInfo = bakeryInfo.menu.smallBatch.savory.breadBased
        var savoryOtherInfo = bakeryInfo.menu.smallBatch.savory.other
        if(Object.keys(savoryOtherInfo).length === 0 && savoryOtherInfo.constructor === Object){
            savoryOtherInfo = {
                message: "Coming Soon!"
            }
        }
        var sweetCroissantBasedInfo = bakeryInfo.menu.smallBatch.sweet.croissantBased
        var sweetBreadBasedInfo = bakeryInfo.menu.smallBatch.sweet.breadBased
        var sweetOtherInfo = bakeryInfo.menu.smallBatch.sweet.other
        if(Object.keys(sweetOtherInfo).length === 0 && sweetOtherInfo.constructor === Object){
            sweetOtherInfo = {
                message: "Coming Soon!"
            }
        }
        var specialItemsInfo = bakeryInfo.menu.smallBatch.specialOrder.items

        return(
            <section id="smallBatch">
                <h4 id="smallbatchTitle">Small Batch Options:</h4>
                <div className="sectionDividerDiv">
                    <img src={SectionDivider} alt="ornate black line divider" className="sectionDivider"/>
                </div>
                <div id="smallBatchInfo">
                    <h4 id="orderInfoTitle">Small Batch Ordering Info</h4>
                    <ul>
                        <h5><li>{orderInfo.line1}</li></h5> 
                        
                        <h5><li>{orderInfo.line2}</li></h5>
                        
                        <h5><li>{orderInfo.line3}</li></h5>
                    </ul>
                </div>
                <div className="sectionDividerDiv">
                    <img src={SectionDivider} alt="ornate black line divider" className="sectionDivider"/>
                </div>
                <div id="smallBatchSavory">
                    <h4>Savory Section:</h4>
                    <AccordionItem className="accordionSection">
                        <AccordionHeader className="sectionHeader" _expanded={{ background: "#5D663D !important", color: "white" }}>
                            <Box flex="1" textAlign="left">
                            <h5>Croissant Based</h5>
                            </Box>
                            <AccordionIcon />
                        </AccordionHeader>
                        <AccordionPanel pb={4} className="itemCardPanel">
                            <div id="savoryCroissantBased">
                                {
                                    Object.keys(savoryCroissantBasedInfo).map(function(key, index) {
                                        var savoryInfo = savoryCroissantBasedInfo
                                        if ('option1' in savoryInfo[key]){
                                            return <ItemCard
                                                section="savory"
                                                type="croissantBased"
                                                itemKey={key}
                                                name={savoryInfo[key].name}
                                                description={savoryInfo[key].description}
                                                shortIngredients={savoryInfo[key].shortIngredient}
                                                longIngredients={savoryInfo[key].longIngredient}
                                                price={savoryInfo[key].price}
                                                option1={savoryInfo[key].option1}
                                                changeTheSize={changeSize}
                                                changeTheOption={changeOption}
                                                addTheItem={addItem}
                                                itemName={stateItemName}
                                                itemPrice={stateItemPrice}
                                                itemSize={stateItemSize}
                                                itemOption={stateItemOption}
                                            />
                                        } else {
                                            return <ItemCard
                                                section="savory"
                                                type="croissantBased"
                                                itemKey={key}
                                                name={savoryInfo[key].name}
                                                description={savoryInfo[key].description}
                                                shortIngredients={savoryInfo[key].shortIngredient}
                                                longIngredients={savoryInfo[key].longIngredient}
                                                price={savoryInfo[key].price}
                                                changeTheSize={changeSize}
                                                changeTheOption={changeOption}
                                                addTheItem={addItem}
                                                itemName={stateItemName}
                                                itemPrice={stateItemPrice}
                                                itemSize={stateItemSize}
                                                itemOption={stateItemOption}
                                            />
                                        }
                                    })
                                }
                            </div>
                        </AccordionPanel>
                    </AccordionItem>
                    
                    <AccordionItem className="accordionSection">
                        <AccordionHeader className="sectionHeader" _expanded={{ background: "#5D663D !important", color: "white" }}>
                            <Box flex="1" textAlign="left">
                            <h5>Bread Based</h5>
                            </Box>
                            <AccordionIcon />
                        </AccordionHeader>
                        <AccordionPanel pb={4} className="itemCardPanel">
                            <div id="savoryBreadBased">
                                {
                                    Object.keys(savoryBreadBasedInfo).map(function(key, index) {
                                        var savoryInfo = savoryBreadBasedInfo
                                        if ('option1' in savoryInfo[key]){
                                            return <ItemCard
                                                section="savory"
                                                type="breadBased"
                                                itemKey={key}
                                                name={savoryInfo[key].name}
                                                description={savoryInfo[key].description}
                                                shortIngredients={savoryInfo[key].shortIngredient}
                                                longIngredients={savoryInfo[key].longIngredient}
                                                price={savoryInfo[key].price}
                                                option1={savoryInfo[key].option1}
                                                changeTheSize={changeSize}
                                                changeTheOption={changeOption}
                                                addTheItem={addItem}
                                                itemName={stateItemName}
                                                itemPrice={stateItemPrice}
                                                itemSize={stateItemSize}
                                                itemOption={stateItemOption}
                                            />
                                        } else {
                                            return <ItemCard
                                                section="savory"
                                                type="breadBased"
                                                itemKey={key}
                                                name={savoryInfo[key].name}
                                                description={savoryInfo[key].description}
                                                shortIngredients={savoryInfo[key].shortIngredient}
                                                longIngredients={savoryInfo[key].longIngredient}
                                                price={savoryInfo[key].price}
                                                changeTheSize={changeSize}
                                                changeTheOption={changeOption}
                                                addTheItem={addItem}
                                                itemName={stateItemName}
                                                itemPrice={stateItemPrice}
                                                itemSize={stateItemSize}
                                                itemOption={stateItemOption}
                                            />
                                        }
                                    })
                                }
                            </div>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className="accordionSection">
                        <AccordionHeader className="sectionHeader" _expanded={{ background: "#5D663D !important", color: "white" }}>
                            <Box flex="1" textAlign="left">
                            <h5>Other Doughs and Confections</h5> 
                            </Box>
                            <AccordionIcon />
                        </AccordionHeader>
                        <AccordionPanel pb={4} className="itemCardPanel">
                            <div id="savoryOther">
                                {
                                    Object.keys(savoryOtherInfo).map(function(key, index) {
                                        if (key === 'message' ){
                                            return <h2>{savoryOtherInfo[key]}</h2>
                                        } else{
                                            var savoryInfo = savoryOtherInfo
                                            if ('option1' in savoryInfo[key]){
                                                return <ItemCard
                                                    section="savory"
                                                    type="other"
                                                    itemKey={key}
                                                    name={savoryInfo[key].name}
                                                    description={savoryInfo[key].description}
                                                    shortIngredients={savoryInfo[key].shortIngredient}
                                                    longIngredients={savoryInfo[key].longIngredient}
                                                    price={savoryInfo[key].price}
                                                    option1={savoryInfo[key].option1}
                                                    changeTheSize={changeSize}
                                                    changeTheOption={changeOption}
                                                    addTheItem={addItem}
                                                    itemName={stateItemName}
                                                    itemPrice={stateItemPrice}
                                                    itemSize={stateItemSize}
                                                    itemOption={stateItemOption}
                                                />
                                            } else {
                                                return <ItemCard
                                                    section="savory"
                                                    type="other"
                                                    itemKey={key}
                                                    name={savoryInfo[key].name}
                                                    description={savoryInfo[key].description}
                                                    shortIngredients={savoryInfo[key].shortIngredient}
                                                    longIngredients={savoryInfo[key].longIngredient}
                                                    price={savoryInfo[key].price}
                                                    changeTheSize={changeSize}
                                                    changeTheOption={changeOption}
                                                    addTheItem={addItem}
                                                    itemName={stateItemName}
                                                    itemPrice={stateItemPrice}
                                                    itemSize={stateItemSize}
                                                    itemOption={stateItemOption}
                                                />
                                            }
                                        }
                                    })
                                }
                            </div>
                        </AccordionPanel>
                    </AccordionItem>
                    
                </div>
                <div id="smallBatchSweet">
                    <h4>Sweet Section:</h4>
                    <AccordionItem className="accordionSection">
                        <AccordionHeader className="sectionHeader" _expanded={{ background: "#5D663D !important", color: "white" }}>
                            <Box flex="1" textAlign="left">
                            <h5>Croissant Based</h5>
                            </Box>
                            <AccordionIcon />
                        </AccordionHeader>
                        <AccordionPanel pb={4} className="itemCardPanel">
                            <div id="savoryCroissantBased">
                                {
                                    Object.keys(sweetCroissantBasedInfo).map(function(key, index) {
                                        var sweetInfo = sweetCroissantBasedInfo
                                        if ('option1' in sweetInfo[key]){
                                            return <ItemCard
                                                section="sweet"
                                                type="croissantBased"
                                                itemKey={key}
                                                name={sweetInfo[key].name}
                                                description={sweetInfo[key].description}
                                                shortIngredients={sweetInfo[key].shortIngredient}
                                                longIngredients={sweetInfo[key].longIngredient}
                                                price={sweetInfo[key].price}
                                                option1={sweetInfo[key].option1}
                                                changeTheSize={changeSize}
                                                changeTheOption={changeOption}
                                                addTheItem={addItem}
                                                itemName={stateItemName}
                                                itemPrice={stateItemPrice}
                                                itemSize={stateItemSize}
                                                itemOption={stateItemOption}
                                            />
                                        } else {
                                            return <ItemCard
                                                section="sweet"
                                                type="croissantBased"
                                                itemKey={key}
                                                name={sweetInfo[key].name}
                                                description={sweetInfo[key].description}
                                                shortIngredients={sweetInfo[key].shortIngredient}
                                                longIngredients={sweetInfo[key].longIngredient}
                                                price={sweetInfo[key].price}
                                                changeTheSize={changeSize}
                                                changeTheOption={changeOption}
                                                addTheItem={addItem}
                                                itemName={stateItemName}
                                                itemPrice={stateItemPrice}
                                                itemSize={stateItemSize}
                                                itemOption={stateItemOption}
                                            />
                                        }
                                    })
                                }
                            </div>
                        </AccordionPanel>
                    </AccordionItem>
                    
                    <AccordionItem className="accordionSection">
                        <AccordionHeader className="sectionHeader" _expanded={{ background: "#5D663D !important", color: "white" }}>
                            <Box flex="1" textAlign="left">
                            <h5>Bread Based</h5>
                            </Box>
                            <AccordionIcon />
                        </AccordionHeader>
                        <AccordionPanel pb={4} className="itemCardPanel">
                            <div id="savoryBreadBased">
                                {
                                    Object.keys(sweetBreadBasedInfo).map(function(key, index) {
                                        var sweetInfo = sweetBreadBasedInfo
                                        if ('option1' in sweetInfo[key]){
                                            return <ItemCard
                                                section="sweet"
                                                type="breadBased"
                                                itemKey={key}
                                                name={sweetInfo[key].name}
                                                description={sweetInfo[key].description}
                                                shortIngredients={sweetInfo[key].shortIngredient}
                                                longIngredients={sweetInfo[key].longIngredient}
                                                price={sweetInfo[key].price}
                                                option1={sweetInfo[key].option1}
                                                changeTheSize={changeSize}
                                                changeTheOption={changeOption}
                                                addTheItem={addItem}
                                                itemName={stateItemName}
                                                itemPrice={stateItemPrice}
                                                itemSize={stateItemSize}
                                                itemOption={stateItemOption}
                                            />
                                        } else {
                                            return <ItemCard
                                                section="sweet"
                                                type="breadBased"
                                                itemKey={key}
                                                name={sweetInfo[key].name}
                                                description={sweetInfo[key].description}
                                                shortIngredients={sweetInfo[key].shortIngredient}
                                                longIngredients={sweetInfo[key].longIngredient}
                                                price={sweetInfo[key].price}
                                                changeTheSize={changeSize}
                                                changeTheOption={changeOption}
                                                addTheItem={addItem}
                                                itemName={stateItemName}
                                                itemPrice={stateItemPrice}
                                                itemSize={stateItemSize}
                                                itemOption={stateItemOption}
                                            />
                                        }
                                    })
                                }
                            </div>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className="accordionSection">
                        <AccordionHeader className="sectionHeader" _expanded={{ background: "#5D663D !important", color: "white" }}>
                            <Box flex="1" textAlign="left">
                            <h5>Other Doughs and Confections</h5> 
                            </Box>
                            <AccordionIcon />
                        </AccordionHeader>
                        <AccordionPanel pb={4} className="itemCardPanel">
                            <div id="sweetOther">
                                {
                                    Object.keys(sweetOtherInfo).map(function(key, index) {
                                        if (key === 'message' ){
                                            return <h2>{sweetOtherInfo[key]}</h2>
                                        } else{
                                            var sweetInfo = sweetOtherInfo
                                            if ('option1' in sweetInfo[key]){
                                                return <ItemCard
                                                    section="sweet"
                                                    type="other"
                                                    itemKey={key}
                                                    name={sweetInfo[key].name}
                                                    description={sweetInfo[key].description}
                                                    shortIngredients={sweetInfo[key].shortIngredient}
                                                    longIngredients={sweetInfo[key].longIngredient}
                                                    price={sweetInfo[key].price}
                                                    option1={sweetInfo[key].option1}
                                                    changeTheSize={changeSize}
                                                    changeTheOption={changeOption}
                                                    addTheItem={addItem}
                                                    itemName={stateItemName}
                                                    itemPrice={stateItemPrice}
                                                    itemSize={stateItemSize}
                                                    itemOption={stateItemOption}
                                                />
                                            } else {
                                                return <ItemCard
                                                    section="sweet"
                                                    type="other"
                                                    itemKey={key}
                                                    name={sweetInfo[key].name}
                                                    description={sweetInfo[key].description}
                                                    shortIngredients={sweetInfo[key].shortIngredient}
                                                    longIngredients={sweetInfo[key].longIngredient}
                                                    price={sweetInfo[key].price}
                                                    changeTheSize={changeSize}
                                                    changeTheOption={changeOption}
                                                    addTheItem={addItem}
                                                    itemName={stateItemName}
                                                    itemPrice={stateItemPrice}
                                                    itemSize={stateItemSize}
                                                    itemOption={stateItemOption}
                                                />
                                            }
                                        }
                                    })
                                }
                            </div>
                        </AccordionPanel>
                    </AccordionItem>
                </div>
                <div id="smallBatchSpecial">
                    <div className="sectionDividerDiv">
                        <img src={SectionDivider} alt="ornate black line divider" className="sectionDivider"/>
                    </div>
                    <h4>Special Order Section:</h4>
                    <h5 id="specialOrderInfo">{bakeryInfo.menu.smallBatch.specialOrder.info}</h5>
                    <AccordionItem className="accordionSection">
                        <AccordionHeader className="sectionHeader" _expanded={{ background: "#5D663D !important", color: "white" }}>
                            <Box flex="1" textAlign="left">
                            <h5>Special Order Items</h5>
                            </Box>
                            <AccordionIcon />
                        </AccordionHeader>
                        <AccordionPanel pb={4} className="itemCardPanel">
                            <div id="specialItems">
                                {
                                    Object.keys(specialItemsInfo).map(function(key, index) {
                                        var specialInfo = specialItemsInfo
                                        if ('option1' in specialInfo[key]){
                                            return <ItemCard
                                                section="specialOrder"
                                                type="items"
                                                itemKey={key}
                                                name={specialInfo[key].name}
                                                description={specialInfo[key].description}
                                                shortIngredients={specialInfo[key].shortIngredient}
                                                longIngredients={specialInfo[key].longIngredient}
                                                price={specialInfo[key].price}
                                                option1={specialInfo[key].option1}
                                                changeTheSize={changeSize}
                                                changeTheOption={changeOption}
                                                addTheItem={addItem}
                                                itemName={stateItemName}
                                                itemPrice={stateItemPrice}
                                                itemSize={stateItemSize}
                                                itemOption={stateItemOption}
                                            />
                                        } else {
                                            return <ItemCard
                                                section="specialOrder"
                                                type="items"
                                                itemKey={key}
                                                name={specialInfo[key].name}
                                                description={specialInfo[key].description}
                                                shortIngredients={specialInfo[key].shortIngredient}
                                                longIngredients={specialInfo[key].longIngredient}
                                                price={specialInfo[key].price}
                                                changeTheSize={changeSize}
                                                changeTheOption={changeOption}
                                                addTheItem={addItem}
                                                itemName={stateItemName}
                                                itemPrice={stateItemPrice}
                                                itemSize={stateItemSize}
                                                itemOption={stateItemOption}
                                            />
                                        }
                                    })
                                }
                            </div>
                        </AccordionPanel>
                    </AccordionItem>
                </div>
            </section>
        );
    }
}

export default SmallBatch;