const model = {
	elements: [["fire", "red"], ["water", "blue"], ["earth", "brown"],[ "air", "yellow"], ["heart", "purple"]],
	stable:[],
	addClick: function(dragonID){
		let dragon = this.stable[dragonID];
		dragon.clicks += 1;
		if(dragon.clicks >= (dragon.scale*2)){
			dragon.level++;
			dragon.scale = dragon.clicks;
		}
	},
	addDragonToStable(element,color){
		let i = this.stable.length;
		this.stable.push(this.dragonFactory(element, color, i))
	},
	dragonFactory:function(elem, color, id){
		return {
			id,
			color,
			clicks:0,
			type:elem,
			level:1,
			scale:1
		}
	},
	editDragon: function(id, type, color, clicks, level){
		//edit the dragons with values passed from the dragon editor modal
		let dragon = this.stable[id];
		if (dragon.type !== type){
			dragon.type = type;
		}
		if (dragon.color !== color){
			dragon.color = color;
		}
		if (dragon.clicks !== clicks){
			dragon.clicks = Number(clicks);
		}
		if (dragon.level !== level){
			dragon.level = Number(level);
		}
	},
	newElement(name, color){
		this.elements.push([name, color])
	}
}