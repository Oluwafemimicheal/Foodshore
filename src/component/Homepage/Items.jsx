import React from 'react';
import data from '../../../data'

const Items = () => {
    let item = [...data.products]
    
    let productItems = item.map((item)=>{

        const {productImage, productName, price} = item
        return`
        <div className="card">
        <div className="card-image">
            <img src=${productImage} />
        </div>
        <div className="card-text">
            <h1>${productName}</h1>
        </div>
        <div className="tag">
            <small>${price}</small>
        </div>
    </div>
        `
    })

    let items = productItems.join('')

    return (
       <>
        {items}
        
       </>
    );
}

export default Items;
