const quizForm = document.querySelector(".quiz-form");
const aboutQuiz = document.querySelector("#about-auiz");
const headingQuiz = document.querySelector("#quiz-heading");
const submitButton = document.querySelector(".submit-btn");

const myAnswers = ["90°", "obtuse triangle", "equilateral triangle", "Geometry", "Scalene"];

function calculateScore(){
    const results = new FormData(quizForm);
    let marks = 0;
    let i = 0;
    for(let val of results.values()){
        if(val === myAnswers[i]){
            marks++;
        }
        i++;
    }
    headingQuiz.style.display = "none";
    aboutQuiz.style.display = "none";
    quizForm.innerHTML = `<h2>Your total marks: ${marks}</h2>`;
}
submitButton.addEventListener("click", calculateScore)