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
var Shark = /** @class */ (function (_super) {
    __extends(Shark, _super);
    function Shark(texture) {
        var _this = _super.call(this, texture) || this;
        _this.xspeed = 0;
        _this.yspeed = 0;
        _this.x = Math.random() * 900;
        _this.y = Math.random() * 350;
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
        console.log("shark was created");
        return _this;
    }
    Shark.prototype.shoot = function () {
        console.log("shooooot!");
    };
    Shark.prototype.onKeyDown = function (e) {
        if (e.key == "ArrowRight") {
            this.xspeed = 5;
        }
        if (e.key == "ArrowLeft") {
            this.xspeed = -5;
        }
    };
    Shark.prototype.onKeyUp = function (e) {
        if (e.key == "ArrowRight") {
            this.xspeed = 0;
        }
        if (e.key == "ArrowLeft") {
            this.xspeed = 0;
        }
    };
    Shark.prototype.update = function () {
        this.x += this.xspeed;
        this.y += this.yspeed;
    };
    return Shark;
}(PIXI.Sprite));
export { Shark };
//# sourceMappingURL=shark.js.map