import React from 'react';
import './HomePage.css'
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import guide from '../../../Images/guide.png'
import payment from '../../../Images/payment.png'
import discount from '../../../Images/discount.png'
import flash from '../../../Images/flash.png'

const HomePage = () => {
    return (
        <div>
            {/* Banner section */}
            <Banner></Banner>

            {/* Service section */}
            <div className='mt-5 p-sm-2 p-md-5'>
                <h3 className='text-center'>PAY A VISIT <i className="fas fa-hand-point-right mx-2 text-primary"></i></h3>
                <Services></Services>
            </div>

            {/* Recommend section */}
            <div className='recommend-section'>
                <h3 className='text-center'>WE ARE HIGHLY RECOMENDED BY</h3>
                <div className="row mt-5 py-4">
                    <p className='text-center col-md-3'>
                        <i class="fab fa-magento fa-3x"></i> <br />
                        <h4>Megneto Service</h4>
                    </p>
                    <p className='text-center col-md-3'>
                        <i class="fab fa-glide fa-3x"></i> <br />
                        <h4>Journal Guide</h4>
                    </p>
                    <p className='text-center col-md-3'>
                        <i class="fab fa-google fa-3x"></i><br />
                        <h4>Google Map</h4>
                    </p>
                    <p className='text-center col-md-3'>
                        <i class="fab fa-paypal fa-3x"></i><br />
                        <h4>Paypal Service</h4>
                    </p>
                </div>
            </div>

            {/* Why choose Us section */}
            <div className='choose-us'>
                <h3>Why Choose Us <i className="fas fa-angle-double-right"></i> </h3>
                <div className="row pt-5 text-success">
                    <div className="col-md-3">
                        <h4>1.We Provide Guide</h4>
                        <img className='img-fluid' src={guide} alt="" />
                    </div>
                    <div className="col-md-3">
                        <h4>2.Payment After Tour</h4>
                        <img className='img-fluid' src={payment} alt="" />
                    </div>
                    <div className="col-md-3">
                        <h4>3.Often Offer Discount </h4>
                        <img className='img-fluid' src={discount} alt="" />
                    </div>
                    <div className="col-md-3">
                        <h4>4. Flash Ticket Sale</h4>
                        <img className='img-fluid' src={flash} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;