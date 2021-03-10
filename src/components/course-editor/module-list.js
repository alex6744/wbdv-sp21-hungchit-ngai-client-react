import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import moduleService from "../../services/module-service";


const ModuleList=(
    {



    })=>{
    const {courseId,moduleId}=useParams()
    useEffect(()=>{

    })
    return(
        <div>
            <h2>Modules</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <EditableItem/>
                </li>
                <li className="list-group-item">
                    <i  className="fas fa-plus fa-2x"></i>
                </li>
            </ul>

        </div>
    )
}

const stpm=()=>{

}
const dtpm=(dispatch)=>{
    return{
        creatModule:()=>{

        },
    }
}

export default connect(stpm,dtpm)(ModuleList)