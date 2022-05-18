import * as PIXI from "pixi.js"

export class Bubble extends PIXI.Sprite {
    speed: number
    constructor(texture: PIXI.Texture) {
        super(texture)
        this.speed = -1

        this.x = Math.random() * 700
        this.y = Math.random() * 350

        this.interactive = true
        this.buttonMode = true

        this.on('pointerdown', () => this.bubbleClicked())

    }

    bubbleClicked(){
        console.log("AAAAAAAAAAAAAA")
    }

    update(delta: number) {
        this.y += this.speed * delta
        if (this.getBounds().top < -60) {
            this.x = Math.random() * 700
            this.y = 550
        }
    }

}