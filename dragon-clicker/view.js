const viewCards = {
	init: function(){
		this.arena = document.querySelector(".arena");
		this.render();
	},
	addDragonToScreen: function(dragon){
		let newDragon = document.createElement("div");
		newDragon.setAttribute("class", `dragon ${dragon.color}`);
		newDragon.setAttribute("id", `${dragon.id}`)
		newDragon.addEventListener("click", e=>{
			controller.dispatch(e, dragon.id)
		})
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
		
		button.setAttribute("class", `${elementArr[1]}`);
		button.innerText = `${elementArr[0]}`;
		button.setAttribute("onclick", `controller.addToStable("${elementArr[0]}", "${elementArr[1]}")`);
		
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
			<div class="brandModal ${dragon.color}">
				<div class="close ${dragon.color}" onclick="viewAdmin.closeModal()">⨯</div>
				<main>
					<h2>DRAGON EDITOR</h2>
					<label for="dragon-type" id="dragon-type-label">Type:
						<select id="dragon-type">
						${this.elementSelectTemplate(dragon.type)}
						</select>
					</label>
					<label for="dragon-color" id="dragon-color-label">Color:
						<select id="dragon-color">
						${this.colorSelectTemplate(dragon.color)}
						</select>
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
					<label for="dragon-color" id="dragon-color-label">Color:
						<select id="dragon-color">
							<option value="red">Red</option>
							<option value="orange">orange</option>
							<option value="yellow">yellow</option>
							<option value="green">green</option>
							<option value="blue">blue</option>
							<option value="purple">purple</option>
						</select>
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
		let newDragonColor = document.querySelector("#dragon-color").value;
		let newDragonClicks = document.querySelector("#dragon-clicks").value;
		let newDragonLevel = document.querySelector("#dragon-level").value;
		
		controller.submitDragonEdits(id,newDragonType, newDragonColor, newDragonClicks, newDragonLevel);
		this.closeModal()
		viewCards.render();
	},
	submitDragonType: function(){
		//adds a new dragon type to the nav bar, where users can add dragons to the screen - renders the nav bar
		let newElem = document.querySelector("#dragon-type").value;
		let newColor = document.querySelector("#dragon-color").value;
		//console.log(newElem, newColor)

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
	},
	colorSelectTemplate: function(dragonColor){
		let template;
		controller.getElements().forEach(elem => {
			if (elem[1] == dragonColor){
				template += `<option value="${elem[1]}" selected>${elem[1]}</option>`
			} else {
				template += `<option value="${elem[1]}">${elem[1]}</option>`
			}
		})
		return template;
	},
}