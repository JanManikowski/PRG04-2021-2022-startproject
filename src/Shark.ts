import * as PIXI from "pixi.js"

export class Shark extends PIXI.Sprite {
    xspeed = 0
    yspeed = 0


    constructor(texture: PIXI.Texture) {
        super(texture)

        this.x = Math.random() * 800
        this.y = Math.random() * 350

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))

        
    }
    
    

    shoot(){
        console.log("shooooot!")
    }

    onKeyDown(e: KeyboardEvent): any {
        if(e.key == "ArrowRight"){
            this.xspeed = 5
        }
        if(e.key == "ArrowLeft"){
            this.xspeed = -5
        }
        if(e.key == "ArrowUp"){
            this.yspeed = -5
        }
        if(e.key == "ArrowDown"){
            this.yspeed = 5
        }
        

    }

    onKeyUp(e: KeyboardEvent): any {
        if(e.key == "ArrowRight"){
            this.xspeed = 0
        }

        if(e.key == "ArrowLeft"){
            this.xspeed = 0
        }
        if(e.key == "ArrowUp"){
            this.yspeed = 0
        }
        if(e.key == "ArrowDown"){
            this.yspeed = -0
        }

        
    }
    update(delta:number) {
        this.x += this.xspeed
        this.y += this.yspeed
    }
}