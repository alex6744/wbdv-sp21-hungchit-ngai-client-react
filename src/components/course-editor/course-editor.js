import React, {useState,useEffect} from 'react'
import {Link,useParams} from "react-router-dom";
import ModuleList from "./module-list";
import {combineReducers, createStore} from "redux";
import moduleReducer from "../../reducers/module-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import topicReducer from "../../reducers/topic-reducer";
import {Provider} from "react-redux";
import LessonTabs from "./lesson-tabs";
import courseService from "../../services/course-service";


const reducer=combineReducers({
    moduleReducer:moduleReducer,
    lessonReducer:lessonReducer,
    topicReducer:topicReducer

})
const store=createStore(reducer)
const CourseEditor =({history,component})=> {
    const {layout,courseId, moduleId} =useParams();
    const [course,setCourse]=useState({});
    useEffect(()=>{
        courseService.findCourseById(courseId).then(course=>{
            setCourse(course)
        })
    })


    return(

        <Provider store={store}>
            <div className="container-fluid">

                <div>
                    <div className="row ">
                        <div className="col-1">
                            <Link to={`/courses/${layout}`}>
                                <i
                                   className=" fa fa-times fa-2x "
                                   title="go back last page"></i>
                            </Link>
                        </div>
                        <div className="col-3  ">


                            <h4 >{course.title}</h4>

                        </div>
                        <div className="col-7">


                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-4">

                        <ModuleList />
                    </div>

                    <div className="col-8">

                        <LessonTabs/>
                    </div>
                </div>

            </div>
        </Provider>
    )
}
export default CourseEditor
