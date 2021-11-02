import { faBus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { placename, image, attraction, duration, cost } = props.service;
    return (
        <div className="col-lg-4 col-md-6 col-12">
            <div className="place-card">
                <img src={image} alt="" />
                <h4 className="d-flex justify-content-start ms-4">Place Name: {placename}</h4>
                <h4 className="d-flex justify-content-start ms-4">Attraction: {attraction}</h4>
                <h4 className="d-flex justify-content-start ms-4">Duration: {duration}</h4>
                <h2 className="d-flex justify-content-start ms-4">Cost: {cost}</h2>
                <NavLink to="/orders" className="d-flex justify-content-start ms-4 text-decoration-none">
                    <button>Select for Going<FontAwesomeIcon className="ms-2" icon={faBus} /> </button>
                </NavLink>
            </div>
        </div>
    );
};

export default Service;