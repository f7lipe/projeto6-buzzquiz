const quizViewr = '.quiz-viewr'

function loadQuiz(id){
   const promise = axios.get(API_REPO + 'quizzes/' + id)
   promise.then(renderQuiz)
}


function renderQuiz(quiz){
    
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
        shuffledAnswers.forEach(answer =>{
            const text = answer.text
            const image = answer.image

            const imageDiv = `<div>
            <img src="${image}" alt="">
            <p class="answer-title">${text}</p>
          </div>`
          images += imageDiv
        })
        const bodyTemplateEnd = `
        </section>
    </article>`
    const finalTemplate = templateHeader + bodyTemplateStart + images + bodyTemplateEnd

    quizViewrDiv.innerHTML += finalTemplate
    });
}

