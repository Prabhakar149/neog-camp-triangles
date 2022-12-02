const inputAngles = document.querySelectorAll(".input-angle");
const checkButton = document.querySelector(".check-btn");
const myMessage = document.querySelector(".message");

function sumOfAngles(a1,a2,a3){
    return a1+a2+a3;
}
function checkIsTriangle(sum){
    if(sum === 180){
        showMessage("Woho, the angles form a triangle!");
    }else{
        showMessage("Nah! The given angles don't form a triangle");
    }
}
function showMessage(msg){
    myMessage.innerText = msg;
}

checkButton.addEventListener("click", function(){
    const angle1 = Number(inputAngles[0].value);
    const angle2 = Number(inputAngles[1].value);
    const angle3 = Number(inputAngles[2].value);
    if(angle1 && angle2 && angle3){
        const sum = sumOfAngles(angle1,angle2,angle3)
        checkIsTriangle(sum);
    }
    else{
        showMessage("Please give the value of all angles of triangle");
    }
    
})