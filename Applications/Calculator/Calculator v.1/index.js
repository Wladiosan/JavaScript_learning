var buttonPlus = document.getElementById('buttonPlus');
var buttonMinus = document.getElementById('buttonMinus');
var buttonMultiply = document.getElementById('buttonMultiply');
var buttonDevide = document.getElementById('buttonDevide');
var inputEl1 = document.getElementById('num1');
var inputEl2 = document.getElementById('num2');

function getnumber1(){
    return Number(inputEl1.value);
}
function getnumber2(){
    return Number(inputEl2.value);
}

function onButtonPlusClick (){
    result = getnumber1() + getnumber2();
    window.alert(result);
}
function onButtonMinusClick (){
    result = getnumber1() - getnumber2();
    window.alert(result);
}
function onButtonMultiplyClick (){
    result = getnumber1() * getnumber2();
    window.alert(result);
}
function onButtonDevideClick (){
    result = getnumber1() / getnumber2();
    window.alert(result);
}

buttonPlus.addEventListener('click', onButtonPlusClick);
buttonMinus.addEventListener('click', onButtonMinusClick);
buttonMultiply.addEventListener('click', onButtonMultiplyClick);
buttonDevide.addEventListener('click', onButtonDevideClick);

