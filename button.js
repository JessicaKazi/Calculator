const displayView = document.getElementById("calculatorScreen");

function appendToDisplay(input){
    displayView.value += input
}

function clearSum () {
  displayView.value = ""
}

function equalCal () {
  
}

function calculateTheSum() {
  // the regex keeps the operate after the spilt removes them
  const SumOperator = displayView.value.split(/(\^2|[+\-*/√^]+)/); 
  let sum = parseFloat(SumOperator[0]);

  for (let i = 1; i < SumOperator.length; i+=2 ) {
    const operators = SumOperator[i];
    const secondSum = parsefloat(SumOperator[i+1]);

    if (SumOperator === '+') {
      sum += secondSum;  
    } 
    else if (SumOperator === "-") {
      sum -= secondSum;
    } 
    else if (SumOperator === "*") {
      sum *= secondSum;
    } 
    else if (SumOperator === "/") {
      if (secondSum == 0) {
        return displayView.value="error"
      } 
      else {
        sum /= secondSum;
      }
    } 
    else if (SumOperator === "^") {
      sum = Math.pow(sum, secondSum);
    } 
    else if (SumOperator === "^2") {
      sum = Math.pow(secondSum, 2);
    } 
    else if (SumOperator === "√") {
      if (isNaN(sum)) {
        sum = Math.sqrt(secondSum)
      } 
      else {
        sum *= Math.sqrt(secondSum)
      }
    }
  }
  displayView.value = sum
}

