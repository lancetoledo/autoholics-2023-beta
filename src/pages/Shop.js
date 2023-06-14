import React from 'react'
import ShopHeader from '../components/shop/ShopHeader'
import data from '../data.json'
import Item from '../components/shop/Item'
import Category from '../components/shop/Category'


const Shop = () => {
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
            <div className='items_container'>
                {data.map((item) => {
                    return <Item item={item} />
                })
                }
            </div>
        </div >
    )
}

export default Shop