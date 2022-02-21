const API_REPO = 'https://mock-api.driven.com.br/api/v4/buzzquizz/'
const localStorage = window.localStorage

function comparador(){
    return Math.random() - 0.5
}


const quizViewrDiv = document.querySelector('.quiz-viewr')



 function lockInteraction(div){
    div.classList.add('no-interaction')
  }

  function unlockInteraction(div){
    div.classList.remove('no-interaction')
  }

  function scrollTo(div, duration){
    setTimeout(div.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" }), duration)
  }

  function existsInLocalStorage(key){
    return localStorage.getItem(key) !== null
}

function toggleClass(currentElement, toggleElement){
  console.log(toggleElement)
  const div = document.querySelector(currentElement)
  div.classList.toggle(toggleElement)
}