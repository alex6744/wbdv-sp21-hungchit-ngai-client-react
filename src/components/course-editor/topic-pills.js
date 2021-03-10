import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import topicService from '../../services/topic-service'

const TopicPills = (
    {
        topics=[

        ],
        findTopicsForLesson,
        createTopic,
        deleteTopic,
        updateTopic
    }) => {
    const {layout,courseId, moduleId, lessonId,topicId} = useParams();
    useEffect(() => {
        //console.log("LOAD LESSONS FOR MODULE: " + moduleId)
        if(lessonId !== "undefined" && typeof lessonId !== "undefined") {
            findTopicsForLesson(lessonId)
        }
    }, [lessonId])
    const a=(top)=>{
        console.log(top)
        return true
    }
    return(

        <div>
            <h2>pills11</h2>
            {
                <ul className="nav nav-pills">
                {
                    (a(topics))&&
                    topics.map(topic =>
                        <li className="nav-item">
                            <EditableItem
                                active={topic._id === topicId}
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                                item={topic}
                                deleteItem={deleteTopic}
                                updateItem={updateTopic}/>
                        </li>
                    )
                }
                    <li>
                        <i onClick={() => {
                            console.log(topics)
                            createTopic(lessonId)
                        }} className="fas fa-plus"></i>
                    </li>
                </ul>
            }
        </div>)}

const stpm = (state) => ({
    topics: state.topicReducer.topics
})
const dtpm = (dispatch) => ({
    findTopicsForLesson: (lessonId) => {

        topicService.findTopicsForLesson(lessonId)
            .then(topics => dispatch({
                type: "FIND_TOPICS_FOR_LESSON",
                topics
            }))
    },
    createTopic: (lessonId) => {

        topicService
            .createTopic(lessonId, {title: "New topic"})
            .then(topic => dispatch({
                type: "CREATE_TOPIC",
                topic
            }))
    },
    deleteTopic: (topicToDelete) => {
        topicService.deleteTopic(topicToDelete._id)
            .then(status => dispatch({type: "DELETE_TOPIC", topicToDelete: topicToDelete}))
    },
    updateTopic: (newItem) => {
        topicService.updateTopic(newItem._id, newItem)
            .then(status => dispatch({type: "UPDATE_TOPIC", updateTopic: newItem}))
    }
})

export default connect(stpm, dtpm)(TopicPills)