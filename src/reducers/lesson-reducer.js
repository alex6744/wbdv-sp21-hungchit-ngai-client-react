const intitialState={
    lessons:[]
}

const lessonReducer =(state=intitialState,action)=>{
    switch (action.type){
        case "CREATE_LESSON":
            return {
                ...state,
                lessons: [
                    ...state.lessons,
                    action.lesson
                ]
            }
        case "FIND_LESSONS_FOR_MODULE":
            return {
                ...state,
                lessons: action.lessons
            }
        case "UPDATE_LESSON":
        case "DELETE_LESSON":
        default:
            return state
    }
}
export default lessonReducer