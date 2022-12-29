//1 Задание
let buttonOne = document.querySelector('.buttonOne');
let inputOne = document.querySelector('.inputOne');

function copyValue(){
    inputOne.value = buttonOne.innerHTML;
}
buttonOne.addEventListener('click', ()=> copyValue()); 

//2 Задание
// let changeOne = document.querySelector('.changeOne');
// let changeTwo = document.querySelector('.changeTwo');
// let buttonTwo = document.querySelector('.buttonTwo');

// let saveOne;
// let saveTwo;

// function changeValue() {
//     saveOne = changeOne.value;
//     saveTwo = changeTwo.value;

//     saveOne = changeTwo.innerHTML;
//     saveTwo = changeTwo.innerHTML;

//     console.log(saveOne); 
//     console.log(saveTwo);
// }
// buttonTwo.addEventListener('click', () => changeValue());

//3 Задание

let inputThree = document.querySelector('.inputBlock');
let block = document.querySelector('.block');
let unBlock = document.querySelector('.unBlock');

function blockInput(){
    inputThree.setAttribute('disabled', 'disabled');
};

function unBlockInput(){
    inputThree.removeAttribute('disabled');
};

block.addEventListener('click',()=>  blockInput());
unBlock.addEventListener('click',()=> unBlockInput());


//4 задание
inputAlert = document.querySelector('.fourInput');
btnAlert = document.querySelector('.btnAlert');
function showAlert(){
    alert(inputAlert.value);
}
ё
btnAlert.addEventListener('click', ()=> showAlert());

//5задание
let squareInput = document.querySelector('.number');
let squareBtn = document.querySelector('.squareNum');

function getNumber(){
    squareInput.value = squareInput.value * squareInput.value;
    alert(squareInput.value);
}

squareBtn.addEventListener('click', ()=> getNumber());









