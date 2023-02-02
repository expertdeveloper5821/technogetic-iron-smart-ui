"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Secondary = exports.Primary = void 0;
const react_1 = __importDefault(require("react"));
const Input_1 = require("../components/Input/Input");
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
exports.default = {
    title: 'ReactComponentLibrary/Input',
    component: Input_1.Input
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => react_1.default.createElement(Input_1.Input, Object.assign({}, args));
exports.Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
exports.Primary.args = {
    onChange: function () { },
    placeholder: 'I am a placeholder',
    value: 'Hello, world',
    style: {
        width: '50%',
        marginBottom: '1rem',
        marginTop: '1rem',
        borderRadius: '0.25rem',
        border: '1px solid #ccc',
        padding: '0.5rem',
        fontSize: '1rem'
    }
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    value: 'atul is awesome',
    onChange: function (val) {
        val = val;
    }
};
//# sourceMappingURL=Input.stories.js.map