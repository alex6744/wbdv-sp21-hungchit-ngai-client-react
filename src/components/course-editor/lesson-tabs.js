import React from 'react'
import {connect} from 'react-redux'
import TopicPills from "./topic-pills";

const LessonTabs=()=>{

    return(
        <div>
            <h2>Lessons</h2>
            <TopicPills/>
        </div>

    )
}

const stpm=()=>{

}
const dtpm=()=>{

}

export default connect(stpm,dtpm)(LessonTabs)