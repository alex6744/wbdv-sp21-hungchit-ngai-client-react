import React, {useState,useEffect} from  "react"
import {Link, useParams} from "react-router-dom";
import quizService from "../../services/quizzes-service";

const QuizzesList=()=>{
    const [quizzes,setQuizzes]=useState([])
    const {courseId}=useParams()

    useEffect(()=>{
        quizService.findAllQuizzes()
            .then((quizzes)=>{
                setQuizzes(quizzes)
            })

    },[])
    return(
        <div>
            <h1>
                Quizzes
                <Link to={`/courses/table`}>
                    <i className="fas fa-home float-right "></i>
                </Link>
            </h1>

            <ul className="list-group">
                {
                    quizzes.map((quiz)=>
                            <li className="list-group-item">
                                <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                                    {quiz.title}

                                    <button className="btn btn-primary float-right">start</button>
                                </Link>
                                <Link to={`/courses/${courseId}/quizzes/${quiz._id}/attempts`}>
                                    <button className="float-right btn btn-danger">find your attempts</button>
                                </Link>

                            </li>




                    )
                }
            </ul>
        </div>
    )
}

export default QuizzesList