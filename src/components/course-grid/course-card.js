import React, {useState} from 'react'
import {Link} from "react-router-dom";
import "./course-grid.css"
const CourseCard=({course,deleteCourse,updateCourse})=>{
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(course.title)

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }

    return(
    <div className="col-4">
        <div className="card">
            <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                    content.</p>
                <img src={``}/>
                {
                    !editing &&
                    <Link to="/courses/editor" className="btn btn-primary">
                        {course.title}
                    </Link>
                }
                {
                    editing &&
                    <input className="form-control"
                           onChange={(event) =>{ setNewTitle(event.target.value)}}
                           value={newTitle}
                            />
                }
                {/*<i onClick={()=>deleteCourse(course)} className="fas fa-trash"></i>*/}
                {!editing && <i className="fas fa-edit float-right 	d-none d-lg-block d-xl-none"
                    onClick={()=>setEditing(true)}></i>}
            </div>
            {editing && <i onClick={() => saveTitle()}
                            className="fas fa-check fa-2x position-check"></i>}
            {editing && <i className="fas fa-times fa-2x position-time"
               onClick={()=>{ setEditing(false)
                    deleteCourse(course)}}
               title="delete Course"></i>}
        </div>

    </div>)
}
export default CourseCard