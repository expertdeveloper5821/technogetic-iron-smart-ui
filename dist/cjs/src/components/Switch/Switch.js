"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Switch = void 0;
const react_1 = __importDefault(require("react"));
const Switch = (props) => {
    const { name, disabled, checked, onChange } = props;
    return react_1.default.createElement("input", Object.assign({ name: name, checked: checked, onChange: onChange, disabled: disabled, type: "checkbox" }, props));
};
exports.Switch = Switch;
//# sourceMappingURL=Switch.js.map