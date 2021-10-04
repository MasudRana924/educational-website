import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './AboutUs.css'
const AboutUs = () => {
    return (
        <Container fluid className="about mb-5 pb-5">
        <Row xs={2} md={4}>
            <Col xs={6} md={2}></Col>
            <Col xs={6} md={4}>
                <h3 className="academy text-start text-success">Our Achievements </h3>
                <p className="text-start">We got special most talented trainers</p>
                <p className="text-start">We give a huge numbers of certificate to our students</p>

                <p className="text-start">successfully <span className="text-danger fs-4">386</span>  got job placements</p>
                <p className="text-start">successfully <span className="text-danger fs-4">100</span> got internship</p>
               

            </Col>

            <Col xs={6} md={4}>
            <h3 className="text-danger goal">Our Future Goals </h3>
                    <p className="text-center">Increase access of learning opportunities</p>
                    <p className="text-center">More flexibility for students</p> 

                    <p className="text-center">To enhance students about programming</p>

                    <p className="text-center">Develop skills for 21st Century</p>
                    <p className="text-center">to try something new</p>
            </Col>
            <Col xs={6} md={2}></Col>
        </Row>


    </Container>
    );
};

export default AboutUs;