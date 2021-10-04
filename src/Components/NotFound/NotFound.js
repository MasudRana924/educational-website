import React from 'react';
import { Container } from 'react-bootstrap';
import NotFoundImg from '../../images/404.jpg'

const NotFound = () => {
    return (
       <Container>
           <img src={NotFoundImg} alt="" />
       </Container>
    );
};

export default NotFound;