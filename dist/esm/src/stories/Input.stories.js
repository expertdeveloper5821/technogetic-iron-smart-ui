import React from 'react';
import { Input } from '../components/Input/Input';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ReactComponentLibrary/Input',
    component: Input
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => React.createElement(Input, Object.assign({}, args));
export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
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
export const Secondary = Template.bind({});
Secondary.args = {
    value: 'atul is awesome',
    onChange: function (val) {
        val = val;
    }
};
//# sourceMappingURL=Input.stories.js.map