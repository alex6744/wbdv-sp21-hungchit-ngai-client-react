
import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";


export default class CourseTable
    extends React.Component {



    render() {
        return(
            <div>
                <table className="table">
                    <thead>
                        <th >Title</th>
                        <th >Owned by</th>
                        <th className="d-none d-lg-table-cell" >Last modified</th>
                        <th >
                            <i className="fas fa-2x fa-th float-right"></i>
                            <i className="fas fa-2x fa-th float-right"></i>
                            <i className="fas fa-2x fa-th float-right"></i>

                        </th>

                    </thead>
                    <tbody>
                        <CourseRow/>
                    </tbody>
                </table>
            </div>
        )
    }
}