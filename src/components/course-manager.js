
import React from 'react'
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid/course-grid";
import CourseEditor from "./course-editor/course-editor";
import {Link, Route} from "react-router-dom";
import courseService from "../services/course-service";
import "./course-manager.css"

class CourseManager extends React.Component{
    state = {
        courses: [],
        setNewTitle:"new Course",
        input:"",
        c:""
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
                     (course=>course._id!==courseToDelete._id)
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
                <nav className="navbar navbar-expand-lg navbar-light bg-light container-fluid navbar-style">
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

                                        this.addCourse(this.state.setNewTitle)
                                        this.setState({setNewTitle:"new Course"})

                                    }}}
                                       className="fas fa-plus-circle fa-2x color-red"
                                        title="add course"></i>


                            </div>

                    </div>
                </nav>
                <br/>
                <br/>
                <br/>
                <Route path="/courses/table" exact={true}>
                    <CourseTable

                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>

                </Route>
                <Route path="/courses/grid" exact={true}>
                    <CourseGrid
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>

                </Route>


                <div className="bottom-right-position color-red">

                        <i onClick={()=> {  this.setState({input:""})

                            this.addCourse(this.state.setNewTitle)
                            this.setState({setNewTitle:"new Course"})
                        }}
                           className="fa fa-plus-circle fa-3x"
                            title="add course"></i>

                </div>
            </div>
        )
    }
}
export default CourseManager