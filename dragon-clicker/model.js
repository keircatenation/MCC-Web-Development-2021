const model = {
	elements: ["fire", "water", "earth", "air", "heart"],
	stable:[],
	addClick: function(dragonID){
		let dragon = this.stable[dragonID];
		dragon.clicks += 1;
		if(dragon.clicks > (dragon.level**2)){
			dragon.level++;
		}
	},
	addDragonToStable(element){
		let i = this.stable.length;
		this.stable.push(this.dragonFactory(element, i))
	},
	dragonFactory:function(elem, id){
		return {
			id,
			clicks:0,
			type:elem,
			level:1
		}
	}
}