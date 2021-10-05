import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllCourse = (props) => {
    const { name, price, desc, img } = props.course
    return (
        <Col className="mt-5 courses-style">

        <div className="card-style">
          <img src={img} className=" image " alt="" />
          <button className="button mt-3 w-75 mx-auto text-white">Enroll Now</button>
          <div>
            <h4 className="mt-5">{name}</h4>
            <p className="text-start fs-6 ms-1">{desc.slice(0, 65)} ...<Link to="" className="details">details</Link></p>
            <p className="text-start fs-6 ms-1">Price : <span className="text-danger">{price}tk</span> </p>
          </div>
        </div>
  
      </Col>
    );
};

export default AllCourse;