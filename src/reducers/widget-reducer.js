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

        default:
            return state
    }
}
export default widgetReducer