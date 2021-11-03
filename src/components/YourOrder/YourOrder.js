import React from 'react';

const YourOrder = (props) => {
    const { place, name, number } = props.order;
    return (
        <div className="col-lg-4 col-md-6 col-12">
            <div className="bg-primary bg-opacity-10 border border-success border-3 rounded-3 p-3">
                <h5>Place : {place}</h5>
                <h5>Name : {name}</h5>
                <h5>Number : {number}</h5>
            </div>
        </div>
    );
};

export default YourOrder;