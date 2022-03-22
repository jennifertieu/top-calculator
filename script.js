(function(window, document, undefined){
    "use strict";
    let values = [];
    const display = document.querySelector(".display");        
    const buttons = document.querySelectorAll(".button");
    buttons.forEach((button) => button.addEventListener("click", calculate));

    function calculate(event){
        let buttonValue = event.target.value;
        // save button values until equal operator is used
        console.log(buttonValue);
        if (event.target.value === "="){
            // calculate values 
            console.log(values);
            // return value 
            return;
        } else if (buttonValue == "C"){
            // clear values 
            values = [];
            return;
        }
        // when equal button is used, calculate values
        values.push(buttonValue);
        display.textContent = buttonValue;
    }

})(window, document);