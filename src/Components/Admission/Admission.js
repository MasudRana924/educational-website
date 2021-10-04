import React from 'react';
import { Card, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import './Admission.css'

const Admission = () => {
    return (
        <Container fluid className=" admission   mb-5 pb-5">
            <Row xs={1} md={1}>
                <Col xs={4} md={4}>
                    <h3 className="academy text-start text-danger">Academic Certificate</h3>
                    <p>We dont want your academy certificate</p>
                    <small>but you should be comfortable in English</small>

                </Col>

                <Col xs={8} md={8}>
                    <Card className=" w-75 mx-auto">
                        <Card.Body>
                            <h3 class="mt-3 h3 text-start ">Give Information </h3>
                            <p className="text-start pt-3">Name</p>
                            <input type="text" class="form-control h-75" placeholder="enter your name" />
                            <p className="text-start pt-3">Email</p>
                            <input type="text" class="form-control  h-75" placeholder="enter your email" />
                            <p className="text-start pt-3">Phone </p>
                            <input type="text" class="form-control  h-75" placeholder="by which you paid " />
                            <p className="text-start pt-3">Degree </p>
                            <input type="text" class="form-control h-75" placeholder="enter your degree" />

                            <button class="w-100 btn rounded-3 bg-success mt-3">Continue</button>
                            <br />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>


        </Container>
    );
};

export default Admission;