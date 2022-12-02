const hypotenuseInputs = document.querySelectorAll(".input-hypotenuse");
const hypotenuseButton = document.querySelector(".hypotenus-btn");
const hypotenuseMessage = document.querySelector(".hypotenuse-msg");

function sumOfSquares(a, b) {
  return a * a + b * b;
}
function calculateHypotenuse() {
  if (hypotenuseInputs[0].value && hypotenuseInputs[1].value) {
    if(hypotenuseInputs[0].value<0 || hypotenuseInputs[1].value<0){
      hypotenuseMessage.innerText = "the base or height of triangle can not be negative value";
    }else{
      const sum = sumOfSquares(Number(hypotenuseInputs[0].value),Number     (hypotenuseInputs [1].value));
      const hypotenuse = Math.sqrt(sum).toFixed(3);
      hypotenuseMessage.innerText = `hypotenuse of triangle is ${hypotenuse} units`;
    }  
  }else{    
    hypotenuseMessage.innerText = "please give the value of base and height of triangle";
  }
}
hypotenuseButton.addEventListener("click", calculateHypotenuse);
