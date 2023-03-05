const screen = document.querySelector('.screen');
const allClear = document.querySelector(".all-clear");
const plusMinus = document.querySelector(".plus-minus");
const numbers = Array.from(document.querySelectorAll(".number"));
const operations = Array.from(document.querySelectorAll(".operation"));
const dot = document.querySelector('.dot');
const erase = document.querySelector(".erase");
let ops="=";
let existDot = false;
let clear = false;
let result = 0;
let number;
allClear.addEventListener('mouseup',function(){clearAll()});
plusMinus.addEventListener('mouseup',function(){
    changeSign();
})
numbers.forEach(function(number){
    number.addEventListener('mouseup',function(){writeToScreen(number.innerText)});
});
operations.forEach(function(operator){
    operator.addEventListener('mouseup',function(){ 
        operate(operator.innerText);
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
function operate(operator){
    clear = true;
    number=Number(screen.innerText);
    switch(ops){
        case "+":
            result+=number;
            break;
        case "-":
            result-=number;
            break;
        case "x":
            result*=number;
            break;
        case "÷":
            result/=number;
            break;
        case "=":
            result = number;
            break;
    }
    ops=operator;
    screen.innerText = result;
    existDot = false;
}
function writeToScreen(number){
    if(clear){
        screen.innerText= "";
        screen.innerText = screen.innerText+number;
        clear = false;
    }else{
        screen.innerText = screen.innerText+number;
    }

}
function changeSign(){
    if(Number(screen.innerText)>0 || Number(writable.innerText)<0){
        screen.innerText= -1 * Number(writable.innerText);
    }
}
function clearAll(){
    screen.innerText="";
    ops="="
    result = 0;
    existDot = false;
}
