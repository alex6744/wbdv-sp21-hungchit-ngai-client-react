import React from 'react'
import {Link} from "react-router-dom";
import CourseCard from "./course-card";
import "./course-grid.css"

const CourseGrid=({courses,deleteCourse,updateCourse})=>
    <div className="container-fluid" >

        <div className="row">
            <div className="col-5 d-none d-md-block">
                Recent Documents
            </div>
            <div className="col-4 d-none d-md-block">
                Owned by me
                <i className="fas fa-sort-down fa-2x "></i>


            </div>

            <div className="col-1 col-xs-3  	">

                <i className="fas fa-folder fa-2x position-floder"></i>

            </div>
            <div className="col-1 col-xs-3	">


                <i className="fas fa-sort fa-2x position-sort "></i>
            </div>

            <div className="col-1 col-xs-3 " >


                <Link to="/courses/table">
                    <i className="fas fa-list fa-2x  position-grid"></i>
                </Link>

            </div>
        </div>
        <div className="row">
            {
               courses.map((course,ndx)=>
                   <CourseCard
                       key={ndx}
                       course={course}
                       deleteCourse={deleteCourse}
                       updateCourse={updateCourse}

                   />
               )
            }
        </div>

    </div>
export default CourseGrid