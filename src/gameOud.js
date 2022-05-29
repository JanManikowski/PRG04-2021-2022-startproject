import * as PIXI from 'pixi.js';
import fishImage from "./images/fish.png";
import bubbleImage from "./images/bubble.png";
import waterImage from "./images/water.jpg";
var fish;
//
// STAP 1 - maak een pixi canvas
//
var pixi = new PIXI.Application({ backgroundColor: 0x1099bb, width: 800, height: 450 });
document.body.appendChild(pixi.view);
//
// STAP 2 - preload alle afbeeldingen
//
var loader = new PIXI.Loader();
loader.add('fishTexture', fishImage)
    .add('bubbleTexture', bubbleImage)
    .add('waterTexture', waterImage);
loader.load(function () { return loadCompleted(); });
function createFish() {
    for (var i = 0; i < 20; i++) {
        var fish_1 = new PIXI.Sprite(loader.resources["fishTexture"].texture);
        fish_1.x = Math.random() * 700;
        fish_1.y = Math.random() * 350;
        fish_1.tint = Math.random() * 0xffffff;
        // pixi.ticker.add((delta) => update(delta))
        pixi.stage.addChild(fish_1);
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
    createFish();
}
//onnodige text style
var style = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 36,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: ['#ffffff', '#00ff99'],
    stroke: '#4a1850',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 440,
    lineJoin: 'round'
});
// score
var basicText = new PIXI.Text("Score: 0 Lives: 3", style);
basicText.x = 0;
basicText.y = 0;
pixi.stage.addChild(basicText);
console.log("aasd");
//# sourceMappingURL=gameOud.js.map