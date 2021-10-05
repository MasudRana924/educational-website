import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <Container fluid className="footer">
            <Row xs={2} md={3}>
                <Col>
                    <h4>Explore Us</h4>
                    <FontAwesomeIcon icon={faFacebookF} className="fb-icon mt-3" />
                    <FontAwesomeIcon icon={faInstagram} className="insta-icon ms-3 mt-3" />
                    <FontAwesomeIcon icon={faYoutube} className="youtube-icon ms-3 mt-3" />
                    <FontAwesomeIcon icon={faGoogle} className="google-icon ms-3 mt-3" />
                </Col>
                <Col>
                    <h4>Payment Method</h4>
                    <Link className="anchor">Visa Card</Link  >

                    <br />
                    <Link className="anchor">Master Card</Link  >

                    <br />
                    <Link className="anchor">Paypal</Link >

                    <br />
                    <Link className="anchor">Bkash</Link >
                </Col>
                <Col>
                <h4>Let Us Help You</h4>
                    <Link className="anchor">Your Account </Link >
                    <br />
                    <Link className="anchor">Your orders</Link  >
                    <br />
                    <Link className="anchor">Your Query </Link  >
                    <br />
                    <Link className="anchor">Help Center </Link  >
                </Col>

            </Row>

        </Container>
    );
};

export default Footer;