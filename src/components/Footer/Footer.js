import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <div className="bg-dark">
            <div className="row">
                <div className="col-12 col-lg-6 mt-3">
                    <h4 className="text-white text-start ps-5 ms-5">Our Location</h4>
                    <h6 className="text-white text-start ps-5 ms-5">New Market , Maijdi Court</h6>
                    <h6 className="text-white text-start ps-5 ms-5">Noakhali , Bangladesh</h6>
                    <h6 className="text-white text-start ps-5 ms-5">Contact Number: 01700000000</h6>

                </div>
                <div className="col-12 col-lg-6 d-flex justify-content-center mt-3">
                    <h3 className="text-white">Join with us : </h3>
                    <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon style={{ color: "blue" }} icon={faFacebook} size="2x" className=" mx-3" />
                    </a>
                    <a href="http://youtube.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon style={{ color: "red" }} icon={faYoutube} size="2x" className=" mx-3" />
                    </a>
                </div>
            </div>
            <p className="text-center">Copyright © 2021 BD Tours and Travels</p>
        </div>
    );
};

export default Footer;