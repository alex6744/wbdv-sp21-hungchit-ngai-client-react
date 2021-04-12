import React,{useState} from "react";

const TrueFalseQuestion=({question})=>{
    const [answer,setAnswer]=useState(null)
    return(

        <div>


            <h4>{question.question}
                {
                    answer===question.correct &&
                    <i className="fas fa-check"></i>
                }
                {
                    answer!==question.correct &&<i className="fas fa-times"></i>
                }

            </h4>
            {question.correct}

            <br/>
            {JSON.stringify(answer)}
            <br/>
            <label><input onClick={()=>setAnswer(true)}
                type="radio" name={question._id}/>True</label>
            <br/>
            <label><input onClick={()=>setAnswer(false)}
                type="radio"name={question._id}/>False</label>
        </div>
    )
}
export default TrueFalseQuestion