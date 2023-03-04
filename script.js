const screen = document.querySelector(".screen");
const allClear = document.querySelector(".all-clear");
const plusMinus = document.querySelector(".plus-minus");
const numbers = Array.from(document.querySelectorAll(".number"));
const operations = Array.from(document.querySelectorAll(".operation"));
const dot = document.querySelector('.dot');
const erase = document.querySelector(".erase");
let existDot = false;
let result = 0;
let ops="=";
let clear = true;

allClear.addEventListener('mouseup',function(){clearAll()});
plusMinus.addEventListener('mouseup',function(){
    changeSign();
})
numbers.forEach(function(number){
    number.addEventListener('mouseup',function(){writeToScreen(number)});
});
operations.forEach(function(operator){
    operator.addEventListener('mouseup',function(){ 
        makeOperation(operator)
    });
});
dot.addEventListener('mouseup',function(){
    addDot();
});
erase.addEventListener('mouseup',function(){
    eraseToScreen();
});

function eraseToScreen(){
    screen.innerText = screen.innerText.substring(0,screen.innerText.length-1);
    if(screen.innerText==""){
        screen.innerText=0;
        clear=true;
    }
}
function addDot(){
    if(!existDot){
        screen.innerText = screen.innerText + ".";
        existDot = true;
    }
}
function makeOperation(operator){
    //console.log(ops)
    clear = true;
    operate(Number(screen.innerText));
    ops = operator.innerText;
}
function operate(number){
    switch(ops){
        case "+":
            clear = false;
            result+=number;
            screen.innerText = result;
            existDot = false;
            break;
        case "-":
            clear=false;
            result-=number;
            screen.innerText = result;
            existDot = false;
            break;
        case "x":
            clear=false;
            result*=number;
            screen.innerText = result;
            existDot = false;
            break;
        case "÷":
            clear = false;
            result/=number;
            screen.innerText = result;
            existDot = false;
            break;
        case "=":
            result = number;
            screen.innerText = result;
            existDot = false;
            break;
    }
}
function writeToScreen(number){
    if(clear){
        screen.innerText = "";
        clear=false;
    }
    if(!clear){
        screen.innerText = screen.innerText + number.innerText;
    }  
}
function changeSign(){
    if(Number(screen.innerText)>0 || Number(screen.innerText)<0){
        screen.innerText= -1 * Number(screen.innerText);
    }
}
function clearAll(){
    ops="="
    result = 0;
    clear = true;
    screen.innerText="0";
    existDot = false;
}

/*
99 + 
99 se borra
*/
