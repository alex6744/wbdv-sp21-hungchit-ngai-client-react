const intitialState={
    lessons:[]
}

const lessonReducer =(state=intitialState,action)=>{
    switch (action.type){
        case "CREATE_LESSON":
        case "FIND_LESSONS_FOR_MODULE":
        case "UPDATE_LESSON":
        case "DELETE_LESSON":
        default:
            return state
    }
}
export default lessonReducer