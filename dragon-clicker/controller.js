const controller = {
	init: function(){
		// model.init();
		viewList.init();
		viewCards.init();
		viewAdmin.init();
	},
	getDragons: function(){
		return model.stable;
		// can add a filter function in order to get certain dragons!
	},
	getOneDragon: function(id){
		return model.stable[id]
	},
	getElements: function(){
		return model.elements;
	},
	dispatch:function(event,id){
		if (event.ctrlKey) {
			viewAdmin.viewDragonEditor(id)
			
		} else {
			model.addClick(id);
			this.renderCards()
		}
	},
	renderCards: function(){
		viewCards.render();
	},
	addToStable(element, fill, fillDark, fillSat){
		model.addDragonToStable(element, fill, fillDark, fillSat);
		viewCards.render()
	},
	submitDragonEdits: function(id,newType,newColor, newClicks, newLevel){
		model.editDragon(id,newType,newColor, newClicks, newLevel)
	},
	submitDragonType: function(name, color){
		model.newElement(name, color)
	}
}



controller.init()