"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
const Input_1 = require("./Input");
require("@testing-library/jest-dom");
const react_2 = __importDefault(require("react"));
describe('Input', () => {
    test('should render input', () => {
        (0, react_1.render)(react_2.default.createElement(Input_1.Input, { type: "text", value: "Hi rendering" }));
    });
    test('should render input with correct value', () => {
        (0, react_1.render)(react_2.default.createElement(Input_1.Input, { type: "text", "data-testid": "email-input", value: "test@mail.com" }));
        expect(react_1.screen.getByTestId('email-input')).toHaveValue('test@mail.com');
    });
    test('should update the value when input changes', () => {
        const value = 'test value';
        const newValue = 'new test value';
        const datatestid = 'email-input';
        const onChange = jest.fn();
        (0, react_1.render)(react_2.default.createElement(Input_1.Input, { value: value, "data-testid": datatestid, onChange: onChange }));
        const input = react_1.screen.getByTestId('email-input');
        react_1.fireEvent.change(input, { target: { value: newValue } });
        expect(onChange).toHaveBeenCalledWith(newValue);
    });
});
//# sourceMappingURL=Input.test.js.map