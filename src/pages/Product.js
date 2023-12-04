import React from 'react'
import ProductHeader from '../components/product/ProductHeader'
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import toast, { Toaster } from 'react-hot-toast';
import * as Scroll from 'react-scroll';
import { AiOutlineUser } from 'react-icons/ai';
import { IoBagHandleOutline } from 'react-icons/io5';
import data from '../data.json'


function Product() {
    console.log(data)
    return (
        <div className='Product'>
            <div className='nav_container'>
                <Header />
            </div>
            <div className='content'>
                <img src={data[0].image} className='box_1' />
                <div className='box_2'>
                    <div className='product_name_wrapper'>
                        <h1>AUTOHOLICS HOODIE</h1>
                    </div>
                    <div className='price'>
                        <h1>$64.99</h1>
                    </div>
                    <div className='product_add_form'>
                        <p id="size">Size</p>
                        <div className='swatch_attributes'>
                            <div className='swatch'>S</div>
                            <div className='swatch'>M</div>
                            <div className='swatch'>L</div>
                            <div className='swatch'>XL</div>
                        </div>
                        <h4 id='size_chart'>SIZE CHART</h4>
                        <span>Quantity</span>
                        <div className='actions'>
                            <div className='quantity_control'>
                                <div className='switch'>-</div>
                                <div id='qtn'>1</div>
                                <div className='switch'>+</div>
                            </div>
                            <div className='add_to_cart_btn'>
                                <h4>ADD TO CART</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product