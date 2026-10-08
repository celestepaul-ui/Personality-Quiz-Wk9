
console.log("script.js connected!");

const questions = document.querySelectorAll(".question-block");

let answers = {};

questions.forEach(function (question) {
    const answerButtons = question.querySelectorAll(".answer-btn");

    answerButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            answerButtons.forEach(function (btn) {
                btn.classList.remove("selected");
            });

            button.classList.add("selected");

            answers[question.id] = button.dataset.answer;

            console.log("You clicked:", button.dataset.answer);
        });
    });
});

function displayResult() {

    let goldenRetrieverScore = 0;
    let chihuahuaScore = 0;

    Object.values(answers).forEach(function (answer) {
        if (answer === "A") {
            goldenRetrieverScore++;
        } else if (answer === "B") {
            chihuahuaScore++;
        }

    });

    let result;

    if (goldenRetrieverScore > chihuahuaScore) {
        result = "You are a Golden Retriever!";


    } else {
        result = "You are a Chihuahua!";
    }

    const resultText = document.getElementById("result-text");

    resultText.textContent = result;

    const resultContainer = document.getElementById("result-container");

    resultContainer.style.display = "block";


}
const showResultButton = document.getElementById("show-result");

showResultButton.addEventListener("click", displayResult);

