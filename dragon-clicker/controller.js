const controller = {
	init: function(){
		// model.init();
		viewList.init();
		viewCards.init();
	},
	getDragons: function(){
		return model.stable;
		// can add a filter function in order to get certain dragons!
	},
	getElements: function(){
		return model.elements;
	},
	dispatch:function(event, id){
		switch(event){
			case "click":
				model.addClick(id);
				this.renderCards()
				break
			case "dlbclick":
				console.log(event)
		}
	},
	renderCards: function(){
		viewCards.render();
	},
	addToStable(element){
		model.addDragonToStable(element);
		viewCards.render()
	}
}



controller.init()