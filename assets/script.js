document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                submitAnswers();
            }
        });
    }
});

// This variable keeps track of the index number of the question that is being shown.
let currentQuestionIndex = 0;
// This varible keeps the count of the right answers stored.
let rightAnswers = 0;
// This varible keeps the count of the wrong answers stored.
let wrongAnswers = 0;
// Variable is to track if the test has been submitted.
let testSubmitted = false;

// This function directs the user to the question.html page.
function openQuestionsPage() {
    window.location.href = "questions.html";
}
// This function is called when the user clicks on the "Next Question" button which directs the user to the next question.
function nextQuestion() {
    if (testSubmitted) {
        return;
    }
    const questions = document.getElementsByClassName("question");
    const submitButton = document.getElementById("submit-button");
    const nextButton = document.getElementById("next-button");

    const currentQuestion = questions[currentQuestionIndex];

    currentQuestion.style.display = "none";

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        questions[currentQuestionIndex].style.display = "block";
    }
