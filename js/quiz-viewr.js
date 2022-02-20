const currentSession = {
  id: null, 
  title: null, 
  image: null, 
  questions: null, 
  levels: null, 
  rigthAnswers: null,
  answeredQuestions: null
}
const inner = quizViewrDiv
function loadQuiz(id) {
  const promise = axios.get(API_REPO + 'quizzes/' + id)
  promise.then(quiz => {
    const quizData = quiz.data
    currentSession['id'] = quizData.id
    currentSession['title'] = quizData.title
    currentSession['image'] = quizData.image
    currentSession['questions'] = quizData.questions
    currentSession['levels'] = quizData.levels

    renderQuiz(currentSession.title, currentSession.image, currentSession.questions) 

  })
}

function renderQuiz(title, image, questions) {
  scrollTo(quizViewrDiv, 0)
  const header = 
  `
  <img class="overlay" src="${image}" alt="">
  <p class="text-body">${title}</p>
  `
  const quizHeader = quizViewrDiv.querySelector('.header-figure')
  quizHeader.innerHTML = header
  let i = 0;
  questions.forEach(question => {
    const questionTitle = question.title
    const questionColor = question.color
    const questionAnswers = question.answers
    const shuffledAnswers = questionAnswers.sort(comparador)
    let figures = ''
    shuffledAnswers.forEach(answer => {
      const answerText = answer.text
      const answerImage = answer.image
      const answerFigure = `
      <div class="figure" id="${answer.isCorrectAnswer}" onClick = "selectAnswer(${answer.isCorrectAnswer}, this, ${i})">
        <img src="${answerImage}" alt="">
        <p class="answer-title">${answerText}</p>
      </div>
      `
      figures += answerFigure
    })
    i++
    quizViewrDiv.innerHTML += createCard(questionTitle, questionColor, figures)
  });
}

function selectAnswer(answer, selectedFigure, parentIndex) {
  console.log(currentSession)
  let boxes = document.querySelectorAll('.level-box ')
  const currentBox = boxes[parentIndex]
  const figures = currentBox.querySelectorAll('.figure')

  currentSession['answeredQuestions'] += 1
  if (answer) { currentSession['rigthAnswers'] += 1 }

  figures.forEach(figure => {
    lockInteraction(figure)
    if (figure !== selectedFigure) {
      figure.classList.toggle('opacity')
    }
    const figureText = figure.querySelector('p').classList
    figure.id === "true" ? figureText.add('text-green') : figureText.add('text-red')
  })

  if(currentSession.answeredQuestions === currentSession.questions.length){

    const rigthAnswers = currentSession.rigthAnswers
    const numberOfQuestions = currentSession.questions.length
    const userScore = evaluateScore(rigthAnswers, numberOfQuestions)
    const userLevel = checkLevel(userScore)
    const title = `${userScore}% de acerto: ${userLevel.text}`
    const answerFigure = `
    <div class="figure large">
      <img src="${userLevel.image}" alt="">
      <p class="answer-title">${userLevel.text}</p>
    </div>
    `
    const card = createCard(title, 'red', answerFigure, 'figure-answer')
    quizViewrDiv.innerHTML += card
    addButtons()
    boxes = document.querySelectorAll('.level-box ')
    
  } 

  const nextFigure = boxes[parentIndex+1]
  scrollTo(nextFigure, 2000)
}



function evaluateScore(rigthAnswers, numberOfQuestions) {
  return Math.round((rigthAnswers / numberOfQuestions) * 100)
}

function createCard(title, color, figure, figureCLass='') {
  const cardTemplate = `
  <!-- Caixa com o nível do quiz-->
  <div class="level-box d-flex flex-column space-around align-items-center">
    <section class="title-box d-flex align-items-center justify-content-center" style="background: ${color};"> 
      <p class="text-center box-title">${title}</p> 
    </section>
    <section class=" figures ${figureCLass} d-flex flex-wrap space-between">
      ${figure}
    </section>
  </div>
  `
  return cardTemplate
}

function checkLevel(score){
  const levels = currentSession.levels
  
   const userLevel = {title: null, image: null, text: null}
  
   levels.forEach(level =>{
    if (score >= level.minValue){
      userLevel['title'] = level.title
      userLevel['image'] = level.image
      userLevel['text'] = level.text
    }
   })


  return userLevel
}

function addButtons(){
  const buttons = `        
  <div class="buttons d-flex flex-column align-items-center justify-content-center">
  <button class="btn-phill-fill" onClick=" resetQuizz()">Reiniciar quiz</button>
  <button onClick="backHome()"> Voltar para tela de início </button>
  </div>`

  quizViewrDiv.innerHTML+= buttons
}

function backHome(){
  location.reload()
}

function resetQuizz(){

currentSession.rigthAnswers = null
currentSession.answeredQuestions = null

const level_boxes = document.querySelectorAll('.level-box ')
level_boxes.forEach(level_box=>{
  level_box.remove()
}) 

document.querySelector('.buttons').remove()

loadQuiz(currentSession.id)

}
