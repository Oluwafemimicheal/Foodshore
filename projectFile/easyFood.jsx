import React from 'react';
import {Header, Div, DivColor, Input} from '../src/component/style'
import {BsSearch} from 'react-icons/bs'
import {BiSolidDownArrow, BiSolidCart} from 'react-icons/bi'


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
                    <div className="search-items">
                        <select name="" id="">
                            <option value="Food-bulk">All</option>
                            <option value="Food-bulk">Food Bulk</option>
                            <option value="Food-bulk">Food Middle</option>
                            <option value="Food-bulk">Food Self</option>
                            <option value="Food-bulk">Food All item</option>
                            <option value="Food-bulk">Food Support Self</option>
                            <option value="Food-bulk">Food Kitchen Light</option>
                        </select>
                        <Input type="text" placeholder='Search' />
                        <BsSearch className='search-icon'/>
                    </div>
                    <span>
                        <h4>Hello,sign in</h4>
                        <h3>Account & Lists <BiSolidDownArrow/></h3>
                    </span>
                    <span>
                        <h4>Return</h4>
                        <h3>& Orders <BiSolidDownArrow/></h3>
                    </span>
                    <span className='flex'>
                       <BiSolidCart className='fs-1'/>
                        <h3>Card</h3>
                    </span>
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
