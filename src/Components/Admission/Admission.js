import React from 'react';
import { Card, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import './Admission.css'

const Admission = () => {
    return (
        <Container fluid className=" admission   mb-5 pb-5">
            <Row xs={1} md={2}>
                <Col xs={12} md={4} className="mt-5">
                    <h3 className="academy text-start text-danger">Academic Certificate</h3>
                    <p className="text-start ">We dont want your academy certificate</p>
                    <p className="text-start ">but you should be comfortable in English</p>

                </Col>

                <Col xs={12} md={8} className="mt-5">
                    <Card className=" w-75 mx-auto">
                        <Card.Body>
                            <h3 className="mt-3 h3 text-start ">Give Information </h3>
                            <p className="text-start pt-3">Name</p>
                            <input type="text" class="form-control h-75" placeholder="enter your name" />
                            <p className="text-start pt-3">Email</p>
                            <input type="text" class="form-control  h-75" placeholder="enter your email" />
                            <p className="text-start pt-3">Phone </p>
                            <input type="text" class="form-control  h-75" placeholder="by which you paid " />
                            <p className="text-start pt-3">Degree </p>
                            <input type="text" class="form-control h-75" placeholder="enter your degree" />

                            <button className="w-100 btn rounded-3 bg-success mt-3">Continue</button>
                            <br />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>


        </Container>
    );
};

export default Admission;