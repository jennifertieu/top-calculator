(function(window, document, undefined){
    "use strict";
    let result = 0;
    let inputs = [];
    const display = document.querySelector(".display");   
    display.textContent = +result;

    const buttonOperand = document.querySelectorAll(".button-operand");
    buttonOperand.forEach((button) => button.addEventListener("click", displayNumbers));

    const buttonOperator = document.querySelectorAll(".button-operator");
    buttonOperator.forEach((button) => button.addEventListener("click", operator));
    
    function displayNumbers(event){
        let buttonValue = event.target.value;
        console.log(buttonValue);
        result += buttonValue;
        display.textContent = +result;
    }

    function operator(event){
        let buttonValue = event.target.value;
        inputs.push(+result);
        console.log(inputs);
        if (buttonValue === "="){
            // calculate values 
            console.log(inputs);
            display.textContent = operate(inputs);
            return;
        } else if (buttonValue === "C"){
            // clear inputs 
            inputs = [];
            result = 0;
            display.textContent = result;
            return;
        } else if (inputs[2]){
            display.textContent = operate(inputs); 
        } else if (!inputs[1]){
            // add operator
            inputs.push(buttonValue);
            console.log(inputs);
        } else {
            // replace operator if the user presses it again
            inputs[1] = buttonValue;
        }
        result = 0;
    }

    function operate(values){
        let output = 0;
        if (values[1] === "+"){
            output = add(values[0], values[2]);
            values = [output];
            return output;
        } else if (values[1] === "-"){
            output = subtract(values[0], values[2]);
            values = [output];
            return output;
        } else if (values[1] === "*"){
            output = multiply(values[0], values[2]);
            values = [output];
            return output;
        } else if (values[1] === "/"){
            output = divide(values[0], values[2]);
            values = [output];
            return output;
        }
    }
    function add(op1, op2){
        return op1 + op2;
    }

    function subtract(op1, op2){
        return op1 - op2;
    }
    
    function divide(op1, op2){
        return op1 / op2;
    }

    function multiply(op1, op2){
        return op1 * op2;
    }
})(window, document);