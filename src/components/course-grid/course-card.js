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
    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <div className="card">
            <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                    content.</p>
                <img src={``}/>
                {
                    !editing &&
                    <Link to={`/courses/grid/edit/${course._id}`} className="btn btn-primary">
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

                {!editing && <i className="fas fa-edit float-right 	"
                                onClick={()=> { setNewTitle(course.title)
                                                    setEditing(true)
                            }}></i>}
            </div>
            {editing && <i onClick={() => saveTitle()}
                           title="update course"
                           className="fas fa-check fa-2x position-check"></i>}
            {editing && <i className="fas fa-times fa-2x position-time"
                           onClick={()=>{ setEditing(false)
                                            deleteCourse(course)}}
                           title="delete Course"></i>}
        </div>

    </div>)
}
export default CourseCard