import React from 'react'
import {Link} from "react-router-dom";
const CourseRow = (
    {  deleteCourse,
        ndx,
       course,
       title,
       lastModified,
       owner
    }) => {

    return (
        <tr>
            <td>
                <Link to="/courses/editor">
                    {title}
                </Link>
            </td>
            <td>{owner}</td>
            <td className="d-none d-lg-table-cell">{lastModified}</td>
            <td>
                <i className="fas fa-check"></i>
                <i onClick={()=>deleteCourse(course)} className="fas fa-trash"></i>
                <i className="fas fa-edit"></i>
            </td>
        </tr>
    )
}
export default CourseRow