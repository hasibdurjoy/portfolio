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
        <Navbar className="navbar-active" fixed="top">
            <Container>
                <Navbar.Brand href="#home" className="nav-name">HASIBUR RAHMAN</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <NavHashLink to="/home" className="nav-link">Home</NavHashLink>
                    <NavHashLink to="/home" className="nav-link">About</NavHashLink>
                    <NavHashLink to="#experiences" className="nav-link">Experiences</NavHashLink>
                    <NavHashLink to="/home" className="nav-link">Projects</NavHashLink>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;