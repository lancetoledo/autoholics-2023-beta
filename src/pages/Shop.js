import React from 'react'
import Header from '../components/Header'
import data from '../data.json'

const Shop = () => {
    // console.log(data)
    return (
        <div className='Shop'>
            <div className='collections'>
                <Header />
            </div>
            <div className='items-container'>
                {/* <h1>YOO</h1> */}
                {data.map((item) => {
                    // console.log(item.value)
                    return <div className='item' key={item.id}>
                        <img id='item_image' src={item.image} />
                        <div className='item_info'>
                            <p id='value'>{item.value}</p>
                            <p>${item.price?.toFixed(2)}</p>
                        </div>
                    </div>
                })}
            </div>
        </div >
    )
}

export default Shop