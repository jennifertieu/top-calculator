(function(window, document, undefined){
    "use strict";
    let result = 0;
    let inputs = [];
    const displayText = document.querySelector(".display-text");   
    displayText.textContent = +result;

    const buttonOperand = document.querySelectorAll(".button-operand");
    buttonOperand.forEach((button) => button.addEventListener("click", displayNumbers));

    const buttonOperator = document.querySelectorAll(".button-operator");
    buttonOperator.forEach((button) => button.addEventListener("click", operator));
    
    function displayNumbers(event){
        let buttonValue = event.target.value;
        result += buttonValue;
        displayText.textContent = +result;
    };

    function operator(event){
        let buttonValue = event.target.value;
        // if first input, push result first
        if (!inputs[0]) inputs.push(+result);

        // if no operator, add operator
        if(!inputs[1]) {
            inputs.push(buttonValue);
        } else {
            // operator exists, add operand first
            inputs.push(+result)
        }

        
        if (buttonValue === "="){
            // calculate values 
            displayText.textContent = Math.round(calculate(inputs));
        } else if (buttonValue === "C"){
            // clear inputs 
            resetCalculator();
            displayText.textContent = result;
            return;
        } else if (inputs.length === 3){
            // calculate values if two numbers and operator are already present
            displayText.textContent = Math.round(calculate(inputs)); 
            // add operator 
            inputs.push(buttonValue);
        } else if (inputs[1]) {
            // replace operator
            inputs[1] = buttonValue
        };

        // reset result to display
        result = 0;
    };

    function calculate(values){
        // no operator
        if (!values[1] || !values[2]){
            return values[0];
        } else if (values[1] === "+"){
            inputs = [add(values[0], values[2])];
            return inputs[0];
        } else if (values[1] === "-"){
            inputs = [subtract(values[0], values[2])]; 
            return inputs[0];
        } else if (values[1] === "*"){
            inputs = [multiply(values[0], values[2])];
            return inputs[0];
        } else if (values[1] === "/"){
            inputs = [divide(values[0], values[2])];
            return inputs[0];
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