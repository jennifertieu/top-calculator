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
        console.log("operator event", inputs);

        let buttonValue = event.target.value;
        // if first input, push result first
        if (!inputs[0]) inputs.push(+result);
        // if chained calculation, add input after operator

        // if no operator, add
        if(!inputs[1]) {
            inputs.push(buttonValue);
        } else {
            // operator exists, add
            inputs.push(+result)
        }

        console.log("pushed result", inputs);
        if (buttonValue === "="){
            // calculate values 
            displayText.textContent = Math.round(calculate(inputs));
            console.log("equals", inputs);
        } else if (buttonValue === "C"){
            // clear inputs 
            resetCalculator();
            displayText.textContent = result;
            return;
        } else if (inputs.length === 3){
            console.log("Calculated value", calculate(inputs));
            console.log("inputs", inputs);
            // calculate values if two numbers and operator are present
            displayText.textContent = Math.round(calculate(inputs)); 
            inputs.push(buttonValue);
        } else if (inputs[1]) {
            inputs[1] = buttonValue
        };

        // reset result to display
        result = 0;
        console.log(inputs);
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
            return inputs = [divide(values[0], values[2])][0];
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