"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
const Button_1 = require("./Button");
require("@testing-library/jest-dom");
const react_2 = __importDefault(require("react"));
describe('Button', () => {
    test('renders the Button component', () => {
        (0, react_1.render)(react_2.default.createElement(Button_1.IButton, { children: "Hello world!" }));
    });
    test('button should be disabled', () => {
        (0, react_1.render)(react_2.default.createElement(Button_1.IButton, { disabled: true, children: "Test Button" }));
        expect(react_1.screen.getByRole('button', { name: 'Test Button' })).toBeDisabled();
    });
    test('renders correct text', () => {
        (0, react_1.render)(react_2.default.createElement(Button_1.IButton, null, "Submit"));
        const buttonElement = react_1.screen.getByText(/submit/i);
        expect(buttonElement).toBeInTheDocument();
    });
    test('calls the click handler function on click', () => {
        const clickHandler = jest.fn();
        (0, react_1.render)(react_2.default.createElement(Button_1.IButton, { onClick: clickHandler }, "Submit"));
        const buttonElement = react_1.screen.getByText(/submit/i);
        buttonElement.click();
        expect(clickHandler).toHaveBeenCalledTimes(1);
    });
});
//# sourceMappingURL=Button.test.js.map