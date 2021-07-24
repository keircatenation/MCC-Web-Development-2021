function dragonFactory(elem, color, emoji) {
    return {
        selector: `#${elem} output`,
        clicks:0,
        addClick: function(value) {
            this.clicks += value;
            document.querySelector(this.selector).innerText = this.clicks;
        },
        showDragon: function() {
            document.querySelector(".arena").innerHTML = "";
            document.querySelector(".arena").innerHTML += `<div class="dragon ${color}" id="${elem}" onclick="${elem}Dragon.addClick(1)">
                <h2>${elem}</h2>
                <p>${emoji}</p>
                <button>🐉</button>
                <output>${this.clicks}</output>
            </div>`
        }
    }
}

let fireDragon = dragonFactory("fire", "red", "🔥");
let waterDragon = dragonFactory("water", "blue", "🌊");
let earthDragon = dragonFactory("earth", "brown", "🌑");
let airDragon = dragonFactory("air", "yellow", "💨");
let heartDragon = dragonFactory("heart", "purple", "💜");