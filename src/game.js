import * as PIXI from "pixi.js";
import fishImage from "./images/fish.png";
import bubbleImage from "./images/bubble.png";
import bgImage from "./images/water.jpg";
import deadImage from "./images/bones.png";
import sharkImage from "./images/shark.png";
import { Bubble } from "./Bubble";
import { Sprite } from "pixi.js";
import { Shark } from "./Shark";
var Game = /** @class */ (function () {
    function Game() {
        var _this = this;
        this.fishSprites = [];
        this.bubbleSprites = [];
        this.pixi = new PIXI.Application({ width: 800, height: 500 });
        document.body.appendChild(this.pixi.view);
        this.pixi.loader
            .add("deadTexture", deadImage)
            .add("fishTexture", fishImage)
            .add("backgroundTexture", bgImage)
            .add("bubbleTexture", bubbleImage)
            .add("sharkTexture", sharkImage);
        this.pixi.loader.load(function () { return _this.doneLoading(); });
    }
    Game.prototype.createFish = function () {
        for (var i = 0; i < 1; i++) {
            // this.myfish = new Fish(this.pixi.loader.resources["fishTexture"].texture!, this.pixi.loader.resources["deadTexture"].texture!, this.pixi)
            this.myfish.id = i;
            this.pixi.stage.addChild(this.myfish);
            this.fishSprites.push(this.myfish);
        }
    };
    Game.prototype.createShark = function () {
        this.shark = new Shark(this.pixi.loader.resources["sharkTexture"].texture);
        this.pixi.stage.addChild(this.shark);
    };
    Game.prototype.createBubble = function () {
        for (var i = 0; i < 1; i++) {
            this.bubble = new Bubble(this.pixi.loader.resources["bubbleTexture"].texture);
            this.pixi.stage.addChild(this.bubble);
            this.bubbleSprites.push(this.bubble);
        }
    };
    Game.prototype.doneLoading = function () {
        var _this = this;
        console.log("all textures loaded!");
        var background = new Sprite(this.pixi.loader.resources["backgroundTexture"].texture);
        background.scale.set(this.pixi.screen.width / background.getBounds().width, 1);
        this.pixi.stage.addChild(background);
        this.createBubble();
        this.createFish();
        this.pixi.ticker.add(function (delta) { return _this.update(delta); });
    };
    Game.prototype.update = function (delta) {
        // for (let sprite of this.fishSprites) {
        //     sprite.update(delta)
        // }
        // for (let sprite of this.bubbleSprites) {
        //     sprite.update(delta)
        // }
    };
    return Game;
}());
export { Game };
new Game();
//# sourceMappingURL=game.js.map