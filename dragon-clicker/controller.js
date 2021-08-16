const controller = {
	init: function(){
		// model.init();
		viewList.init();
		viewCards.init();
		viewAdmin.init();
	},
	getDragons: function(clicks = 0, level = 1){
		return model.stable.filter(dragon => (dragon.clicks >= clicks) && (dragon.level >= level));
		// can add a filter function in order to get certain dragons!
	},
	getOneDragon: function(id){
		return model.stable[id]
	},
	getIcon: function(id, fill, fillDark, fillSat){
		return model.dragonSVG(id, fill, fillDark, fillSat);
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