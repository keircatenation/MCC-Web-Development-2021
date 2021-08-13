const viewCards = {
	init: function(){
		this.arena = document.querySelector(".arena");
		this.render();
	},
	addDragonToScreen: function(dragon){
		let newDragon = document.createElement("div");
		newDragon.setAttribute("class", `dragon`);
		newDragon.setAttribute("id", `${dragon.id}`)
		newDragon.addEventListener("click", e=>{
			controller.dispatch(e, dragon.id)
		})
		newDragon.style.backgroundColor = `${dragon.fill}`;
		newDragon.style.border = `2px solid ${dragon.fillDark}`;
		newDragon.style.color = `${dragon.fillDark}`

		newDragon.innerHTML = `<h2>${dragon.type}</h2>
		<button>${dragon.icon}</button>
		<output>Clicks: ${dragon.clicks}
				Level: ${dragon.level}</output>`
		this.arena.appendChild(newDragon)
	},
	render: function(){
		this.arena.innerHTML = ""
		controller.getDragons().forEach(dragon => {
			this.addDragonToScreen(dragon);
		})
	}
}

const viewList = {
	init: function(){
		this.nav = document.querySelector("nav");
		this.render();
	},
	addButton: function(elementArr){
		let button = document.createElement("button");
		
		button.style.backgroundColor = `${elementArr[1][0]}`;
		button.style.border = `2px solid ${elementArr[1][1]}`;
		button.style.color = `${elementArr[1][1]}`
		button.innerText = `${elementArr[0]}`;

		button.setAttribute("onclick", `controller.addToStable("${elementArr[0]}", "${elementArr[1][0]}","${elementArr[1][1]}","${elementArr[1][2]}")`);
		
		this.nav.append(button);
	},
	render: function(){
		this.nav.innerHTML = ""
		let navList = controller.getElements()
		navList.forEach(element => {
			this.addButton(element)
		})
		let addElementButton = document.createElement("button");
		addElementButton.innerText = "Add Dragon Type!";
		addElementButton.setAttribute("onclick", "viewAdmin.viewAddDragonType()");
		addElementButton.setAttribute("class", "white")
		this.nav.append(addElementButton);
	},
}

const viewAdmin = {
	init: function(){
		this.nav = document.querySelector("nav");
		this.body = document.querySelector("body")
	},
	viewDragonEditor: function(id){
		//opens the admin screen to edit the dragon
		let dragon = controller.getOneDragon(id);
		//console.log(dragon)

		let modal = document.createElement("div");
		modal.setAttribute("class", "modal");
		modal.setAttribute("id", "modal")
		modal.innerHTML = `<div>
			<div class="brandModal" style="background-color: ${dragon.fill}; border: 2px solid ${dragon.fillDark}; color: ${dragon.fillDark};">
				<div class="close" onclick="viewAdmin.closeModal()" style="background-color: ${dragon.fill}; border: 2px solid ${dragon.fillDark}; color: ${dragon.fillDark};">⨯</div>
				<main>
					<h2>DRAGON EDITOR</h2>
					<label for="dragon-type" id="dragon-type-label">Type:
						<select id="dragon-type">
						${this.elementSelectTemplate(dragon.type)}
						</select>
					</label>
					<label for="dragon-fill" id="dragon-fill-label">Main Color:
						<input type="color" id="dragon-fill" value=${dragon.fill}>
					</label>
					<label for="dragon-fill-dark" id="dragon-fill-dark-label">Dark Color:
						<input type="color" id="dragon-fill-dark" value=${dragon.fillDark}>
					</label>
					<label for="dragon-fill-sat" id="dragon-fill-sat-label">Saturated Color:
						<input type="color" id="dragon-fill-sat" value=${dragon.fillSat}>
					</label>
					<label for="dragon-clicks" id="dragon-clicks-label">Clicks:
						<input type="number" id="dragon-clicks" value="${dragon.clicks}">
					</label>
					<label for="dragon-level" id="dragon-level-label">Level:
						<input type="number" id="dragon-level" value="${dragon.level}">
					</label>
					<button id="submit-dragon-edits" onclick="viewAdmin.submitDragonEditor(${dragon.id})">Submit changes</button>
					<button id="close-modal" onclick="viewAdmin.closeModal()">Close Without Submitting</button>
				</main>
			</div>
		</div>`
		
		this.body.append(modal);
	},
	viewAddDragonType: function(){
		//view the screen to add a dragon type
		// adding to the elements array
		
		let modal = document.createElement("div");
		modal.setAttribute("class", "modal");
		modal.setAttribute("id", "modal")
		modal.innerHTML = `<div>
			<div class="brandModal white">
				<div class="close white" onclick="viewAdmin.closeModal()">⨯</div>
				<main>
					<h2>ADD DRAGON TYPE</h2>
					<label for="dragon-type" id="dragon-type-label">Type:
						<input type="text" id="dragon-type" placeholder="Name your dragon type!">
					</label>
					<label for="dragon-fill" id="dragon-fill-label">Main Color:
						<input type="color" id="dragon-fill" value="#ffffff">
					</label>
					<label for="dragon-fill-dark" id="dragon-fill-dark-label">Dark Color:
						<input type="color" id="dragon-fill-dark" value="#000000">
					</label>
					<label for="dragon-fill-sat" id="dragon-fill-sat-label">Saturated Color:
						<input type="color" id="dragon-fill-sat" value="#717171">
					</label>
					<button id="submit-new-dragon" onclick="viewAdmin.submitDragonType()">Submit changes</button>
					<button id="close-modal" onclick="viewAdmin.closeModal()">Close Without Submitting</button>
				</main>
			</div>
		</div>`
		this.body.append(modal);
	},
	closeModal: function(){
		//close the admin screen
		document.querySelector("#modal").remove()
	},
	submitDragonEditor: function(id){
		//close the admin after submitting the data
		//this updates the model of the currently selected dragon & the view reflects the changes
		let newDragonType = document.querySelector("#dragon-type").value;
		let newDragonColor = [document.querySelector("#dragon-fill").value, document.querySelector("#dragon-fill-dark").value, document.querySelector("#dragon-fill-sat").value];
		let newDragonClicks = document.querySelector("#dragon-clicks").value;
		let newDragonLevel = document.querySelector("#dragon-level").value;
		
		controller.submitDragonEdits(id,newDragonType, newDragonColor, newDragonClicks, newDragonLevel);
		this.closeModal()
		viewCards.render();
	},
	submitDragonType: function(){
		//adds a new dragon type to the nav bar, where users can add dragons to the screen - renders the nav bar
		let newElem = document.querySelector("#dragon-type").value;
		let newColor = [document.querySelector("#dragon-fill").value, document.querySelector("#dragon-fill-dark").value, document.querySelector("#dragon-fill-sat").value];

		controller.submitDragonType(newElem, newColor)
		this.closeModal()
		viewList.render()
	},
	elementSelectTemplate: function(dragonType){
		let template;
		controller.getElements().forEach(elem => {
			if (elem[0] == dragonType){
				template += `<option value="${elem[0]}" selected>${elem[0]}</option>`
			} else {
				template += `<option value="${elem[0]}">${elem[0]}</option>`
			}
		})
		return template;
	}
}