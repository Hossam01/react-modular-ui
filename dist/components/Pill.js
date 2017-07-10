"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var AbstractComponent_1 = require("./AbstractComponent");
var Pill = (function (_super) {
    __extends(Pill, _super);
    function Pill() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pill.prototype.getModifierObject = function () {
        return {
            size: this.props.size,
            color: this.props.color
        };
    };
    Pill.prototype.render = function () {
        return (react_1.default.createElement("div", { className: this.getBlockName('pill', this.getModifierObject()) },
            react_1.default.createElement("div", null, this.props.children)));
    };
    return Pill;
}(AbstractComponent_1.default));
exports.default = Pill;
