import React, { useState } from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$9 = "button.commonButton {\n    color: white;\n    cursor: pointer;\n    border-radius: 6px;\n    padding: 10px;\n    background-color: #1ea7fd;\n    border: 0;\n}\n\n.commonButton:hover {\n    background-color: #9E9E9E;\n}\n\n.commonButton:hover {\n    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;\n}";
styleInject(css_248z$9);

const Button = (props) => {
    const { children, backgroundColor, color, style, onClick, className, type } = props;
    let _style = style || {};
    let _className = 'commonButton';
    let _children = 'Button';
    if (color)
        _style.color = color;
    if (className)
        _className = className;
    if (children)
        _children = children;
    if (backgroundColor)
        _style.backgroundColor = backgroundColor;
    return (React.createElement("button", Object.assign({ className: _className, style: _style }, props, { onClick: onClick, type: type }), _children));
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var css_248z$8 = ".inputField {\n    display: flex;\n    align-items: start;\n    justify-content: space-between;\n    align-items: center;\n    user-select: none;\n    background: #FFFFFF;\n    border: 1px solid rgba(147, 128, 108, 0.25);\n    border-radius: 6px;\n    padding: 8px;\n}\n\n.inputField input:focus,\ninput.InputAddOn-field:focus {\n    background: #FFFFFF;\n    border: none;\n    outline: none;\n}\n\n.inputField:focus-within {\n    border: 0.5px solid #0094DA;\n}\n\ninput[type='text'],\ninput[type='email'],\ninput[type='password'] {\n    border: 0;\n    width: 100%;\n}\n\nspan.InputAddOn-item {\n    padding: 0px 4px;\n}\n\n.InputAddOn-item {\n    color: #666666;\n    font: inherit;\n    font-weight: normal;\n}";
styleInject(css_248z$8);

const ShowPassword = () => {
    return (React.createElement("div", null,
        React.createElement("svg", { width: "24", height: "20", xmlns: "http://www.w3.org/2000/svg", fillRule: "evenodd", clipRule: "evenodd" },
            React.createElement("path", { d: "M12.01 20c-5.065 0-9.586-4.211-12.01-8.424 2.418-4.103 6.943-7.576 12.01-7.576 5.135 0 9.635 3.453 11.999 7.564-2.241 4.43-6.726 8.436-11.999 8.436zm-10.842-8.416c.843 1.331 5.018 7.416 10.842 7.416 6.305 0 10.112-6.103 10.851-7.405-.772-1.198-4.606-6.595-10.851-6.595-6.116 0-10.025 5.355-10.842 6.584zm10.832-4.584c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm0 1c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4z" }))));
};

const ClosePassword = () => {
    return (React.createElement("div", null,
        React.createElement("svg", { width: "24", height: "20", xmlns: "http://www.w3.org/2000/svg", fillRule: "evenodd", clipRule: "evenodd" },
            React.createElement("path", { d: "M8.137 15.147c-.71-.857-1.146-1.947-1.146-3.147 0-2.76 2.241-5 5-5 1.201 0 2.291.435 3.148 1.145l1.897-1.897c-1.441-.738-3.122-1.248-5.035-1.248-6.115 0-10.025 5.355-10.842 6.584.529.834 2.379 3.527 5.113 5.428l1.865-1.865zm6.294-6.294c-.673-.53-1.515-.853-2.44-.853-2.207 0-4 1.792-4 4 0 .923.324 1.765.854 2.439l5.586-5.586zm7.56-6.146l-19.292 19.293-.708-.707 3.548-3.548c-2.298-1.612-4.234-3.885-5.548-6.169 2.418-4.103 6.943-7.576 12.01-7.576 2.065 0 4.021.566 5.782 1.501l3.501-3.501.707.707zm-2.465 3.879l-.734.734c2.236 1.619 3.628 3.604 4.061 4.274-.739 1.303-4.546 7.406-10.852 7.406-1.425 0-2.749-.368-3.951-.938l-.748.748c1.475.742 3.057 1.19 4.699 1.19 5.274 0 9.758-4.006 11.999-8.436-1.087-1.891-2.63-3.637-4.474-4.978zm-3.535 5.414c0-.554-.113-1.082-.317-1.562l.734-.734c.361.69.583 1.464.583 2.296 0 2.759-2.24 5-5 5-.832 0-1.604-.223-2.295-.583l.734-.735c.48.204 1.007.318 1.561.318 2.208 0 4-1.792 4-4z" }))));
};

const Input = (props) => {
    const { className, placeholder, type, adornment, required, onChange, ornament } = props, rest = __rest(props, ["className", "placeholder", "type", "adornment", "required", "onChange", "ornament"]);
    const inputType = type === 'password' ? 'password' : type;
    let _placeholder = 'Input Field';
    let _type = 'text';
    let _required = false;
    if (placeholder)
        _placeholder = placeholder;
    if (type)
        _type = type;
    if (required)
        _required = required;
    let passwordVisibilityButton = null;
    if (type === 'password') {
        const togglePasswordVisibility = () => {
            const input = document.querySelector('.passwordInput');
            if (input != null) {
                input.type = input.type === 'password' ? 'text' : 'password';
            }
        };
        passwordVisibilityButton = (React.createElement("span", { className: "togglePasswordVisibility", onClick: togglePasswordVisibility }, inputType === 'password' ? React.createElement(ShowPassword, null) : React.createElement(ClosePassword, null)));
    }
    return (React.createElement(React.Fragment, null,
        type === 'password' && (React.createElement(React.Fragment, null,
            React.createElement("div", { className: `inputField ${className}` },
                React.createElement("input", Object.assign({}, rest, { type: inputType, placeholder: _placeholder, required: _required, className: type === 'password' ? 'passwordInput' : '', onChange: onChange })),
                passwordVisibilityButton))),
        type !== 'password' && !adornment && !ornament && (React.createElement(React.Fragment, null,
            React.createElement("div", { className: `inputField ${className}` },
                React.createElement("input", Object.assign({ type: _type, placeholder: _placeholder, required: _required }, rest, { onChange: onChange }))))),
        type !== 'password' && adornment && (React.createElement(React.Fragment, null,
            React.createElement("div", { className: `inputField ${className}` },
                React.createElement("span", { className: "InputAddOn-item InputAddOn-field" }, adornment),
                React.createElement("input", Object.assign({ className: "InputAddOn-field", placeholder: _placeholder }, rest, { type: _type, required: _required, onChange: onChange }))))),
        type !== 'password' && ornament && (React.createElement(React.Fragment, null,
            React.createElement("div", { className: `inputField ${className}` },
                React.createElement("input", Object.assign({ className: "InputAddOn-field", placeholder: _placeholder }, rest, { type: _type, required: _required, onChange: onChange })),
                React.createElement("span", { className: "InputAddOn-item" }, ornament))))));
};

const Switch = (props) => {
    const { name, disabled, checked, onChange } = props;
    return React.createElement("input", Object.assign({ name: name, checked: checked, onChange: onChange, disabled: disabled, type: "checkbox" }, props));
};

var css_248z$7 = ".Card-module_card__Cb1o4 {\n    background-color: #ffffff;\n    border-radius: 8px;\n    line-height: 1.5;\n    word-break: break-all;\n    border: 1px solid #e8e8e8;\n}\n\n.Card-module_cardHead__X5ZxV {\n    padding: 0 1.6rem;\n    text-align: center;\n}\n\n.Card-module_cardFooter__-sXuF {\n    padding: 0 1.6rem;\n    font-size: 1.1rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0.4em;\n    border-radius: 2px 2px 0 0;\n}\n\n.Card-module_cardHeadTitle__hkszw {\n    font-weight: 500;\n    margin: 0;\n    font-size: 16px;\n    line-height: 22px;\n    font-weight: 500;\n}\n\n.Card-module_cardBody__-I34R {\n    padding: 1.2rem 1.8rem;\n    border-radius: 2px 2px 0 0;\n    text-align: center;\n}\n\n.Card-module_noBorderCard__ej-zo {\n    border: none;\n}\n\n.Card-module_topRightBtn__EwYaO {\n    display: flex;\n    align-items: center;\n}";
var styles = {"card":"Card-module_card__Cb1o4","cardHead":"Card-module_cardHead__X5ZxV","cardFooter":"Card-module_cardFooter__-sXuF","cardHeadTitle":"Card-module_cardHeadTitle__hkszw","cardBody":"Card-module_cardBody__-I34R","noBorderCard":"Card-module_noBorderCard__ej-zo","topRightBtn":"Card-module_topRightBtn__EwYaO"};
styleInject(css_248z$7);

const Card = (props) => {
    const { className = '', padding = '', title = 'Card Title', border = '', footer = 'Card Footer', headerImage } = props;
    const borderStyle = border === 'none' ? styles.noBorderCard : '';
    const cardHeader = (React.createElement("div", { className: "cardHead" },
        React.createElement("div", { className: "cardHeadTitle" }, headerImage ? headerImage && React.createElement("img", { src: headerImage, alt: "Card Header Image" }) : React.createElement("span", null, title))));
    const cardFooter = (React.createElement("div", { className: "cardFooter" },
        React.createElement("div", { className: `${styles.cardFooter}` },
            React.createElement("span", null, footer))));
    return (React.createElement("div", Object.assign({}, props, { className: `card ${styles.card} ${borderStyle} ${className}` }),
        cardHeader,
        React.createElement("div", { style: { padding }, className: `cardBody ${styles.cardBody}` }, props.children),
        cardFooter));
};

const TableHeader = ({ columns, buttons }) => {
    if (columns && buttons) {
        let addedcolumn = [...columns, ...buttons];
        return (React.createElement(React.Fragment, null,
            React.createElement("tr", null, addedcolumn === null || addedcolumn === void 0 ? void 0 : addedcolumn.map((addedcolumn, columnIndex) => (React.createElement("th", { className: "tableHeader", key: `table-head-cell-${columnIndex}`, style: { width: addedcolumn.width } }, addedcolumn.title))))));
    }
    if (columns && !buttons) {
        return (React.createElement(React.Fragment, null, columns && !buttons && (React.createElement("tr", null, columns === null || columns === void 0 ? void 0 : columns.map((column, columnIndex) => (React.createElement("th", { className: "tableHeader", key: `table-head-cell-${columnIndex}`, style: { width: column.width } }, column.title)))))));
    }
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */

var isArray$3 = Array.isArray;

var isArray_1 = isArray$3;

/** Detect free variable `global` from Node.js. */

var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal$1;

var freeGlobal = _freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root$3 = freeGlobal || freeSelf || Function('return this')();

var _root = root$3;

var root$2 = _root;

/** Built-in value references. */
var Symbol$3 = root$2.Symbol;

var _Symbol = Symbol$3;

var Symbol$2 = _Symbol;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$4.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$3.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

var _getRawTag = getRawTag$1;

/** Used for built-in method references. */

var objectProto$3 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto$3.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}

var _objectToString = objectToString$1;

var Symbol$1 = _Symbol,
    getRawTag = _getRawTag,
    objectToString = _objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag$2(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

var _baseGetTag = baseGetTag$2;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */

function isObjectLike$1(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike$1;

var baseGetTag$1 = _baseGetTag,
    isObjectLike = isObjectLike_1;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol$3(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag$1(value) == symbolTag);
}

var isSymbol_1 = isSymbol$3;

var isArray$2 = isArray_1,
    isSymbol$2 = isSymbol_1;

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey$1(value, object) {
  if (isArray$2(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol$2(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

var _isKey = isKey$1;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */

function isObject$2(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject$2;

var baseGetTag = _baseGetTag,
    isObject$1 = isObject_1;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction$1(value) {
  if (!isObject$1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction$1;

var root$1 = _root;

/** Used to detect overreaching core-js shims. */
var coreJsData$1 = root$1['__core-js_shared__'];

var _coreJsData = coreJsData$1;

var coreJsData = _coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked$1(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked$1;

/** Used for built-in method references. */

var funcProto$1 = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource$1(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource$1;

var isFunction = isFunction_1,
    isMasked = _isMasked,
    isObject = isObject_1,
    toSource = _toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto$2 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty$2).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative$1(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

var _baseIsNative = baseIsNative$1;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */

function getValue$1(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue$1;

var baseIsNative = _baseIsNative,
    getValue = _getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative$2(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

var _getNative = getNative$2;

var getNative$1 = _getNative;

/* Built-in method references that are verified to be native. */
var nativeCreate$4 = getNative$1(Object, 'create');

var _nativeCreate = nativeCreate$4;

var nativeCreate$3 = _nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear$1() {
  this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
  this.size = 0;
}

var _hashClear = hashClear$1;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function hashDelete$1(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete$1;

var nativeCreate$2 = _nativeCreate;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet$1(key) {
  var data = this.__data__;
  if (nativeCreate$2) {
    var result = data[key];
    return result === HASH_UNDEFINED$1 ? undefined : result;
  }
  return hasOwnProperty$1.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet$1;

var nativeCreate$1 = _nativeCreate;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas$1(key) {
  var data = this.__data__;
  return nativeCreate$1 ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

var _hashHas = hashHas$1;

var nativeCreate = _nativeCreate;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet$1(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

var _hashSet = hashSet$1;

var hashClear = _hashClear,
    hashDelete = _hashDelete,
    hashGet = _hashGet,
    hashHas = _hashHas,
    hashSet = _hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash$1(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash$1.prototype.clear = hashClear;
Hash$1.prototype['delete'] = hashDelete;
Hash$1.prototype.get = hashGet;
Hash$1.prototype.has = hashHas;
Hash$1.prototype.set = hashSet;

var _Hash = Hash$1;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */

function listCacheClear$1() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear$1;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */

function eq$1(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq$1;

var eq = eq_1;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf$4(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf$4;

var assocIndexOf$3 = _assocIndexOf;

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete$1(key) {
  var data = this.__data__,
      index = assocIndexOf$3(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete$1;

var assocIndexOf$2 = _assocIndexOf;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet$1(key) {
  var data = this.__data__,
      index = assocIndexOf$2(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet$1;

var assocIndexOf$1 = _assocIndexOf;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas$1(key) {
  return assocIndexOf$1(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas$1;

var assocIndexOf = _assocIndexOf;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet$1(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet$1;

var listCacheClear = _listCacheClear,
    listCacheDelete = _listCacheDelete,
    listCacheGet = _listCacheGet,
    listCacheHas = _listCacheHas,
    listCacheSet = _listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache$1(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache$1.prototype.clear = listCacheClear;
ListCache$1.prototype['delete'] = listCacheDelete;
ListCache$1.prototype.get = listCacheGet;
ListCache$1.prototype.has = listCacheHas;
ListCache$1.prototype.set = listCacheSet;

var _ListCache = ListCache$1;

var getNative = _getNative,
    root = _root;

/* Built-in method references that are verified to be native. */
var Map$1 = getNative(root, 'Map');

var _Map = Map$1;

var Hash = _Hash,
    ListCache = _ListCache,
    Map = _Map;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear$1() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

var _mapCacheClear = mapCacheClear$1;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */

function isKeyable$1(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable = isKeyable$1;

var isKeyable = _isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData$4(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData$4;

var getMapData$3 = _getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete$1(key) {
  var result = getMapData$3(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete$1;

var getMapData$2 = _getMapData;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet$1(key) {
  return getMapData$2(this, key).get(key);
}

var _mapCacheGet = mapCacheGet$1;

var getMapData$1 = _getMapData;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas$1(key) {
  return getMapData$1(this, key).has(key);
}

var _mapCacheHas = mapCacheHas$1;

var getMapData = _getMapData;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet$1(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet$1;

var mapCacheClear = _mapCacheClear,
    mapCacheDelete = _mapCacheDelete,
    mapCacheGet = _mapCacheGet,
    mapCacheHas = _mapCacheHas,
    mapCacheSet = _mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache$1(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache$1.prototype.clear = mapCacheClear;
MapCache$1.prototype['delete'] = mapCacheDelete;
MapCache$1.prototype.get = mapCacheGet;
MapCache$1.prototype.has = mapCacheHas;
MapCache$1.prototype.set = mapCacheSet;

var _MapCache = MapCache$1;

var MapCache = _MapCache;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize$1(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize$1.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize$1.Cache = MapCache;

var memoize_1 = memoize$1;

var memoize = memoize_1;

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped$1(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

var _memoizeCapped = memoizeCapped$1;

var memoizeCapped = _memoizeCapped;

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath$1 = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

var _stringToPath = stringToPath$1;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */

function arrayMap$1(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

var _arrayMap = arrayMap$1;

var Symbol = _Symbol,
    arrayMap = _arrayMap,
    isArray$1 = isArray_1,
    isSymbol$1 = isSymbol_1;

/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString$1(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray$1(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString$1) + '';
  }
  if (isSymbol$1(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
}

var _baseToString = baseToString$1;

var baseToString = _baseToString;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString$1(value) {
  return value == null ? '' : baseToString(value);
}

var toString_1 = toString$1;

var isArray = isArray_1,
    isKey = _isKey,
    stringToPath = _stringToPath,
    toString = toString_1;

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath$1(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

var _castPath = castPath$1;

var isSymbol = isSymbol_1;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey$1(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

var _toKey = toKey$1;

var castPath = _castPath,
    toKey = _toKey;

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet$1(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

var _baseGet = baseGet$1;

var baseGet = _baseGet;

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

var get_1 = get;

const TableRowCell = ({ item, column, buttons, onClick }) => {
    const value = get_1(item, column === null || column === void 0 ? void 0 : column.id);
    if (!buttons) {
        return React.createElement("td", { className: "tableRowCell" }, value);
    }
    if (buttons) {
        return (React.createElement("td", { className: "tableRowCell" },
            React.createElement("button", { className: "tableBtn", onClick: () => {
                    onClick(item, buttons.title);
                } }, buttons.value)));
    }
    return React.createElement(React.Fragment, null);
};

const TableRow = ({ data, columns, buttons, onClick }) => {
    if (!buttons) {
        return (React.createElement(React.Fragment, null, data && !buttons && (React.createElement(React.Fragment, null, data === null || data === void 0 ? void 0 : data.map((item, rowIndex) => (React.createElement("tr", { className: "tableRowItem", key: `table-row-${rowIndex}` }, columns === null || columns === void 0 ? void 0 : columns.map((column, columnIndex) => (React.createElement(TableRowCell, { key: `table-cell-${rowIndex}-${columnIndex}`, item: item, column: column }))))))))));
    }
    if (data && buttons) {
        return (React.createElement(React.Fragment, null, data === null || data === void 0 ? void 0 : data.map((item, rowIndex) => (React.createElement("tr", { className: "tableRowItem", key: `table-row-${rowIndex}` }, columns === null || columns === void 0 ? void 0 :
            columns.map((column, columnIndex) => (React.createElement(TableRowCell, { key: `table-cell-${rowIndex}-${columnIndex}`, item: item, column: column }))),
            buttons.map((buttons, buttonIndex) => (React.createElement(TableRowCell, { key: `table-cell-${rowIndex}-${buttonIndex}`, item: item, buttons: buttons, onClick: onClick }))))))));
    }
    return React.createElement(React.Fragment, null);
};

var css_248z$6 = ".mainTable {\n    border-collapse: collapse;\n    border: none;\n    font-family: sans-serif;\n}\n\n.tableHeader {\n    background-color: #f1f1f1;\n    padding: 12px;\n    margin: 10px 0 10px 0;\n    font-weight: 600;\n    text-align: left;\n    font-size: 15px;\n    color: #2c3e50;\n}\n\n.tableHeader:first-child {\n    border-top-left-radius: 12px;\n}\n\n.tableHeader:last-child {\n    border-top-right-radius: 12px;\n}\n\n.tableRowItem:nth-child(odd) {\n    background-color: #f9f9f9;\n}\n\n.tableRowItem:last-child {\n    border-top-left-radius: 12px;\n    border-top-right-radius: 12px;\n}\n\n.tableRowCell {\n    padding: 12px;\n    font-size: 14px;\n    color: grey;\n    text-align: left;\n}\n\n.tableBtn {\n    cursor: pointer;\n    border: 0;\n    background-color: transparent;\n}";
styleInject(css_248z$6);

const Table = ({ data, columns, buttons, onClick }) => {
    return (React.createElement("table", { className: "mainTable" },
        React.createElement("thead", null,
            React.createElement(TableHeader, { columns: columns, buttons: buttons })),
        React.createElement("tbody", null,
            React.createElement(TableRow, { data: data, columns: columns, buttons: buttons, onClick: onClick }))));
};

const Icon = () => {
    return (React.createElement("svg", { height: "20", width: "20", viewBox: "0 0 20 20" },
        React.createElement("path", { d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" })));
};

const UpIcon = () => {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24" },
        React.createElement("path", { d: "M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" })));
};

const CloseIcon = () => {
    return (React.createElement("svg", { height: "20", width: "20", viewBox: "0 0 20 20" },
        React.createElement("path", { d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z" })));
};

var css_248z$5 = ".dropdown-container {\n    text-align: left;\n    /* border: 1px solid #ccc; */\n    /* position: relative; */\n    color: #858585;\n    background: #f0f0f0;\n    border-radius: 5px;\n}\n\n.dropdown-input {\n    padding: 12px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    user-select: none;\n    background: #F0F0F0;\n    border: 0.5px solid #858585;\n    border-radius: 4px;\n}\n\n.dropdown-menu {\n    position: absolute;\n    transform: translateY(94px);\n    border: 1px solid #ccc;\n    border-radius: 4px 4px 12px 12px;\n    overflow: auto;\n    max-height: 150px;\n    left: 15px;\n    background-color: #fff;\n    right: 15px;\n}\n\n.dropdown-item {\n    padding: 12px;\n    cursor: pointer;\n}\n\n.dropdown-item.selected {\n    background-color: #f5f5f5;\n    color: #0788dd;\n}\n\n.dropdown-selected-value {\n    position: absolute;\n    margin-left: 15px;\n}\n\n.dropdown-item:hover {\n    background-color: #f5f5f5;\n}\n\n.dropdown-tags {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 5px;\n}\n\n.dropdown-tools {\n    right: 25px;\n    position: absolute;\n}\n\n.dropdown-tag-item {\n    background-color: #ddd;\n    padding: 2px 4px;\n    border-radius: 2px;\n    display: flex;\n    align-items: center;\n}\n\n.dropdown-tag-close {\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n}\n\n.search-box {\n    padding: 4px;\n    background-color: #eee;\n}\n\n.search-box input {\n    /* width: 100%; */\n    box-sizing: border-box;\n    padding: 6px;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n}";
styleInject(css_248z$5);

const Select = ({ isMulti, options, placeholder, isSearchable, onChange }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [selectedValue, setSelectedValue] = useState(isMulti ? [] : '');
    const handleInputClick = () => {
        setShowMenu(!showMenu);
    };
    const getDisplay = () => {
        if (!selectedValue || (selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.length) === 0) {
            return placeholder;
        }
        if (isMulti) {
            return (React.createElement("div", { className: "dropdown-tags" }, selectedValue.map((option) => (React.createElement("div", { key: option, className: "dropdown-tag-item" },
                option,
                React.createElement("span", { onClick: (e) => onTagRemove(e, option), className: "dropdown-tag-close" },
                    React.createElement(CloseIcon, null)))))));
        }
        return selectedValue;
    };
    const removeOption = (option) => {
        return selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.filter((item) => item !== option);
    };
    const onTagRemove = (e, option) => {
        e.stopPropagation();
        const newValue = removeOption(option);
        setSelectedValue(newValue);
        onChange(newValue);
    };
    const onItemClick = (option) => {
        let newValue;
        if (isMulti) {
            if ((selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.findIndex((item) => item === option)) >= 0) {
                newValue = removeOption(option);
            }
            else {
                newValue = [...selectedValue, option];
            }
        }
        else {
            newValue = option;
        }
        setSelectedValue(newValue);
        onChange(newValue);
    };
    const isSelected = (option) => {
        if (isMulti) {
            return (selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.filter((item) => item === option).length) > 0;
        }
        if (!selectedValue) {
            return false;
        }
        return selectedValue === option;
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "dropdown-container" },
            React.createElement("div", { className: "dropdown-input", onClick: handleInputClick },
                React.createElement("div", { className: "dropdown-selected-value" }, getDisplay()),
                React.createElement("div", { className: "dropdown-tools" },
                    React.createElement("div", { className: "dropdown-tool" }, showMenu ? React.createElement(UpIcon, null) : React.createElement(Icon, null))),
                showMenu && (React.createElement("div", { className: "dropdown-menu" }, options ? (options.map((option) => (React.createElement("div", { onClick: () => onItemClick(option), key: option, className: `dropdown-item ${isSelected(option) && 'selected'}` }, option)))) : (React.createElement("div", { className: "dropdown-menu" }, "...Please add options"))))))));
};

var css_248z$4 = ".alert {\n    padding: 10px;\n    border-radius: 5px;\n    display: flex;\n    justify-content: space-between;\n}\n\n.alert-success {\n    border: 2px solid #78d178;\n    background-color: #d1ffcd;\n}\n\n.alert-failure {\n    border: 2px solid #d17878;\n    background-color: rgb(255, 205, 205);\n}\n\n.alert-warning {\n    border: 2px solid #ecdd68;\n    background-color: #faf4c7;\n}\n\n.closeIcon {\n    cursor: pointer;\n}\n";
styleInject(css_248z$4);

const Alert = ({ message = 'This is a success message', type = 'success', timeout, isClosable = true }) => {
    const [isOpen, setIsOpen] = useState(true);
    const handleClose = () => {
        setIsOpen(false);
    };
    if (timeout) {
        setTimeout(() => {
            handleClose();
        }, timeout);
    }
    if (!isOpen) {
        return null;
    }
    return (React.createElement("div", { className: `alert alert-${type}` },
        React.createElement("div", null, message),
        isClosable && (React.createElement("div", { className: "closeIcon", "data-testid": "close-button", onClick: handleClose },
            React.createElement(CloseIcon, null)))));
};

var css_248z$3 = ".tooltipMainDiv {\n    position: relative;\n    display: inline-block;\n}\n\n.textContainer {\n    visibility: visible;\n    min-width: 30px;\n    background-color: rgb(49, 49, 49);\n    color: #fff;\n    text-align: center;\n    border-radius: 4px;\n    padding: 5px 5px 5px 5px;\n    position: absolute;\n    z-index: 1;\n    top: 100%;\n    left: 50%;\n    margin-left: -60px;\n    opacity: 0.8;\n    font-size: 14px;\n}\n";
styleInject(css_248z$3);

const Tooltip = ({ text, children }) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const handleMouseEnter = () => {
        setShowTooltip(true);
    };
    const handleMouseLeave = () => {
        setShowTooltip(false);
    };
    return (React.createElement("div", { className: "tooltipMainDiv", "data-testId": "tooltipHover", onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
        children,
        showTooltip && React.createElement("span", { className: "textContainer " }, text)));
};

var css_248z$2 = ".sidebar {\n    background: #edf7f7;\n    color: black;\n    width: 200px;\n    font-size: 18px;\n    padding: 10px;\n    height: 100vh;\n    font-family: sans-serif;\n    display: flex;\n    flex-direction: column;\n    text-align: 'start';\n}\n\n.SidebarItem {\n    cursor: pointer;\n    margin-bottom: 6px;\n    border-radius: 8px;\n    padding: 10px 14px 10px 14px;\n}\n\n.active {\n    background-color: #d0e8e8;\n    color: black;\n}\n\n.SidebarItem:hover,\n.sidebarSubItems:hover {\n    background-color: #d0e8e8;\n}\n\n.sidebarSubItems {\n    cursor: pointer;\n    display: flex;\n    text-decoration: none;\n    color: black;\n    margin-left: 15px;\n    border-radius: 8px;\n    padding: 10px 14px 10px 14px;\n}\n";
styleInject(css_248z$2);

const Sidebar = ({ sidebarData }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [curr, setCurr] = useState();
    const [currSubItem, setCurrSubItem] = useState();
    const handleItemClick = (id) => {
        setIsOpen(!isOpen);
        setCurr(id);
        setCurrSubItem(null);
    };
    const handleSubItemClick = (id) => {
        setCurrSubItem(id === currSubItem ? null : id);
    };
    return (React.createElement("div", { className: "sidebar" }, sidebarData.map((data, index) => {
        return (React.createElement("div", { key: `Sidebar-Data -${data.id}` },
            React.createElement("div", { className: `SidebarItem ${curr === data.id ? 'active' : ''}`, onClick: () => {
                    handleItemClick(data.id);
                } }, data.title),
            curr === data.id &&
                data.items &&
                isOpen &&
                (data === null || data === void 0 ? void 0 : data.items.map((itemval) => {
                    return (React.createElement("a", { href: itemval.link, key: `Sidebar-Link -${data.id}`, onClick: () => {
                            handleSubItemClick(itemval.id);
                        }, className: `sidebarSubItems ${currSubItem === itemval.id ? 'active' : ''}` }, itemval.title));
                }))));
    })));
};

var css_248z$1 = ".dropdown {\n  width: 100%;\n}\n\nimg.logoSize {\n  width: 40px;\n}\n\n.navbar {\n  background: #eeeeee;\n  color: black;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n}\n\n.navbarItem {\n  cursor: pointer;\n  padding: 10px 5px;\n  display: inline-flex;\n}\n\n.active {\n  background-color: #1ea7fd;\n  color: #eeeeee;\n}\n\n.navbarItem:hover,\n.navbarSubItems:hover {\n  color: #6cc4fc;\n}\n\n.dropdown-content {\n  position: absolute;\n  background-color: #f1f1f1;\n  min-width: 160px;\n  z-index: 1;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n}\n\n.navbarItem:hover .dropdown-content {\n  display: block;\n}\n\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  display: block;\n  text-decoration: none;\n}\n\n.navbarSubItems {\n  cursor: pointer;\n  text-decoration: none;\n  color: black;\n}\n\ninput[type=checkbox] {\n  display: none;\n}\n\n.hamburger {\n  display: none;\n  font-size: 24px;\n  user-select: none;\n}\n\n.dropdown {\n  position: relative;\n  display: inline-block;\n}\n\n.btnContainer {\n  display: flex;\n  flex-direction: row;\n  position: absolute;\n  right: 0;\n}\n\n.btnItems {\n  padding: 10px;\n}\n\n.btnItems:hover {\n  color: #6cc4fc;\n}\n\nbutton {\n  padding: 5px 10px;\n  cursor: pointer;\n  border-radius: 8px;\n  border: 0;\n  background-color: #1ea7fd;\n}\n\n.allLinks {\n  display: flex;\n  flex-direction: row;\n  place-self: center;\n}\n\n.navTitle {\n  display: flex;\n  flex-direction: row;\n  padding: 10px 15px;\n}\n\n.title {\n  place-self: center;\n  padding: 10px;\n  cursor: pointer;\n}\n\n.title:hover {\n  color: #1ea7fd;\n}\n\n@media screen and (min-width: 300px) and (max-width: 640px) {\n  .navbar {\n    background-color: transparent;\n  }\n\n  .repNavLink {\n    display: none;\n  }\n\n  .allLinks {\n    position: fixed;\n    background-color: #f1f1f1;\n    min-width: 50%;\n    right: 50px;\n    z-index: 1;\n    top: 30px;\n    display: block;\n    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  }\n\n  .resNavBar {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .dropdown-content {\n    position: inherit;\n    z-index: 1;\n  }\n\n  .navbarSubItems {\n    display: none;\n  }\n\n  .hamburger {\n    display: block;\n    font-size: 25px;\n    cursor: pointer;\n    position: absolute;\n  }\n\n  label.hamburger {\n    right: 5px;\n    top: 10px;\n  }\n\n  .hamburger:hover {\n    color: #6cc4fc;\n  }\n\n  #checkbox_toggle:checked~.dropdown-content {\n    display: block;\n  }\n}";
styleInject(css_248z$1);

const NavBar = ({ navbarData }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [resOpen, setResOpen] = useState(true);
    const [curr, setCurr] = useState();
    const [currSubItem, setCurrSubItem] = useState();
    const handleItemClick = (id) => {
        setIsOpen(!isOpen);
        setCurr(id);
        setCurrSubItem(null);
    };
    const handleSubItemClick = (id) => {
        setCurrSubItem(id === currSubItem ? '' : id);
    };
    const dropNav = () => {
        setResOpen(!resOpen);
    };
    return (React.createElement("div", { className: "dropdown" },
        React.createElement("div", { className: "navbar" },
            React.createElement("div", { className: "navTitle" }, navbarData.map((data, index) => {
                return (React.createElement(React.Fragment, null, data.image ? (React.createElement(React.Fragment, null,
                    React.createElement("img", { src: data.image, alt: data.link, className: "logoSize", onClick: () => {
                            handleItemClick(data.id);
                        } }))) : ('')));
            })),
            React.createElement("div", { className: "allLinks" },
                navbarData.map((data, index) => {
                    return (React.createElement(React.Fragment, null,
                        data.title ? (React.createElement("div", { className: `repNavLink  ${!resOpen ? 'resNavBar' : ''}` },
                            React.createElement("div", { className: `navbarItem ${curr === data.id ? 'active' : ''}`, onClick: () => {
                                    handleItemClick(data.id);
                                } }, data.title),
                            React.createElement("div", { className: `dropdown-content repNavLink  ${!resOpen ? 'resNavBar' : ''}` }, curr === data.id &&
                                data.items &&
                                isOpen &&
                                (data === null || data === void 0 ? void 0 : data.items.map((itemval) => {
                                    return (React.createElement(React.Fragment, null,
                                        React.createElement("a", { href: itemval.link, onClick: () => {
                                                handleSubItemClick(itemval.id);
                                            }, className: `navbarSubItems ${currSubItem === itemval.id ? 'active' : ''}` }, itemval.title)));
                                }))))) : (''),
                        React.createElement("div", { className: "btnContainer" }, data.button &&
                            data.button.map((btns) => {
                                return (React.createElement(React.Fragment, null,
                                    React.createElement("div", { className: `btnItems repNavLink  ${!resOpen ? 'resNavBar' : ''}` },
                                        React.createElement("a", { onClick: () => {
                                                handleItemClick(data.id);
                                            } }, btns.title))));
                            }))));
                }),
                navbarData.map((data, index) => {
                    return (React.createElement(React.Fragment, null,
                        React.createElement("div", { className: "btnContainer" })));
                }))),
        React.createElement("input", { type: "checkbox", id: "checkbox_toggle" }),
        React.createElement("label", { htmlFor: "checkbox_toggle", className: "hamburger", onClick: dropNav }, "\u2630")));
};

var css_248z = ".textAreaField {\n  display: flex;\n  align-items: start;\n  justify-content: space-between;\n  align-items: center;\n  user-select: none;\n  background: #FFFFFF;\n  border: 1px solid rgba(147, 128, 108, 0.25);\n  border-radius: 6px;\n  padding: 8px;\n}\n\n.textAreaField:focus-within {\n  border: 0.5px solid #0094DA;\n  outline: none;\n}\n\n.textAreaInput,\n.textAreaInput:focus {\n  background: #FFFFFF;\n  border: none;\n  width: 100%;\n  outline: none;\n}";
styleInject(css_248z);

const TextArea = (props) => {
    const { cols, rows, placeholder, onChange, className } = props; __rest(props, ["cols", "rows", "placeholder", "onChange", "className"]);
    // Setting Default Value
    let _className = 'textAreaInput';
    let _rows = 10;
    let _cols = 50;
    let _placeholder = 'Write here..';
    // Overwrite the default Value
    if (className)
        _className = className;
    if (rows)
        _rows = rows;
    if (cols)
        _cols = cols;
    if (placeholder)
        _placeholder = placeholder;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: `textAreaField ${className}` },
            React.createElement("textarea", { className: _className, rows: _rows, cols: _cols, form: props.form, placeholder: _placeholder, onChange: onChange }))));
};

export { Alert, Button, Card, Input, NavBar, Select, Sidebar, Switch, Table, TextArea, Tooltip };
//# sourceMappingURL=index.esm.js.map
