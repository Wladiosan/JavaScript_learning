var operationButtons = document.getElementsByClassName('operation-buttons');
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

function selectArray (i){
    operationButtons[i].addEventListener('click', onOperationButtonClick);
}

for (var i=0; i< operationButtons.length; i++) {
    selectArray(i);
}
