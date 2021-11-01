import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const ManageOrder = () => {
    const [order, setOrder] = useState({})
    useEffect(() => {
        fetch('https://fierce-hamlet-00780.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])

    return (
        <div>
            <h2 className='text-primary text-uppercase text-center py-2 '>Manage Order Here</h2>
            
            {/* <Card style={{ width: '18rem' }} className="mb-2">
                <Card.Header>{order.name}</Card.Header>
                <Card.Body>
                    <Card.Title>{order.name} </Card.Title>
                    <Card.Text>
                        {order.description}
                    </Card.Text>
                </Card.Body>
            </Card>
            Service found : {order.length} */}
        </div>
    );
};

export default ManageOrder;