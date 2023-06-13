import React from 'react'
import ShopHeader from '../components/shop/ShopHeader'
import data from '../data.json'
import Item from '../components/shop/Item'

const Shop = () => {
    // console.log(data)
    return (
        <div className='Shop'>
            <div className='collections'>
                <ShopHeader />
                <div className='products_container'>
                    <h1 id='category'>Products</h1>
                </div>
            </div>
            <div className='items_container'>
                {/* <h1>YOO</h1> */}
                {data.map((item) => {
                    // console.log(item.value)
                    return <Item item={item} />
                })
                }
            </div>
        </div >
    )
}

export default Shop