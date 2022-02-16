const quizzesPath = '/quizzes'

function loadQuizzes(){
    const promise = axios.get(API_REPO+quizzesPath)
    promise.then(renderQuizzes)
    promise.catch(/* tratar erro */)
}

function renderQuizzes(quizzes){

    quizzes.data.forEach(quiz => {
        const id = quiz.id
		const title = quiz.title
		const imageUrl = quiz.image
        const questions = quiz.questions
        const levels = quiz.levels

        let quizType = null

        //verificar se o usuário é o dono do quiz [A SER IMPLEMENTADO]
            //se verdadeiro carregar como quizzes do usuário
            //se falso carregar como todos o quizzes 
            quizType = '.all-quizzes'
        const quizzesDiv = document.querySelector(quizType)
        console.log(quizzesDiv)
        let quizCardTemplate = `
        <article class="quiz-card" onClick = "manageView('home')"> 
        <img  src=${imageUrl}>
        <p class="text-body">${title}</p>
        </article>`

        quizzesDiv.innerHTML += quizCardTemplate
    });
}
 
function manageView(className){
   const div =  document.getElementsByClassName(className)
   div[0].classList.toggle('hidden')
}

loadQuizzes()