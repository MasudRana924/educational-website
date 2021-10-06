import React from 'react';
import { Container } from 'react-bootstrap';
import NotFoundImg from '../../images/404.jpg'
import './NotFound.css'

const NotFound = () => {
    return (
       <Container fluid>
           <img src={NotFoundImg} className="img-fluid w-50 mx-auto " alt="" />
       </Container>
    );
};

export default NotFound;