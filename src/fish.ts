import * as PIXI from "pixi.js"
import { Game } from "./game"

export class Fish extends PIXI.Sprite {
    deadTexture: PIXI.Texture
    private speed: number = 0
    id: number
    game: Game


    

    constructor(texture: PIXI.Texture, deadTexture: PIXI.Texture, game: Game) {
        super(texture)
        this.game = game
        this.deadTexture = deadTexture
        this.speed = Math.random() * 6 + 1
        this.x = Math.random() * game.pixi.screen.right
        this.y = Math.random() * game.pixi.screen.bottom
        this.speed = -5
        this.id = this.id
        this.scale.set(1, 1)

        this.interactive = true
        this.buttonMode = true
        this.on('pointerdown', () => this.fishClicked())
    }



    getSpeed(){
        return this.speed
    }

ClickedFish(){
    
}

    fishClicked() {
        this.speed = 0
        this.texture = this.deadTexture
        let clickedFishId = this.id
        
        this.game.pixi.stage.removeChild(this)
        
        
        
    }

    update(delta: number) {
        this.x += this.speed * delta
        this.y = Math.sin(this.x * 0.02) * 100
        this.keepInScreen()
    }

    keepInScreen(){
        if(this.getBounds().right < this.game.pixi.screen.left){
            this.x = this.game.pixi.screen.right
        }
    }
}
