import React from 'react'

const Item = ({ item }) => {
    return (
        <div div className='item' key={item.id}>
            <img id='item_image' src={item.image} />
            <div className='item_info'>
                <p id='value'>{item.value}</p>
                <p>${item.price?.toFixed(2)}</p>
            </div>
        </div>
    )
}

export default Item