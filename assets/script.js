var timeEl = document.getElementById("timer");
var begin = document.querySelector(".begin");

var timeLeft = 20;


function begin() {
    timeLeft = 10;
    timer();
}

    var timer = setInterval(function() {
        timeLeft--;
        timeEl.textContent = "Quiz Time Left: " + timeLeft;
        if(timeLeft === 0) {
            clearInterval(timer);
            sendMessage();
//        if(answer is wrong - time) {
//            wrong();
//        }    
        }
}, 1000);


function sendMessage() {
    timeEl.textContent = "Time is Up";
}

//function wrong() {
//    timeLeft = (timeLeft - 5);
//}

begin.addEventListener('click', beginQuiz);



