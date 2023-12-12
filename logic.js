let startBtn = document.querySelector('#startButton');
let startDiv = document.querySelector('#starting');
let quizDiv = document.querySelector('#Quiz');

startBtn.addEventListener('click', function(){
    startDiv.classList.add('hide')
    quizDiv.classList.remove('hide')
})