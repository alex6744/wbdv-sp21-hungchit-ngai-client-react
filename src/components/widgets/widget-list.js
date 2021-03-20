import React from "react";
import {connect} from 'react-redux'

const WidgetList=()=>{
    return(
        <div>

        </div>
    )
}
const stpm=(state)=>{
    return{
        widgets:state.widgetReducer.widgets
    }
}

const dtpm=(dispatch)=>({

})
export default connect(stpm,dtpm)(WidgetList) ;