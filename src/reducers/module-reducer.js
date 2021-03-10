const intitialState={
    modules:[
        {title: "Module 123"},
        {title: "Module 234"},
        { title: "Module 345"}
    ]
}

const moduleReducer =(state=intitialState,action)=>{
    switch (action.type) {
        case "CREATE_MODULE":
        case "FIND_MODULES_FOR_COURSE":
        case "UPDATE_MODULE":
        case "DELETE_MODULE":
        default:
            return state
    }
}
export default moduleReducer