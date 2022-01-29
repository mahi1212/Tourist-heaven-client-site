import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
// import { Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyOrder = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`https://lit-brushlands-74039.herokuapp.com/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div className='full-form'>
            <h2>Your Orders</h2>
            <hr />
            <div className='d-flex justify-content-center align-items-center flex-column '>
                <Card style={{ width: '18rem' }} >
                    <Card.Body className='d-flex justify-content-center align-items-center flex-column bg-dark py-4 rounded'>
                        <Card.Title className='text-white bg-success py-3 px-5'>Congratulations</Card.Title>
                        <Card.Text className='py-4'>
                            <h5 className='text-uppercase text-center text-white'>You have booked total {orders.length} trips</h5>
                        </Card.Text>
                        <NavLink to='/home' className='text-primary text-decoration-none bg-dark py-2 px-3 rounded'>Go Home</NavLink>
                    </Card.Body>
                </Card>
                <br />
            </div>
        </div>
    );
};

export default MyOrder;