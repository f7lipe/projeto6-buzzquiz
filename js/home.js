const quizzesPath = '/quizzes'

function loadQuizzes(){
    const promise = axios.get(API_REPO+quizzesPath)
    promise.then(renderQuizzes)
    promise.catch(/* tratar erro */)
}

function renderQuizzes(quizzes){

    quizzes.data.forEach(quiz => {
        const id = quiz.id !== null ? quiz.id : ''
		const title = quiz.title
		const imageUrl = quiz.image
        let quizType = null

        //verificar se o usuário é o dono do quiz [A SER IMPLEMENTADO]
            //se verdadeiro carregar como quizzes do usuário
            //se falso carregar como todos o quizzes 
            quizType = '.all-quizzes'
        const quizzesDiv = document.querySelector(quizType)
        let quizCardTemplate = `
         <article class="quiz-card shadow-overlay" onClick="manageView('home', 'quiz-viewr', ${id})"  > 
        <img src=${imageUrl}>
        <p class="text-body">${title}</p>
        </article>`
        /* Implementar em quizCardTemplate ao final da feature 3: onClick = "manageView('home', 'creater-home')"*/
        
        quizzesDiv.innerHTML += quizCardTemplate
    });
}
 
function manageView(hidding, showing, id=''){
   const hiddingDiv =  document.getElementsByClassName(hidding)
   hiddingDiv[0].classList.toggle('hidden')
   const showingDiv =  document.getElementsByClassName(showing)
   showingDiv[0].classList.toggle('hidden')
   //carrega a segunda tela apenas se id !== ''
   if (id !== ''){
    loadQuiz(id)
   }
}

loadQuizzes()