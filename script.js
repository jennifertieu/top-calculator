(function(window, document, undefined){
    "use strict";
    let result = 0;
    let inputs = [];
    const displayText = document.querySelector(".display-text");   
    displayText.textContent = +result;

    const buttonOperand = document.querySelectorAll(".button-operand");
    buttonOperand.forEach((button) => button.addEventListener("click", displayTextNumbers));

    const buttonOperator = document.querySelectorAll(".button-operator");
    buttonOperator.forEach((button) => button.addEventListener("click", operator));
    
    function displayNumbers(event){
        let buttonValue = event.target.value;
        result += buttonValue;
        displayText.textContent = +result;
    };

    function operator(event){
        let buttonValue = event.target.value;
        inputs.push(+result);
        console.log(inputs);
        if (buttonValue === "="){
            // calculate values 
            displayText.textContent = Math.round(operate(inputs));
            resetCalculator();
            return;
        } else if (buttonValue === "C"){
            // clear inputs 
            resetCalculator();
            displayText.textContent = result;
            return;
        } else if (inputs[2]){
            displayText.textContent = Math.round(operate(inputs)); 
        } else if (!inputs[1]){
            // add operator
            inputs.push(buttonValue);
            console.log(inputs);
        } else {
            // replace operator if the user presses it again
            inputs[1] = buttonValue;
        }
        result = 0;
    };

    function operate(values){
        if (!values[1]){
            return values[0];
        } else if (values[1] === "+"){
            return values = [add(values[0], values[2])][0];
        } else if (values[1] === "-"){
            return values = [subtract(values[0], values[2])][0];
        } else if (values[1] === "*"){
            return values = [multiply(values[0], values[2])][0];
        } else if (values[1] === "/"){
            return values = [divide(values[0], values[2])][0];
        }
    };
    function add(op1, op2){
        return op1 + op2;
    };

    function subtract(op1, op2){
        return op1 - op2;
    };
    
    function divide(op1, op2){
        return op2 === 0 ? "ERROR: ZERO DIVISION" : op1 / op2;
    };

    function multiply(op1, op2){
        return op1 * op2;
    };

    function resetCalculator(){
        result = 0;
        inputs = [];
    };
})(window, document);