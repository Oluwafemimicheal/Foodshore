import React from 'react';
import Card from './card';
import data from '../../../data'


const Product = () => {
    return (
        <div>
            {data.products.map((item)=>{
                const {productName, productImage, percentage, id}=item
                <Card img={productImage} title={productName} off={percentage} key={id}/>
            })
            }
        </div>
    );
}

export default Product;
