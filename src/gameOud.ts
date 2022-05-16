import * as PIXI from 'pixi.js'
import fishImage from "./images/fish.png"
import bubbleImage from "./images/bubble.png"
import waterImage from "./images/water.jpg"

let fish : PIXI.Sprite


//
// STAP 1 - maak een pixi canvas
//
const pixi = new PIXI.Application({backgroundColor: 0x1099bb, width: 800, height: 450 })
document.body.appendChild(pixi.view)



//
// STAP 2 - preload alle afbeeldingen
//
const loader = new PIXI.Loader()
loader.add('fishTexture', fishImage)
      .add('bubbleTexture', bubbleImage)
      .add('waterTexture', waterImage)
loader.load(()=>loadCompleted())

function createFish(){
    for (let i = 0; i < 20; i++) {
        let fish = new PIXI.Sprite(loader.resources["fishTexture"].texture!)
        fish.x = Math.random() * 700
        fish.y = Math.random() * 350
        fish.tint = Math.random() * 0xffffff
        // pixi.ticker.add((delta) => update(delta))
        pixi.stage.addChild(fish)
        
        // update functie
        // function update(delta:number) {
        //     fish.x += 0.5 * delta
        //     }
      }

      
}

//
// STAP 3 - maak een sprite als de afbeeldingen zijn geladen
//
function loadCompleted() {
    createFish()

    
}


//onnodige text style
const style = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 36,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: ['#ffffff', '#00ff99'], // gradient
    stroke: '#4a1850',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 440,
    lineJoin: 'round',
});

// score
const basicText = new PIXI.Text(`Score: 0 Lives: 3`, style)
basicText.x = 0
basicText.y = 0

pixi.stage.addChild(basicText)

console.log("aasd")

