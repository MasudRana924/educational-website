import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Colleges.css'

const Colleges = () => {
    return (
        <Container fluid className="mt-5 mb-5">
            <Row xs={2} md={4}>
                <Col>
                    <h3 className="text-danger">Our Future Goals </h3>
                    <small className="text-start">Increase access of learning opportunities</small> <br />
                    <small className="text-start">More flexibility for students</small> br

                    <small className="text-start">To enhance students about programming</small>br

                    <small className="text-start">Develop skills for 21st Century</small><br />
                    <small className="text-start">to try something new</small>
                </Col>
                <Col>

                    <h4 className="trainers">Our Trainers</h4>
                    <p><span className="text-danger fs-5">100</span></p>
                    <button className="btn btn-secondary ">show details</button>
                  
                </Col>
                <Col>
                    <h4 className="students">Total Students</h4>
                    <p><span className="text-danger fs-5">2375</span></p>
                    <button className="btn btn-secondary">show details</button>
                   

                </Col>
                <Col>
                    <h4 className="text-success job">Gob Placements</h4>
                    <p> <span className="text-success fs-5">386</span> got job  and <span className="text-success fs-5">100</span> got internship</p>
                    
                    <button className="btn btn-secondary">show details</button>
                </Col>

            </Row>
        </Container>
    );
};

export default Colleges;