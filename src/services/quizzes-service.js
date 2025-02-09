//const QUIZZES_URL = 'http://localhost:3000/api/quizzes';
const QUIZZES_URL ='https://hungchit-ngai-node.herokuapp.com/api/quizzes';
const findAllQuizzes = () => {
    return fetch(QUIZZES_URL)
        .then(response => response.json())
}
const findQuizById = (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}`)
        .then(response => response.json())
}
const submitQuiz = (quizId, questions) => {
   return  fetch(`${QUIZZES_URL}/${quizId}/attempts`, {
        method: 'POST',
        body: JSON.stringify(questions),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

}
const findAttempts=(qid)=>fetch(`${QUIZZES_URL}/${qid}/attempts`).then(response => response.json())

export default {
    findAllQuizzes, findQuizById,submitQuiz,findAttempts
}
