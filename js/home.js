const quizzesPath = '/quizzes'

function loadQuizzes(){
    const promise = axios.get(API_REPO+quizzesPath)
    promise.then(renderQuizzes)
    promise.catch(/* tratar erro */)
}

function renderQuizzes(quizzes){

    let quizType = null
    let didUserHaveQuizzes = null
    quizzes.data.forEach(quiz => {
        const id = quiz.id
		const title = quiz.title
		const imageUrl = quiz.image

        if(existsInLocalStorage(id)){
            quizType = '.users-quizzes'
            didUserHaveQuizzes = true
        } else {
            quizType = '.all-quizzes'
        }
    
        const quizzesDiv = queryDivByClassName(quizType)
        quizzesDiv.innerHTML += createQuizCard(title, imageUrl, id)
    });

       if (didUserHaveQuizzes){
        toggleClass('.new-quiz', 'hidden')
        toggleClass('.users-quizzes-header', 'hidden')
       } 
}


loadQuizzes()