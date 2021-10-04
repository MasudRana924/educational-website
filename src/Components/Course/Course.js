import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Course = (props) => {
    const{img,name,price,desc}=props.course

    return (
        <Col>
         <Card >
         <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            
           <small>{desc}</small> 
           <p>Price: {price}</p>
          </Card.Text>

        </Card.Body>
      </Card>
        </Col>
    );
};

export default Course;