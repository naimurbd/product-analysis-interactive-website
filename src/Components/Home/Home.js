import React from 'react';
import './Home.css'
import useProducts from '../../hooks/useProducts';
import ReviewItem from '../ReviewItem/ReviewItem';

const Home = () => {
    const [products, setProducts] = useProducts();
    return (
        <div>
            <div className='home-container'>
                <div className='article'>
                    <h1>Discover daily, the best new books</h1>
                    <p>Get early access to fresh indie books and help decide on the bestselling stories of tomorrow.</p>
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBQI2AbHIorx3HXwaHcFtiRFde9o2JV6PDMg&usqp=CAU" alt="" />

                </div>

            </div>
            <div className='customer-corner'>
                <h2>Customer Reviews</h2>
                {
                    products.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                    ></ReviewItem>)
                }
            </div>
            <div className='btn'><button>See All Reviews</button></div>
        </div>


    );


};







export default Home;