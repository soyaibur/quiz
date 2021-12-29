// ....Univesal declaration and others......
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// .....All Element Selection will be undernith here...........
const startButton = document.getElementById('start-btn')
const questionContainer = document.getElementById('question-container')
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::


// .....All EventListener go undernith here...........
startButton.addEventListener('click',()=>{
  startGame()
})
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::



// ......All Function will go here undernith..........
function startGame(){
  startButton.classList.add('hide')
  questionContainer.classList.remove('hide')
}

function setNextQuestion(){

}
function selectAnswer(){

}
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