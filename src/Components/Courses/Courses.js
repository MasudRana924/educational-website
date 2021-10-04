import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import html from '../../images/html.png'
import java from '../../images/js.png'
import react from '../../images/react.png'
import './Courses.css'
const Courses = () => {
    return (
        <Container fluid className="mt-5 mb-5 pt-5">
            <Row>
                <Col>
                    <Card>
                        <Card.Img variant="top" className="mt-5 img" src={html} />
                        <Card.Body>
                            <Card.Title>HTML</Card.Title>
                            <Card.Text>
                                Price:1800Tk
                            </Card.Text>
                        </Card.Body>

                    </Card>
                </Col>
                <Col>
                <Card>
                        <Card.Img variant="top" className="mt-5 img" src={java} />
                        <Card.Body>
                            <Card.Title>JavaScript</Card.Title>
                            <Card.Text>
                                Price:3000Tk
                            </Card.Text>
                        </Card.Body>

                    </Card>
                </Col>
                <Col>
                <Card>
                        <Card.Img variant="top" className="mt-5 img" src={react} />
                        <Card.Body>
                            <Card.Title>HTML</Card.Title>
                            <Card.Text>
                                Price:5000Tk
                            </Card.Text>
                        </Card.Body>

                    </Card>
                </Col>

            </Row>

        </Container>
    );
};

export default Courses;