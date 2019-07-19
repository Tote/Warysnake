export default class GameLoop{
    constructor(){
        this.rules = []
        this.looper = fn => window.requestAnimationFrame(fn)
	}

	run(){
		this.rules
			.filter(  rule => rule.when() )
			.forEach( rule => rule.then() )

		this.looper( this.run.bind(this) )
	}

	rule( rule ){
		this.rules.push(rule)
    }
    
}