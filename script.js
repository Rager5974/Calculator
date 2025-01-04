// let string = "";
// let buttons = document.querySelectorAll(".btn");
// Array.from(buttons).forEach( (button)=>{
// button.addEventListener('click', (e)=>{
//     if(e.target.innerHTML == '='){
//         string = eval(string);
//         document.querySelector('input').value = string
//     }else if(e.target.innerHTML == 'C'){
//         string = eval(string);
//         document.querySelector('input').value = ""
//     }else{
//         console.log(e.target)
//         string = string + e.target.innerHTML
//         document.querySelector('input').value = string
//     }
// })
// })

function allClear (value) {
    document.getElementById("display").value = ""
}

function oneClear() {
    document.getElementById("display").value = display.value.slice(0,-1)
}

function getValue (value) {
    document.getElementById("display").value += value
}

function getCalculate (value) {
    document.getElementById("display").value = eval(display.value)
}
