import React,{useState} from "react";
import "./questions.css"
const MultipleChoiceQuestion=({question})=>{
    const [yourAnswer,setYourAnswer]=useState("")
    const [graded,setGraded]=useState(false)
    return(

        <div>
            <h4>
                {question.question}
                {
                    graded&&yourAnswer===question.correct&&
                    <i className="fas fa-check float-right color-green"></i>
                }
                {
                    graded&&yourAnswer!==question.correct&&
                    <i className="fas fa-times float-right color-red"></i>
                }
            </h4>

            <ul className="list-group">
                <div onChange={(e)=>setYourAnswer(e.target.value)}>
                {
                    question.choices.map((choice)=>{
                        return(
                            <li className={`list-group-item 
                            ${graded?(choice==question.correct?'list-group-item-success':'')||
                                (yourAnswer===choice)&&(choice==question.correct?'':'list-group-item-danger')
                                :''}
                            `}>

                                    <label><input type="radio"
                                                  value={choice}
                                                  name={question._id}
                                                  disabled={`${graded?'disabled':''}`}
                                                  onClick={()=>setYourAnswer(choice)}/>
                                        {choice}

                                    </label>

                                {
                                    graded&&choice===question.correct&&
                                    <i className="fas fa-check float-right"></i>

                                }
                                {
                                    graded&&choice!==question.correct&&yourAnswer===choice&&
                                    <i className="fas fa-times float-right"></i>
                                }
                            </li>

                        )
                    })
                }
                </div>
            </ul>
            <br/>
            <p>Your answer: {yourAnswer}</p>
            <button className="btn btn-success"
                    onClick={()=> {
                        if(yourAnswer===""){
                            alert("please choice an answer" )
                        }else {
                        setGraded(true)
                        }
                    }}>
                Grade
            </button>
        </div>
    )
}
export default MultipleChoiceQuestion