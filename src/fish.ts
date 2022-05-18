import * as PIXI from "pixi.js"

export class Fish extends PIXI.Sprite {
    deadTexture: PIXI.Texture
    speed: number
    id: number

    constructor(texture: PIXI.Texture, deadTexture: PIXI.Texture) {
        super(texture)
        this.deadTexture = deadTexture
        this.x = Math.random() * 900
        this.y = Math.random() * 350
        this.speed = -5
        this.id = this.id
        this.scale.set(Math.floor(Math.random() * 1) + 1)
        this.interactive = true
        this.buttonMode = true

        this.on('pointerdown', () => this.fishClicked())
    }

ClickedFish(){
    let clickedFishId = this.id
    this.pixi.removeChild(clickedFishId)
}

    fishClicked() {
        this.speed = 0
        this.texture = this.deadTexture
        
    }

    update(delta: number) {
        this.x += this.speed * delta
        if (this.getBounds().right < 0) {
            this.x = 1000
            this.y = Math.random() * 350
        }
    }
}