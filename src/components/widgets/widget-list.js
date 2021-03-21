import React,{useState, useEffect} from "react";
import {connect} from 'react-redux'
import widgetService from "../../services/widget-service"
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";
import "./wiget.css"
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
            <div className="container-fluid">
                <div className="row ">
                    <i onClick={()=>createWidget(topicId)}
                       className="fas fa-plus fa-3x add-position"></i>
                </div>
            </div>
            <div>



                    {
                        widgets.map(widget=>
                            <>


                                {
                                    widget.type==="HEADING"&&
                                    <HeadingWidget

                                        widget={widget}
                                        updateWidget={updateWidget}
                                        deleteWidget={deleteWidget}/>
                                }
                                {
                                    widget.type==="PARAGRAPH"&&
                                    <ParagraphWidget

                                        widget={widget}
                                        updateWidget={updateWidget}
                                        deleteWidget={deleteWidget}/>
                                }
                                <br/>
                            </>
                        )
                    }



            </div>
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
        widgetService.createWidget(topicId,{name: "Heading not being edited",type: "HEADING",size:1,text:"Paragraph not being edited"})
            .then(widget=>dispatch({type:"CREATE_WIDGET",widget:widget}))
    },
    updateWidget:(newItem)=>{
        widgetService.updateWidget(newItem.id,newItem)
            .then(status=>dispatch({type:"UPDATE_WIDGET",updateWidget:newItem}))
    },
    deleteWidget:(widgetToDelete)=>{
        widgetService.deleteWidget(widgetToDelete.id)
            .then(status=>dispatch({type:"DELETE_WIDGET", widgetToDelete:widgetToDelete}))
    },
    findWidgetsForTopic:(topicId)=>{
        widgetService.findWidgetsForTopic(topicId)
            .then(widgets=>dispatch({type:"FIND_ALL_WIDGETS_FOR_TOPIC",widgets:widgets}))
    }
})
export default connect(stpm,dtpm)(WidgetList) ;