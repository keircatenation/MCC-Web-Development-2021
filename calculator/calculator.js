// an array to hold the operators and operans to be evaluated
let inputArray = [];

// function that returns if a button 
function clickedButton(eventClick){
    //the event must have a child of the target and that the target must have a non-empty child of dataset
    if (eventClick.target.dataset.number || eventClick.target.dataset.operator)
    return true;
    else return false;
}

// reference to the output element
let output = document.querySelector("output");
console.log(output);


// a function that takes a string as a param and updates the outpt of the calculator with what is passed
function updateOutput(displayedNumbers) {
    output.innerText = displayedNumbers;
}

function handleEqualsOperator() {
    let inputString = inputArray.join("");
    try {
        let evaluation = String(math.evaluate(inputString));
        resetCalculator();
        inputArray = evaluation.split("");
    } catch (error) {
        alert(error);
    }
    // console.log(evaluation);
}

//a function that enables the click listeners of the buttons
document.addEventListener("click", function(event){
    // console.dir(event.target);
    if (clickedButton(event)) {
        let dataset = event.target.dataset;
        let value;
        if (dataset.number) {
            value = dataset.number;
        } else value = dataset.operator;
        // console.log(value);

        switch (value){
            case "=":
                // using a Math.js library!
                handleEqualsOperator();
                break
            case "↺":
                inputArray.pop();
                break
            default:
                inputArray.push(value);
                break
        }

        updateOutput(inputArray.join(""));
    }
})


// function that resets the input array and output element

function resetCalculator () {
    inputArray = [];
    updateOutput(inputArray.join(""));
}


/*

- Next Todo:
    - clear all: listened long press on the rewind, invoke resetCalculator()
    - add parentheses and comma buttons
    - could add sin, cos, tan
        write tester function that uses regular expressions
    - state listener function
*/