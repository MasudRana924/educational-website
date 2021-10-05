import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap,faStamp,faGlobeAsia } from '@fortawesome/free-solid-svg-icons'
const Service = () => {
    return (
        <Container className=" mx-auto w-75 service mb-5">
             <h4 className="text-center fs-3 text-warning mb-5 people-say pb-1 w-25 mx-auto">Our Services</h4>
            <Row xs={1} md={3} className="mx-auto">



                <Col className="mt-3 " md={4}>
                    <div className="card-style">
                        <p><FontAwesomeIcon icon={faGlobeAsia} className="icon" /> </p>
                        <div className="ps-1 pe-1">
                            <h4 className="text-center">Job Placement </h4>
                            <p className="text-start">successfully 386 got job placement around Asia</p>

                        </div>
                    </div>
                </Col>



                <Col className="mt-3 " md={4}>

                    <div className="card-style">
                        <p><FontAwesomeIcon icon={faGraduationCap} className="icon" /> </p>
                        <div className="ps-1 pe-1">
                            <h4 className="text-center">Online Class Facility</h4>
                            <p className="text-start">We can teach our student via virtul for those student who live abroad and take class on class romm those student live in city</p>

                        </div>
                    </div>


                </Col>
                <Col className="mt-3 " md={4}>
                    <div className="card-style">
                        <p><FontAwesomeIcon icon={faStamp} className="icon" /> </p>
                        <div className="ps-1 pe-1">
                            <h4 className="text-center">Free Education </h4>
                            <p className="text-start">We give free education those student who has no money or financial crisis, we believe that every one has educational right</p>

                        </div>
                    </div>
                </Col>


            </Row>



        </Container>
    );
};

export default Service;