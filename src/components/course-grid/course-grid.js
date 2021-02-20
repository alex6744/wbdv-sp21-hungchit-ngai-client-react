import React from 'react'
import {Link} from "react-router-dom";
import CourseCard from "./course-card";

const CourseGrid=({courses,deleteCourse})=>
    <div className="container-fluid">

        <div className="row">
            <div className="col-5">
                Recent Documents
            </div>
            <div className="col-3">
                Owned by me
                <i className="fas fa-sort-down fa-2x "></i>


            </div>
            <div className="col-4">
                <i className="fas fa-folder fa-2x "></i>
                <i className="fas fa-sort fa-2x "></i>
                <Link to="/courses/table">
                    <i className="fas fa-list fa-2x float-right"></i>
                </Link>

            </div>
        </div>
        <div className="row">
            {
               courses.map(course=>
                   <CourseCard
                       course={course}
                       deleteCourse={deleteCourse}
                   />
               )
            }
        </div>

    </div>
export default CourseGrid