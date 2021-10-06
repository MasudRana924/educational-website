import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Details = () => {
    const { id } = useParams()
    const [course, setCourse] = useState([])
    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [id])
    return (
        <Container fluid className="mt-5">
            <h4>Details is comming soon !!!</h4>

            <div className="w-50 mx-auto">
                


                < Row xs={1} md={1}>
                    <div className="card-style">
                        <img src={course.img} className=" image " alt="" />
                        <button className="button mt-3 w-75 mx-auto text-white">Enroll Now</button>
                        <div>
                            <h4 className="mt-5">{course.name}</h4>
                            <p className="text-start fs-6 ms-1">{course.desc}</p>
                            <p className="text-start fs-6 ms-1"><span className="text-danger">{course.price}</span> </p>
                        </div>
                    </div>
                </Row>


            </div>

        </Container >
    );
};

export default Details;