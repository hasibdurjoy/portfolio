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
        <Navbar collapseOnSelect expand="lg" variant="light" className={scroll ? "navbar-scroll" : "navbar-active"} fixed="top">
            <Container>
                <Navbar.Brand href="/" className="nav-name">HASIBUR RAHMAN</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="bg-light" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <NavHashLink to="/home" className="nav-link">Home</NavHashLink>
                        <NavHashLink to="/home#about" className="nav-link">About</NavHashLink>
                        <NavHashLink to="/home#experiences" className="nav-link">Experiences</NavHashLink>
                        <NavHashLink to="/home#projects" className="nav-link">Projects</NavHashLink>
                        <NavHashLink to="/home#contact" className="nav-link">Contact</NavHashLink>
                        <a
                            href="https://drive.google.com/file/d/1g637hbQOzwjLsLkPRwYnSp870VCUWl6j/view"
                            target="_blank">
                            <button className="btn btn btn-danger rounded-pill text-white">Resume</button>
                        </a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;