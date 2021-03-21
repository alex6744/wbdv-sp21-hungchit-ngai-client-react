import React,{useState, useEffect} from "react";
import {connect} from 'react-redux'
import widgetService from "../../services/widget-service"
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";
const WidgetList=(
    {
        widgets=[],
        createWidget,
        updateWidget,
        deleteWidget,
        findWidgetsForTopic
    })=>{
    const {topicId}=useParams();
    useEffect(()=>{
            findWidgetsForTopic(topicId)
    },[topicId])

    return(
        <div>
            <i className="fas fa-plus float-right"></i>
            <h1>Widget</h1>


            <HeadingWidget/>
            <ParagraphWidget/>
        </div>
    )
}
const stpm=(state)=>{
    return{
        widgets:state.widgetReducer.widgets
    }
}

const dtpm=(dispatch)=>({
    createWidget:(topicId)=>{
        widgetService.createWidget(topicId,{name: "ABC123",type: "HEADING",size:1})
            .then(widget=>dispatch({type:"CREATE_WIDGET",widget:widget}))
    },
    updateWidget:(newItem)=>{
        widgetService.updateWidget(newItem.id,newItem)
            .then(status=>dispatch({type:"UPDATE_WIDGET",updateWidget:newItem}))
    },
    deleteWidget:(widgetToDelete)=>{
        widgetService.deleteWidget(widgetToDelete)
            .then(status=>dispatch({type:"DELETE_WIDGET", widgetToDelete:widgetToDelete}))
    },
    findWidgetsForTopic:(topicId)=>{
        widgetService.findWidgetsForTopic(topicId)
            .then(widgets=>dispatch({type:"FIND_ALL_WIDGETS_FOR_TOPIC",widgets:widgets}))
    }
})
export default connect(stpm,dtpm)(WidgetList) ;