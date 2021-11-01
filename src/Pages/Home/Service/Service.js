import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Service = (props) => {
    const { id, name, price, description, img } = props.service;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" style={{height:'12rem'}} src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Card.Text>Trip fee: {price} $
                        <p className='text-primary'>We provide trip by Air</p>    
                        </Card.Text>
                        <NavLink to= {`/placeOrder/${id}`} ><Button className='btn-success'>Book now {name} trip</Button></NavLink>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;