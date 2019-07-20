export default class Gloop{
    constructor(graphics){
		this.rules = []
		this.items = []
		this.looper = fn => window.requestAnimationFrame(fn)
		this.graphics = graphics
	}

	run(){
		this.graphics.clear()
		this.rules
			.filter(  rule => rule.when() )
			.forEach( rule => rule.then() )

		this.items.forEach( item => {
			item.next()
			item.draw(this.graphics)
		})
		
		this.looper( this.run.bind(this) )
	}

	rule( rule ){
		this.rules.push(rule)
	}
	
	item( item ){
		this.items.push(item)
	}
    
}