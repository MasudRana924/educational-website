import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Colleges.css'

const Colleges = () => {
    return (
        <Container fluid className=" college">
             <h4 className="text-center fs-3 text-warning mb-5 mt-5 people-say pb-1 w-25 mx-auto">Our Achievement & Goals</h4>
            <Row xs={2} md={4}>
                <Col className="mt-3 card-style">
                    <h3 className="text-danger">Our Future Goals </h3>
                    <p className="text-start">Increase access of learning opportunities</p>
                    <p className="text-start">More flexibility for students</p>

                    <p className="text-start">To enhance students about programming</p>

                    <p className="text-start">Develop skills for 21st Century</p>
                    <p className="text-start">to try something new</p>
                </Col>
                <Col className="mt-3 card-style">

                    <h4 className="trainers">Our Trainers</h4>
                    <p><span className="text-danger fs-5">100</span></p>
                    <button className="btn btn-secondary ">show details</button>

                </Col>
                <Col className="mt-3 card-style">
                    <h4 className="students">Total Students</h4>
                    <p><span className="text-danger fs-5">2375</span></p>
                    <button className="btn btn-secondary">show details</button>


                </Col>
                <Col className="mt-3 card-style">
                    <h4 className="text-success job">Gob Placements</h4>
                    <p> <span className="text-success fs-5">386</span> got job  and <span className="text-success fs-5">100</span> got internship</p>

                    <button className="btn btn-secondary">show details</button>
                </Col>

            </Row>
        </Container>
    );
};

export default Colleges;