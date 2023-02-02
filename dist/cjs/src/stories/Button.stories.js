"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Secondary = exports.Primary = void 0;
const react_1 = __importDefault(require("react"));
const Button_1 = require("../components/Button/Button");
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
exports.default = {
    title: 'ReactComponentLibrary/Button',
    component: Button_1.IButton
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => react_1.default.createElement(Button_1.IButton, Object.assign({}, args));
exports.Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
exports.Primary.args = {
    children: 'Hello world!',
    color: 'white',
    disabled: false,
    backgroundColor: 'blue'
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    children: 'Click me!'
};
//# sourceMappingURL=Button.stories.js.map