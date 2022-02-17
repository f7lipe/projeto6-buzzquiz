// declaracoes pagina 3.1
let quizzCreateTitle = null;
let quizzCreateImage = null;
let quizzCreateQuestionsNumb = null;
let quizzCreateLevelNumb = null;
let quizzLayerOne = document.getElementById("creater-screen-one")
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
  let listInput = [quizzCreateImage,quizzCreateLevelNumb,
    quizzCreateQuestionsNumb,quizzCreateTitle]
    let contadorInvalid = 0;
    let contadorNull = 0;
  for (var item of list) {
    contadorInvalid++;
  }
  for (var item of listInput) {
    if (item === "") {
        contadorNull++
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
    if(quizzCreateQuestionsNumb === "" ) {
        invalidInputBox.innerHTML += `<p>Preencha o numero de perguntas.</p>`;
    }
    if (quizzCreateLevelNumb === "") {
        invalidInputBox.innerHTML += `<p>Preencha o numero de níveis</p>`;
    }
    invalidInputLayer.classList.remove('hidden')
} else {
  // se passar tudo na paz ele exibe a proxima pagina de perguntas 3.2
    quizzLayerOne.classList.add("hidden")
    quizzLayerTwo.classList.remove("hidden")
}

}
// funcao para sair da tela de entrada invalida,
// ela esta tanto no botao ok quanto clicando fora da caixa de msg
function invalidInputLayerHidden() {
  invalidInputLayer.classList.add("hidden");
  invalidInputBox.innerHTML = `<button onclick="invalidInputLayerHidden()"class="invalid-input-btn">OK</button>`;
}

`<div class="creater-input-container">
      <div class="creater-input-container-header">
        <p>Pergunta ${i}</p>
      </div>
      <input id="creater-input-question-text${i}" placeholder="Texto da pergunta" class="creater-input" type="text"
        minlength="10" maxlength="65" name="quizz[title]" />
      <input id="creater-input-question-color" placeholder="Cor de fundo da pergunta" class="creater-input" type="url"
        name="quizz[image-url]" />
        <div class="creater-input-container-header">
          <p>Resposta Correta</p>
        </div>
      <input id="creater-input-questions-answer" placeholder="Resposta correta"
        class="creater-input" type="number" name="quizz[questions]" min="3" />
      <input id="creater-input-questions-image" placeholder="URL da imagem" class="creater-input"
        type="number" name="quizz[level-numbers]" min="2" />
        <div class="creater-input-container-header">
          <p>Respostas Incorretas</p>
        </div>
      <input id="creater-input-questions-wanswer" placeholder="Resposta incorreta 1"
        class="creater-input" type="number" name="quizz[questions]" min="3" />
      <input id="creater-input-questions-wimage" placeholder="URL da imagem 1" class="creater-input"
        type="number" name="quizz[level-numbers]" min="2" />
        <input id="creater-input-questions-wanswer" placeholder="Resposta incorreta 2"
        class="creater-input" type="number" name="quizz[questions]" min="3" />
      <input id="creater-input-questions-wimage" placeholder="URL da imagem 2" class="creater-input"
        type="number" name="quizz[level-numbers]" min="2" />
        <input id="creater-input-questions-wanswer" placeholder="Resposta incorreta 3"
        class="creater-input" type="number" name="quizz[questions]" min="3" />
      <input id="creater-input-questions-wimage" placeholder="URL da imagem 3" class="creater-input"
        type="number" name="quizz[level-numbers]" min="2" />
    </div>
    <div id="creater-input-questions-minimized" class="questions-minimized">
      <div class="creater-input-container-header">
        <p>Pergunta 2</p>
      </div>
      <ion-icon class="icon-create-outline"name="create-outline"></ion-icon>
    </div>
    </div>
    <div id="creater-input-questions-minimized" class="questions-minimized">
      <div class="creater-input-container-header">
        <p>Pergunta 3</p>
      </div>
      <ion-icon class="icon-create-outline"name="create-outline"></ion-icon>
    </div>
    </div>
    <button onclick="firstCreaterBtn()" class="btn-creater">
      Prosseguir pra criar níveis
    </button>








// botao de prosseguir da pagina 3.2 para a 3.3
function secondCreaterBtn () {

}
