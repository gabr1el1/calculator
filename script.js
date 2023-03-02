const screen = document.querySelector(".screen");
const numbers = Array.from(document.querySelectorAll(".number"));
const operations = Array.from(document.querySelectorAll(".operation"));

let cursorPos, newValue;
let result = 0;
let ops="=";
let clear;

screen.addEventListener('keydown',function(e){
    if(isNaN(e.key) && e.keyCode!==8 && e.keyCode!==37 && e.keyCode!==39){
        e.preventDefault();
    } 
    if(clear){
        screen.value = "";
        clear = false;
    }
});
numbers.forEach(function(number){
    number.addEventListener('mouseup',function(){writeToScreen(number)});
});
operations.forEach(function(operator){
    operator.addEventListener('mouseup',function(){makeOperation(operator)});
});
function makeOperation(operator){
    console.log(ops)
    operate(Number(screen.value));
    ops = operator.innerText;
}
function writeToScreen(number){
    if(clear){
        screen.value = "";
        clear = false;
    }
    if(screen.selectionEnd==0){
        cursorPos = 0;
    }else{
        cursorPos = screen.selectionEnd;
    }
    newValue = screen.value.split("");
    newValue.splice(cursorPos,0,number.innerText);
    newValue = newValue.join("");
    screen.value = newValue;
    screen.focus();
    screen.selectionEnd = cursorPos+1;
}
function operate(number){
    clear = true;
    switch(ops){
        case "+":
            result+=number;
            screen.value = result;
            break;
        case "-":
            result-=number;
            screen.value = result;
            break;
        case "x":
            result*=number;
            screen.value = result;
            break;
        case "÷":
            result/=number;
            screen.value = result;
            break;
        case "=":
            result = number;
            screen.value = result;
            break;
    }
}