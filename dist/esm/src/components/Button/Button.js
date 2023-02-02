import React from 'react';
export const IButton = (props) => {
    const { children, backgroundColor, color, style } = props;
    let _style = style || {};
    /**Override defaults */
    if (color)
        _style.color = color;
    if (backgroundColor)
        _style.backgroundColor = backgroundColor;
    return (React.createElement("button", Object.assign({ style: _style }, props), children));
};
//# sourceMappingURL=Button.js.map