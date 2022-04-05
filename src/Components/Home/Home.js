import React from 'react';
import './Home.css'
import useProducts from '../../hooks/useProducts';
import ReviewItem from '../ReviewItem/ReviewItem';
import { Link } from 'react-router-dom';

const Home = () => {
    const [products, setProducts] = useProducts();
    return (
        <div>
            <div className='home-container'>
                <div className='article'>
                    <h1 className='header'>Discover daily, the best new books</h1>
                    <p>Get early access to fresh indie books and help decide on the bestselling stories of tomorrow. <br />
                        <b>Welcome to Bookshop!</b> <br />
                        Bookshop is an online bookstore with a mission to financially support local, independent bookstores.
                        We believe that bookstores are essential to a healthy culture.
                    </p>
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBQI2AbHIorx3HXwaHcFtiRFde9o2JV6PDMg&usqp=CAU" alt="" />

                </div>

            </div>
            <div className='customer-corner'>
                <h2>Customer Reviews</h2>
                {

                    products.slice(0, 3).map(product => <ReviewItem
                        key={product.id}
                        product={product}
                    ></ReviewItem>)

                }
            </div>
            <div className='btn'>
                <Link to={'/Reviews'}>See All Reviews</Link>
            </div>
        </div>


    );


};







export default Home;