const API_REPO = 'https://mock-api.driven.com.br/api/v4/buzzquizz/'
const localStorage = window.localStorage

function addOpacity(element){
  element.classList.toggle('opacity')
}

function areEquals(a, b){
  return a === b
}

function comparador(){
    return Math.random() - 0.5
}

function createQuizCard(title, imageUrl, id, isQuiz_creater = false){
  const class_ = isQuiz_creater ? 'quiz-creater' : ''
  const template = `
  <article class="quiz-card ${class_} shadow-overlay" onClick="showQuizz(${id}, '.home')" data-identifier="quizz-card" > 
 <img src=${imageUrl}>
 <p class="text-body">${title}</p>
 </article>
 `
 return template
}

function existsInLocalStorage(key){
  return localStorage.getItem(key) !== null
}

 function lockInteraction(div){
    div.classList.add('no-interaction')
}

function queryDivByClassName(className){
    return document.querySelector(className)
}
  
function queryAll(element){
  return document.querySelectorAll(element)
}

function reload(){
  window.location.reload()
}

function showQuizz(id, currentView){
  
  if (currentView === '.creater-home'){
    const viewFour = document.getElementById('creater-screen-four')
    viewFour.classList.toggle('hidden')
  } else {
  toggleClass(currentView, 'hidden') // esconde o elemento atual 
  }
  toggleClass('.quiz-viewr', 'hidden') // mostra a tela do quiz 
  loadQuiz(id)
}

function showCreaterQuizz(currentView){
  toggleClass(currentView, 'hidden') // esconde o elemento atual 
  toggleClass('.creater-home', 'hidden') // mostra a tela do quiz 
}

function scrollToView(div, duration){
    setTimeout(div.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" }), duration)
}

function toggleClass(currentElement, toggleElement){
  const div = document.querySelector(currentElement)
  div.classList.toggle(toggleElement)
}






