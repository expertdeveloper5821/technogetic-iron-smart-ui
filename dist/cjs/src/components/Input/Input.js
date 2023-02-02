"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
const react_1 = __importDefault(require("react"));
require("./Input.css");
const Input = (props) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("input", Object.assign({}, props))));
};
exports.Input = Input;
//# sourceMappingURL=Input.js.map