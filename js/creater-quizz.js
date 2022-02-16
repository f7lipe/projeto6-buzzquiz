// declaracoes
let quizzCreateTitle = null
let quizzCreateImage = null
let quizzCreateQuestionsNumb = null
let quizzCreateLevelNumb = null
let invalidInputLayer = document.getElementById('invalid-input-layer')
let invalidInputBox = document.getElementById('invalid-input-box')
// 
function firstCreaterBtn() {
    quizzCreateTitle = document.getElementById('creater-input-title').value
    quizzCreateImage = document.getElementById('creater-input-image').value
    quizzCreateQuestionsNumb = document.getElementById('creater-input-questions-numbers').value
    quizzCreateLevelNumb = document.getElementById('creater-input-level-numbers').value
    quizzCreateValidate()
}
function quizzCreateValidate (){
    let list = document.querySelectorAll(':invalid');
    let contador = 0
    console.log(2)
    for (var item of list) {
        contador++
    }
    if (contador !== 0) {
        console.log(1)
    for (var item of list) {
        if (item.id === "creater-input-title") {
        invalidInputBox.innerHTML += `<p>O titulo deve conter de 20 a 65 caracteres.</p>`
        }
        if (item.id === "creater-input-image") {
        invalidInputBox.innerHTML += ` <p>Você deve colocar uma URL válida de imagem.</p>`
        }
        if (item.id === "creater-input-questions-numbers"){
        invalidInputBox.innerHTML +=  `<p>Coloque no mínimo 3 perguntas.</p>`
        }
        if (item.id === "creater-input-level-numbers") {
        invalidInputBox.innerHTML += `<p>Coloque no mínimo 2 níveis no seu quizz.</p>`
        }
        }
    invalidInputLayer.classList.remove('hidden')
} 
}
function invalidInputLayerHidden () {
    invalidInputLayer.classList.add('hidden')
    invalidInputBox.innerHTML = `<button onclick="invalidInputLayerHidden()"class="invalid-input-btn">OK</button>`

}
