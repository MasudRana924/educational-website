import React from 'react';
import { Container, Nav, Navbar ,Button} from 'react-bootstrap';
import { NavLink,Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <Container fluid className="header"  >
        <Navbar collapseOnSelect expand="lg"   variant="dark">
        <Container>
        <Navbar.Brand to="/home" className="text-dark fs-2">Programmer.com</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="bg-primary" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto nav-style">
            <NavLink to="/home" className="ms-3 text-dark text-decoration-none fs-5 nav-style">Home</NavLink>
            <NavLink to="/about" className="ms-3 text-dark text-decoration-none fs-5 nav-style" >About Us</NavLink>
            <NavLink to="/contact" className="ms-3 text-dark text-decoration-none fs-5 nav-style">Contact Us</NavLink>
            <NavLink to="/admission" className="ms-3 text-dark text-decoration-none fs-5 nav-style">Admission</NavLink>
            <NavLink to="/allcourses" className="ms-3 text-dark text-decoration-none fs-5 nav-style">Courses</NavLink>
            <NavLink to="/services" className="ms-3 text-dark text-decoration-none fs-5 nav-style">Services</NavLink>
           
           
           
          </Nav>
          <Nav>
            <Link to="/login"><Button variant="outline-primary" className="me-1">Login</Button></Link>
            <Link to="/signup"><Button variant="outline-info" className="ms-1">Signup</Button></Link>
           
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      </Container>
    );
};

export default Header;