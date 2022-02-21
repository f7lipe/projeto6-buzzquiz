// declaracao para o post
let quizzCreated = [];
// declaracoes pagina 3.1
let quizzCreateTitle = null;
let quizzCreateImage = null;
let quizzCreateQuestionsNumb = null;
let quizzCreateLevelNumb = null;
let quizzLayerOne = document.getElementById("creater-screen-one");
let quizzLayerTwo = document.getElementById("creater-screen-two");
let quizzLayerTree = document.getElementById("creater-screen-tree");
let quizzLayerFour = document.getElementById("creater-screen-four");
let userQuizz = []
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
  quizzCreateValidateOne();
}
//
// validacao dos campos da tela 3.1
//
function quizzCreateValidateOne() {
  let listInvalid = document.querySelectorAll(":invalid");
  let listSmall = document
    .getElementById("creater-input-container-one")
    .querySelectorAll("small");
  let listInput = document
    .getElementById("creater-input-container-one")
    .querySelectorAll("input");
  listSmall.forEach((small) => {
    if (small.classList.contains("visible")) {
      small.classList.remove("visible");
    }
    listInput.forEach((input) => {
      if (input.classList.contains("invalid")) {
        input.classList.remove("invalid");
      }
    });
  });
  let listInputValue = [
    quizzCreateImage,
    quizzCreateLevelNumb,
    quizzCreateQuestionsNumb,
    quizzCreateTitle,
  ];
  let contadorInvalid = 0;
  let contadorNull = 0;
  for (var item of listInvalid) {
    contadorInvalid++;
  }
  for (var item of listInputValue) {
    if (item === "") {
      contadorNull++;
    }
  }
  // valida se contem caixas vazias e adiciona mensagem,
  // e se estiverem preenchidas fora padrao adiciona outra mensagem
  if (contadorInvalid !== 0 || contadorNull !== 0) {
    listInvalid.forEach((inputInvalid) => {
      inputInvalid.classList.add("invalid");
      inputInvalid.parentNode.querySelector("small").classList.add("visible");
    });
    listInput.forEach((input) => {
      if (input.value === "") {
        input.classList.add("invalid");
        input.parentNode.querySelector("small").classList.add("visible");
      }
    });
  } else {
    // se passar tudo na paz ele exibe a proxima pagina de perguntas 3.2
    quizzCreated = {
      title: quizzCreateTitle,
      image: quizzCreateImage,
      questions: [],
      levels: []
    };
    quizzLayerOne.classList.add("hidden");
    quizzLayerTwo.classList.remove("hidden");
    createrLayerTwoRenderizer();
  }
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
<div class="form-control"><input
  id="creater-input-question-text-${i}"
  placeholder="Texto da pergunta"
  class="creater-input"
  type="text"
  minlength="20"
  name="quizz[title-question]"
/><small>Texto da pergunta: no mínimo 20 caracteres</small></div>
<div class="form-control"><input
  id="creater-input-question-color-${i}"
  placeholder="Cor de fundo da pergunta"
  class="creater-input"
  type="text"
  name="quizz[color]"
  minlength="7"
  maxlength="7"
/><small>Cor de fundo: deve ser uma cor em hexadecimal </small></div>
<div class="creater-input-container-header">
  <p>Resposta Correta</p>
</div>
<div class="form-control"><input
  id="creater-input-questions-answer${i}"
  placeholder="Resposta correta"
  class="creater-input true"
  type="text"
  name="quizz[questions]"
/><small>Textos das respostas: não pode estar vazio</small></div>
<div class="form-control"><input
  id="creater-input-questions-image${i}"
  placeholder="URL da imagem"
  class="creater-input true-image"
  type="url"
  name="quizz[image-URL]"
/><small>URL das imagens de resposta: deve ter formato de URL</small></div>
<div class="creater-input-container-header">
  <p>Respostas Incorretas</p>
</div>
<div class="form-control"><input
  id="creater-input-questions-wanswer${i}-1"
  placeholder="Resposta incorreta 1"
  class="creater-input wrong-answer"
  type="text"
  name="quizz[questions-wanswer]"
/><small>É obrigatória a inserção da resposta correta e de pelo menos 1 resposta errada.</small></div>
<div class="form-control"><input
  id="creater-input-questions-wimage${i}-1"
  placeholder="URL da imagem 1"
  class="creater-input "
  type="url"
  name="quizz[image-URL]"
/><small>URL das imagens de resposta: deve ter formato de URL</small></div>
<div class="form-control"><input
  id="creater-input-questions-wanswer${i}-2"
  placeholder="Resposta incorreta 2"
  class="creater-input"
  type="text"
  name="quizz[questions-wanswer]"
/><small>Mensagem de erro</small></div>
<div class="form-control"><input
  id="creater-input-questions-wimage${i}-2"
  placeholder="URL da imagem 2"
  class="creater-input"
  type="url"
  name="quizz[image-URL]"
/><small>URL das imagens de resposta: deve ter formato de URL</small></div>
<div class="form-control"><input
  id="creater-input-questions-wanswer${i}-3"
  placeholder="Resposta incorreta 3"
  class="creater-input"
  type="text"
  name="quizz[questions-wanswer]"
/><small>Mensagem de erro</small></div>
<div class="form-control"><input
  id="creater-input-questions-wimage${i}-3"
  placeholder="URL da imagem 3"
  class="creater-input"
  type="url"
  name="quizz[image-URL]"
/><small>URL das imagens de resposta: deve ter formato de URL</small></div>
</div>
`;
  }
  const questioOneBtn = document.getElementById("questions-minimized-1");
  const questionOne = document.getElementById("creater-class-container1");
  questioOneBtn.classList.add("hidden");
  questionOne.classList.remove("hidden");
  questionOne.classList.add("visible");
  quizzLayerTwo.innerHTML += `<div class ="second-btn"><button onclick="quizzCreateValidateTwo()" class="btn-creater">
  Prosseguir pra criar níveis
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
  let altura = 69 + (i - 1) * 74;
  window.scrollTo({ top: altura, behavior: "smooth" });
}

