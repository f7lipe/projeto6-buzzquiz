// declaracoes pagina 3.1
let quizzCreateTitle = null;
let quizzCreateImage = null;
let quizzCreateQuestionsNumb = null;
let quizzCreateLevelNumb = null;
let quizzLayerOne = document.getElementById("creater-screen-one");
let quizzLayerTwo = document.getElementById("creater-screen-two");
let invalidInputLayer = document.getElementById("invalid-input-layer");
let invalidInputBox = document.getElementById("invalid-input-box");
//declaracoes pagina 3.2
// botao para a proxima pagina (seguir para a 3.2 de perguntas)
// ele inicia a validacao dos campos da tela 3.1
function firstCreaterBtn() {
    quizzCreateTitle = document.getElementById("creater-input-title").value;
    quizzCreateImage = document.getElementById("creater-input-image").value;
    quizzCreateQuestionsNumb = document.getElementById(
        "creater-input-questions-numbers"
    ).value;
    quizzCreateLevelNumb = document.getElementById(
        "creater-input-level-numbers"
    ).value;
    quizzCreateValidate();
}
//
// validacao dos campos da tela 3.1
function quizzCreateValidate() {
    let list = document.querySelectorAll(":invalid");
    let listInput = [
        quizzCreateImage,
        quizzCreateLevelNumb,
        quizzCreateQuestionsNumb,
        quizzCreateTitle,
    ];
    let contadorInvalid = 0;
    let contadorNull = 0;
    for (var item of list) {
        contadorInvalid++;
    }
    for (var item of listInput) {
        if (item === "") {
            contadorNull++;
        }
    }
    // valida se contem caixas vazias e adiciona mensagem,
    // e se estiverem preenchidas fora padrao adiciona outra mensagem
    if (contadorInvalid !== 0 || contadorNull !== 0) {
        for (var item of list) {
            if (item.id === "creater-input-title") {
                invalidInputBox.innerHTML += `<p>O titulo deve conter de 20 a 65 caracteres.</p>`;
            }
            if (item.id === "creater-input-image") {
                invalidInputBox.innerHTML += ` <p>Você deve colocar uma URL válida de imagem.</p>`;
            }
            if (item.id === "creater-input-questions-numbers") {
                invalidInputBox.innerHTML += `<p>Coloque no mínimo 3 perguntas.</p>`;
            }
            if (item.id === "creater-input-level-numbers") {
                invalidInputBox.innerHTML += `<p>Coloque no mínimo 2 níveis no seu quizz.</p>`;
            }
        }
        if (quizzCreateTitle === "") {
            invalidInputBox.innerHTML += `<p>Preencha o titulo.</p>`;
        }
        if (quizzCreateImage === "") {
            invalidInputBox.innerHTML += `<p>Preencha a URL da imagem.</p>`;
        }
        if (quizzCreateQuestionsNumb === "") {
            invalidInputBox.innerHTML += `<p>Preencha o numero de perguntas.</p>`;
        }
        if (quizzCreateLevelNumb === "") {
            invalidInputBox.innerHTML += `<p>Preencha o numero de níveis</p>`;
        }
        invalidInputLayer.classList.remove("hidden");
    } else {
        // se passar tudo na paz ele exibe a proxima pagina de perguntas 3.2
        quizzLayerOne.classList.add("hidden");
        quizzLayerTwo.classList.remove("hidden");
        createrLayerTwoRenderizer();
    }
}
// funcao para sair da tela de entrada invalida,
// ela esta tanto no botao ok quanto clicando fora da caixa de msg

