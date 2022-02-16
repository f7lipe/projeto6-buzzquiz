const quizzesPath = '/quizzes'

function loadQuizzes(){
    const promise = axios.get(API_REPO+quizzesPath)
    promise.then(renderQuiz)
    promise.catch(/* tratar erro */)
}

function renderQuiz(quizzes){

    quizzes.data.forEach(quiz => {
        console.log(quiz)
    });
}