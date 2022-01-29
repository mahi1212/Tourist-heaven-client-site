import React from 'react';
import './Banner.css'
import img from '../../../Images/banner.jpg'
const Banner = () => {
    return (
        <div className='banner-img mx-auto'>
            <img src={img} alt="" />
            <div className='banner-description'>
                <h2>Live life ones, live like an emperor </h2>
                <h4 className='text-dark text-center'>We provide the best services</h4>
            </div>
        </div>
    );
};
export default Banner;