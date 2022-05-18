var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as PIXI from "pixi.js";
var Bubble = /** @class */ (function (_super) {
    __extends(Bubble, _super);
    function Bubble(texture) {
        var _this = _super.call(this, texture) || this;
        _this.speed = -1;
        _this.x = Math.random() * 700;
        _this.y = Math.random() * 350;
        _this.interactive = true;
        _this.buttonMode = true;
        _this.on('pointerdown', function () { return _this.bubbleClicked(); });
        return _this;
    }
    Bubble.prototype.bubbleClicked = function () {
        console.log("AAAAAAAAAAAAAA");
    };
    Bubble.prototype.update = function (delta) {
        this.y += this.speed * delta;
        if (this.getBounds().top < -60) {
            this.x = Math.random() * 700;
            this.y = 550;
        }
    };
    return Bubble;
}(PIXI.Sprite));
export { Bubble };
//# sourceMappingURL=Bubble.js.map