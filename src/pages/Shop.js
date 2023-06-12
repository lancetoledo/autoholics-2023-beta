import React from 'react'
import Header from '../components/Header'
import data from '../data.json'

const Shop = () => {
    console.log(data, "YOOO")
    return (
        <div className='Shop'>
            <div className='collections'>
                <Header />
            </div>
            <div className='items'>

            </div>
        </div>
    )
}

export default Shop