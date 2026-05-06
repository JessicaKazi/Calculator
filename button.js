// targeting the input to display the sum of numbers

const display = document.getElementById("calculatorScreen");

function displayScreen(input){
    display.value += input;
}

function clearSum(){
    display.value = "";
}

function equalCal(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}



// targeting the input to display the sum of numbers

// targeting the buttons to function when clicked on


// targeting the buttons to function when clicked on
