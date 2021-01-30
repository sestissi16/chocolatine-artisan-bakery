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
    render() {
        const { changeSize, changeOption, changeAmount, addItem, stateItemName, stateItemOption, stateItemPrice, stateItemSize, stateItemAmount } = this.props
        var sizingInfo = bakeryInfo.menu.smallBatch.sizing
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
                <div id="menuStepsSection">
                    <div id="menuStepsRow">
                        <div className="menuStep" id="menuStep1">
                            <h2 className="menuStepTitle">Step 1</h2>
                            <h4 className="menuStepDescript">Select your item from the categories below</h4>
                        </div>
                        <div className="menuStep">
                            <h2 className="menuStepTitle">Step 2</h2>
                            <h4 className="menuStepDescript">Select the size you want, select the option you want, and select the amount you want</h4>
                        </div>
                        <div className="menuStep">
                            <h2 className="menuStepTitle">Step 3</h2>
                            <h4 className="menuStepDescript">Go to your cart to place your order</h4>
                        </div>
                    </div>
                </div>
                <h2 id="smallbatchTitle">Small Batch Options:</h2>
                <div className="sectionDividerDiv">
                    <img src={SectionDivider} alt="ornate black line divider" className="sectionDivider"/>
                </div>
                <div id="smallBatchInfo">
                    <h3 id="orderInfoTitle">Ordering Info</h3>
                    <ul id="orderInfoList">
                        <h4><li className="orderInfoItem">{orderInfo.line1}</li></h4> 
                        <ul id="orderSizingList">
                            <h4><li className="orderInfoItem">Small: {sizingInfo.sm}</li></h4>
                            <h4><li className="orderInfoItem">Medium: {sizingInfo.med}</li></h4>
                            <h4><li className="orderInfoItem">Large: {sizingInfo.lg}</li></h4>
                        </ul>
                        <h4><li className="orderInfoItem">{orderInfo.line2}</li></h4>
                        
                        <h4><li className="orderInfoItem">{orderInfo.line3}</li></h4>
                    </ul>
                </div>
                <div className="sectionDividerDiv">
                    <img src={SectionDivider} alt="ornate black line divider" className="sectionDivider"/>
                </div>
                <div id="smallBatchSavory">
                    <h3 className="sectionTitle">Savory Section:</h3>
                    <AccordionItem className="accordionSection">
                        <AccordionHeader className="sectionHeader" _expanded={{ background: "#5D663D !important", color: "white" }}>
                            <Box flex="1" textAlign="left">
                            <h3>Croissant Based</h3>
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
                                                pack={savoryInfo[key].pack}
                                                description={savoryInfo[key].description}
                                                shortIngredients={savoryInfo[key].shortIngredient}
                                                longIngredients={savoryInfo[key].longIngredient}
                                                price={savoryInfo[key].price}
                                                option1={savoryInfo[key].option1}
                                                changeTheSize={changeSize}
                                                changeTheOption={changeOption}
                                                changeTheAmount={changeAmount}
                                                addTheItem={addItem}
                                                itemName={stateItemName}
                                                itemPrice={stateItemPrice}
                                                itemSize={stateItemSize}
                                                itemOption={stateItemOption}
                                                itemAmount={stateItemAmount}
                                            />
                                        } else {
                                            return <ItemCard
                                                section="savory"
                                                type="croissantBased"
                                                itemKey={key}
                                                name={savoryInfo[key].name}
                                                pack={savoryInfo[key].pack}
                                                description={savoryInfo[key].description}
                                                shortIngredients={savoryInfo[key].shortIngredient}
                                                longIngredients={savoryInfo[key].longIngredient}
                                                price={savoryInfo[key].price}
                                                changeTheSize={changeSize}
                                                changeTheOption={changeOption}
                                                changeTheAmount={changeAmount}
                                                addTheItem={addItem}
                                                itemName={stateItemName}
                                                itemPrice={stateItemPrice}
                                                itemSize={stateItemSize}
                                                itemOption={stateItemOption}
                                                itemAmount={stateItemAmount}
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
                            <h3>Bread Based</h3>
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
                                                pack={savoryInfo[key].pack}
                                                description={savoryInfo[key].description}
                                                shortIngredients={savoryInfo[key].shortIngredient}
                                                longIngredients={savoryInfo[key].longIngredient}
                                                price={savoryInfo[key].price}
                                                option1={savoryInfo[key].option1}
                                                changeTheSize={changeSize}
                                                changeTheOption={changeOption}
                                                changeTheAmount={changeAmount}
                                                addTheItem={addItem}
                                                itemName={stateItemName}
                                                itemPrice={stateItemPrice}
                                                itemSize={stateItemSize}
                                                itemOption={stateItemOption}
                                                itemAmount={stateItemAmount}
                                            />
                                        } else {
                                            return <ItemCard
                                                section="savory"
                                                type="breadBased"
                                                itemKey={key}
                                                name={savoryInfo[key].name}
                                                pack={savoryInfo[key].pack}
                                                description={savoryInfo[key].description}
                                                shortIngredients={savoryInfo[key].shortIngredient}
                                                longIngredients={savoryInfo[key].longIngredient}
                                                price={savoryInfo[key].price}
                                                changeTheSize={changeSize}
                                                changeTheOption={changeOption}
                                                changeTheAmount={changeAmount}
                                                addTheItem={addItem}
                                                itemName={stateItemName}
                                                itemPrice={stateItemPrice}
                                                itemSize={stateItemSize}
                                                itemOption={stateItemOption}
                                                itemAmount={stateItemAmount}
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
                            <h3>Other Doughs and Confections</h3> 
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
                                                    pack={savoryInfo[key].pack}
                                                    description={savoryInfo[key].description}
                                                    shortIngredients={savoryInfo[key].shortIngredient}
                                                    longIngredients={savoryInfo[key].longIngredient}
                                                    price={savoryInfo[key].price}
                                                    option1={savoryInfo[key].option1}
                                                    changeTheSize={changeSize}
                                                    changeTheOption={changeOption}
                                                    changeTheAmount={changeAmount}
                                                    addTheItem={addItem}
                                                    itemName={stateItemName}
                                                    itemPrice={stateItemPrice}
                                                    itemSize={stateItemSize}
                                                    itemOption={stateItemOption}
                                                    itemAmount={stateItemAmount}
                                                />
                                            } else {
                                                return <ItemCard
                                                    section="savory"
                                                    type="other"
                                                    itemKey={key}
                                                    name={savoryInfo[key].name}
                                                    pack={savoryInfo[key].pack}
                                                    description={savoryInfo[key].description}
                                                    shortIngredients={savoryInfo[key].shortIngredient}
                                                    longIngredients={savoryInfo[key].longIngredient}
                                                    price={savoryInfo[key].price}
                                                    changeTheSize={changeSize}
                                                    changeTheOption={changeOption}
                                                    changeTheAmount={changeAmount}
                                                    addTheItem={addItem}
                                                    itemName={stateItemName}
                                                    itemPrice={stateItemPrice}
                                                    itemSize={stateItemSize}
                                                    itemOption={stateItemOption}
                                                    itemAmount={stateItemAmount}
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
                    <h3 className="sectionTitle">Sweet Section:</h3>
                    <AccordionItem className="accordionSection">
                        <AccordionHeader className="sectionHeader" _expanded={{ background: "#5D663D !important", color: "white" }}>
                            <Box flex="1" textAlign="left">
                            <h3>Croissant Based</h3>
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
                                                pack={sweetInfo[key].pack}
                                                description={sweetInfo[key].description}
                                                shortIngredients={sweetInfo[key].shortIngredient}
                                                longIngredients={sweetInfo[key].longIngredient}
                                                price={sweetInfo[key].price}
                                                option1={sweetInfo[key].option1}
                                                changeTheSize={changeSize}
                                                changeTheOption={changeOption}
                                                changeTheAmount={changeAmount}
                                                addTheItem={addItem}
                                                itemName={stateItemName}
                                                itemPrice={stateItemPrice}
                                                itemSize={stateItemSize}
                                                itemOption={stateItemOption}
                                                itemAmount={stateItemAmount}
                                            />
                                        } else {
                                            return <ItemCard
                                                section="sweet"
                                                type="croissantBased"
                                                itemKey={key}
                                                name={sweetInfo[key].name}
                                                pack={sweetInfo[key].pack}
                                                description={sweetInfo[key].description}
                                                shortIngredients={sweetInfo[key].shortIngredient}
                                                longIngredients={sweetInfo[key].longIngredient}
                                                price={sweetInfo[key].price}
                                                changeTheSize={changeSize}
                                                changeTheOption={changeOption}
                                                changeTheAmount={changeAmount}
                                                addTheItem={addItem}
                                                itemName={stateItemName}
                                                itemPrice={stateItemPrice}
                                                itemSize={stateItemSize}
                                                itemOption={stateItemOption}
                                                itemAmount={stateItemAmount}
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
                            <h3>Bread Based</h3>
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
                                                pack={sweetInfo[key].pack}
                                                description={sweetInfo[key].description}
                                                shortIngredients={sweetInfo[key].shortIngredient}
                                                longIngredients={sweetInfo[key].longIngredient}
                                                price={sweetInfo[key].price}
                                                option1={sweetInfo[key].option1}
                                                changeTheSize={changeSize}
                                                changeTheOption={changeOption}
                                                changeTheAmount={changeAmount}
                                                addTheItem={addItem}
                                                itemName={stateItemName}
                                                itemPrice={stateItemPrice}
                                                itemSize={stateItemSize}
                                                itemOption={stateItemOption}
                                                itemAmount={stateItemAmount}
                                            />
                                        } else {
                                            return <ItemCard
                                                section="sweet"
                                                type="breadBased"
                                                itemKey={key}
                                                name={sweetInfo[key].name}
                                                pack={sweetInfo[key].pack}
                                                description={sweetInfo[key].description}
                                                shortIngredients={sweetInfo[key].shortIngredient}
                                                longIngredients={sweetInfo[key].longIngredient}
                                                price={sweetInfo[key].price}
                                                changeTheSize={changeSize}
                                                changeTheOption={changeOption}
                                                changeTheAmount={changeAmount}
                                                addTheItem={addItem}
                                                itemName={stateItemName}
                                                itemPrice={stateItemPrice}
                                                itemSize={stateItemSize}
                                                itemOption={stateItemOption}
                                                itemAmount={stateItemAmount}
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
                            <h3>Other Doughs and Confections</h3> 
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
                                                    pack={sweetInfo[key].pack}
                                                    description={sweetInfo[key].description}
                                                    shortIngredients={sweetInfo[key].shortIngredient}
                                                    longIngredients={sweetInfo[key].longIngredient}
                                                    price={sweetInfo[key].price}
                                                    option1={sweetInfo[key].option1}
                                                    changeTheSize={changeSize}
                                                    changeTheOption={changeOption}
                                                    changeTheAmount={changeAmount}
                                                    addTheItem={addItem}
                                                    itemName={stateItemName}
                                                    itemPrice={stateItemPrice}
                                                    itemSize={stateItemSize}
                                                    itemOption={stateItemOption}
                                                    itemAmount={stateItemAmount}
                                                />
                                            } else {
                                                return <ItemCard
                                                    section="sweet"
                                                    type="other"
                                                    itemKey={key}
                                                    name={sweetInfo[key].name}
                                                    pack={sweetInfo[key].pack}
                                                    description={sweetInfo[key].description}
                                                    shortIngredients={sweetInfo[key].shortIngredient}
                                                    longIngredients={sweetInfo[key].longIngredient}
                                                    price={sweetInfo[key].price}
                                                    changeTheSize={changeSize}
                                                    changeTheOption={changeOption}
                                                    changeTheAmount={changeAmount}
                                                    addTheItem={addItem}
                                                    itemName={stateItemName}
                                                    itemPrice={stateItemPrice}
                                                    itemSize={stateItemSize}
                                                    itemOption={stateItemOption}
                                                    itemAmount={stateItemAmount}
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
                    <h3 className="sectionTitle">Special Order Section:</h3>
                    <h4 id="specialOrderInfo">{bakeryInfo.menu.smallBatch.specialOrder.info}</h4>
                    <AccordionItem className="accordionSection">
                        <AccordionHeader className="sectionHeader" _expanded={{ background: "#5D663D !important", color: "white" }}>
                            <Box flex="1" textAlign="left">
                            <h3>Special Order Items</h3>
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
                                                pack={specialInfo[key].pack}
                                                description={specialInfo[key].description}
                                                shortIngredients={specialInfo[key].shortIngredient}
                                                longIngredients={specialInfo[key].longIngredient}
                                                price={specialInfo[key].price}
                                                option1={specialInfo[key].option1}
                                                changeTheSize={changeSize}
                                                changeTheOption={changeOption}
                                                changeTheAmount={changeAmount}
                                                addTheItem={addItem}
                                                itemName={stateItemName}
                                                itemPrice={stateItemPrice}
                                                itemSize={stateItemSize}
                                                itemOption={stateItemOption}
                                                itemAmount={stateItemAmount}
                                            />
                                        } else {
                                            return <ItemCard
                                                section="specialOrder"
                                                type="items"
                                                itemKey={key}
                                                name={specialInfo[key].name}
                                                pack={specialInfo[key].pack}
                                                description={specialInfo[key].description}
                                                shortIngredients={specialInfo[key].shortIngredient}
                                                longIngredients={specialInfo[key].longIngredient}
                                                price={specialInfo[key].price}
                                                changeTheSize={changeSize}
                                                changeTheOption={changeOption}
                                                changeTheAmount={changeAmount}
                                                addTheItem={addItem}
                                                itemName={stateItemName}
                                                itemPrice={stateItemPrice}
                                                itemSize={stateItemSize}
                                                itemOption={stateItemOption}
                                                itemAmount={stateItemAmount}
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