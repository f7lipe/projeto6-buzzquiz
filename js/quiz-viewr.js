const quizViewr = '.quiz-viewr'

function loadQuiz(id) {
  const promise = axios.get(API_REPO + 'quizzes/' + id)
  promise.then(renderQuiz)
}


function renderQuiz(quiz) {

  const quizData = quiz.data
  const quizTitle = quizData.title
  const quizImage = quizData.image
  const questions = quizData.questions
  const quizViewrDiv = document.querySelector(quizViewr)

  const templateHeader = `<!-- Imagem com título do quiz-->
    <figure class="header-figure">
      <img class="overlay" src="${quizImage}" alt="">
      <p class="text-body">${quizTitle}</p>
    </figure>`

  let i = 0;
  questions.forEach(question => {
    const title = question.title
    const color = question.color

    const bodyTemplateStart = `<!-- Caixa com o nível do quiz-->
        <article class="level-box d-flex flex-column space-around align-items-center">
          <section class="title-box d-flex align-items-center justify-content-center" style="background: ${color};"> <p class="text-center box-title">${title}</p> </section>
            <section class=" figures d-flex flex-wrap space-around">`

    let images = ''
    const answers = question.answers
    const shuffledAnswers = answers.sort(comparador)
    shuffledAnswers.forEach(answer => {
      const text = answer.text
      const image = answer.image

      const imageDiv = `<div class="figure" id="${answer.isCorrectAnswer}" onClick = "selectAnswer(${answer.isCorrectAnswer}, this, ${i})">
            <img src="${image}" alt="">
            <p class="answer-title">${text}</p>
          </div>`
      images += imageDiv
    })
    i++
    const bodyTemplateEnd = `
        </section>
    </article>`
    const finalTemplate = templateHeader + bodyTemplateStart + images + bodyTemplateEnd

    quizViewrDiv.innerHTML += finalTemplate
  });
}

function selectAnswer(answer, div, parentIndex) {
  const boxes = document.querySelectorAll('.level-box ')
  const currentBox = boxes[parentIndex]
  const figures = currentBox.querySelectorAll('.figure')
  const currentP = div.querySelector('p').classList
  div.id === "true" ? currentP.add('text-green') : currentP.add('text-red')

  let selectedAnswer = {p: currentP, answer: answer}
  console.log(selectedAnswer.answer)

  figures.forEach(siblingFigure => {
    
    if (siblingFigure !== div) {
      const siblingFigureP = siblingFigure.querySelector('p').classList
      siblingFigure.classList.toggle('opacity')
      siblingFigure.id === "true" ? siblingFigureP.add('text-green') : siblingFigureP.add('text-red')
    }

    siblingFigure.classList.add('no-interaction')
  })

  const nextFigure = boxes[parentIndex + 1]
  setTimeout(nextFigure.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" }), 2000)
}
