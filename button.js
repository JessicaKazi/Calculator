const display = document.getElementById("calculatorScreen");

const buttonValues = [
    "C", "√", "**", "*", 
    "7", "8", "9", "/",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "="
];

const rightSymbols = ["/", "*", "-", "+", "="];
const topSymbols = ["C", "√", "**"];


let A = 0;
let operator = null;
let B = null;

function clearSum() {
    A = null;
    operator = null;
    B = null;
}

for (let i = 0; i < buttonValues.length; i++) {
    let value = buttonValues[i];
    let button = document.createElement("button");
    button.innerText = value;
}

button.addEventListener("click", function() {
        if (rightSymbols.includes(value)) { 
            if (value == "=") {
                if (A != null) {
                    B = display.value;
                    let numA = Number(A);
                    let numB = Number(B);

                    if (operator == "/") {
                        display.value = numA/numB;
                    }
                    else if (operator == "*") {
                        display.value = numA*numB;
                    }
                    else if (operator == "-") {
                        display.value = numA-numB;
                    }
                    else if (operator == "+") {
                        display.value = numA+numB;
                    }
                    clearAll();
                  }
            }
            else {
                operator = value; 
                A = display.value;
                display.value = "";
            }
        }
        else if (topSymbols.includes(value)) { 
            if (value == "C") {
                clearAll();
                display.value = "";
            }
            else if (value == "√") {
                
            }
            else if (value == "**") {
                display.value = Math.sqrt(Number)
            }
        }
        else {
            if (value == ".") {
                
                if (display.value != "" && !display.value.includes(value)) {
                    display.value += value;
                }
            }
            
            else if (display.value == "0") {
                display.value = value;
            }
            else {
                display.value += value;
            }
        }
    });

    document.getElementById("buttons").appendChild(button);