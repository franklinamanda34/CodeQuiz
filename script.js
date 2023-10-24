document.getElementById('start-btn').addEventListener('click', startQuiz);

const questions = [
{question: "What is Vanilla JavaScript?",
answers: [
"Super Boring",
"Extremely Bad",
"Derived from the fruit of orchids in the species Vanilla",
"Plain Ole JavaScript"
],
correctAnswer: "Plain Ole JavaScript"
},
]
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 75;
let timerInterval;
function startQuiz() {
document.getElementById('start-container').classList.add('hide');
document.getElementById('question-container').classList.remove('hide');
loadQuestion();
startTimer();
}
function loadQuestion(){
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
questionElement.textContent = questions[currentQuestionIndex].question;
answerButtons.innerHTML = '';
questions[currentQuestionIndex].answers.forEach(answer => {
const button = document.createElement('button');
button.textContent = answer;
button.classList.add('btn');
button.addEventListener('click', selectAnswer);
answerButtons.appendChild(button);
});
}
function startTimer(){
const timerElement = document.getElementById('timer');
timerInterval = setInterval(function () {
timeLeft--;
timerElement.textContent = "Time: " + timeLeft;
if (timeLeft <= 0) {
endQuiz();
}
}, 1000)
}
function selectAnswer(event) {
const selectedAnswer = event.target.textContent;
const correctAnswer = questions[currentQuestionIndex].correctAnswer;
const checkAnswerElement = document.getElementById('check-answer');
if (selectedAnswer === correctAnswer) {
score +=10;
checkAnswerElement.textContent = "Bingo";
} else {
timeLeft -= 10;
checkAnswerElement.textContent = "Incorrect";
}
checkAnswerElement.classList.remove('hide');
document.querySelectorAll('.btn').forEach(button => {
button.disabled = true;
});
document.getElementById('next-btn').classList.remove('hide');
}
function nextQuestion() {
currentQuestionIndex++;
document.getElementById('check-answer').classList.add('hide');
document.getElementById('next-btn').classList.add('hide');
if (currentQuestionIndex < questions.length) {
loadQuestion();
} else {
endQuiz();
}
}
function endQuiz() {
clearInterval(timerInterval);
document.getElementById('question-container').classList.add('hide');
document.getElementById('score-container').classList.remove('hide');
document.getElementById('your-score').textContent = "Your Score: " + score;
}


function saveScore() {
const initials = document.getElementById('initials-field').value;
alert("Score saved for " + initials + ": " + score);
}
