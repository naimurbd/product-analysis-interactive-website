import React from 'react';
import useProducts from '../../hooks/useProducts';
import ReviewItem from '../ReviewItem/ReviewItem';

const Reviews = () => {
    const [products, setProducts] = useProducts();
    return (
        <div>
            {
                products.map(product => <ReviewItem
                    key={product.id}
                    product={product}
                ></ReviewItem>)
            }
        </div>
    );
};

export default Reviews;