import React, { useEffect, useState } from 'react';

const MyOrder = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('https://fierce-hamlet-00780.herokuapp.com/myOrders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div className='full-form'>
            <h2>Your Order</h2>
            name : {orders.name}
        </div>
    );
};

export default MyOrder;