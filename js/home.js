const quizzesPath = '/quizzes'

function loadQuizzes(){
    const promise = axios.get(API_REPO+quizzesPath)
    promise.then(renderQuizzes)
    promise.catch(/* tratar erro */)
}

function renderQuizzes(quizzes){

    let quizType = null
    let count = null
    quizzes.data.forEach(quiz => {
        const id = quiz.id
		const title = quiz.title
		const imageUrl = quiz.image

        if(existsInLocalStorage(id)){
            quizType = '.users-quizzes'
            count++
        } else {
            quizType = '.all-quizzes'
        }
    
        const quizzesDiv = document.querySelector(quizType)
        let quizCardTemplate = createQuizCard(title, imageUrl, id)
    
        quizzesDiv.innerHTML += quizCardTemplate
    });

       if (count >0){
        toggleClass('.new-quiz', 'hidden')
        toggleClass('.users-quizzes-header', 'hidden')
       } 
}

function leaveHome(showing){

    const hiddingDiv =  document.querySelector('.home')
    if (hiddingDiv.classList.contains('hidden')){
        const showingDiv =  document.querySelector(showing)
        showingDiv.classList.toggle('hidden')

    } else {
        const showingDiv =  document.querySelector(showing)
        showingDiv.classList.toggle('hidden')
        hiddingDiv.classList.toggle('hidden')
        
    }

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