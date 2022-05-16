import * as PIXI from "pixi.js"
import fishImage from "./images/fish.png"
import bubbleImage from "./images/bubble.png"
import bgImage from "./images/water.jpg"

import { Fish } from "./fish"
import { Sprite } from "pixi.js"



export class Game {

    pixi: PIXI.Application
    fish: PIXI.Sprite
    bubble: PIXI.Sprite

    fishSprites: PIXI.Sprite[] = []
    bubbleSprites: PIXI.Sprite[] = []


    constructor() {
        this.pixi = new PIXI.Application({ width: 900, height: 500 })
        document.body.appendChild(this.pixi.view)

        this.pixi.loader
            .add("fishTexture", fishImage)
            .add("backgroundTexture", bgImage)
            .add("bubbleTexture", bubbleImage)

        this.pixi.loader.load(() => this.doneLoading())
    }

    createFish() {
        for (let i = 0; i < 10; i++) {
            this.fish = new PIXI.Sprite(this.pixi.loader.resources["fishTexture"].texture!)
            this.fish.x = Math.random() * 700
            this.fish.y = Math.random() * 350
            // this.fish.tint = Math.random() * 0xffffff
            
            this.pixi.stage.addChild(this.fish)
            this.fishSprites.push(this.fish)
        }
    }

    createBubble() {
        for (let i = 0; i < 1; i++) {
            this.bubble = new PIXI.Sprite(this.pixi.loader.resources["bubbleTexture"].texture!)
            this.bubble.x = Math.random() * 700
            this.bubble.y = Math.random() * 350
            this.pixi.stage.addChild(this.bubble)
            this.bubbleSprites.push(this.bubble)
        }
    }

    doneLoading() {
        console.log("all textures loaded!")
        let background : Sprite = new Sprite(this.pixi.loader.resources["backgroundTexture"].texture)
        
        background.scale.set(this.pixi.screen.width / background.getBounds().width, 1)
        this.pixi.stage.addChild(background)
        this.createFish()
        this.createBubble()

        console.log(this.fishSprites)

        this.pixi.ticker.add((delta) => this.update(delta))
    }

    update(delta: number) {
        for (let sprite of this.fishSprites) {
            sprite.x += -5 * delta
            if (sprite.getBounds().right < 0) {
                sprite.x = this.pixi.stage.getBounds().right
                sprite.y = Math.random() * 350
            }


        }
        for (let sprite of this.bubbleSprites) {
            sprite.y += -1 * delta
            if (sprite.y < -100) {
                console.log("Bubble Out of Bounds")
                this.bubble.x = Math.random() * 700
                sprite.y = 600
            }
        }

    }
}
// if (this.fish.x = 750){
//             this.fish.x = 0
//         }
new Game()