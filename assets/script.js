//Global Variables
var beginBtn = document.querySelector(".begin");
var highscore = document.getElementById("highscores");
var timeEl = document.getElementById("timer");
var questionText = document.getElementById("question");
// var optionA = document.getElementById("one");
// var optionB = document.getElementById("two");
// var optionC = document.getElementById("three");
// var optionD = document.getElementById("four");
var quizStart = document.querySelector(".quizStart");
var mainContainer = document.querySelector(".mainContainer");
var endQuiz = document.querySelector(".endQuiz");
var quizForm = document.querySelector(".quiz-form");


var answerbtn;
var timeLeft;
var score = 0;
var initials = "";
var timer;

//Array of questions and answers
var questions = [{
  q: "What is JavaScript?",
   a: [{text: "object-based programming language", isRight: true},
       {text: "Java", isRight: false},
       {text: "a cup of coffee", isRight: false},
       {text: "an ancient scroll", isRight: false},
   ]
},
{
   q: "Which of the following is JavaScript Data Type?",
   a: [{text: "tacos", isRight: false},
       {text: "element", isRight: false}, 
       {text: "boolean", isRight: true},
       {text: "tag", isRight: false},
]
},
{
   q: "What does NaN stand for?",
   a: [{text: "Never a Number", isRight: false},
       {text: "Nine awesome Names", isRight: false}, 
       {text: "Not a Number", isRight: true},
      {text: "Nuggets and Nachos", isRight: false},
]
}
]

//Display-Hide objects on screen
mainContainer.style.display = "none";
endQuiz.style.display = "none";
beginBtn.addEventListener('click', function(event) {
    event.preventDefault();
    quizForm.style.display="none";
    mainContainer.style.display = "block";
    startQuiz ();    
}); 

//Starts quiz once button is clicked
function startQuiz() {
    isRight = false;
    timeLeft = 20;
    startTimer();
    
}

//Timer functionality
function startTimer() {
    timer = setInterval(function() {
    timeLeft--;
    timeEl.textContent = "Quiz Time Left: " + timeLeft;
    if(timeLeft === 0) {
        clearInterval(timer);
        sendMessage();
    }    
}, 1000);
}
//declare local variable
var questionIndex = 0;
//Selects question 
function currentQuestion() {
    for (var i = 0; i < questions.length; i++) {
        console.log(questions[questionIndex].q);
        questionText.textContent = questions[questionIndex].q;
    }
answerOptions();    
}
currentQuestion();

var answerIndex = 0;
//Array of answers for current question
function answerOptions() {
    for(var i = 0 ; i < 4; i++) {
        var answerList = questions[questionIndex].a[i].text;
        console.log(answerList)
            answerbtn = document.createElement("button");
            answerbtn.textContent = answerList;
            mainContainer.appendChild(answerbtn);

            answerbtn.addEventListener("click", isRight);
    }
    }

//Sends message to user when time is up
function sendMessage() {
    timeEl.textContent = "Time is Up!";
}

//Takes time away when answer is false, goes to next question whether answer is correct or wrong
function isRight() {
    if (isRight === false) {
    timeLeft = (timeLeft - 5);
    } else {
        score++
    } 
    questionIndex++;
    answerIndex++;
   currentQuestion();
   answerOptions();
   highscoreCount();
}

//Stores the score and displays last page with initial input    
function highscoreCount() {
    score();
    endQuiz.style.display = "block";
}
