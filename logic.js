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
            {text:'hard', correct:true},
            {text:'Medium', correct:false}
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
const nextButton = document.getElementById('next-btn')
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
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion(){
 resetState()
 showQuestion(shuffledQuestions[currentQuestionIndex])
}

function selectAnswer(){

}

// Lyer 11111111111111111111111111
function showQuestion(questionArrayWithIndex){
  questionElement.innerText = questionArrayWithIndex.question // showing the question
  
  questionArrayWithIndex.answers.forEach(answer =>{ // showing the answer
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')
      if(answer.correct){
          button.dataset.correct = answer.correct
      }
      button.addEventListener('click',selectAnswer)
      answerButtonElement.appendChild(button)

  })
}
function resetState(){
 nextButton.classList.add('hide')
 while(answerButtonElement.firstChild){
    answerButtonElement.removeChild(answerButtonElement.firstChild)
 }
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