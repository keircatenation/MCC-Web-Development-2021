function dragonFactory(elem, color, emoji) {
    return {
        element: elem, //becomes the h2 on display, also the ID
        class: `dragon ${color}`, //styles the div
        selector: `#${elem} output`,
        clicks:0, //becomes the output
        clickFunc: `${elem}Dragon.addClick(1)`,
        addClick: function(value) {
            this.clicks += value;
            document.querySelector(this.selector).innerText = this.clicks;
        },
        showDragon: function() {
            document.querySelector(".arena").innerHTML = "";
            
            let dragon = document.createElement("div");
            dragon.setAttribute("class", this.class);
            dragon.setAttribute("id", this.element);
            dragon.setAttribute("onclick", this.clickFunc)
            dragon.innerHTML = `<h2>${this.element}</h2><p>${emoji}</p><button>🐉</button><output>${this.clicks}</output></div>`;
            
            document.querySelector(".arena").appendChild(dragon);
        }
    }
}

let fireDragon = dragonFactory("fire", "red", "🔥");
let waterDragon = dragonFactory("water", "blue", "🌊");
let earthDragon = dragonFactory("earth", "brown", "🌑");
let airDragon = dragonFactory("air", "yellow", "💨");
let heartDragon = dragonFactory("heart", "purple", "💜");