export default class Keys{
    constructor(){
        this.handlers = {}
        
        document.addEventListener('keydown', e=>{
            const handler = this.handlers[event.key] || function(){}
            handler()
        })
    }
    press( handler ){
        this.handlers[handler.when] = handler.then
    }
}