function invalidInputLayerHidden() {
    invalidInputLayer.classList.add("hidden");
    invalidInputBox.innerHTML = `<button onclick="invalidInputLayerHidden()"class="invalid-input-btn">OK</button>`;
}
// funcao para renderizar a pagina 3.2 de acordo com as perguntas especificadas
//
function createrLayerTwoRenderizer() {
    quizzLayerTwo.innerHTML = `<div class="creater-header creater-header-questions">
    <p>Crie suas perguntas</p>
    </div>`;
    for (i = 1; i <= quizzCreateQuestionsNumb; i++) {
        quizzLayerTwo.innerHTML += `
<div id="questions-minimized-${i}" onclick="layerQuestionsToggle(${i})" class="questions-minimized">
<div class="creater-input-container-header">
  <p>Pergunta ${i}</p>
</div>
<ion-icon class="icon-create-outline" name="create-outline"></ion-icon>
</div>
<div id="creater-class-container${i}" class="creater-input-container hidden">
<div class="creater-input-container-header">
  <p>Pergunta ${i}</p>
</div>
<input
  id="creater-input-question-text-${i}"
  placeholder="Texto da pergunta"
  class="creater-input"
  type="text"
  minlength="20"
  name="quizz[title-question]"
/>
<input
  id="creater-input-question-color-${i}"
  placeholder="Cor de fundo da pergunta"
  class="creater-input"
  type="text"
  name="quizz[color]"
  minlength="7"
  maxlength="7" value="#"
/>
<div class="creater-input-container-header">
  <p>Resposta Correta</p>
</div>
<input
  id="creater-input-questions-answer${i}"
  placeholder="Resposta correta"
  class="creater-input true"
  type="text"
  name="quizz[questions]"
/>
<input
  id="creater-input-questions-image${i}"
  placeholder="URL da imagem"
  class="creater-input true-image"
  type="url"
  name="quizz[image-URL]"
/>
<div class="creater-input-container-header">
  <p>Respostas Incorretas</p>
</div>
<input
  id="creater-input-questions-wanswer${i}"
  placeholder="Resposta incorreta 1"
  class="creater-input wrong-answer"
  type="text"
  name="quizz[questions-wanswer]"
/>
<input
  id="creater-input-questions-wimage${i}"
  placeholder="URL da imagem 1"
  class="creater-input "
  type="url"
  name="quizz[image-URL]"
/>
<input
  id="creater-input-questions-wanswer${i}"
  placeholder="Resposta incorreta 2"
  class="creater-input"
  type="text"
  name="quizz[questions-wanswer]"
/>
<input
  id="creater-input-questions-wimage${i}"
  placeholder="URL da imagem 2"
  class="creater-input"
  type="url"
  name="quizz[image-URL]"
/>
<input
  id="creater-input-questions-wanswer${i}"
  placeholder="Resposta incorreta 3"
  class="creater-input"
  type="text"
  name="quizz[questions-wanswer]"
/>
<input
  id="creater-input-questions-wimage${i}"
  placeholder="URL da imagem 3"
  class="creater-input"
  type="url"
  name="quizz[image-URL]"
/>
</div>
`;
    }
    const questioOneBtn = document.getElementById("questions-minimized-1");
    const questionOne = document.getElementById("creater-class-container1");
    questioOneBtn.classList.add("hidden");
    questionOne.classList.remove("hidden");
    questionOne.classList.add("visible");
    quizzLayerTwo.innerHTML += `<div class ="second-btn"><button onclick="secondCreaterBtn()" class="btn-creater">
        Prosseguir pra criar perguntas
      </button>
      </div>`;
    window.scrollTo(0, 0);
}

function layerQuestionsToggle(i) {
    let listQuestionBtn = document.querySelectorAll(".questions-minimized");
    let listQuestion = document.querySelectorAll(".creater-input-container");
    listQuestionBtn.forEach((questionBtn) => {
        if (questionBtn.classList.contains("hidden")) {
            questionBtn.classList.remove("hidden");
        }
    });
    listQuestion.forEach((question) => {
        if (question.classList.contains("visible")) {
            question.classList.remove("visible");
            question.classList.add("hidden");
        }
    });
    let questionBtnHidden = document.getElementById(`questions-minimized-${i}`);
    let questionVisible = document.getElementById(`creater-class-container${i}`);
    questionBtnHidden.classList.add("hidden");
    questionVisible.classList.remove("hidden");
    questionVisible.classList.add("visible");
    window.scrollTo({ top: 69, behavior: "smooth" });
}

// botao inicia a validacao da pagina 3.2
function secondCreaterBtn() {
    let regExpHex = new RegExp(/^[#][0-9A-F]{6}$/i);
    let contador = 0;
    for (i = 1; i <= quizzCreateQuestionsNumb; i++) {
        let questionAswers = document.getElementById(
            `creater-input-questions-answer${i}`
        ).value;
        let questionColor = document.getElementById(
            `creater-input-question-color-${i}`
        ).value;
        let questionWrong = document.querySelectorAll('')
        if (!regExpHex.test(questionColor)) {
            contador++
        }
        if (questionAswers === "") {
            alert(`responde ai a numero ${i}`)
            contador++
        }

    }
}