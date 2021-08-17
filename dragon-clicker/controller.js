const controller = {
	init: function(){
		// model.init();
		viewList.init();
		viewCards.init();
		viewAdmin.init();
	},
	getDragons: function(){
		return model.stable.filter(dragon => (dragon.clicks >= model.filterClicks) && (dragon.level >= model.filterLevel) && (model.filterType ? dragon.type == model.filterType : dragon.type));
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
			viewCards.render()
		}
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
	},
	submitFilter: function(clicks, level, type){
		model.editFilters(clicks, level, type)
	},
	getFilterValues: function(){
		return {clicks: model.filterClicks, level: model.filterLevel, type: model.filterType}
	}
}



controller.init()