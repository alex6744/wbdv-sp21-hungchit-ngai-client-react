import React from "react";

const MultipleChoiceQuestion=({question})=>{
    return(

        <div>
            <h4>{question.question}</h4>
            <div className="list-group">
                {
                    question.choices.map((choice)=>{
                        return(
                            <div className="list-group-item">
                                <label><input type="radio" name={question._id}/>
                                    {choice}

                                </label>

                            </div>

                        )
                    })
                }
            </div>
            <br/>
            <h5>Your answer:</h5>
            <br/>
            <button className="btn btn-success">Grade</button>
        </div>
    )
}
export default MultipleChoiceQuestion