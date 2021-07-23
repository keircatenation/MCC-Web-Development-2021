function dragonAddClick(value,element){
    //creates the selector with the onclick function on the dragon
    let selector = `#${element} output`;

    //gets the initial value IN THE FORM OF A STRING, then coerced into a number to add
    let clicks = Number(document.querySelector(selector).innerText);

    //increments with the value passed into the function in the HTML
    clicks += value;

    //sets the inner text of the output to hte new value
    document.querySelector(selector).innerText = clicks;
}


