import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import AllCourse from '../AllCourse/AllCourse';

const AllCourses = () => {
    const [courses, setCourses] = useState([])
   
    useEffect(() => {

        fetch('./allcourses.JSON')
            .then(res => res.json())
            .then(data =>{
                console.log(data);
               setCourses(data)  
            }
               
            )

    }, [])
    return (
      <Container fluid>
          
            <Row xs={1} md={4}>
                {
                    courses.map(course =><AllCourse
                    key={course.id}
                    course={course}
                    
                    ></AllCourse>)
                }
            </Row>

      </Container>
    );
};

export default AllCourses;