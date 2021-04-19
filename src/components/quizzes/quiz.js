import React,{useEffect,useState} from "react";
import {Link, useParams} from "react-router-dom";
import Question from "./questions/question";
import quizService from "../../services/quizzes-service";
import questionService from "../../services/questions-service";

const Quiz=()=>{
    const [questions,setQuestions]=useState([])
    const [quiz,setQuiz]=useState({})
    const {courseId,quizId}=useParams();
    const [enable,setEnable]=useState(false)
    const [attempt,setAttempt]=useState([])
    const [result,setResult]=useState({})


    useEffect(()=>{
        questionService.findQuestionsForQuiz(quizId)
            .then(questions=>setQuestions(questions))
        quizService.findQuizById(quizId)
            .then(quiz=>setQuiz(quiz))
    },[])
    return(
        <div>
            <h1>
                {quiz.title}
                <Link to={`/courses/${courseId}/quizzes`}>
                    <i className="fas fa-times float-right "></i>
                </Link>
            </h1>
            <div className="list-group">
                {


                    questions.map(question=>
                        <div className="list-group-item">
                            <Question question={question}
                                        attempt={attempt}
                                        setAttempt={setAttempt}/>
                        </div>


                    )
                }
            </div>
            <br/>
            <button className="float-right btn btn-success"
                    disabled={`${enable?'disabled':''}`}
                    onClick={()=> {
                        if(attempt.length===questions.length){
                            setEnable(true)
                            quizService.submitQuiz(quizId,attempt).then(result=>setResult(result))

                        }else{
                            alert("please answer all questions")
                        }

                    }}>Get your score</button>
            Score:
            <br/>
            {
                enable&&
                  result.score
            }

        </div>
    )
}
export default Quiz