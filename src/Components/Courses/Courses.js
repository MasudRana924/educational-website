import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, FormControl, InputGroup, Row,Button } from 'react-bootstrap';

import './Courses.css'
import Course from './../Course/Course';
const Courses = () => {
    const [courses, setCourses] = useState([])
   
    useEffect(() => {

        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data =>{
                console.log(data);
               setCourses(data)  
            }
               
            )

    }, [])
   

    return (
        <Container fluid >
             



              <h4 className="text-center fs-3 text-warning mb-5 mt-5 people-say pb-1 w-25 mx-auto">Our Courses</h4>
            <Row xs={1} md={4}>
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                    >
                       
                    </Course>)
                }
            </Row>
        </Container>
    );
};

export default Courses;