import React from 'react';
import data from '../../../data'

const Card = () => {
    return (
        <div>
            <div className="card">
                {data.products.map((item)=>{
                    return(
                        <div>
                            <div className="image">
                                <img src={item.productImage} alt="" />
                            </div>
                            <div className="text">
                                <h1>{item.productName}</h1>
                                <small>{item.percentage}</small>
                                <a href="#" className='btn'>Order</a>
                            </div>
                        </div>
                    )
                })
                }
               
            </div>
        </div>
    );
}

export default Card;
