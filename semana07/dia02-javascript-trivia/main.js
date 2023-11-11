const questions = [
    {
        id: 1,
        question:'Como se llama el metodo en JS que se utiliza para imprimir?',
        correctAnswe: 1,
        answerList: ['print()', 'console.log()', 'display()']
    },
    {
        id:2,
        question:'Cual es el operador utilizado para comparar el valor ynel tipo de dos variables en JS',
        correctAnswe: 2,
        answerList: ['==', '=', '===']
    },
    {
        id:3,
        question:'Cual es la funcion den JS que nse utiliza para redondear hacia abajo el valor de un numero decimal',
        correctAnswe: 0,
        answerList: ['floor()', 'cell()', 'round()']
    }
];

let  correctAnswersCouter = 0;



const questionsAndResults = document.getElementById('questions-and-results');
let currentQuestionIndex = 0;
function nextQuestion(event){

    // if(currentQuestionIndex <2){
    //     currentQuestionIndex = currentQuestionIndex +1;
    //     renderQuestions();
    // }
    if(currentQuestionIndex >= questions.length -1){
        return
    }
    currentQuestionIndex = currentQuestionIndex +1;
    renderQuestions();

}
// let stylePrev = ''

// function prevQuestion(event){
//     if(currentQuestionIndex !=0){
//         currentQuestionIndex = currentQuestionIndex -1;
//         renderQuestions();
//     }
    
// }



function respondQuestion(event, questionSelected){
    const currentQuestion = questions[currentQuestionIndex];

    if(questionSelected === currentQuestion.correctAnswe){
        correctAnswersCouter++
    }

    const answerButton = document.querySelectorAll('[data-answer]');
    answerButton.forEach(button =>{
        if(Number(button.dataset.answer) === currentQuestion.correctAnswe){
            button.className = 'text-white border border-green-600 bg-green-600 font-medium rounded-lg text-sm px-5 py-2.5 text-left mr-2 mb-2 w-full'
        }
        else{
            button.className = 'text-white border border-red-600 bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-left mr-2 mb-2 w-full'
        }
        button.setAttribute('disabled', 'disabled')
    })

    console.log(correctAnswersCouter)
}

function startAgain(event){
    correctAnswersCouter = 0;
    currentQuestionIndex = 0;
    renderQuestions();
}

function showResultPage(event){
    questionsAndResults.innerHTML = `<section class="flex flex-col px-4 py-6 text-center bg-green-600 border rounded-lg shadow ">
    <p class="text-4xl font-medium text-gray-900 mb-4 text-white">¡GANASTE! o ¡PERDISTE!</p>
    
    <p class="text-md font-medium text-gray-900 mb-4 text-white">Respondiste 2 de 3</p>

    <p class="text-md font-medium text-gray-900 mb-4 text-white">Y este es tu puntaje: 20</p>

    <img src="https://placehold.co/300x100" />

    <div class="flex justify-end mt-10">
      <button type="button" class="text-white border border-blue-300 bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-left mr-2 mb-2"
      onClick="startAgain(event)">Empezar de nuevo</button>
    </div>
  </section>`
}

function renderQuestions(){
    // console.log(questions[currentQuestionIndex]);
    // console.log('Estoy renderizando las preguntas...');
    const currentQuestion = questions[currentQuestionIndex]
//    if (currentQuestionIndex===0){
//     stylePrev="hidden"
//    }
//    else{
//     stylePrev=''
//    }
    const question = `<section class="flex flex-col px-4 py-6 mb-3 border rounded-lg shadow">
    <p class="text-md font-medium text-gray-900 mb-4">${currentQuestionIndex +1}.- ${currentQuestion.question}</p>

    <div class="flex flex-col items-start mb-10">
      <button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-left mr-2 mb-2 w-full"
      onClick="respondQuestion(event, 0)"
      data-answer=0>${currentQuestion.answerList[0]}</button>
      <button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-left mr-2 mb-2 w-full"
      onClick="respondQuestion(event, 1)" 
      data-answer=1>${currentQuestion.answerList[1]}</button>
      <button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-left mr-2 mb-2 w-full"
      onClick="respondQuestion(event, 2)" 
      data-answer=2>${currentQuestion.answerList[2]}</button>
    </div>

    <div class="flex justify-end">
    <button type="button" class="hidden text-gray-900 bg-white hover:bg-gray-100 border border-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
      onClick="prevQuestion(event)">Pregunta anterior</button>
      <button type="button" class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
      onClick="nextQuestion(event)">Siguiente pregunta</button>
      
      <button type="button" class="${(currentQuestionIndex === questions.length -1) ? '':'hidden'} text-white border border-blue-300 bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-left mr-2 mb-2"
      onClick="showResultPage(event)">Mostrar resultados</button>
    </div>
  </section>`

  questionsAndResults.innerHTML = question
}
renderQuestions();
