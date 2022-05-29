import * as PIXI from "pixi.js"
import fishImage from "./images/fish.png"
import bubbleImage from "./images/bubble.png"
import bgImage from "./images/water.jpg"
import deadImage from "./images/bones.png"
import sharkImage from "./images/shark.png"

import { Fish } from "./Fish"
import { Bubble } from "./Bubble"
import { Sprite } from "pixi.js"
import { Shark } from "./Shark"

export class Game {
    pixi: PIXI.Application
    myfish: Fish
    bubble: Bubble
    shark: Shark

    fishSprites: Fish[] = []
    bubbleSprites: Bubble[] = []

    constructor() {
        this.pixi = new PIXI.Application({ width: 800, height: 500 })
        document.body.appendChild(this.pixi.view)

        this.pixi.loader
            .add("deadTexture", deadImage)
            .add("fishTexture", fishImage)
            .add("backgroundTexture", bgImage)
            .add("bubbleTexture", bubbleImage)
            .add("sharkTexture", sharkImage)

        this.pixi.loader.load(() => this.doneLoading())
    }

    createFish() {
        for (let i = 0; i < 5; i++) {
            this.myfish = new Fish(this.pixi.loader.resources["fishTexture"].texture!, this.pixi.loader.resources["deadTexture"].texture!, this)
            this.myfish.id = i
            this.pixi.stage.addChild(this.myfish)
            this.fishSprites.push(this.myfish)

        }

    }

    createShark(){
        this.shark = new Shark(this.pixi.loader.resources["sharkTexture"].texture!)
        this.pixi.stage.addChild(this.shark)

    }


    createBubble() {
        for (let i = 0; i < 1; i++) {
            this.bubble = new Bubble(this.pixi.loader.resources["bubbleTexture"].texture!)

            this.pixi.stage.addChild(this.bubble)
            this.bubbleSprites.push(this.bubble)
        }
    }

    doneLoading() {
        console.log("all textures loaded!")
        let background: Sprite = new Sprite(this.pixi.loader.resources["backgroundTexture"].texture)

        background.scale.set(this.pixi.screen.width / background.getBounds().width, 1)
        this.pixi.stage.addChild(background)

        this.createBubble()
        this.createFish()
        this.createShark()


        this.pixi.ticker.add((delta) => this.update(delta))
    }

    update(delta: number) {

        for (const fish of this.fishSprites) {
            fish.update(delta)
        }
        for (let sprite of this.bubbleSprites) {
            sprite.update(delta)
        }
        this.shark.update(delta)

        if(this.collision(this.shark, this.myfish)){
            console.log("player touches enemy 💀")
        }
    }

    collision(sprite1:PIXI.Sprite, sprite2:PIXI.Sprite) {
        const bounds1 = sprite1.getBounds()
        const bounds2 = sprite2.getBounds()

        
        return bounds1.x < bounds2.x + bounds2.width
            && bounds1.x + bounds1.width > bounds2.x
            && bounds1.y < bounds2.y + bounds2.height
            && bounds1.y + bounds1.height > bounds2.y;
    }
}

new Game()
