const intitialState={
    widgets:[

        ]
}

const widgetReducer =(state=intitialState,action)=>{
    switch (action.type){
        case "CREATE_WIDGET":
            return {
                ...state,
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
        case "FIND_ALL_WIDGETS_FOR_TOPIC":
            return {
                ...state,
                widgets: action.widgets
            }
        case "UPDATE_WIDGET":
            return {
                ...state,
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.updateWidget.id) {
                        return action.updateWidget
                    } else {
                        return widget
                    }
                })
            }
        case "DELETE_WIDGET":
            return {
                ...state,
                widgets:state.widgets.filter(widget=>{
                    if(widget.id !== action.widgetToDelete.id){
                        return true
                    }else {
                        return false
                    }
                })
            }
        default:
            return state
    }
}
export default widgetReducer