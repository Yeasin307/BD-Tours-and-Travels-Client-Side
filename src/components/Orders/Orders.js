import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Orders = () => {
    const { user } = useAuth();
    const { _id } = useParams();
    const [service, setService] = useState({});
    const nameRef = useRef();
    const emailRef = useRef();
    const placeRef = useRef();
    const numberRef = useRef();
    const statusRef = useRef();
    const history = useHistory();
    const redirect_uri = '/yourOrders';

    useEffect(() => {
        const uri = `https://desolate-woodland-95195.herokuapp.com/services/${_id}`
        fetch(uri)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const handleOrder = e => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const place = placeRef.current.value;
        const number = numberRef.current.value;
        const status = statusRef.current.value;

        const newOrder = { name, email, place, number, status };

        fetch('https://desolate-woodland-95195.herokuapp.com/orders', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added you order.')
                    e.target.reset();
                    history.push(redirect_uri);
                }
            })

        e.preventDefault();
    }


    return (

        <div className=" m-5">

            <h2 className="text-center">Please enter your information to confirm your order.</h2>

            <form onSubmit={handleOrder} className="text-center">

                <label htmlFor="" className="mt-3 fs-5 fw-bold w-75">Place :
                    <input type="text" className="ms-3 w-75" readOnly ref={placeRef} value={service.placename || ''} />
                </label>

                <label htmlFor="" className="mt-3 fs-5 fw-bold w-75">Email :
                    <input type="email" name="" id="" className="ms-3 w-75" readOnly ref={emailRef} value={user.email} />
                </label>

                <label htmlFor="" className="mt-3 fs-5 fw-bold w-75">Name:
                    <input type="text" placeholder="Enter your name" ref={nameRef} className="ms-3 w-75" />
                </label>


                <label htmlFor="" className="mt-3 fs-5 fw-bold w-75">Phone:
                    <input type="number" className="ms-3 w-75" ref={numberRef} placeholder="Enter your phone number" />
                </label>

                <label htmlFor="" className="mt-3 fs-5 fw-bold w-75">Status:
                    <input type="text" className="ms-3 w-75" value="Pending" readOnly ref={statusRef} />
                </label>

                <br />

                <input type="submit" value="Order" className="my-3 btn btn-success fw-bold" />

            </form >

        </div >
    );
};

export default Orders;
