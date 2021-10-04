import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';

const AllCourses = () => {
    const[courses,setCourses]=useState([])
    useEffect(()=>{
        
        fetch('./courses.JSON')
        .then(res=>res.json())
        .then(data=>setCourses(data))

    },[])
    return (
        <Container fluid>
            <Row>
             {
                 courses.map(course=><Course>
                     key={course.id}
                     course={course}
                 </Course>)
             }
            </Row>
        </Container>
    );
};

export default AllCourses;