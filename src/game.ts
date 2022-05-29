import * as PIXI from "pixi.js"
import fishImage from "./images/fish.png"
import bubbleImage from "./images/bubble.png"
import bgImage from "./images/water.jpg"

import { Fish } from "./fish.js"



export class Game {

    pixi: PIXI.Application
    fish: PIXI.Sprite
    bubble: PIXI.Sprite

    fishSprites : PIXI.Sprite[] = []
    bubbleSprites : PIXI.Sprite[] = []


    constructor() {
        this.pixi = new PIXI.Application({ width: 900, height: 500 })
        document.body.appendChild(this.pixi.view)

        let fish = new Fish()



        this.pixi.loader
            .add("fishTexture", fishImage)
            .add("backgroundTexture", bgImage)
            .add("bubbleTexture", bubbleImage)

        this.pixi.loader.load(() => this.doneLoading())
    } 

    createFish(){
        for(let i=0; i< 1; i++){
        this.fish = new PIXI.Sprite(this.pixi.loader.resources["fishTexture"].texture!)
        this.fish.x = Math.random() * 700
        this.fish.y = Math.random() * 350
        // this.fish.tint = Math.random() * 0xffffff
        this.pixi.ticker.add((delta) => this.update(delta))   
        this.pixi.stage.addChild(this.fish)
        this.fishSprites.push(this.fish)
        }
    }

    createBubble(){
        for(let i=0; i< 1; i++){
            this.bubble = new PIXI.Sprite(this.pixi.loader.resources["bubbleTexture"].texture!)
            this.bubble.x = Math.random() * 700
            this.bubble.y = Math.random() * 350
            this.pixi.ticker.add((delta) => this.update(delta))   
            this.pixi.stage.addChild(this.bubble)
            this.bubbleSprites.push(this.bubble)
            }
    }

    doneLoading() {
        console.log("all textures loaded!")
        this.createFish()
        this.createBubble()

        console.log(this.fishSprites)
              
            
    } 

    update(delta: 1) {
        for (let sprite of this.fishSprites){
            sprite.x += -1 * delta
            if(sprite.x < -170){
                sprite.x = 900
                sprite.y = Math.random() * 350
            }

            
        }
        for (let sprite of this.bubbleSprites){
            sprite.y += -1 * delta
            if(sprite.y < -100){
                console.log("Bubble Out of Bounds")
                this.bubble.x = Math.random() * 700
                sprite.y =  600
            }
        }
        
    }
}
// if (this.fish.x = 750){
//             this.fish.x = 0
//         }
new Game()