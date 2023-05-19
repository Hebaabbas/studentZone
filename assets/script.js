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