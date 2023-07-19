import React from 'react';

const Card = ({img, title, off}) => {
    return (
        <div>
            <div className="card">
                <div className="image">
                    <img src={img} alt="" />
                </div>
                <div className="text">
                    <h1>{title}</h1>
                    <small>{off}</small>
                    <a href="#" className='btn'>Order</a>
                </div>
            </div>
        </div>
    );
}

export default Card;
