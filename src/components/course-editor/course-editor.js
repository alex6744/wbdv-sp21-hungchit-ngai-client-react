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
import widgetReducer from "../../reducers/widget-reducer";


const reducer=combineReducers({
    moduleReducer:moduleReducer,
    lessonReducer:lessonReducer,
    topicReducer:topicReducer,
    widgetReducer:widgetReducer

})
const store=createStore(reducer)
const CourseEditor =({history})=> {
    const {layout,courseId, moduleId} =useParams();
    const [course,setCourse]=useState({});
    useEffect(()=>{
        courseService.findCourseById(courseId).then(course=>{
            setCourse(course)
        })
    },[])


    return(

        <Provider store={store}>
            <div className="container-fluid">

                <div>
                    <div className="row ">
                        <div className="col-2 prev-page-position">
                            <Link to={`/courses/${layout}`}>
                                <i
                                   className=" fa fa-times fa-3x "
                                   title="go back last page"></i>
                            </Link>
                        </div>
                        <div className="col-5  ">


                            <h1  className="title-position">{course.title}</h1>

                        </div>
                        <div className="col-5">


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
