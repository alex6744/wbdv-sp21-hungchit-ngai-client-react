import React from 'react'
import {Link,useParams} from "react-router-dom";
import ModuleList from "./module-list";
import {combineReducers, createStore} from "redux";
import moduleReducer from "../../reducers/module-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import topicReducer from "../../reducers/topic-reducer";
import {Provider} from "react-redux";
import LessonTabs from "./lesson-tabs";


const reducer=combineReducers({
    moduleReducer:moduleReducer,
    lessonReducer:lessonReducer,
    topicReducer:topicReducer

})
const store=createStore(reducer)
const CourseEditor =({history})=> {
    const {courseId, moduleId} =useParams();
    return(
        <Provider store={store}>
            <div className="container-fluid">

                <div>
                    <div className="row ">
                        <div className="col-1">

                            <i onClick={() => {
                                history.goBack()
                            }}
                               className=" fa fa-times fa-2x "
                               title="go back last page"></i>

                        </div>
                        <div className="col-3  ">


                            <h4 className="color-white ">CS5610-WebDev</h4>

                        </div>
                        <div className="col-7">
                            Course :{courseId} Module: {moduleId}
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-4">

                        <ModuleList/>
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
