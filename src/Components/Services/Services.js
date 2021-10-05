import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap,faStamp,faGlobeAsia } from '@fortawesome/free-solid-svg-icons'
import './Services.css'
const Services = () => {
   
    
    
    return (
        <Container className=" mx-auto w-75 service mb-5">
            <Row xs={1} md={3} className="mx-auto">
             
                <Col className="mt-3 " md={4}>

                    <div className="card-style">
                        <p><FontAwesomeIcon icon={faGraduationCap} className="icon" /> </p>
                        <div className="ps-1 pe-1">
                            <h4 className="text-center">Scholarship Facility</h4>
                            <p className="text-start">A scholarship is an award of financial aid for a student to further their education</p>

                        </div>
                    </div>


                </Col>
                <Col className="mt-3 " md={4}>
                <div className="card-style">
                        <p><FontAwesomeIcon icon={faStamp} className="icon" /> </p>
                        <div className="ps-1 pe-1">
                            <h4 className="text-center">Global Certification </h4>
                            <p className="text-start">You can earn a certificate in a variety of global health areas by successfully completing all courses within a program area</p>

                        </div>
                    </div>
                </Col>
                <Col className="mt-3 " md={4}>
                <div className="card-style">
                        <p><FontAwesomeIcon icon={faGlobeAsia} className="icon" /> </p>
                        <div className="ps-1 pe-1">
                            <h4 className="text-center">Job Placement </h4>
                            <p className="text-start">successfully 386 got job placement around Asia</p>

                        </div>
                    </div>
                </Col>
               
            </Row>

        </Container>
    );
};

export default Services;