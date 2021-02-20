
import React from 'react'
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid/course-grid";
import CourseEditor from "./course-editor/course-editor";
import {Link, Route} from "react-router-dom";
import courseService from "../services/course-service";
import "./course-manager.css"

class CourseManager extends React.Component{
    state = {
        courses: []
    }
    componentDidMount=()=> {
        courseService.findAllCourses()
            .then(courses => this.setState({courses}))
    }

    addCourse=()=>{
        const newCourse = {
            title: "New Course",
            owner: "New Owner",
            lastModified: "Never"

        }
        courseService.createCourse(newCourse)
            .then(course=>this.setState(
                (prevState)=>({
                    ...prevState,
                    courses:[
                        ...prevState.courses,
                        course
                    ]
                })
            ))

    }
    deleteCourse=(courseToDelete)=>{
        courseService.deleteCourse(courseToDelete._id)
            .then(status=>{
                this.setState((prevState)=>({
                   ...prevState,
                   courses:prevState.courses.filter
                     (course=>course!==courseToDelete)
                }))
            })
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
                                <input className="form-control"/>
                            </div>
                            <div className="col-1 ">

                                    <i onClick={this.addCourse}
                                       className="fas fa-plus-circle fa-2x"></i>


                            </div>

                    </div>
                </nav>


                <Route path="/courses/table">
                    <CourseTable
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>

                </Route>
                <Route path="/courses/grid">
                    <CourseGrid
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>

                </Route>
                <Route path="/courses/editor">
                    <CourseEditor/>

                </Route>
                <div className="bottom-right-position">

                        <i className="fa fa-plus-circle fa-3x"></i>

                </div>
            </div>
        )
    }
}
export default CourseManager