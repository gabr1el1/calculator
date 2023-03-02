const numbers = Array.from(document.querySelectorAll(".number"));
const screen = document.querySelector(".screen");
let cursorPos, newValue;
screen.addEventListener('keydown',function(e){
    if(isNaN(e.key) && e.keyCode!==8 && e.keyCode!==37 && e.keyCode!==39){
        //console.log(e.keyCode)
        e.preventDefault();
    }
    
});
numbers.forEach(function(number){
    
    number.addEventListener('mouseup',function(){
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
        //screen.setAttribute('type','number');

        //console.log(cursorPos);
    })
});