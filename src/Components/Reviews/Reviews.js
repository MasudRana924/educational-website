import React from 'react';
import {Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import imageOne from '../../images/user-1.png'
import imageTwo from '../../images/user-2.png'
import './Reviews.css'

const Reviews = () => {
    const icon=<FontAwesomeIcon icon={faStar} className="iconTwo" />
    return (
        <Container fluid className="review">
            <h4 className="text-center fs-3 text-warning mb-5 people-say pb-1 w-25 mx-auto">People say's</h4>
            <Row xs={1} md={4}>
                <Col></Col>
                <Col className="mt-3" xs={12}>
                    <div className="card-style mb-3">
                        <img src={imageOne} className="img-fluid w-50" alt="" />
                        <div >
                            <p>Jonathon Bail</p>
                            <span>  This is very usefull website to learn programmings with easy and fun tricks</span> <br />
                            <small>{icon}{icon}{icon}{icon}{icon}</small>

                        </div>

                    </div>


                </Col>
                <Col className="mt-3 mb-3 " xs={12}>


                <div className="card-style">
                        <img src={imageTwo} className="img-fluid w-50" alt="" />
                        <div>
                            <p>Nancy Christopher</p>
                            <span>  I thinks this site helps huge people to learn programming and their contribution a lot</span><br />
                            <small>{icon}{icon}{icon}{icon}{icon}</small>

                        </div>

                    </div>



                   
                </Col>
                <Col></Col>
            </Row>

        </Container>
    );
};

export default Reviews;