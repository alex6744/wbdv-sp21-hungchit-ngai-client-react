import React from "react";
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";

const Question=({question,attempt,setAttempt})=>{
    return(
        <div>
            {
                question.type==="TRUE_FALSE"&&
                    <TrueFalseQuestion question={question}
                                        attempt={attempt}
                                       setAttempt={setAttempt}/>
            }
            {
                question.type==="MULTIPLE_CHOICE"&&
                    <MultipleChoiceQuestion question={question}
                                            attempt={attempt}
                                            setAttempt={setAttempt}/>
            }
        </div>
    )
}
export default Question