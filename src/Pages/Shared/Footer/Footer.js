import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='row'>
                <div className="col-md-3">
                    <h3>TouristHeaven</h3>
                    <p>-We belive in customer's satisfaction</p>
                    <p className='mt-5'>
                        <h5 className='text-uppercase'><i className="fas fa-search-location me-2"></i>Our Office</h5>
                        <address>Uposhohor ,Syhlet</address>
                    </p>
                </div>
                <div className="col-md-3">
                    <h3 className='text-uppercase'>Connect Us</h3>
                    <p className='mt-3'>
                        <a href="#facebook"><i className="fab fa-facebook fa-2x"></i></a>
                        <a href="#facebook"><i className="fab fa-instagram fa-2x ms-3"></i></a>
                        <a href="#facebook"><i className="fab fa-twitter fa-2x ms-3"></i></a>
                        <a href="#facebook"><i className="fab fa-github fa-2x ms-3"></i></a>
                    </p>
                    
                </div>
                <div className="col-md-3">
                    <h3 className='text-uppercase'>Support</h3>
                    <p className='legal'>
                        <p><a href="#">How to buy</a></p>
                        <p><a href="#">How to sell</a></p>
                        <p><a href="#">How to contact us</a></p>
                    </p>
                </div>
                <div className="col-md-3">
                    <h3 className='text-uppercase'>Legal</h3>
                    <p className='legal'>
                        <p><a href="#">Copyright policy</a></p>
                        <p><a href="#">Privacy policy</a></p>
                        <p><a href="#">Terms of use</a></p>
                        <p><a href="#">Cookies policy</a></p>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;