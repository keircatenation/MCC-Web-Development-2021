const cols = 10;
const limit = 50;

const grid = document.querySelector(".conway");
const showIter = document.querySelector(".iteration")
const stopBTN = document.querySelector(".stop")
const startBTN = document.querySelector(".start")
const resumeBTN = document.querySelector(".resume")
const resetBTN = document.querySelector(".reset")

for (let cell = 0; cell < 100; cell++) {
    const div = document.createElement("div");
    // ternary function that means that if math.random() is > than .3 then it will be assigned .dead and otherwise it will be .alive
    div.setAttribute("class", Math.random() > .35 ? "dead" : "live")

    grid.appendChild(div);
}

//creates an array from the nodelist, so we can use .map() etc.
const cells = Array.from(document.querySelectorAll(".conway > div"));

var iter = Infinity;
var stopState = iter;

//the delay is in milliseconds
setInterval(() => {
    // want to only run when we set it to less than 20!
    if(iter > limit) return

    if (iter<limit){
        iter++;
        showIter.innerText = "Iteration: " + iter;

        const state = cells.map((c, i, arr) => {
            return [
                // check all squares around to see if they're alive or dead, and come up with a sum of the numbers
                
                // OPTIONAL CHAIN OPERATOR: the ? checks to see if the value you're uncertain about exists --> "if this value exists, evaluate, but if it doesn't, then don't do it"
                arr[i-1] && arr[i - 1].getAttribute("class"),
                arr[i+1]?.getAttribute("class"),
                arr[i-cols]?.getAttribute("class"),
                arr[i+cols]?.getAttribute("class"),
                arr[i+cols+1]?.getAttribute("class"),
                arr[i-cols+1]?.getAttribute("class"),
                arr[i+cols-1]?.getAttribute("class"),
                arr[i-cols-1]?.getAttribute("class"),
            ].reduce((acc, cur) => {
                if (cur) acc[cur] ++
                return acc
            }, {dead: 0, live:0})
            // to squish this code, you could put the .forEach() right off the .reduce()
        })
        // console.log(state);
        cells.forEach((cell, i) => {
            //live cell with 2-3 live neighbors --> live
            //any otehr live cell --> dead
            //any dead cell with 3 live neighbors --> live
            //any other dead --> dead
            if(cell.getAttribute("class") === "live"
            && (state[i].live === 2
            || state[i].live === 3)) {
                cell.setAttribute("class", "live")
            } else if (cell.getAttribute("class") === "dead"
            && state[i].live === 3) {
                cell.setAttribute("class", "live")
            } else {
                cell.setAttribute("class", "dead")
            }
        })

    }
}, 500)


// hook up some BUTTONS
startBTN.addEventListener("click", e => {
    iter = 0;
})

stopBTN.addEventListener("click", e => {
    stopState = iter;
    iter = limit + 1;
})

resumeBTN.addEventListener("click", e => {
    iter = stopState;
})

resetBTN.addEventListener("click", e => {
    iter = limit + 1; //stops the iteration
    showIter.innerText = "Iteration: 0" //resets the iteration
    cells.forEach( cell => cell.setAttribute("class", Math.random() > .35 ? "dead" : "live"))
})