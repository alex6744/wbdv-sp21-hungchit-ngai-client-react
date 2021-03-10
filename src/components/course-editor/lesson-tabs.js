import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import lessonService from '../../services/lesson-service'
import TopicPills from "./topic-pills";
const LessonTabs = (
    {
        lessons=[],
        findLessonsForModule,
        createLesson,
        updateLesson,
        deleteLesson
    }) => {
    const {courseId, moduleId, lessonId,layout} = useParams();
    useEffect(() => {
        console.log("LOAD LESSONS FOR MODULE: " + moduleId)
        if(moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId)
        }
    }, [moduleId])
    return(
        <div>
            <h2>Lessons</h2>
            <ul className="nav nav-pills">
                {
                    lessons.map(lesson =>
                        <li className="nav-item">
                            <EditableItem
                                active={lesson._id === lessonId}
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                                item={lesson}
                                updateItem={updateLesson}
                                deleteItem={deleteLesson}/>
                        </li>
                    )
                }
                <li>
                    <i onClick={() => createLesson(moduleId)} className="fas fa-plus"></i>
                </li>
            </ul>
            <TopicPills/>
        </div>)}

const stpm = (state) => ({
    lessons: state.lessonReducer.lessons
})
const dtpm = (dispatch) => ({
    findLessonsForModule: (moduleId) => {

        lessonService.findLessonsForModule(moduleId)
            .then(lessons => dispatch({
                type: "FIND_LESSONS_FOR_MODULE",
                lessons: lessons
            }))
    },
    createLesson: (moduleId) => {

        lessonService
            .createLesson(moduleId, {title: "New Lesson"})
            .then(lesson => dispatch({
                type: "CREATE_LESSON",
                lesson: lesson
            }))
    },
    updateLesson:(newItem)=>{
        lessonService.updateLesson(newItem._id,newItem)
            .then(status=>dispatch({type: "UPDATE_LESSON", updateLesson: newItem}))
    },
    deleteLesson: (lessonToDelete)=>{
        lessonService.deleteLesson(lessonToDelete._id)
            .then(status=>dispatch({type: "DELETE_LESSON", lessonToDelete: lessonToDelete}))
    }

})

export default connect(stpm, dtpm)(LessonTabs)