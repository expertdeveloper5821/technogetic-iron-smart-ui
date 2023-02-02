"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IButton = void 0;
const react_1 = __importDefault(require("react"));
const IButton = (props) => {
    const { children, backgroundColor, color, style } = props;
    let _style = style || {};
    /**Override defaults */
    if (color)
        _style.color = color;
    if (backgroundColor)
        _style.backgroundColor = backgroundColor;
    return (react_1.default.createElement("button", Object.assign({ style: _style }, props), children));
};
exports.IButton = IButton;
//# sourceMappingURL=Button.js.map