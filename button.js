const displayView = document.getElementById("calculatorScreen");

function appendToDisplay(input) {
    displayView.value += input;
}

function clearSum() {
    displayView.value = "";
}

function equalCal() {
    displayView.value = calculateTheSum();
}

function calculateTheSum() {
    const SumOperator = displayView.value.split(/(\^2|[+\-*/√^])/);

    let sum = parseFloat(SumOperator[0]);

    for (let i = 1; i < SumOperator.length; i += 2) {
        const operators = SumOperator[i];
        const secondSum = parseFloat(SumOperator[i + 1]);

        if (operators === "+") {
            sum += secondSum;
        }
        else if (operators === "-") {
            sum -= secondSum;
        }
        else if (operators === "*") {
            sum *= secondSum;
        }
        else if (operators === "/") {
            if (secondSum === 0) {
                return "Error";
            }
            sum /= secondSum;
        }
        else if (operators === "^") {
            sum = Math.pow(sum, secondSum);
        }
        else if (operators === "^2") {
            sum = Math.pow(sum, 2);
        }
        else if (operators === "√") {
            sum = Math.sqrt(secondSum);
        }
    }
    return sum;
}