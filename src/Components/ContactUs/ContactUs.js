import React from 'react';
import { Card, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <Container fluid className=" contact mb-5 pb-5">
            <Row xs={1} md={1}>

                <Col>
                    <Card className=" w-75 mx-auto">
                       <Card.Body>
                       <h3 className="mt-3 h3 text-start ">Give feedback </h3>
                     
                        <input type="text" class="form-control  mt-3 mb-3 h-75" placeholder="enter your email" />
                     
                        <FloatingLabel controlId="floatingTextarea2" label="Comments">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                        <button className="w-100 btn rounded-3 bg-info mt-3">Send Us</button>
                        <br />
                       </Card.Body>
                    </Card>
                </Col>
            </Row>


        </Container>
    );
};

export default ContactUs;