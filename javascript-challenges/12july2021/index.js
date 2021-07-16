
//creating the elements of the form and setting attributes
let div = document.querySelector(".my-form")
let output = document.querySelector("output ul")
let myForm = document.createElement("form");

let myHeader = document.createElement("header");
myHeader.innerHTML = "Contact Me";

let label = document.createElement("label");
label.setAttribute("for", "form-input")

let input = document.createElement("input");
input.setAttribute("id", "form-input");
input.setAttribute("type", "text")

let button = document.createElement("button");
button.innerText = "Submit";
button.setAttribute("type", "submit")

// setting the html elements on the page

div.appendChild(myForm);
myForm.append(myHeader, label,button);
label.appendChild(input);

//listen for a click event on the button and display the input value



button.addEventListener("click", function(e) {
    e.preventDefault()
    output.innerHTML += stampMe(input.value);
    input.value="";
})

// Challenge #3: Use Template String Literals to create a new form
// The form should have an h1, an input inside a label and a button
// But this time use Interpolation to fill out the text inside each element
// You'll have to save the text in a few variables and then reference them using the interpolation syntax

function stampMe(name) {
    let today = new Date();
    return `
        <li class="stamped"><p>${name}</p>
            <p>${today}</p></li>
    `
}