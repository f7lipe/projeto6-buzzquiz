const currentSession = {
  id: null, 
  title: null, 
  image: null, 
  questions: null, 
  levels: null, 
  rigthAnswers: null,
  answeredQuestions: null,
  initalState: queryDivByClassName('.quiz-viewr')
}

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
  const quizViewerDiv = currentSession.initalState
  scrollToView(quizViewerDiv, 0)
  const header = 
  `
  <img class="overlay" src="${image}" alt="">
  <p class="text-body">${title}</p>
  `
  const quizHeader = quizViewerDiv.querySelector('.header-figure')
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
    quizViewerDiv.innerHTML += createCard(questionTitle, questionColor, figures, false)
  });
}

function selectAnswer(answer, selectedFigure, parentIndex) {
  updateAsnweredQuestions(answer)

  const quizViewerDiv = currentSession.initalState
  let cards = queryAll('.level-box ')
  const currentCard = cards[parentIndex]
  const cardFigures = currentCard.querySelectorAll('.figure')

 

  cardFigures.forEach(figure => {
    lockInteraction(figure)
    const figureText = figure.querySelector('p').classList
    if (!areEquals(figure,selectedFigure)) {addOpacity(figure)}
    areEquals(figure.id, "true") ? figureText.add('text-green') : figureText.add('text-red')
  })

  if(areEquals(currentSession.answeredQuestions, currentSession.questions.length)){
    

    const rigthAnswers = currentSession.rigthAnswers
    const numberOfQuestions = currentSession.questions.length
    const userScore = evaluateScore(rigthAnswers, numberOfQuestions)
    const userLevel = checkLevel(userScore)
    const title = `${userScore}% de acerto: ${userLevel.title}`
    const answerFigure = `
    <div class="figure d-flex flex-column" data-identifier="answer">
      <img src="${userLevel.image}" alt="">
      <p class="answer-title">${userLevel.text}</p>
    </div>
    `
    const card = createCard(title, 'red', answerFigure, isResultCard = true)
    quizViewerDiv.innerHTML += card
    addButtons(quizViewerDiv)
    cards = queryAll('.level-box ')
  } 

  const nextFigure = cards[parentIndex+1]
  scrollToView(nextFigure, 2000)
}

function updateAsnweredQuestions(answer){
  currentSession['answeredQuestions'] += 1
  if (answer) { currentSession['rigthAnswers'] += 1 }
}


function evaluateScore(rigthAnswers, numberOfQuestions) {
  return Math.round((rigthAnswers / numberOfQuestions) * 100)
}


function createCard(title, color, figure, isResultCard) {
  const cardTemplate = `
  <!-- Caixa com o nível do quiz-->
  <div class="level-box d-flex flex-column space-around align-items-center">
    <section class="title-box d-flex align-items-center justify-content-center" style="background: ${color};" data-identifier="question"> 
      <p class="text-center box-title">${title}</p> 
    </section>
    <section class=" figures d-flex flex-wrap">
      ${figure}
    </section>
  </div>
  `

  const resultCardTemplate = `
  <!-- Caixa com o nível do quiz-->
  <div class="level-box result-card d-flex flex-column space-around align-items-center">
    <section class="title-box d-flex align-items-center justify-content-center" style="background: red;" > 
      <p class="text-center box-title">${title}</p> 
    </section>
    <section class=" figures d-flex flex-wrap justify-content-center" data-identifier="quizz-result">
      ${figure}
    </section>
  </div>
  `

  const card = isResultCard ? resultCardTemplate : cardTemplate

  return card
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

function addButtons(location){
  const buttons = `        
  <div class="buttons d-flex flex-column align-items-center justify-content-center">
  <button class="btn-phill-fill" onClick=" resetQuizz()">Reiniciar quiz</button>
  <button class="btn-unfilled text-gray" onClick="reload()"> Voltar para tela de início </button>
  </div>`

  location.innerHTML+= buttons
}


function resetQuizz(){

currentSession.rigthAnswers = null
currentSession.answeredQuestions = null

const level_boxes = queryAll('.level-box ')
level_boxes.forEach(level_box=>{
  level_box.remove()
}) 

queryDivByClassName('.buttons').remove()

loadQuiz(currentSession.id)

}
