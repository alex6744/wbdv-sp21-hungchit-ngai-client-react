import React,{useState} from "react";
import "./questions.css"
const TrueFalseQuestion=({question,attempt,setAttempt})=>{
    const [yourAnswer,setYourAnswer]=useState("")
    const [graded,setGraded]=useState(false)
    return(

        <div>


            <h4>{question.question}
                {
                    yourAnswer==question.correct && graded &&
                    <i className="fas fa-check float-right color-green"></i>
                }

                {
                    yourAnswer!=question.correct && graded &&
                    <i className="fas fa-times float-right color-red"></i>
                }

            </h4>

            <br/>
            <ul className="list-group">
                <li className={`list-group-item 
                ${graded?(question.correct==='true'?'list-group-item-success':'')||
                    (yourAnswer==='true')&&(question.correct==='true'?'':'list-group-item-danger')
                    :''}`}>
                    <label><input onClick={()=>setYourAnswer("true")}
                                  type="radio"
                                  name={question._id}
                                  disabled={`${graded?'disabled':''}`}/>
                        True
                    </label>
                    {
                        graded&&question.correct==="true"&&
                        <i className="fas fa-check float-right"></i>

                    }
                    {
                        graded&&question.correct!=="true"&&yourAnswer==="true"&&
                        <i className="fas fa-times float-right"></i>
                    }
                </li>
                <li className={`list-group-item 
                ${graded?(question.correct==='false'?'list-group-item-success':'')||
                    (yourAnswer==='false')&&(question.correct==='false'?'':'list-group-item-danger')
                    :''}`}>
                    <label><input onClick={()=>setYourAnswer("false")}
                                  type="radio"
                                  name={question._id}
                                  disabled={`${graded?'disabled':''}`}/>
                                  False
                    </label>
                    {
                        graded&&question.correct==="false"&&
                        <i className="fas fa-check float-right"></i>

                    }
                    {
                        graded&&question.correct!=="false"&&yourAnswer==="false"&&
                        <i className="fas fa-times float-right"></i>
                    }
                </li>


            </ul>

            <br/>
            <p>Your answer: {yourAnswer}</p>



            <button className="btn btn-success"
                    onClick={()=> {
                        if(yourAnswer===""){
                            alert("please choice an answer" )
                        }else {
                            setGraded(true)
                            setAttempt(old=>[...old,{...question, answer: yourAnswer}])
                        }
                    }}>
                Grade
            </button>
        </div>
    )
}
export default TrueFalseQuestion