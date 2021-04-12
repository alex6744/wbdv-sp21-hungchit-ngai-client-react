import React,{useState} from 'react'
import {Link} from "react-router-dom";
const CourseRow = (
    {
        updateCourse,
        deleteCourse,
        ndx,
       course,
       title,
       lastModified,
       owner
    }) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)

    }

    return (
        <tr>
            <td>
                {
                    !editing &&
                    <a href={`/courses/table/edit/${course._id}`} >
                        {title}
                    </a>
                }
                {
                    editing &&
                    <input
                        onChange={(event) => setNewTitle(event.target.value)}
                        value={newTitle}
                        className="form-control"/>
                }
            </td>
            <td className="d-none d-sm-table-cell">{owner}</td>
            <td className="d-none d-lg-table-cell">{lastModified}</td>

            <td>
                {editing && <i onClick={() => {saveTitle()}}
                               className="fas fa-check"></i>}
                {editing && <i onClick={() => {setEditing(false)
                                               deleteCourse(course)
                            }} className="fas fa-trash"></i>}
                {!editing && <i onClick={() => { setNewTitle(title)
                                                 setEditing(true)
                             }} className="fas fa-edit"></i>}

            </td>
            <td>
                <Link to={`/courses/${course._id}/quizzes`}>
                    Quizzes
                </Link>
            </td>
        </tr>
    )
}
export default CourseRow