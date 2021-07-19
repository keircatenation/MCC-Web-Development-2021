let dragon = document.querySelector("#dragon");
let output = document.querySelector("output");
let value = 0;

dragon.addEventListener("click", (e) => {
    value++;
    output.innerText = value;
})