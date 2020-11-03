var buttonPlus = document.getElementById('buttonPlus');
var buttonMinus = document.getElementById('buttonMinus');
var buttonMultiply = document.getElementById('buttonMultiply');
var buttonDevide = document.getElementById('buttonDevide');
var inputEl1 = document.getElementById('num1');
var inputEl2 = document.getElementById('num2');

function makeOperation(operationCode){
    var number1 = Number(inputEl1.value);
    var number2 = Number(inputEl2.value);

    if(operationCode === '+'){
        result = number1 + number2;
        window.alert(result);
    }else if (operationCode === '-'){
        result = number1 - number2;
        window.alert(result);
    }else if (operationCode === '*'){
        result = number1 * number2;
        window.alert(result); 
    }
    else if (operationCode === '/'){
        result = number1 / number2;
        window.alert(result);
    }else {
        console.log('code error, write us!')
    }
}

function onOperationButtonClick (eventObject){
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    makeOperation(operation);
}

buttonPlus.addEventListener('click', onOperationButtonClick);
buttonMinus.addEventListener('click', onOperationButtonClick);
buttonMultiply.addEventListener('click', onOperationButtonClick);
buttonDevide.addEventListener('click', onOperationButtonClick);

