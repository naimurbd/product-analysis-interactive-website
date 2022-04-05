import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const { name, compliments, rating } = props.product;
    return (
        <div className='review-container'>
            <h2> Name: {name}</h2>
            <h3>{compliments}</h3>
            <h4> Rating: {rating}</h4>
        </div>
    );
};

export default ReviewItem;