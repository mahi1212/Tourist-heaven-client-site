import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className='nav-style' variant="light">
                <Container>
                    <Navbar.Brand href="#home" className='brand text-white'>TouristHeaven</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-2 ps-3">
                            <NavLink to="/home" className='style fs-5 fw-bold text-decoration-none' activeClassName="selected">
                                Home
                            </NavLink>
                            <NavLink to="/services" className='fs-5 fw-bold text-decoration-none style' activeClassName="selected">
                                Our Services
                            </NavLink>
                            {user.displayName && <NavLink to="/myOrder" className='fs-5 fw-bold text-decoration-none style' activeClassName="selected">
                                Your Order
                            </NavLink>}
                            {/* <NavLink to="/manageOrder" className='fs-5 fw-bold text-decoration-none style' activeClassName="selected">
                                Manage Order
                            </NavLink> */}
                            <NavLink to="/newService" className='fs-5 fw-bold text-decoration-none style' activeClassName="selected">
                                Add New Service
                            </NavLink>
                        </Nav>
                        {user.displayName ?
                            <Button onClick={logOut} className='ms-3' variant="light">Logout</Button> :
                            <Nav.Link as={Link} className='fs-5 fw-bold text-decoration-none login-btn ms-auto' activeClassName="selected" to="/login">Login</Nav.Link>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
};

export default Header;