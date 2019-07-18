export default class Graphics{
    constructor(output){
        this.output = output
        this.context = output.context
    }

    fill(){
        this.context.fillRect(
            0, 0,
            this.output.width(),
            this.output.height(),
        )
    }
}