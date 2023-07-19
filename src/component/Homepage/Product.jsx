import React from 'react';
import data from '../../../data'
import Card from './card';
import { Item } from '../style';


const Product = () => {
    const items = data.products.map((item)=>{
        const {productImage, productName, percentage, id} = item
        return (
            <Card img={productImage} title={productName} off={percentage} key={id}/>
        )
    })
    return (
        <Item>
            {!items.length ? "No Project" : items}
        </Item>
    );
}

export default Product;
