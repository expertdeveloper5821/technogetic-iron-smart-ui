"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Secondary = exports.Primary = void 0;
const react_1 = __importDefault(require("react"));
const Switch_1 = require("../components/Switch");
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
exports.default = {
    title: 'ReactComponentLibrary/Switch',
    component: Switch_1.Switch
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => react_1.default.createElement(Switch_1.Switch, Object.assign({}, args));
exports.Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
exports.Primary.args = {
    checked: true
    // style: {
    //     width: '50%',
    //     marginBottom: '1rem',
    //     marginTop: '1rem',
    //     borderRadius: '0.25rem',
    //     border: '1px solid #ccc',
    //     padding: '0.5rem',
    //     fontSize: '1rem'
    // }
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    checked: false
};
//# sourceMappingURL=Switch.stories.js.map