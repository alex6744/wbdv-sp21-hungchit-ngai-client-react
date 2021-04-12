
// const QUIZZES_URL = 'http://localhost:3000/api/quizzes';
const QUIZZES_URL ='https://hungchit-ngai-node.herokuapp.com/api/quizzes';
const findQuestionsForQuiz = (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}/questions`)
        .then(response => response.json())
}
export default {
    findQuestionsForQuiz
}
