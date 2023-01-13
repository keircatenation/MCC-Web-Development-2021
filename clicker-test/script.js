class Clicker {
    #clicks;
    #dragonButton;
    #dragonOutput;
    constructor(parentNode){
        this.#clicks = 0;
        this.#dragonButton = parentNode.querySelector('button');
        this.#dragonOutput = parentNode.querySelector('output');
        this.#dragonButton.addEventListener('click', () => {
            this.increment();
        })
    }
    increment(){
        this.#clicks++;
        this.#dragonOutput.innerText = this.#clicks;
    }
}
let clicker = new Clicker(document.querySelector('#dragon-clicker'))