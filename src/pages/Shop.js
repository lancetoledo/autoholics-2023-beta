import React from 'react'
import { useState, useEffect } from 'react';
import ShopHeader from '../components/shop/ShopHeader'
import data from '../data.json'
import Item from '../components/shop/Item'
import Category from '../components/shop/Category'
import { RiArrowDropDownLine } from "react-icons/ri"


const Shop = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Alphabetically, A-Z');
    const [filteredData, setFilteredData] = useState(data);

    const toggleDropdown = () => {
        console.log("CLICKED?")
        setDropdownOpen(!dropdownOpen);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setDropdownOpen(false);
    };

    useEffect(() => {
        if (selectedOption === 'Price, low to high') {
            const sortedData = [...data].sort((a, b) => a.price - b.price);
            setFilteredData(sortedData);
        } else if (selectedOption === 'Price, high to low') {
            const sortedData = [...data].sort((a, b) => b.price - a.price);
            setFilteredData(sortedData);
        } else if (selectedOption === 'Alphabetically, A-Z') {
            const sortedData = [...data].sort((a, b) => a.value.localeCompare(b.value));
            setFilteredData(sortedData)
        } else if (selectedOption === 'Alphabetically, Z-A') {
            const sortedData = [...data].sort((a, b) => b.value.localeCompare(a.value));
            setFilteredData(sortedData)
        } else {
            setFilteredData(data);
        }
    }, [selectedOption]);

    let items = [
        {
            "id": 0,
            "value": "Autoholics T-shirt",
            "image": "https://img.freepik.com/premium-photo/front-view-black-hoodie-isolated-white-background_236836-22582.jpg",
            "label": "ALL PRODUCTS",
            "price": 60,

        },
        {
            "id": 0,
            "value": "Autoholics T-shirt",
            "image": "https://ae01.alicdn.com/kf/S4ed5d1c0bb03415da3d6555113f70302c/Classic-1972-Original-49th-Birthday-T-Shirt-Men-White-Background-Humorous-Cotton-Tees-Short-Sleeve-T.jpg",
            "label": "CLOTHING",
            "price": 60,

        },
        {
            "id": 0,
            "value": "Autoholics T-shirt",
            "image": "https://t3.ftcdn.net/jpg/03/45/68/14/360_F_345681447_u9iTYWxDayaObHGZqv259Ew1ZHti5WWp.jpg",
            "label": "HATS",
            "price": 60,
        },
        {
            "id": 0,
            "value": "Autoholics T-shirt",
            "image": "https://a.1stdibscdn.com/the-louis-vuitton-x-supreme-keychain-features-louis-vuittons-red-signature-for-sale/22569652/v_161736921655800448864/v_16173692_1655800449132_bg_processed.jpg",
            "label": "ACCESSORIES",
            "price": 60,

        },
        {
            "id": 0,
            "value": "Autoholics T-shirt",
            "image": "https://sothebys-md.brightspotcdn.com/dims4/default/a160def/2147483647/strip/true/crop/1569x2000+0+0/resize/2048x2611!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fmedia-desk%2F87%2Fea%2Fd2f7a01f4c488f60209a0802f967%2F383n10395-bn66n.jpg",
            "label": "SALE",
            "price": 60,

        },
    ]


    return (
        <div className='Shop'>
            <div className='collections'>
                <ShopHeader />
                <div className='products_container'>
                    <h1 id='category'>Products</h1>
                    <div className='categories'>
                        <Category category={items[0]} />
                        <Category category={items[1]} />
                        <Category category={items[2]} />
                        <Category category={items[3]} />
                        <Category category={items[4]} />
                    </div>
                </div>
            </div>
            <div className='sort_container'>
                <p>Sort By:</p>
                <div className='filter' onClick={toggleDropdown}>
                    <p>{selectedOption}</p>
                    <RiArrowDropDownLine className='dropdown_arrow' />
                    {dropdownOpen && (
                        <div className='dropdown_options'>
                            {/* Add your dropdown options here */}
                            <p onClick={() => handleOptionSelect('Alphabetically, A-Z')}>Alphabetically, A-Z</p>
                            <p onClick={() => handleOptionSelect('Alphabetically, Z-A')}>Alphabetically, Z-A</p>
                            <p onClick={() => handleOptionSelect('Price, low to high')}>Price, low to high</p>
                            <p onClick={() => handleOptionSelect('Price, high to low')}>Price, high to low</p>
                        </div>
                    )}
                </div>
                <p>{data.length} products</p>
            </div>
            <div className='items_container'>
                {filteredData.map((item) => {
                    return <Item item={item} />
                })
                }
            </div>
        </div >
    )
}

export default Shop