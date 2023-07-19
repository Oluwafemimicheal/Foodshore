import React from 'react';
import data from '../../../data'
import Card from './card';


const Product = () => {
    let datas = [...data.products]
    const items = datas.map((item)=>{
        return (
            <Card
            key={item.id}
            img={item.productImage}
            title={item.productName}
            off={item.percentage}
            />
        )
    })
    return (
        <div>
            {items}
        </div>
    );
}

export default Product;
