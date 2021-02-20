import React from 'react'
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid/course-grid";
import CourseEditor from "./course-editor/course-editor";
import {Route} from "react-router-dom";
import courseService,{findAllCourses,deleteCourses} from "../services/course-service";

class CourseManager extends React.Component{
    state = {
        courses: [
            {title: "CS4321", owner: "frank", lastModified: "2/9/15"},
            {title: "CS5432", owner: "greg", lastModified: "3/8/25"},
            {title: "CS6543", owner: "herbert", lastModified: "4/7/35"},
            {title: "CS7654", owner: "ian", lastModified: "5/6/45"},
        ]
    }
    render() {
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">

                            <div className="col-1">
                                <i className="fas fa-bars fa-2x"></i>
                            </div>

                            <div className="col-3 	d-none d-lg-block">
                                <h4>Course Manager</h4>
                            </div>
                            <div className="col-10 col-lg-7">
                                <input class="form-control"/>
                            </div>
                            <div className="col-1">
                                <i className="fas fa-plus-circle fa-2x"></i>
                            </div>

                    </div>
                </nav>


                <Route path="/courses/table">
                    <CourseTable/>

                </Route>
                <Route path="/courses/grid">
                    <CourseGrid/>

                </Route>
                <Route path="/courses/editor">
                    <CourseEditor/>

                </Route>
            </div>
        )
    }
}
export default CourseManager