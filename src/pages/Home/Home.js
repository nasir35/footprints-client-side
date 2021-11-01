import React from 'react';
import Banner from './Banner-section/Banner';
import Blog from './Blog-section/Blog';
import Packages from './Packages-section/Packages';
import Reviews from './Review-section/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Packages></Packages>
            <Blog></Blog>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;