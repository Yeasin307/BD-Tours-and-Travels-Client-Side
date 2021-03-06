import { faBus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Service.css';

const Service = (props) => {

    const { placename, image, attraction, duration, cost, _id } = props.service;

    return (

        <div className="col-lg-4 col-md-6 col-12">

            <div className="place-card">

                <img src={image} alt="" />
                <h5 className="d-flex justify-content-start ms-4 mt-3">Place Name: {placename}</h5>
                <h5 className="d-flex justify-content-start ms-4">Attraction: {attraction}</h5>
                <h5 className="d-flex justify-content-start ms-4">Duration: {duration}</h5>
                <h4 className="d-flex justify-content-start ms-4">Cost: {cost}</h4>

                <NavLink to={`/order/${_id}`} className="d-flex justify-content-start ms-4 text-decoration-none">
                    <button>Select for Going<FontAwesomeIcon className="ms-2" icon={faBus} /> </button>
                </NavLink>

            </div>

        </div>
    );
};

export default Service;