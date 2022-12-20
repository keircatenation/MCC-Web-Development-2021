import { increment as modIncr1 } from "./clicks1.mjs";
import { increment as modIncr2 } from "./clicks2.mjs";

const closures1 = document.getElementById('closures1')
const closures2 = document.getElementById('closures2')
const modules1 = document.getElementById('modules1')
const modules2 = document.getElementById('modules2')
const classes1 = document.getElementById('classes1')
const classes2 = document.getElementById('classes2')


// Modules
modules1.addEventListener( 'click', (e) => {
    e.target.innerText = modIncr1();
} )
modules2.addEventListener( 'click', (e) => {
    e.target.innerText = modIncr2();
} )

// Closures
function updateClicks() {
    let clicks = 0;

    return function (e) {
        e.target.innerText = Number(e.target.innerText) + 1
    }
}
const closure1 = updateClicks();
const closure2 = updateClicks();
closures1.addEventListener( 'click', e => {
    closure1(e);
} )
closures2.addEventListener( 'click', e => {
    closure2(e);
} )

//Classes
class Clicker{
    #clicks;
    #node;
    constructor(node) {
        this.#clicks = 0;
        this.#node = node;
        this.#node.addEventListener( 'click', () => {
            this.increment();
        } )
    }
    increment() {
        this.#clicks ++;
        this.#node.innerText = this.#clicks;
    }
}
let class1 = new Clicker(classes1)
let class2 = new Clicker(classes2)