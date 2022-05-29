import * as PIXI from "pixi.js"

export class Fish extends PIXI.Sprite {
    
    constructor(texture: PIXI.Texture) {
        super(texture)
    }

    update(delta:number) {
        console.log("This fish is updating!")
    }
}