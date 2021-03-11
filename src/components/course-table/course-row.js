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
                    <Link to={`/courses/table/edit/${course._id}`} >
                        {title}
                    </Link>
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
        </tr>
    )
}
export default CourseRow