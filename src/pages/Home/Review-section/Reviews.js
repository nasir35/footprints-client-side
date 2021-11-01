
import { Splide, SplideSlide } from '@splidejs/react-splide';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect( () => {
        fetch('https://footprints-node-server.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[reviews])
    return (
        <div className="text-center bg-gray-100 pt-5 pb-8">
            <div className="text-center my-5">
                <h2 className="inline-block sm:border-b-4 border-b-2 sm:px-4 px-2 border-coral rounded text-stromboli font-qsand md:font-bold font-medium md:text-2xl text-xl">What Traveller says About Us</h2>
            </div>
            {reviews.length==0 ?
            <div class="flex justify-center items-center py-6">
                <div className="animate-bounce text-stromboli mr-5 font-qsand font-medium">loading...</div>
                <div class=" animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-coral"></div>
            </div>
            :
                <Splide className="mx-auto pb-7" options={{
                type: 'loop',
                rewind : true,
                perPage : 3,
                breakpoints : {
                    540: {
                        perPage : 1
                    },
                    900 : {
                        perPage : 2
                    }
                },
                arrows : 'slider',
                resetProgress : false,
                perMove : 1,
                focus : 'center',
                width: '90vw',
                gap : 12,
            }}>
                {
                    reviews.map(review => <SplideSlide><Review reviewObj={review}></Review></SplideSlide>)
                }
            </Splide>}
            <Link to="give-a-review"><button className="mx-auto block bg-coral hover:bg-yellow-600 text-white px-10 py-1 rounded">Give a Review</button></Link>
        </div>
    );
};

export default Reviews;