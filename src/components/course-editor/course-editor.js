import React from 'react'
import {Link} from "react-router-dom";

const CourseEditor =({history})=>

    <div className="container-fluid">

        <div>
            <div className="row ">
                <div className="col-1">

                        <i onClick={() => {history.goBack()}}
                            className=" fa fa-times fa-2x color-white"></i>

                </div>
                <div className="col-3 coursename-position ">


                    <h4 className="color-white ">CS5610-WebDev</h4>

                </div>
                <div className="col-7">
                    <ul className="nav nav-pills ">
                        <li className="nav-item ">
                            <a className="nav-link  color-white" aria-current="page" href="#">
                                Build
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link active color-white " href="#">

                                Pages

                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link color-white" href="#">
                                Theme
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link color-white" href="#">
                                Store
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link color-white" href="#">
                                Apps
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link color-white" href="#">
                                Setting
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#" tabIndex="-1" aria-disabled="true">
                                <i className="fa fa-plus color-white"></i>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
        <div className="row">
            <div className="col-4">
                <br/>
                <ul className="list-group">
                    <li className="list-group-item ">
                        Module 1-JQuery
                        <i className="pull-right fa fa-trash"></i>
                    </li>
                    <li className="list-group-item active">
                        Module 2-React
                        <i className="pull-right fa fa-trash"></i>
                    </li>
                    <li className="list-group-item">
                        Module 3-Redux
                        <i className="pull-right fa fa-trash"></i>
                    </li>
                    <li className="list-group-item">
                        Module 4-Native
                        <i className="pull-right fa fa-trash"></i>
                    </li>
                    <li className="list-group-item">
                        Module 5-Angular
                        <i className="pull-right fa fa-trash"></i>
                    </li>
                    <li className="list-group-item">
                        Module 6-Node
                        <i className="pull-right fa fa-trash"></i>
                    </li>
                    <li className="list-group-item">
                        Module 7-Mongo
                        <i className="pull-right fa fa-trash"></i>
                    </li>

                </ul>
                <div className="trash-position">
                    <i className="pull-right fa fa-plus fa-2x"></i>
                </div>

            </div>

            <div className="col-8">

                <br/>

                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link " aria-current="page" href="#">
                            Topic 1
                        </a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link active" href="#">
                            Topic 2
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Topic 3
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Topic 4
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="#" tabIndex="-1" aria-disabled="true">
                            <i className="fa fa-plus"></i>
                        </a>
                    </li>
                </ul>
                <h1>Blank</h1>
            </div>
        </div>
    </div>
export default CourseEditor
