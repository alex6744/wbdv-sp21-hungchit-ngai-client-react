
import React,{useState} from 'react'
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid/course-grid";
import CourseEditor from "./course-editor/course-editor";
import {Link, Route} from "react-router-dom";
import courseService from "../services/course-service";
import "./course-manager.css"

class CourseManager extends React.Component{
    state = {
        courses: [],
        setNewTitle:"",
        input:""
    }

    componentDidMount=()=> {
        courseService.findAllCourses()
            .then(courses => this.setState({courses}))
    }

    addCourse=(courseTitle)=>{
       const newCourse = {
            title: courseTitle,
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
    updateCourse=(course)=>{
        courseService.updateCourse(course._id,course)
            .then(status=>this.setState((prevState)=>({
                ...prevState,
                courses:prevState.courses.map((c)=>c._id===course._id?course:c)
            })))

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
                                <input

                                    placeholder="New Course Name"
                                    onChange={(event) =>{
                                              this.setState({input:event.target.value})
                                       return  this.state.setNewTitle=(event.target.value)}}

                                    className="form-control class-title"
                                    value={this.state.input}/>
                            </div>
                            <div className="col-1 ">

                                    <i onClick={(event)=>{{
                                        this.setState({input:""})
                                        return this.addCourse(this.state.setNewTitle)
                                    }}}
                                       className="fas fa-plus-circle fa-2x"></i>


                            </div>

                    </div>
                </nav>


                <Route path="/courses/table">
                    <CourseTable

                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>

                </Route>
                <Route path="/courses/grid">
                    <CourseGrid
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>

                </Route>
                <Route path="/courses/editor"
                       render={(props) => <CourseEditor {...props}/>}>

                </Route>
                <div className="bottom-right-position">

                        <i onClick={()=>this.addCourse(this.setNewTitle)} className="fa fa-plus-circle fa-3x"></i>

                </div>
            </div>
        )
    }
}
export default CourseManager