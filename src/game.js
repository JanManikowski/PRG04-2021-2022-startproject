import * as PIXI from "pixi.js";
import fishImage from "./images/fish.png";
import bubbleImage from "./images/bubble.png";
import bgImage from "./images/water.jpg";
import { Fish } from "./fish.js";
var Game = /** @class */ (function () {
    function Game() {
        var _this = this;
        this.fishSprites = [];
        this.bubbleSprites = [];
        this.pixi = new PIXI.Application({ width: 900, height: 500 });
        document.body.appendChild(this.pixi.view);
        var fish = new Fish();
        this.pixi.loader
            .add("fishTexture", fishImage)
            .add("backgroundTexture", bgImage)
            .add("bubbleTexture", bubbleImage);
        this.pixi.loader.load(function () { return _this.doneLoading(); });
    }
    Game.prototype.createFish = function () {
        var _this = this;
        for (var i = 0; i < 1; i++) {
            this.fish = new PIXI.Sprite(this.pixi.loader.resources["fishTexture"].texture);
            this.fish.x = Math.random() * 700;
            this.fish.y = Math.random() * 350;
            // this.fish.tint = Math.random() * 0xffffff
            this.pixi.ticker.add(function (delta) { return _this.update(delta); });
            this.pixi.stage.addChild(this.fish);
            this.fishSprites.push(this.fish);
        }
    };
    Game.prototype.createBubble = function () {
        var _this = this;
        for (var i = 0; i < 1; i++) {
            this.bubble = new PIXI.Sprite(this.pixi.loader.resources["bubbleTexture"].texture);
            this.bubble.x = Math.random() * 700;
            this.bubble.y = Math.random() * 350;
            this.pixi.ticker.add(function (delta) { return _this.update(delta); });
            this.pixi.stage.addChild(this.bubble);
            this.bubbleSprites.push(this.bubble);
        }
    };
    Game.prototype.doneLoading = function () {
        console.log("all textures loaded!");
        this.createFish();
        this.createBubble();
        console.log(this.fishSprites);
    };
    Game.prototype.update = function (delta) {
        for (var _i = 0, _a = this.fishSprites; _i < _a.length; _i++) {
            var sprite = _a[_i];
            sprite.x += -1 * delta;
            if (sprite.x < -170) {
                sprite.x = 900;
                sprite.y = Math.random() * 350;
            }
        }
        for (var _b = 0, _c = this.bubbleSprites; _b < _c.length; _b++) {
            var sprite = _c[_b];
            sprite.y += -1 * delta;
            if (sprite.y < -100) {
                console.log("Bubble Out of Bounds");
                this.bubble.x = Math.random() * 700;
                sprite.y = 600;
            }
        }
    };
    return Game;
}());
export { Game };
// if (this.fish.x = 750){
//             this.fish.x = 0
//         }
new Game();
//# sourceMappingURL=game.js.map