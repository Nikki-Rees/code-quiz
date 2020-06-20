


const introEl = document.getElementById("intro");
const startEl = document.getElementById("start");
const quizEl = document.getElementById("quizContainer");
const q1El = document.getElementById("questionOneWrapper");
const q2El = document.getElementById("questionTwoWrapper");
const q3El = document.getElementById("questionThreeWrapper");
const timerEl = document.getElementById("timer");
const statusEl = document.getElementById("status");
const scoreEl = document.getElementById("score");
const inputEl = document.getElementById("input");

// const questionSet = [q1El, q2El, q3El];


//Create counters for correct/incorrect answers
let wrongCount = 0;
let correctCount = 0;

// function counter() {
//     // let clickedEl = event.target;
//     if (clickedEl.matches(".btnW") === true) {
//         wrongCount++;

//     } else {
//         correctCount++;
//     }
// }


$(document).ready(function () {


    // creat timer that displays 90 seconds (max 3 incorrect answers per question - seconds could be decrease for high level of difficulty)
    let secondsLeft = 90;

    function setTime() {
        let timerInterval = setInterval(function () {
            secondsLeft--;
            timerEl.textContent = secondsLeft + " seconds left";

            if (secondsLeft === 0) {
                clearInterval(timerInterval);

            }

        }, 1000);
    }

    // if answer is incorrect - deduct 10 secs from timer
    function deductTime() {
        secondsLeft = (secondsLeft - 10);
    }


    //if timer reaches 0, move to display 
    // function gameOver() {
    //     if (secondsLeft = 0);
    //     quizEl.style.display = "none";
    //     scoreEl.style.display = "block";
    //     calcScore();
    // }


    //start the timer and render the first question

    startEl.addEventListener("click", function (event) {
        event.preventDefault();

        introEl.style.display = "none";
        quizEl.style.display = "block";
        setTime();

        // populateQuestions();

    });


    //create functions to move to next question
    function moveToQ2() {
        q1El.style.display = "none";
        q2El.style.display = "block";
    }
    function moveToQ3() {
        q2El.style.display = "none";
        q3El.style.display = "block";
    }

    function moveToScore() {
        q3El.style.display = "none";
        scoreEl.style.display = "block";
    }


    q1El.addEventListener("click", function (event) {
        event.preventDefault();
        let clickedEl = event.target;

        if (clickedEl.matches(".btnW") === true) {

            console.log("wrong answer, please try again");
            let status = $("p").text("wrong answer, 10 seconds deducted, please try again");
            $("statusEl").append(status);
            wrongCount++;
            deductTime();

        } else {

            console.log("correct answer!");
            let status = $("p").text("Correct answer, next question");
            $("statusEl").append(status);
            correctCount++;
            setTimeout(moveToQ2, 750);


        }


    });


    q2El.addEventListener("click", function (event) {
        event.preventDefault();
        let clickedEl = event.target;


        if (clickedEl.matches(".btnW") === true) {

            console.log("wrong answer, please try again");
            let status = $("p").text("wrong answer, 10 seconds deducted, please try again");
            $("statusEl").append(status);
            wrongCount++;
            deductTime();

        } else {

            console.log("correct answer!");
            let status = $("p").text("Correct answer, next question");
            $("statusEl").append(status);
            correctCount++;
            setTimeout(moveToQ3, 750);
        }


    });


    q3El.addEventListener("click", function (event) {
        event.preventDefault();
        let clickedEl = event.target;

        if (clickedEl.matches(".btnW") === true) {

            console.log("wrong answer, please try again");
            let status = $("p").text("wrong answer, 10 seconds deducted, please try again");
            $("statusEL").append(status);
            wrongCount++;
            deductTime();


        } else {

            console.log("correct answer!");
            let status = $("p").text("Correct answer, next question");
            $("statusEl").append(status);
            correctCount++;
            setTimeout(moveToScore, 500);
            //stopTimer();
            calcScore();
        }


    });

    //Calculate the final score

    function calcScore() {
        console.log("incorrect answers: " + wrongCount);
        console.log("correct answers: " + correctCount);
        let totalAttempts = wrongCount + correctCount;
        let score = (correctCount / totalAttempts) * 100;
        console.log("total score: " + score);
        // textScore = toString(score);
        let printScore = $("<h2>").text(score);
        $('.displayScore').append(printScore);

    }

    let printScore = calcScore;

    function addScoreToLeaderboard() {


        leaderBoard.addEventListner("submit", (e) => {
            e.preventDefault();
            let initials = inputEl.val.trim();
            initials = $("<td>") + initials + ("/td");
            $('<td>').append(printScore);
            localStorage.setItem("u", JSON.stringify(leaderBoard));
            letStorage.getItem("initials", "score");
            if (nameText !== undefined) {
                $("tr").append(initials, printScore)
                // need to add leader board element
            }
        })


        localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
        window.location.href = "./leaderboard.html"

    }

});



// ===========

        // let questionSet = [q1, q2, q3];
        // let displayQuestion = 0;

        // function nextQuestion() {
        //     let i = 0;
        //     let currentQuestion = questionSet[i];1
        //     let displayQuestion = currentQuestion + 1;
        //     let hideQuestion = 

        // }


            // const questions = [

    //     {questionOne: " " 
    //     choiceOne: "numbers and strings",
    //     choiceTwo: "other arrays",
    //     choiceThree: "booleans",
    //     "all of the above"
    //     // answer index 3 is correct
    //     ],

    //     questionTwoOptions["quotes",
    //     "curly brackets",
    //     "parentheses",
    //     "square brackets"
    //     // answer index 2 is correct
    //     ],

    //     questionThreeOptions[
    //     "strings",
    //     "booleans",
    //     "console.log",
    //     "numbers"
    //     // answer index 2 is correct
    //     ]
    // ]


    // function populateQuestions() {

    //     for (let i = 0; i < questions.length; i++) {
    //         console.log(questions[i]);
    //         let q = $("<h2>");
    //         q.text(questions[i]);
    //         $(".questionContainer").appendChild(q);


    //         function populateChoices() {

    //             for (let a = 0; a < questions[i].length; a++) {
    //                 console.log(question[i][a]);
    //                 let btn = $("<button>");
    //                 btn.text(i[a]);
    //                 $(".buttonContainer").appendChild(btn);
    //             }

    //         }
    //     }

    // };


    // populateChoices()

    // let currentQuestionIndex = 0;
    // let x = questions[currentQuestionIndex];
    // let optionA = questions[x].choiceA;
    // let optionB = questions[x].choiceB;
    // let optionC = questions[x].choiceC;
    // let optionD = questions[x].choiceD;

    // console.log(x);

    // function populateQuiz() {
    //     let currentQ = questions[currentQuestionIndex];
    //     questionEl.innerHTML = "(<h2>)" + currentQ + "(</h2>)";
    //     optbtnA.innerHTML = currentQ.optionA;
    //     optbtnB.innerHTML = currentQ.optionB;
    //     optbtnC.innerHTML = currentQ.optionC;
    //     optbtnD.innerHTML = currentQ.optionD;
    //     $('#quizContainer').append(questionEl);


    // }