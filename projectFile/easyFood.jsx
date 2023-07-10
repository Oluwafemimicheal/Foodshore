import React from 'react';
import {Header, Div, DivColor, Input} from '../src/component/style'
import {BsSearch} from 'react-icons/bs'


const EasyFood = () => {
    return (
        <>
            <Header>
                <Div>
                    <div className="logo">
                        <h1>easyFood</h1>
                    </div>
                    <span>
                        <p>Delivery to</p>
                        <small>Nigeria</small>
                    </span>
                    <div className="search-items flex jc gap-2">
                        <select name="" id="">
                            <option value="Food-bulk">All</option>
                            <option value="Food-bulk">Food Bulk</option>
                            <option value="Food-bulk">Food Middle</option>
                            <option value="Food-bulk">Food Self</option>
                            <option value="Food-bulk">Food All item</option>
                            <option value="Food-bulk">Food Support Self</option>
                            <option value="Food-bulk">Food Kitchen Light</option>
                        </select>
                        <Input type="text" />
                        <BsSearch/>
                    </div>
                </Div>
                <DivColor>
                    <ul className='flex gap-3 ptd'>
                        <li><a className='ac' href="#">All</a></li>
                        <li><a className='ac' href="#">Today;s Deals</a></li>
                        <li><a className='ac' href="#">Customer Service</a></li>
                        <li><a className='ac' href="#">Registry</a></li>
                        <li><a className='ac' href="#">Sell</a></li>
                    </ul>
                </DivColor>
            </Header>
        </>
    );
}

export default EasyFood;
