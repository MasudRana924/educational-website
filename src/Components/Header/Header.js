import React from 'react';
import { Container, Nav, Navbar ,Button} from 'react-bootstrap';
import { NavLink,Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <Container fluid className="header"  >
        <Navbar collapseOnSelect expand="lg"  fixed="top" variant="dark">
        <Container>
        <Navbar.Brand href="#home" className="text-dark fs-2">Programmer.com</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="bg-primary" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/home" className="ms-3 text-dark text-decoration-none fs-5">Home</NavLink>
            <NavLink to="/about" className="ms-3 text-dark text-decoration-none fs-5" >About Us</NavLink>
            <NavLink to="/contact" className="ms-3 text-dark text-decoration-none fs-5">Contact Us</NavLink>
            <NavLink to="/admission" className="ms-3 text-dark text-decoration-none fs-5">Admission</NavLink>
            <NavLink to="/courses" className="ms-3 text-dark text-decoration-none fs-5">Courses</NavLink>
           
           
          </Nav>
          <Nav>
            <Link ><Button variant="outline-primary" className="me-1">Login</Button></Link>
            <Link ><Button variant="outline-info" className="ms-1">Signup</Button></Link>
           
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      </Container>
    );
};

export default Header;