//Global Variables
var beginBtn = document.querySelector(".begin");
var highscore = document.getElementById("highscores");
var timeEl = document.getElementById("timer");
var questionText = document.getElementById("question");
var quizStart = document.querySelector(".quizStart");
var mainContainer = document.querySelector(".mainContainer");
var endQuiz = document.querySelector(".endQuiz");
var quizForm = document.querySelector(".quiz-form");


var answerbtn;
var timeLeft;
var score = 0;
var initials = "";
var timer;
var isRight;

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

//Starts quiz and timer once button is clicked
function startQuiz() {
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

//this variable will grab the first item the array questions
var questionsIndex = 0;
//Selects question 
function currentQuestion() {
    for (var i = 0; i < questions.length; i++) {
        console.log(questions[questionsIndex].q);
        questionText.textContent = questions[questionsIndex].q;

    }
answerOptions();    
}
currentQuestion();
rules();

//Array of answers for current question
function answerOptions() {
    for(var k = 0 ; k < 4 ; k++) {
        var answerList = questions[questionsIndex].a[k].text;
        console.log(answerList)
            answerbtn = document.createElement("button");
            answerbtn.textContent = answerList;
            mainContainer.appendChild(answerbtn);

            answerbtn.addEventListener("click", () => {
                questionsIndex++
                currentQuestion()
            });       
    }
}
    
//Takes time away when answer is false, goes to next question whether answer is correct or wrong
function rules() {
    if (isRight === false) {
    timeLeft = (timeLeft - 5);
    displayMessage("Sorry, wrong answer!");
    } else {
        score++;
        displayMessage("Correct!");
    } 
    score();
    
}

//Sends message to user when time is up
function sendMessage() {
    timeEl.textContent = "Time is Up!";
    return;
}


//Stores the score and displays last page with initial input    
function quizOver() {
    if (questionsIndex.length === 0) {
        alert("The Quiz is over!");
        return;
    }

    endQuiz.style.display = "block";
    quizForm.style.display="none";
    mainContainer.style.display = "none";
    highscore.addEventListener("submit", score);
}
