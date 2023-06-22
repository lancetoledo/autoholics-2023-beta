import React from 'react';
import { FaStar } from 'react-icons/fa';

const Item = ({ item }) => {
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < item.stars; i++) {
            stars.push(<FaStar key={i} className="star-icon" color="black" />);
        }
        return stars;
    };

    return (
        <div className='item' key={item.id}>
            <img id='item_image' src={item.image} alt={item.value} />
            <div className='item_info'>
                <p id='value'>{item.value}</p>
                <div className='stars'>{renderStars()}</div>
                <p>${item.price?.toFixed(2)}</p>
            </div>
        </div>
    );
};
// nice
export default Item; 