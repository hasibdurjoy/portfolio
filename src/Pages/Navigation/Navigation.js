import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import './Navigation.css';

const Navigation = () => {
    const [scroll, setScroll] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 80) {
            setScroll(true);
        }
        else {
            setScroll(false);
        }
    }
    window.addEventListener('scroll', handleScroll);
    return (
        <Container>
            <Navbar className={scroll ? "navbar-active" : "bg-transparent"} expand="lg" fixed="top">
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src="https://i.ibb.co/VHJn27h/Screenshot-22-removebg-preview.png"
                            // width="250"
                            height="50"
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                        </Nav>
                        <NavHashLink
                            activeStyle={{ color: "red" }}
                            to="/home"
                            style={{ textDecoration: "none", fontWeight: 900, color: "black", fontSize: 18 }}>
                            Home
                        </NavHashLink>

                        <Nav.Link
                            to="#about"
                            style={{ textDecoration: "none", fontWeight: 900, color: "black", fontSize: 18 }}>
                            About
                        </Nav.Link>

                        <NavHashLink
                            activeStyle={{ color: "red" }}
                            to="#experiences"
                            style={{ textDecoration: "none", fontWeight: 900, color: "black", fontSize: 18 }}>
                            Experiences
                        </NavHashLink>

                        <Nav.Link
                            href="#projects"
                            style={{ textDecoration: "none", fontWeight: 900, color: "black", fontSize: 18 }}>
                            Projects
                        </Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Navigation;