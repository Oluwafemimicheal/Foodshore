import React from 'react';

const Items = (img, text, tag) => {
    return (
       <>
        <div className="card">
            <div className="card-image">
                <img src={img} />
            </div>
            <div className="card-text">
                <h1>{text}</h1>
            </div>
            <div className="tag">
                <small>{tag}</small>
            </div>
        </div>
        
       </>
    );
}

export default Items;
