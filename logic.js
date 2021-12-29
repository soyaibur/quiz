// ....Univesal declaration and others......
const questions = [
    {
      question: 'What is 2+2?',
      answers:[
          {text: '4', correct: true},
          {text: '22', correct: false}
      ]
    },
    {
        question: 'How is this project?',
        answers:[
            {text:'easy', correct:false},
            {text:'hard', correct:true}
        ]
    },
    {
      question: 'Best programming language?',
      answers:[
          {text: 'C', correct: false},
          {text:'C++', correct: false},
          {text:'Java', correct: false},
          {text:'Java Script', correct:true}
      ]
    }
]

let shuffledQuestions, currentQuestionIndex
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// .....All Element Selection will be undernith here...........
const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::


// .....All EventListener go undernith here...........
startButton.addEventListener('click',()=>{
  startGame()
})
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::



// ......All Function will go here undernith..........
function startGame(){
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(()=>Math.random() - .5)
  console.log(shuffledQuestions)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion(){
 showQuestion(shuffledQuestions[currentQuestionIndex])
}

function selectAnswer(){

}

// Lyer 11111111111111111111111111
function showQuestion(questionArrayWithIndex){
  questionElement.innerText = questionArrayWithIndex.question
}
// ---------------------------------
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//All code will be deleted here.............
function printOut(text){
    const div = document.createElement('div')
    div.innerHTML = text
    document.body.appendChild(div)
}
// .addEventListener('click',()=>{
//     alert("this is working")
// })


// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::