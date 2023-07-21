import React from 'react';
import data from '../../../data'
import Card from './card';
import { Item } from '../style';


const Product = () => {
    const items = data.products.map((item)=>{
        const {productImage, productName, percentage,price,  marketFrom, id} = item
        return (
            <Card img={productImage} title={productName} off={percentage} price={price}  marketFrom={marketFrom} key={id}/>
        )
    })
    const familySection = data.familyPackage.map((item)=>{
        const {productImage, productName, percentage,price,  marketFrom, id} = item
        return(
            <Card img={productImage} title={productName} off={!percentage.length ? '' : percentage} price={price}  marketFrom={marketFrom} key={id}/>
        )
    })
    const singleSection = data.familyPackage.map((item)=>{
        const {productImage, productName, percentage,price,  marketFrom, id} = item
        return(
            <Card img={productImage} title={productName} off={!percentage.length ? '' : percentage} price={price}  marketFrom={marketFrom} key={id}/>
        )
    })
    const lightSection = data.familyPackage.map((item)=>{
        const {productImage, productName, percentage,price,  marketFrom, id} = item
        return(
            <Card img={productImage} title={productName} off={!percentage.length ? '' : percentage} price={price}  marketFrom={marketFrom} key={id}/>
        )
    });

    const frozenSection = data.familyPackage.map((item)=>{
        const {productImage, productName, percentage,price,  marketFrom, id} = item
        return(
            <Card img={productImage} title={productName} off={!percentage.length ? '' : percentage} price={price}  marketFrom={marketFrom} key={id}/>
        )
    })
    return (
        <Item>
            {!items.length ? "No Project" : items}
            <div className="package-section">
                <h3>Family Packages</h3>
                <div className="package-item flex">
                {!familySection.length ? "No Family Package" : familySection}
                </div>
            </div>
            <div className="package-section">
                <h3>Single Man Packages</h3>
                <div className="package-item flex">
                {!singleSection.length ? "No Family Package" : singleSection}
                </div>
            </div>
            <div className="package-section">
                <h3>Light food Packages</h3>
                <div className="package-item flex">
                {!lightSection.length ? "No Family Package" : lightSection}
                </div>
            </div>
            <div className="package-section">
                <h3>Freezing Food </h3>
                <div className="package-item flex">
                {!frozenSection.length ? "No Family Package" : frozenSection}
                </div>
            </div>
        </Item>
    );
}

export default Product;
