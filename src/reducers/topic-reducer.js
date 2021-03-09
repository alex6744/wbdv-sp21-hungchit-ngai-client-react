const intitialState={
    topics:[]
}

const topicReducer =(state=intitialState,action)=>{
    switch (action.type){
        case "CREATE_TOPIC":
        case "FIND_TOPICS_FOR_LESSON":
        case "UPDATE_TOPIC":
        case "DELETE_TOPIC":
        default:
            return state
    }
}
export default topicReducer