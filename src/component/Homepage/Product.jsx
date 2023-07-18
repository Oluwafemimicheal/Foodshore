import React from 'react';
import { Item } from '../style';
import Items from './Items';
import data from '../../../data'

const Product = () => {

    const card = data.products.map(item =>{
            return(
                <Items
                    key={item.id}
                    img={item.productImage}
                    title={item.productName}
                    tag={item.price}
                />
            )
    })

    return (
      <Item>
        {card}
      </Item>
    
    );
}

export default Product;
