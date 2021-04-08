var quizQuestion = document.getElementById('quizQuestion');
var questionsCard = document.getElementById('questionsCard');
var a1 = document.getElementById('1');
var a2 = document.getElementById('2');
var a3 = document.getElementById('3');
var a4 = document.getElementById('4');
var score = document.getElementById('score'); 
var buttonAnswer = document.querySelector('button'); 
var startButton = document.getElementById('startButton');
var buttonCard = document.getElementById('buttonCard');
var timeCoundownt = document.querySelector('span');
var time = 10;
var counter = 0;
var userScore = 0; 
var userInput = document.getElementById ('userInput');
var submitButton = document.getElementById ('submitButton');

var questions = [
    {
        q: "What is the HTML tag under which one can write the JavaScript code?",
        ans1: '<javascript>',
        ans2: '<scripted>',
        ans3: '<script>',
        ans4: '<js>',
        correctAnsw: "<script>"
    },
    {
        q: "Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?",
        ans1: ' alertbox(“GeeksforGeeks”);',
        ans2: 'msg(“GeeksforGeeks”);',
        ans3: 'msgbox(“GeeksforGeeks”);',
        ans4: '  alert(“GeeksforGeeks”);',
        correctAnsw: " alert(“GeeksforGeeks”);"
    },
    {
        q: "What is the correct syntax for referring to an external script called “geek.js”?",
        ans1: '<script src=”geek.js”>',
        ans2: '<script href=”geek.js”>',
        ans3: '<script ref=”geek.js”>',
        ans4: '<script name=”geek.js”>',
        correctAnsw: "<script src=”geek.js”>"
    },
    {
        q: "Which of the following is not a reserved word in JavaScript?",
        ans1: 'interface',
        ans2: ' throws',
        ans3: 'program',
        ans4: 'short',
        correctAnsw: "program"
    },
    
    {
        q: "What is used to remove an item from an array ?",
        ans1: '.pop',
        ans2: '.push',
        ans3: '.concat',
        ans4: '.remove',
        correctAnsw: ".pop"
    },

]
startButton.addEventListener("click", function () {
    buttonCard.style.display = "none"
    questionsCard.style.display = 'block'
    timeCoundownt.textContent = time;
    startTimer();
    displayQuestion();
})

function startTimer(params) {
    var timeInterval = setInterval(function () {
        time--;
        timeCoundownt.textContent = time;
        if (time <= 0) {
            clearInterval(timeInterval);
        }

    }, 1000)
}

function endQuiz() {
        questionsCard.style.display = "none"
    finalCard.style.display = 'block'
    
}

function displayQuestion(params) {
    if (counter >= questions.length){
        endQuiz(); 
    }
    quizQuestion.textContent = questions[counter].q
    a1.textContent = questions[counter].ans1;
    a2.textContent = questions[counter].ans2;
    a3.textContent = questions[counter].ans3;
    a4.textContent = questions[counter].ans1;

}


a1.addEventListener("click", function (e) {
    var userAnswer = a1.textContent 
    var answer = questions[counter].correctAnsw
    if(userAnswer === answer){
        console.log("you got the right anwser")
        userScore+= 10; 
        score.textContent = userScore; 
    }else{
        console.log("wrong anwser")
    }
    counter++; 
    displayQuestion(); 
})

a2.addEventListener("click", function (e) {
    var userAnswer = a2.textContent 
    var answer = questions[counter].correctAnsw
    if(userAnswer === answer){
        console.log("you got the right anwser")
        userScore+= 10; 
        score.textContent = userScore; 
    }else{
        console.log("wrong answer")
    }
    counter++; 
    displayQuestion(); 
})

a3.addEventListener("click", function (e) {
    var userAnswer = a3.textContent 
    var answer = questions[counter].correctAnsw
    if(userAnswer === answer){
        console.log("you got the right answer")
        userScore+= 10; 
        score.textContent = userScore; 
    }else{
        console.log("wrong answer")
    }
    counter++; 
    displayQuestion(); 
    
})

a4.addEventListener("click", function (e) {
    var userAnswer = a4.textContent 
    var answer = questions[counter].correctAnsw
    if(userAnswer === answer){
        console.log("you got the right anwser")
        userScore+= 10; 
        score.textContent = userScore; 
    }else{
        console.log("wrong answer")
    }
    counter++; 
    displayQuestion(); 
    console.log(userScore);
})

submitButton.addEventListener('click',function(e) {
    // console.log(userInput.value); 
    // userScore

    localStorage.setItem(userInput.value, userScore)
})
