import React from 'react';
import {Header, Div, DivColor, Input} from '../src/component/style'
import {BsSearch} from 'react-icons/bs'
import {BiSolidDownArrow, BiSolidCart} from 'react-icons/bi'
import {ImLocation2} from 'react-icons/im'



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
                        <h4><ImLocation2/>Nigeria</h4>
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
                        <h5>Hello,sign in</h5>
                        <h4>Account & Lists <BiSolidDownArrow className='fs-1'/></h4>
                    </span>
                    <span>
                        <h5>Return</h5>
                        <h4>& Orders <BiSolidDownArrow className='fs-1'/></h4>
                    </span>
                    <span className='flex'>
                       <BiSolidCart className='fs-2'/>
                        <h4 className='pt-2'>Card</h4>
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
                    <h4>Shop great deals now</h4>
                </DivColor>
            </Header>
        </>
    );
}

export default EasyFood;
