import * as PIXI from "pixi.js"
import fishImage from "./images/fish.png"
import bubbleImage from "./images/bubble.png"
import bgImage from "./images/water.jpg"
import deadImage from "./images/bones.png"

import { Fish } from "./Fish"
import { Bubble } from "./Bubble"
import { Sprite } from "pixi.js"

export class Game {
    pixi: PIXI.Application
    myfish: Fish
    bubble: Bubble

    fishSprites: PIXI.Sprite[] = []
    bubbleSprites: PIXI.Sprite[] = []

    constructor() {
        this.pixi = new PIXI.Application({ width: 900, height: 500 })
        document.body.appendChild(this.pixi.view)

        this.pixi.loader
            .add("deadTexture", deadImage)
            .add("fishTexture", fishImage)
            .add("backgroundTexture", bgImage)
            .add("bubbleTexture", bubbleImage)

        this.pixi.loader.load(() => this.doneLoading())
    }

    createFish() {
        for (let i = 0; i < 10; i++) {
            this.myfish = new Fish(this.pixi.loader.resources["fishTexture"].texture!, this.pixi.loader.resources["deadTexture"].texture!)
            this.myfish.id = i
            this.pixi.stage.addChild(this.myfish)
            this.fishSprites.push(this.myfish)

        }

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


        this.pixi.ticker.add((delta) => this.update(delta))
    }

    update(delta: number) {

        for (let sprite of this.fishSprites) {
            sprite.update(delta)
        }
        for (let sprite of this.bubbleSprites) {
            sprite.update(delta)
        }
    }
}

new Game()
