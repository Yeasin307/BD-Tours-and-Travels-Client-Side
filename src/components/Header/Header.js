import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css';

const Header = () => {

    const { user, logOut } = useAuth();

    return (
        <>
            <Navbar bg="info bg-opacity-75" variant="dark" sticky="top" collapseOnSelect expand="lg" >

                <Container>

                    <Navbar.Brand className="text-dark fw-bold fs-3">BD Tours and Travels</Navbar.Brand>

                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end">

                        <Nav.Link as={Link} className="nav-link text-dark fw-bold" to="/home">Home</Nav.Link>

                        <Nav.Link as={Link} className="nav-link text-dark fw-bold" to="/services">Services</Nav.Link>

                        {user?.email ?
                            <>

                                <Nav.Link as={Link} className="nav-link text-dark fw-bold" to="/yourOrders">Your Orders</Nav.Link>

                                <Nav.Link as={Link} className="nav-link text-dark fw-bold" to="/manageOrders">Manage All Orders</Nav.Link>

                                <Nav.Link as={Link} className="nav-link text-dark fw-bold" to="/addServices">Add Services</Nav.Link>

                                <Navbar.Text style={{ textDecoration: 'none', color: "purple", fontWeight: "700", fontSize: "18px" }}>{user?.displayName}</Navbar.Text>

                                <Button onClick={logOut} className="ms-3 fw-bold" variant="dark">Logout</Button>
                            </>
                            :
                            <Nav.Link as={Link} className="nav-link text-dark fw-bold" to="/login">Login</Nav.Link>
                        }

                    </Navbar.Collapse>

                </Container>

            </Navbar>

        </>
    );
};

export default Header;