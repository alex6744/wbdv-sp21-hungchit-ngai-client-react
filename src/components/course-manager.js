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
                <h1>Course Manager</h1>
            </div>
        )
    }
}
export default CourseManager