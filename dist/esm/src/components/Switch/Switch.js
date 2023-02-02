import React from 'react';
export const Switch = (props) => {
    const { name, disabled, checked, onChange } = props;
    return React.createElement("input", Object.assign({ name: name, checked: checked, onChange: onChange, disabled: disabled, type: "checkbox" }, props));
};
//# sourceMappingURL=Switch.js.map