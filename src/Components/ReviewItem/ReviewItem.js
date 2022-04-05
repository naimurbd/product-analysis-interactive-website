import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const { name, compliments, rating } = props.product;
    return (
        <div className='review-container'>
            <h2>  {name}</h2>
            <h4>{compliments}</h4>
            <h3> Rating: {rating}</h3>
        </div>
    );
};

export default ReviewItem;