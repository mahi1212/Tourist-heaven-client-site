import React, { useEffect, useState } from 'react';

const MyOrder = () => {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('https://lit-brushlands-74039.herokuapp.com/myorder')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div className='full-form'>
            <h2>Your Order</h2>
            name : {service.serviceName}
        </div>
    );
};

export default MyOrder;