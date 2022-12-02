const inputSides = document.querySelectorAll(".input-side");
const areaButton = document.querySelector(".area-btn");
const areaMessage = document.querySelector(".area-msg");

function calculateAreaOfTriangle(){
    // e.preventDefault();

    const firstSide = Number(inputSides[0].value);
    const secondSide = Number(inputSides[1].value);
    const thirdSide = Number(inputSides[2].value);
    if (firstSide && secondSide && thirdSide){
        const s = semiPerimeter(firstSide,secondSide,thirdSide);
        const result = areaOfTriangle(s,firstSide,secondSide,thirdSide);
        areaMessage.innerText = `Area of a triangle using heron's formula is ${result} units`;
    }else{
        areaMessage.innerText = "Please enter the all sides of triangle";
    }
    
}
function semiPerimeter(a,b,c){
    return (a+b+c)/2;
}
function areaOfTriangle(s,a,b,c){
    return Math.sqrt(s*(s-a)*(s-b)*(s-c)).toFixed(3);
}
areaButton.addEventListener("click", calculateAreaOfTriangle);