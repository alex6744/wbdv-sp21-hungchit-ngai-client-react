import React ,{useEffect,useState}from "react";
import {Link, useParams} from "react-router-dom";

import quizService from "../../../services/quizzes-service";
import "../questions/questions.css"
const AttemptsList=()=>{
    const [attempts,setAttempts]=useState([])
    const {courseId,quizId}=useParams();
var i=0
    useEffect(()=>{

        quizService.findAttempts(quizId).then(attempts=>setAttempts(attempts))

    },[])
    return(
        <div>
            <Link to={`/courses/${courseId}/quizzes`}>
                <i className="fas fa-times float-right fa-3x"></i>
            </Link>
            <br/>
            <br/>
            <div >

                {

                    attempts.map(attempt=>
                        <ul className="list-group">

                            <li className="list-group-item background-blue">
                                Attempt {i++}
                            </li>
                            <li className="list-group-item">
                                Score: {attempt.score}
                            </li>
                            {
                                attempt.answers.map(answer=>
                                    <div>
                                        <li className="list-group-item color-blue">
                                           Question: {answer.question}
                                        </li>
                                        <li className="list-group-item">
                                        Your answer: {answer.answer}
                                        </li>
                                        <li className="list-group-item">
                                            Correct answer: {answer.correct}
                                        </li>
                                    </div>
                                )
                            }
                            <br/>
                            <br/>
                        </ul>


                    )
                }

            </div>
        </div>
    )

}
export default AttemptsList