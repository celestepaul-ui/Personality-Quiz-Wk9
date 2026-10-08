
console.log("script.js connected!");

const questions = document.querySelectorAll(".question-block");

questions.forEach(function(question) {
    const answerButtons = question.querySelectorAll(".answer-btn");

    answerButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            answerButtons.forEach(function(btn) {
                btn.classList.remove("selected");
            });

            button.classList.add("selected");

            console.log("You clicked:", button.dataset.answer);
        });
    });
});