// botao inicia a validacao da pagina 3.2

function quizzCreateValidateTwo() {
  let regExpHex = new RegExp(/^[#][0-9A-F]{6}$/i);
  let contador = 0;
  for (i = 1; i <= quizzCreateQuestionsNumb; i++) {
    let questionText = document.getElementById(
      `creater-input-question-text-${i}`
    );
    let questionColor = document.getElementById(
      `creater-input-question-color-${i}`
    );
    let questionAnswer = document.getElementById(
      `creater-input-questions-answer${i}`
    );
    let questionImage = document.getElementById(
      `creater-input-questions-image${i}`
    );
    let nullCounter = 0;
    if (questionColor.classList.contains("invalid")) {
      questionColor.classList.remove("invalid");
      questionColor.parentNode
        .querySelector("small")
        .classList.remove("visible");
    }
    if (questionText.classList.contains("invalid")) {
      questionText.classList.remove("invalid");
      questionText.parentNode
        .querySelector("small")
        .classList.remove("visible");
    }
    if (questionAnswer.classList.contains("invalid")) {
      questionAnswer.classList.remove("invalid");
      questionAnswer.parentNode
        .querySelector("small")
        .classList.remove("visible");
    }
    if (questionImage.classList.contains("invalid")) {
      questionImage.classList.remove("invalid");
      questionImage.parentNode
        .querySelector("small")
        .classList.remove("visible");
    }
    if (!regExpHex.test(questionColor.value) || questionColor.value === "") {
      questionColor.classList.add("invalid");
      questionColor.parentNode.querySelector("small").classList.add("visible");
      contador++;
    }
    if (
      questionText.classList.contains(":invalid") ||
      questionText.value === ""
    ) {
      questionText.classList.add("invalid");
      questionText.parentNode.querySelector("small").classList.add("visible");
      contador++;
    }
    if (questionAnswer.value === "") {
      questionAnswer.classList.add("invalid");
      questionAnswer.parentNode.querySelector("small").classList.add("visible");
      contador++;
    }
    if (
      questionImage.classList.contains(":invalid") ||
      questionImage.value === ""
    ) {
      questionImage.classList.add("invalid");
      questionImage.parentNode.querySelector("small").classList.add("visible");
      contador++;
    }
    for (j = 1; j <= 3; j++) {
      let wrongAnswer = document.getElementById(
        `creater-input-questions-wanswer${i}-${j}`
      );
      let wrongImage = document.getElementById(
        `creater-input-questions-wimage${i}-${j}`
      );
      if (wrongAnswer.classList.contains("invalid")) {
        wrongAnswer.classList.remove("invalid");
        wrongAnswer.parentNode
          .querySelector("small")
          .classList.remove("visible");
      }
      if (wrongImage.classList.contains("invalid")) {
        wrongImage.classList.remove("invalid");
        wrongImage.parentNode
          .querySelector("small")
          .classList.remove("visible");
      }
      if (wrongAnswer.value === "" && wrongImage.value === "") {
        nullCounter++;
      } else if (wrongAnswer.value === "") {
        wrongAnswer.classList.add("invalid");
        wrongAnswer.parentNode.querySelector("small").classList.add("visible");
        contador++;
      } else if (
        wrongImage.value === "" ||
        wrongImage.classList.contains(":invalid")
      ) {
        wrongImage.classList.add("invalid");
        wrongImage.parentNode.querySelector("small").classList.add("visible");
        contador++;
      }
    }
    if ((nullCounter === 3)) {
      let wrongAnswer = document.getElementById(
        `creater-input-questions-wanswer${i}-1`
      );
      let wrongImage = document.getElementById(
        `creater-input-questions-wimage${i}-1`
      );
      contador++;
      if (
        wrongAnswer.classList.contains("invalid") ||
        wrongImage.classList.contains("invalid")
      ) {
      } else {
        wrongAnswer.classList.add("invalid");
        wrongAnswer.parentNode.querySelector("small").classList.add("visible");
        wrongImage.classList.add("invalid");
        wrongImage.parentNode.querySelector("small").classList.add("visible");
      }
    }
  }
  if (contador === 0) {
    saveQuizzValues();
  }
}
function saveQuizzValues() {
  for (i = 1; i <= quizzCreateQuestionsNumb; i++) {
    let questionText = document.getElementById(
      `creater-input-question-text-${i}`
    ).value;
    let questionColor = document.getElementById(
      `creater-input-question-color-${i}`
    ).value;
    let questionAnswer = document.getElementById(
      `creater-input-questions-answer${i}`
    ).value;
    let questionImage = document.getElementById(
      `creater-input-questions-image${i}`
    ).value;
    let questions = {
      title: questionText,
      color: questionColor,
      answers: [
        {
          text: questionAnswer,
          image: questionImage,
          isCorrectAnswer: true
        }
      ]
    }
    quizzCreated.questions.push(questions);
    for (j = 1; j <= 3; j++) {
      let wrongAnswer = document.getElementById(
        `creater-input-questions-wanswer${i}-${j}`
      ).value;
      let wrongImage = document.getElementById(
        `creater-input-questions-wimage${i}-${j}`
      ).value;
      if (wrongAnswer != "") {
        let wrongAns = {
          text: wrongAnswer,
          image: wrongImage,
          isCorrectAnswer: false
        }
        quizzCreated.questions[i-1].answers.push(wrongAns)
      }
    }
  }
  createrLayerTreeRenderizer();
}
function createrLayerTreeRenderizer() {
  quizzLayerTwo.classList.add("hidden");
  quizzLayerTree.classList.remove("hidden");
  quizzLayerTree.innerHTML = `<div class="creater-header creater-header-questions">
    <p>Agora, decida os níveis!</p>
    </div>`;
  for (i = 1; i <= quizzCreateLevelNumb; i++) {
    quizzLayerTree.innerHTML += `
<div id="levels-minimized-${i}" onclick="layerQuestionsToggleTree(${i})" class="levels-minimized">
<div class="creater-input-container-header">
  <p>Nível ${i}</p>
</div>
<ion-icon class="icon-create-outline" name="create-outline"></ion-icon>
</div>
<div id="creater-level-container${i}" class="creater-level-container hidden">
<div class="creater-input-container-header">
  <p>Nível ${i}</p>
</div>
<div class="form-control"><input
  id="creater-input-level-text-${i}"
  placeholder="Título do nível"
  class="creater-input"
  type="text"
  minlength="10"
  name="quizz[title-question]"
/><small>Título do nível: mínimo de 10 caracteres</small></div>
<div class="form-control"><input
  id="creater-input-level-percentage-${i}"
  placeholder="% de acerto mínima"
  class="creater-input"
  type="number"
  name="quizz[percentage]"
  max="100" maxlength="3"
/><small>Número entre 0 e 100. Ao menos 1 nível deve ser 0</small></div>
<div class="form-control"><input
  id="creater-input-level-image${i}"
  placeholder="URL da imagem do nível"
  class="creater-input"
  type="url"
  name="quizz[lvlImage]"
/><small>URL da imagem do nível: deve ter formato de URL</small></div>
<div class="form-control"><textarea id="creater-input-level-descrition${i}" class="creater-input description" rows="5" 
placeholder="Descrição do nível" minlength="30"></textarea><small>Descrição do nível: mínimo de 30 caracteres</small></div>
</div>
`;
  }
  const levelOneBtn = document.getElementById("levels-minimized-1");
  const levelOne = document.getElementById("creater-level-container1");
  levelOneBtn.classList.add("hidden");
  levelOne.classList.remove("hidden");
  levelOne.classList.add("visible");
  quizzLayerTree.innerHTML += `<div class ="second-btn"><button onclick="quizzCreateValidateTree()" class="btn-creater">
  Finalizar Quizz
      </button>
      </div>`;
  window.scrollTo(0, 0);
}

function layerQuestionsToggleTree(i) {
  let listQuestionBtn = document.querySelectorAll(".levels-minimized");
  let listQuestion = document.querySelectorAll(".creater-level-container");
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
  let questionBtnHidden = document.getElementById(`levels-minimized-${i}`);
  let questionVisible = document.getElementById(`creater-level-container${i}`);
  questionBtnHidden.classList.add("hidden");
  questionVisible.classList.remove("hidden");
  questionVisible.classList.add("visible");
  let altura = 69 + (i - 1) * 50;
  window.scrollTo({ top: altura, behavior: "smooth" });
}
function quizzCreateValidateTree() {
  let contador = 0;
  let zeroCounter = 0;
  for(i = 1; i <= quizzCreateLevelNumb; i++) {
    let levelTitle = document.getElementById(`creater-input-level-text-${i}`);
    let levelPercentage = document.getElementById(`creater-input-level-percentage-${i}`);
    let levelImage = document.getElementById(`creater-input-level-image${i}`);
    let levelDesc = document.getElementById(`creater-input-level-descrition${i}`);
    if (levelTitle.classList.contains('invalid')) {
      levelTitle.classList.remove('invalid');
      levelTitle.parentNode.querySelector('small').classList.remove('visible');
    }
    if (levelPercentage.classList.contains('invalid')){
      levelPercentage.classList.remove('invalid');
      levelPercentage.parentNode.querySelector('small').classList.remove('visible');
    }
    if (levelImage.classList.contains('invalid')){
      levelImage.classList.remove('invalid');
      levelImage.parentNode.querySelector('small').classList.remove('visible');
    }
    if (levelDesc.classList.contains('invalid')){
      levelDesc.classList.remove('invalid');
      levelDesc.parentNode.querySelector('small').classList.remove('visible');
    }
    if (levelTitle.value===""||levelTitle.classList.contains(':invalid')) {
      levelTitle.classList.add('invalid');
      levelTitle.parentNode.querySelector('small').classList.add('visible');
      contador++
    }
    if (levelPercentage.value ===""||levelPercentage.classList.contains(':invalid')){
      levelPercentage.classList.add('invalid');
      levelPercentage.parentNode.querySelector('small').classList.add('visible');
      contador++
    }
    if (levelImage.value===""||levelImage.classList.contains(':invalid')){
      levelImage.classList.add('invalid');
      levelImage.parentNode.querySelector('small').classList.add('visible');
      contador++
    }
    if (levelDesc.value===""||levelDesc.value.length < 30){
      levelDesc.classList.add('invalid');
      levelDesc.parentNode.querySelector('small').classList.add('visible');
      contador++
    }
    if (levelPercentage.value == 0) {
      zeroCounter++
    }
  }
  if(zeroCounter === 0){
    let levelPercentage = document.getElementById(`creater-input-level-percentage-1`);
    if(levelPercentage.classList.contains('invalid')){
    } else {
      levelPercentage.classList.add('invalid');
      levelPercentage.parentNode.querySelector('small').classList.add('visible');
      contador++
    }
  }
  if(contador===0){
    saveQuizzValuesTree()
  }
}
function saveQuizzValuesTree() {
  for(i=1; i <=quizzCreateLevelNumb;i++){
    let levelTitle = document.getElementById(`creater-input-level-text-${i}`).value;
    let levelPercentage = document.getElementById(`creater-input-level-percentage-${i}`).value;
    let levelImage = document.getElementById(`creater-input-level-image${i}`).value;
    let levelDesc = document.getElementById(`creater-input-level-descrition${i}`).value;
    let levels = {
      title: levelTitle,
			image: levelImage,
			text: levelDesc,
			minValue: levelPercentage
    }
    quizzCreated.levels.push(levels)
}
createrFinalize()
}

function createrFinalize() {
   const quizzToServer = axios.post(`${API_REPO}quizzes`, quizzCreated);
   quizzToServer.then(layerFourRenderizer)
}
function layerFourRenderizer(quizzServer) {
  let userQuizzData = quizzServer.data;
  let userQuizzKey = userQuizzData.key;
  let userId = userQuizzData.id;
  let userIdStr = JSON.stringify(userId);
  let userQuizzKeyStr = JSON.stringify(userQuizzKey);
  localStorage.setItem(userIdStr, userQuizzKeyStr);
  quizzLayerTree.classList.add("hidden");
  quizzLayerFour.classList.remove("hidden");
  quizzLayerFour.innerHTML = `<div class="creater-header creater-header-questions">
    <p>Seu quizz está pronto!</p>
    </div>
    <div>
    ${createQuizCard(userQuizzData.title, userQuizzData.image, userId, isQuizCreater=true)}
    </div>
    <div class ="second-btn"><button onclick="showQuizz(${userId}, '.creater-home')" class="btn-creater four">
    Acessar Quizz
      </button>
      </div>
      <div class ="four-btn"><button onclick="reload()" class="btn-creater four-home">
      Voltar pra home
      </button>
      </div>
    `;
  window.scrollTo(0, 0);
}
function createdQuizzRenderize (id) {
  quizzLayerFour.classList.add("hidden");
  showQuizz(id)
}