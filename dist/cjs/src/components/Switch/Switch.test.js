"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
const Switch_1 = require("./Switch");
require("@testing-library/jest-dom");
const react_2 = __importDefault(require("react"));
describe('Input', () => {
    test('should render input', () => {
        (0, react_1.render)(react_2.default.createElement(Switch_1.Switch, { type: "checkbox" }));
    });
    test('should update the value when checked value changes', () => {
        const datatestid = 'email-input';
        const onChange = jest.fn();
        (0, react_1.render)(react_2.default.createElement(Switch_1.Switch, { checked: false, "data-testid": datatestid, onChange: onChange }));
        const switchy = react_1.screen.getByTestId('email-input');
        react_1.fireEvent.change(switchy, { target: { checked: true } });
        expect(onChange).toBeTruthy();
    });
});
//# sourceMappingURL=Switch.test.js.map