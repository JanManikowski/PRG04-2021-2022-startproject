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
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish(texture, deadTexture) {
        var _this = _super.call(this, texture) || this;
        _this.deadTexture = deadTexture;
        _this.x = Math.random() * 900;
        _this.y = Math.random() * 350;
        _this.speed = -5;
        _this.id = _this.id;
        _this.scale.set(Math.floor(Math.random() * 1) + 1);
        _this.interactive = true;
        _this.buttonMode = true;
        _this.on('pointerdown', function () { return _this.fishClicked(); });
        return _this;
    }
    Fish.prototype.ClickedFish = function () {
        var clickedFishId = this.id;
        this.pixi.removeChild(clickedFishId);
    };
    Fish.prototype.fishClicked = function () {
        this.speed = 0;
        this.texture = this.deadTexture;
    };
    Fish.prototype.update = function (delta) {
        this.x += this.speed * delta;
        if (this.getBounds().right < 0) {
            this.x = 1000;
            this.y = Math.random() * 350;
        }
    };
    return Fish;
}(PIXI.Sprite));
export { Fish };
//# sourceMappingURL=fish.js.map