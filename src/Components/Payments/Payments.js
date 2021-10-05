import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import './Payments.css'

const Payments = () => {
    const element = <FontAwesomeIcon icon={faCheckCircle} />
    return (
        <Container fluid className="payment mt-5 pt-5 pb-5">
            <h4 className="text-center fs-3 text-warning mb-5 people-say pb-1 w-25 mx-auto">Our Packages</h4>
            <Row xs={1} md={4}>
                <Col className="mt-3 ">
                    <div className="bg-white ps-1 pe-1 pb-3 card-style">
                        <h4>Free Courses</h4>
                        <p>its for special case</p>

                        <input type="text" class="form-control  mt-3 mb-3 h-75" placeholder="enter your name" />

                        <input type="text" class="form-control  mt-3 mb-3 h-75" placeholder="enter your email" />
                        <input type="text" class="form-control  mt-3 mb-3 h-75" placeholder="enter your phone" />

                       <button className="btn btn-warning w-100">Submit</button>
                    </div>
                </Col>

                <Col className="mt-3">
                    <div className="bg-white pb-1 ps-1 pe-1 card-style">
                        <h4 className="access">Monthly Access</h4>
                        <p>price:1000 TK</p>
                        <p ><span className="check-icon">{element}</span>
                        </p>
                        <p ><span className="check-icon">{element}</span>
                        </p>
                        <p ><span className="check-icon">{element}</span>
                        </p>
                        <p>1 month only</p>
                        <button className="btn btn-primary w-100 mb-1 ">Buy Now</button>
                    </div>
                </Col>
                <Col className="mt-3">
                    <div className="bg-white pb-1 ps-1 pe-1 card-style">
                        <h4 className="access">Yearly Access</h4>
                        <p>price:10000 TK</p>
                        <p ><span className="check-icon">{element}</span>
                        </p>
                        <p ><span className="check-icon">{element}</span>
                        </p>
                        <p ><span className="check-icon">{element}</span>
                        </p>
                        <p>1 year only</p>
                        <button className="btn btn-primary w-100 mb-1 ">Buy Now</button>
                    </div>
                </Col>
                <Col className="mt-3">
                    <div className="bg-white pb-1 ps-1 pe-1 card-style">
                        <h4 className="access">Life Time Access</h4>
                        <p>price:20000 TK</p>
                        <p ><span className="check-icon">{element}</span>
                        </p>
                        <p ><span className="check-icon">{element}</span>
                        </p>
                        <p ><span className="check-icon">{element}</span>
                        </p>

                        <p>Life Time</p>
                        <button className="btn btn-primary w-100 mb-1 ">Buy Now</button>
                    </div>
                </Col>
            </Row >
        </Container >
    );
};

export default Payments;