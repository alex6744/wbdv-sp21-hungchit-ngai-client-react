import React from 'react'
import {Link} from "react-router-dom";

const CourseCard=()=>
    <div className="col-4">
        <div className="card">
            <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">1111111111</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                    content.</p>
                <img src={``}/>
                <Link to="/courses/editor" className="btn btn-primary">
                    111111
                </Link>
                <i className="fas fa-trash"></i>
            </div>
        </div>
    </div>
export default CourseCard