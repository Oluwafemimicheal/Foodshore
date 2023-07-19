import React from 'react';
import {TbCurrencyNaira} from 'react-icons/tb'

const Card = ({img, title, off, price,  marketFrom}) => {
    return (
        <div>
            <div className="card">
                <div className="image">
                    <img src={img} alt="" />
                </div>
                <div className="text">
                    <h1>{title}</h1>
                    <h4><TbCurrencyNaira/>{price}</h4>
                    <p><b>Market:</b> {marketFrom}</p>
                    <a href="#" className='btn'>Order</a>
                </div>
                <small>{off}</small>
            </div>
        </div>
    );
}

export default Card;
