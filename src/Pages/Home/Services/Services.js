import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://lit-brushlands-74039.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            {/* <h2 className='text-center text-uppercase text-danger py-2'>Our Services</h2> */}
            <Row xs={1} md={3} className="gx-4 gy-5 pt-3 px-5">
                {
                    services.map(service => <Service service={service} id={service.id}></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;