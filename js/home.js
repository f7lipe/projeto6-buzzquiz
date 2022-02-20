const quizzesPath = '/quizzes'

function loadQuizzes(){
    const promise = axios.get(API_REPO+quizzesPath)
    promise.then(renderQuizzes)
    promise.catch(/* tratar erro */)
}

function renderQuizzes(quizzes){

    let quizType = null
    quizzes.data.forEach(quiz => {
        const id = quiz.id
		const title = quiz.title
		const imageUrl = quiz.image
        
        if(existsInLocalStorage(id)){
            quizType = '.users-quizzes'
        } else {
            quizType = '.all-quizzes'
        }
    
        const quizzesDiv = document.querySelector(quizType)
        let quizCardTemplate = createQuizCard(title, imageUrl, id)
    
        quizzesDiv.innerHTML += quizCardTemplate
    });


}

function leaveHome(showing){
    const hiddingDiv =  document.querySelector('.home')
    hiddingDiv.remove()
    const showingDiv =  document.querySelector(showing)
    showingDiv.classList.toggle('hidden')
 }

 function showQuizz(id){
    leaveHome('.quiz-viewr')
    loadQuiz(id)
 }

 function createQuizCard(title, imageUrl, id){
     const template = `
     <article class="quiz-card shadow-overlay" onClick="showQuizz(${id})"  > 
    <img src=${imageUrl}>
    <p class="text-body">${title}</p>
    </article>
    `
    return template
 }
 
loadQuizzes()