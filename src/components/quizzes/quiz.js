import React,{useEffect,useState} from "react";
import {Link, useParams} from "react-router-dom";
import Question from "./questions/question";
import quizService from "../../services/quizzes-service";
import questionService from "../../services/questions-service";

const Quiz=()=>{
    const [questions,setQuestions]=useState([])
    const [quiz,setQuiz]=useState({})
    const {courseId,quizId}=useParams();
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
                            <Question question={question}/>
                        </div>


                    )
                }
            </div>
        </div>
    )
}
export default Quiz