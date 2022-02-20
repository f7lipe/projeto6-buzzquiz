const API_REPO = 'https://mock-api.driven.com.br/api/v4/buzzquizz/'


function comparador(){
    return Math.random() - 0.5
}

const userSession = {
    userQuizzes : ''
}

const quizViewrDiv = document.querySelector('.quiz-viewr')

function manageView(hidding, showing, id=''){
    const hiddingDiv =  document.getElementsByClassName(hidding)
    hiddingDiv[0].remove()
    const showingDiv =  document.getElementsByClassName(showing)
    showingDiv[0].classList.toggle('hidden')
    //carrega a segunda tela apenas se id !== ''
    if (id !== ''){
     loadQuiz(id)
    }
 }

 function lockInteraction(div){
    div.classList.add('no-interaction')
  }

  function unlockInteraction(div){
    div.classList.remove('no-interaction')
  }

  function scrollTo(div, duration){
    setTimeout(div.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" }), duration)
  }