import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import imageOne from '../../images/user-1.png'
import imageTwo from '../../images/user-2.png'
import './Reviews.css'

const Reviews = () => {
    return (
        <Container fluid className="mt-5 mb-5">
            <h4 className="text-start mb-5 people-say pb-1">People say's</h4>
            <Row xs={1} md={4}>
                <Col></Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={imageOne} />
                        <Card.Body>
                            <Card.Title>Jonathon Bail</Card.Title>
                            <Card.Text>
                               This is very usefull website to learn programmings with easy and fun tricks
                            </Card.Text>

                        </Card.Body>
                    </Card>

                </Col>
                <Col>
                <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={imageTwo} />
                        <Card.Body>
                            <Card.Title>Michael Harry</Card.Title>
                            <Card.Text>
                               I thinks this site helps huge people to learn programming and their contribution a lot 
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
                <Col></Col>
            </Row>

        </Container>
    );
};

export default Reviews;