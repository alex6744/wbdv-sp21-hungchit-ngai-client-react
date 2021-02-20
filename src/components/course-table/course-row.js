import React from 'react'
import {Link} from "react-router-dom";
const CourseRow = (
    { course,
       title,
       lastModified,
       owner
    }) => {

    return (
        <tr>
            <td>
              wwwww
            </td>
            <td>w</td>
            <td class="d-none d-lg-table-cell">wlaw</td>
            <td>
                <i className="fas fa-check"></i>
                <i  className="fas fa-trash"></i>
                <i className="fas fa-edit"></i>
            </td>
        </tr>
    )
}
export default CourseRow