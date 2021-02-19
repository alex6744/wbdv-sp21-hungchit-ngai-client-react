import React from 'react'
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid/course-grid";
import CourseEditor from "./course-editor/course-editor";
import {Route} from "react-router-dom";
import courseService,{findAllCourses,deleteCourses} from "../services/course-service";

class CourseManager extends React.Component{

    render() {
        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">

                            <div class="col-1">
                                <i class="fas fa-bars fa-2x"></i>
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
            </div>
        )
    }
}
export default CourseManager