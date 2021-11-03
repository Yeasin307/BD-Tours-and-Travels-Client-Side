import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import YourOrder from '../YourOrder/YourOrder';

const YourOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    const myOrders = orders.filter(order => order.email === user.email);

    return (
        <div className="container">

            <h2 className="text-center">This is your Orders.</h2>
            <div className="row g-3">
                {
                    myOrders.map(order => <YourOrder
                        key={order._id}
                        order={order}
                    ></YourOrder>)
                }
            </div>
        </div>
    );
};

export default YourOrders;