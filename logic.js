let startBtn = document.querySelector('#startButton');
let startDiv = document.querySelector('#starting');
let quizDiv = document.querySelector('#Quiz');
let questionh2 = document.querySelector('#Question');
let btn1 = document.querySelector('#option-1');
let btn2 = document.querySelector('#option-2');
let btn3 = document.querySelector('#option-3');
let btn4 = document.querySelector('#option-4');
let currentIndex = 0;
let timer = document.querySelector('#time');
let timeLeft = 60;
let endDiv = document.querySelector('#end');

function endQuiz() {
    quizDiv.classList.add('hide')
    endDiv.classList.remove('hide')
}

function startTimer () {
setInterval(function(){
    timer.textContent = timeLeft
    timeLeft--

}, 1000)
}

function renderQuestion () {
    questionh2.textContent = questions[currentIndex].title
    btn1.textContent = questions[currentIndex].choices[0]
    btn2.textContent = questions[currentIndex].choices[1]
    btn3.textContent = questions[currentIndex].choices[2]
    btn4.textContent = questions[currentIndex].choices[3]

}

function nextQuestion (event) {
    let selectedAnswer = event.target.textContent
    let correctAnswer = questions[currentIndex].answer

    if(selectedAnswer !== correctAnswer) {
        timeLeft-= 10
    }
if(currentIndex < 4){
    currentIndex++
    renderQuestion()
} else {
    endQuiz()
}
}

startBtn.addEventListener('click', function(){
    startDiv.classList.add('hide')
    quizDiv.classList.remove('hide')
renderQuestion()
startTimer()

})

btn1.addEventListener('click', nextQuestion)
btn2.addEventListener('click', nextQuestion)
btn3.addEventListener('click', nextQuestion)
btn4.addEventListener('click', nextQuestion)