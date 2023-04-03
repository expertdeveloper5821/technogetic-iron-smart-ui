'use strict';

var React = require('react');

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

var css_248z$1 = ".step-item {\r\n    position: relative;\r\n    display: flex;\r\n    width: 15rem;\r\n    flex-direction: column;\r\n}\r\n\r\n.step-item:not(:first-child)::before {\r\n    position: absolute;\r\n    top: -3.5rem;\r\n    left: 1.5rem;\r\n    display: block;\r\n    height: 100%;\r\n    width: 0.125rem;\r\n    border-width: 1px;\r\n    --tw-border-opacity: 1;\r\n    border-color: rgb(242 242 242 / var(--tw-border-opacity));\r\n    --tw-bg-opacity: 1;\r\n    background-color: rgb(242 242 242 / var(--tw-bg-opacity));\r\n    --tw-content: '';\r\n    content: var(--tw-content);\r\n}\r\n\r\n@media (min-width: 640px) {\r\n\r\n    .step-item:not(:first-child)::before {\r\n        left: 1rem;\r\n    }\r\n}\r\n\r\n.step {\r\n    position: relative;\r\n    z-index: 10;\r\n    margin-bottom: 0.5rem;\r\n    display: flex;\r\n    height: 2.75rem;\r\n    width: 2.75rem;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border-radius: 9999px;\r\n    --tw-bg-opacity: 1;\r\n    background-color: rgb(242 242 242 / var(--tw-bg-opacity));\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    --tw-text-opacity: 1;\r\n    color: rgb(12 36 59 / var(--tw-text-opacity));\r\n}\r\n\r\n@media (min-width: 640px) {\r\n\r\n    .step {\r\n        height: 2rem;\r\n        width: 2rem;\r\n        font-size: 14px;\r\n    }\r\n}\r\n\r\n.active .step {\r\n    --tw-bg-opacity: 1;\r\n    background-color: rgb(31 90 167 / var(--tw-bg-opacity));\r\n    --tw-text-opacity: 1;\r\n    color: rgb(255 255 255 / var(--tw-text-opacity));\r\n}\r\n\r\n.complete .step {\r\n    --tw-bg-opacity: 1;\r\n    background-color: rgb(0 195 65 / var(--tw-bg-opacity));\r\n    --tw-text-opacity: 1;\r\n    color: rgb(255 255 255 / var(--tw-text-opacity));\r\n}\r\n\r\n.stepStatus {\r\n    margin-left: 0.5rem;\r\n    display: flex;\r\n    height: 20px;\r\n    width: 80px;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border-radius: 9999px;\r\n    font-size: 0.75rem;\r\n    line-height: 1rem;\r\n}\r\n\r\n.alert .overlay {\r\n    position: fixed;\r\n    display: flex;\r\n    height: 100%;\r\n    width: 100%;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.overlay {\r\n    --tw-bg-opacity: 1;\r\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity));\r\n    --tw-blur: blur(4px);\r\n    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\r\n}\r\n\r\n.containerboxover {\r\n    display: flex;\r\n    height: 100%;\r\n    width: 100%;\r\n    flex-direction: column;\r\n}\r\n.cancel {\r\n    position: absolute;\r\n    right: -0.625rem;\r\n    top: -0.625rem;\r\n    display: flex;\r\n    border-radius: 9999px;\r\n    --tw-bg-opacity: 1;\r\n    background-color: rgb(12 36 59 / var(--tw-bg-opacity));\r\n    padding-top: 4px;\r\n    padding-bottom: 4px;\r\n    padding-left: 0.5rem;\r\n    padding-right: 0.5rem;\r\n    font-size: 0.75rem;\r\n    line-height: 1rem;\r\n    font-weight: 500;\r\n}\r\n.cancel:hover {\r\n    --tw-bg-opacity: 1;\r\n    background-color: rgb(12 36 59 / var(--tw-bg-opacity));\r\n}\r\n.cancel:focus {\r\n    outline: 2px solid transparent;\r\n    outline-offset: 2px;\r\n}\r\n@media (prefers-color-scheme: dark) {\r\n\r\n    .cancel {\r\n        --tw-bg-opacity: 1;\r\n        background-color: rgb(31 90 167 / var(--tw-bg-opacity));\r\n    }\r\n}\r\n\r\n.documentimgstyle {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border-radius: 0.375rem;\r\n    border-width: 1px;\r\n    border-style: dashed;\r\n    --tw-border-opacity: 1;\r\n    border-color: rgb(212 212 212 / var(--tw-border-opacity));\r\n    --tw-bg-opacity: 1;\r\n    background-color: rgb(242 242 242 / var(--tw-bg-opacity));\r\n    padding: 2rem;\r\n    font-size: 0.875rem;\r\n    line-height: 1.25rem;\r\n    --tw-text-opacity: 1;\r\n    color: rgb(85 85 85 / var(--tw-text-opacity));\r\n}\r\n\r\n.documentbtn {\r\n    bottom: 0.375rem;\r\n    margin-right: 0.5rem;\r\n    display: flex;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border-radius: 0.375rem;\r\n    --tw-bg-opacity: 1;\r\n    background-color: rgb(31 90 167 / var(--tw-bg-opacity));\r\n    padding-top: 6px;\r\n    padding-bottom: 6px;\r\n    padding-left: 0.5rem;\r\n    padding-right: 0.5rem;\r\n    font-size: 0.75rem;\r\n    line-height: 1rem;\r\n    font-weight: 500;\r\n    --tw-text-opacity: 1;\r\n    color: rgb(255 255 255 / var(--tw-text-opacity));\r\n}\r\n\r\n.videoKyc {\r\n    width: 100%;\r\n    border-radius: 0.375rem;\r\n    border-width: 1px;\r\n    border-style: dashed;\r\n    --tw-border-opacity: 1;\r\n    border-color: rgb(212 212 212 / var(--tw-border-opacity));\r\n    --tw-bg-opacity: 1;\r\n    background-color: rgb(242 242 242 / var(--tw-bg-opacity));\r\n    padding-top: 0.75rem;\r\n    padding-bottom: 0.75rem;\r\n    padding-left: 0.5rem;\r\n    font-size: 0.875rem;\r\n    line-height: 1.25rem;\r\n    --tw-text-opacity: 1;\r\n    color: rgb(85 85 85 / var(--tw-text-opacity));\r\n}\r\n\r\n.vidoKyCambtn {\r\n    position: absolute;\r\n    right: 0.625rem;\r\n    display: flex;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border-radius: 0.375rem;\r\n    --tw-bg-opacity: 1;\r\n    background-color: rgb(31 90 167 / var(--tw-bg-opacity));\r\n    padding-top: 6px;\r\n    padding-bottom: 6px;\r\n    padding-left: 0.5rem;\r\n    padding-right: 0.5rem;\r\n    font-size: 0.75rem;\r\n    line-height: 1rem;\r\n    font-weight: 500;\r\n    --tw-text-opacity: 1;\r\n    color: rgb(255 255 255 / var(--tw-text-opacity));\r\n}\r\n\r\n.vidoKyCambtn:hover {\r\n    --tw-bg-opacity: 1;\r\n    background-color: rgb(12 36 59 / var(--tw-bg-opacity));\r\n}\r\n\r\n.vidoKyCambtn:focus {\r\n    outline: 2px solid transparent;\r\n    outline-offset: 2px;\r\n    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\r\n    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);\r\n    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\r\n    --tw-ring-opacity: 1;\r\n    --tw-ring-color: rgb(31 90 167 / var(--tw-ring-opacity));\r\n}\r\n\r\n.side {\r\n    margin-top: 1rem;\r\n    display: none;\r\n    height: 0px;\r\n    width: 0px;\r\n    border-right-width: 12px;\r\n    border-top-width: 8px;\r\n    border-bottom-width: 8px;\r\n    border-top-color: rgb(255 255 255 / var(--tw-border-opacity));\r\n    border-bottom-color: rgb(255 255 255 / var(--tw-border-opacity));\r\n    --tw-border-opacity: 1;\r\n    border-right-color: rgb(255 64 64 / var(--tw-border-opacity));\r\n}\r\n\r\n@media (min-width: 640px) {\r\n\r\n    .side {\r\n        display: block;\r\n    }\r\n}\r\n\r\nli {\r\n    list-style-type: none;\r\n    position: relative;\r\n}\r\n\r\nli::before {\r\n    content: '•';\r\n    position: absolute;\r\n    left: -0.6em;\r\n    top: -0.4em;\r\n    font-size: 2em;\r\n}\r\n\r\n/* Welcome page */\r\n\r\n.welcome {\r\n    display: flex;\r\n    min-height: 80vh;\r\n    width: 100%;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border-radius: 1rem;\r\n    --tw-bg-opacity: 1;\r\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity));\r\n}\r\n\r\n@media (min-width: 640px) {\r\n\r\n    .welcome {\r\n        min-height: 85%;\r\n    }\r\n}\r\n\r\n.welcome_img {\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    margin-bottom: 1.5rem;\r\n    display: flex;\r\n    height: 12rem;\r\n    width: 12rem;\r\n    align-items: center;\r\n    text-align: center;\r\n}\r\n\r\n@media (min-width: 640px) {\r\n\r\n    .welcome_img {\r\n        margin-top: auto;\r\n        margin-bottom: 1.5rem;\r\n        height: 13rem;\r\n        width: 13rem;\r\n    }\r\n}\r\n\r\n.welcome_btn {\r\n    margin-top: 1.5rem;\r\n    border-radius: 0.25rem;\r\n    --tw-bg-opacity: 1;\r\n    background-color: rgb(31 90 167 / var(--tw-bg-opacity));\r\n    padding-top: 0.5rem;\r\n    padding-bottom: 0.5rem;\r\n    padding-left: 2rem;\r\n    padding-right: 2rem;\r\n    font-weight: 700;\r\n    --tw-text-opacity: 1;\r\n    color: rgb(255 255 255 / var(--tw-text-opacity));\r\n}\r\n\r\n.welcome_btn:hover {\r\n    --tw-bg-opacity: 1;\r\n    background-color: rgb(12 36 59 / var(--tw-bg-opacity));\r\n}\r\n\r\n@media (min-width: 640px) {\r\n\r\n    .welcome_btn {\r\n        margin-top: 2rem;\r\n    }\r\n}\r\n\r\n/* Welcome page */\r\n\r\n/* Location capture */\r\n\r\n.location_ul {\r\n    padding-top: 0.5rem;\r\n    padding-left: 1.25rem;\r\n    font-size: 18px;\r\n    font-weight: 300;\r\n}\r\n\r\n@media (min-width: 640px) {\r\n\r\n    .location_ul {\r\n        font-size: 16px;\r\n    }\r\n}\r\n\r\n/* Location capture */\r\n\r\n/* Aadhaar verification */\r\n\r\n.attmp_alt {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border-radius: 0.375rem;\r\n    --tw-bg-opacity: 1;\r\n    background-color: rgb(255 64 64 / var(--tw-bg-opacity));\r\n    padding: 0.75rem;\r\n    font-size: 16px;\r\n    --tw-text-opacity: 1;\r\n    color: rgb(255 255 255 / var(--tw-text-opacity));\r\n}\r\n\r\n/* Aadhaar verification */\r\n\r\n/* PanAadharMatch */\r\n\r\n.panaadhar_thumb {\r\n    display: flex;\r\n    height: 16vw;\r\n    width: 16vw;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border-radius: 100%;\r\n    border-width: 2px;\r\n}\r\n\r\n@media (min-width: 640px) {\r\n\r\n    .panaadhar_thumb {\r\n        height: 4rem;\r\n        width: 4rem;\r\n    }\r\n}\r\n/* PanAadharMatch */\r\n\r\n/* Business */\r\n\r\n.busin_drpdwn_btn {\r\n    display: flex;\r\n    width: 100%;\r\n    justify-content: space-between;\r\n    white-space: nowrap;\r\n    border-radius: 0.375rem;\r\n    border-width: 2px;\r\n    --tw-border-opacity: 1;\r\n    border-color: rgb(242 242 242 / var(--tw-border-opacity));\r\n    --tw-bg-opacity: 1;\r\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity));\r\n    padding-left: 0.75rem;\r\n    padding-right: 0.75rem;\r\n    padding-top: 0.5rem;\r\n    padding-bottom: 0.5rem;\r\n    font-size: 0.875rem;\r\n    line-height: 1.25rem;\r\n    font-weight: 500;\r\n    --tw-text-opacity: 1;\r\n    color: rgb(212 212 212 / var(--tw-text-opacity));\r\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\r\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\r\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\r\n    transition-duration: 150ms;\r\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n\r\n.busin_drpdwn_btn:hover {\r\n    --tw-bg-opacity: 1;\r\n    background-color: rgb(31 90 167 / var(--tw-bg-opacity));\r\n}\r\n\r\n.busin_drpdwn_btn:focus {\r\n    --tw-bg-opacity: 1;\r\n    background-color: rgb(31 90 167 / var(--tw-bg-opacity));\r\n    outline: 2px solid transparent;\r\n    outline-offset: 2px;\r\n    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\r\n    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);\r\n    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\r\n}\r\n\r\n.busin_drpdwn_btn:active {\r\n    --tw-bg-opacity: 1;\r\n    background-color: rgb(31 90 167 / var(--tw-bg-opacity));\r\n    --tw-text-opacity: 1;\r\n    color: rgb(255 255 255 / var(--tw-text-opacity));\r\n}\r\n\r\n.busin_drpdwn_ul {\r\n    position: absolute;\r\n    z-index: 50;\r\n    float: left;\r\n    margin: 0px;\r\n    margin-top: 0.25rem;\r\n    display: none;\r\n    min-width: -moz-max-content;\r\n    min-width: max-content;\r\n    list-style-type: none;\r\n    border-radius: 0.5rem;\r\n    border-style: none;\r\n    --tw-bg-opacity: 1;\r\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity));\r\n    background-clip: padding-box;\r\n    padding-top: 0.5rem;\r\n    padding-bottom: 0.5rem;\r\n    text-align: left;\r\n    font-size: 1rem;\r\n    line-height: 1.5rem;\r\n}\r\n\r\n.busin_drpdwn_li_a {\r\n    display: block;\r\n    width: 100%;\r\n    white-space: nowrap;\r\n    padding-top: 0.5rem;\r\n    padding-bottom: 0.5rem;\r\n    padding-left: 1rem;\r\n    padding-right: 1rem;\r\n    font-size: 0.875rem;\r\n    line-height: 1.25rem;\r\n    font-weight: 400;\r\n    --tw-text-opacity: 1;\r\n    color: rgb(242 242 242 / var(--tw-text-opacity));\r\n}\r\n\r\n.busin_drpdwn_li_a:hover {\r\n    --tw-bg-opacity: 1;\r\n    background-color: rgb(242 242 242 / var(--tw-bg-opacity));\r\n}\r\n\r\n.busin_drpdwn_input {\r\n    display: block;\r\n    width: 100%;\r\n    border-radius: 0.25rem;\r\n    border-width: 2px;\r\n    --tw-border-opacity: 1;\r\n    border-color: rgb(242 242 242 / var(--tw-border-opacity));\r\n    padding-top: 0.5rem;\r\n    padding-bottom: 0.5rem;\r\n    padding-left: 0.75rem;\r\n    padding-right: 0.75rem;\r\n    line-height: 1.25;\r\n}\r\n\r\n.busin_drpdwn_input:focus {\r\n    outline: 2px solid transparent;\r\n    outline-offset: 2px;\r\n}\r\n\r\n/* Business */\r\n\r\n/* Onboarding */\r\n\r\n.onbord_thump_icn {\r\n    display: flex;\r\n    height: 16vw;\r\n    width: 16vw;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border-radius: 100%;\r\n    border-width: 2px;\r\n    --tw-border-opacity: 1;\r\n    border-color: rgb(0 195 65 / var(--tw-border-opacity));\r\n}\r\n\r\n@media (min-width: 640px) {\r\n\r\n    .onbord_thump_icn {\r\n        height: 4rem;\r\n        width: 4rem;\r\n    }\r\n}\r\n\r\n.onbord_rty_btn {\r\n    display: flex;\r\n    height: 2rem;\r\n    width: 7rem;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border-radius: 0.25rem;\r\n    --tw-bg-opacity: 1;\r\n    background-color: rgb(31 90 167 / var(--tw-bg-opacity));\r\n    padding-left: 1.25rem;\r\n    padding-right: 1.25rem;\r\n    font-weight: 600;\r\n    --tw-text-opacity: 1;\r\n    color: rgb(255 255 255 / var(--tw-text-opacity));\r\n}\r\n\r\n.onbord_rty_btn:hover {\r\n    --tw-bg-opacity: 1;\r\n    background-color: rgb(12 36 59 / var(--tw-bg-opacity));\r\n}\r\n\r\n.onbord_disqual_spn {\r\n    margin-top: 2rem;\r\n    margin-bottom: 1rem;\r\n    display: none;\r\n    width: 60%;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n@media (min-width: 640px) {\r\n\r\n    .onbord_disqual_spn {\r\n        display: flex;\r\n    }\r\n}\r\n\r\n.onbord_attmp_msg {\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    border-radius: 9999px;\r\n    border-width: 2px;\r\n    --tw-border-opacity: 1;\r\n    border-color: rgb(255 64 64 / var(--tw-border-opacity));\r\n    --tw-bg-opacity: 1;\r\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity));\r\n    padding: 0.5rem;\r\n    text-align: center;\r\n    font-size: 0.75rem;\r\n    line-height: 1rem;\r\n    --tw-text-opacity: 1;\r\n    color: rgb(255 64 64 / var(--tw-text-opacity));\r\n}\r\n\r\n/* Onboarding */\r\n\r\n/* Mobile css */\r\n\r\n.mobile_secnd_head {\r\n    display: block;\r\n    --tw-shadow: 0 20px 25px -20px rgb(0 0 0 / 0.1);\r\n    --tw-shadow-colored: 0 20px 25px -20px var(--tw-shadow-color);\r\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\r\n}\r\n\r\n.mbl_snd_head_step {\r\n    position: relative;\r\n    z-index: 10;\r\n    display: flex;\r\n    height: 1.5rem;\r\n    width: 1.5rem;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border-radius: 9999px;\r\n    --tw-bg-opacity: 1;\r\n    background-color: rgb(31 90 167 / var(--tw-bg-opacity));\r\n    font-size: 14px;\r\n    --tw-text-opacity: 1;\r\n    color: rgb(255 255 255 / var(--tw-text-opacity));\r\n}\r\n\r\n.documentimgstylemobl {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border-radius: 0.375rem;\r\n    border-width: 1px;\r\n    border-style: dashed;\r\n    --tw-border-opacity: 1;\r\n    border-color: rgb(212 212 212 / var(--tw-border-opacity));\r\n    --tw-bg-opacity: 1;\r\n    background-color: rgb(242 242 242 / var(--tw-bg-opacity));\r\n    padding: 1rem;\r\n    font-size: 0.875rem;\r\n    line-height: 1.25rem;\r\n    --tw-text-opacity: 1;\r\n    color: rgb(85 85 85 / var(--tw-text-opacity));\r\n}\r\n.videokycmobl {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border-radius: 0.375rem;\r\n    border-width: 1px;\r\n    border-style: dashed;\r\n    --tw-border-opacity: 1;\r\n    border-color: rgb(212 212 212 / var(--tw-border-opacity));\r\n    --tw-bg-opacity: 1;\r\n    background-color: rgb(242 242 242 / var(--tw-bg-opacity));\r\n    padding: 1.25rem;\r\n    font-size: 1.125rem;\r\n    line-height: 1.75rem;\r\n    --tw-text-opacity: 1;\r\n    color: rgb(85 85 85 / var(--tw-text-opacity));\r\n}\r\n\r\n.side_arrow_alt {\r\n    margin-top: 0.5rem;\r\n    height: 0px;\r\n    width: 0px;\r\n    border-right-width: 10px;\r\n    border-left-width: 10px;\r\n    border-bottom-width: 12px;\r\n    border-top-color: rgb(255 255 255 / var(--tw-border-opacity));\r\n    border-bottom-color: rgb(255 64 64 / var(--tw-border-opacity));\r\n    border-right-color: rgb(255 255 255 / var(--tw-border-opacity));\r\n    --tw-border-opacity: 1;\r\n    border-left-color: rgb(255 255 255 / var(--tw-border-opacity));\r\n    padding-top: 0.5rem;\r\n}\r\n\r\n.mbl_sidebar {\r\n    position: absolute;\r\n    top: 3.5rem;\r\n    left: 0px;\r\n    bottom: 0px;\r\n    right: 0px;\r\n    z-index: 20;\r\n    display: flex;\r\n    justify-content: center;\r\n    border-radius: 1rem;\r\n    --tw-backdrop-blur: blur(1px);\r\n    -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\r\n            backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\r\n}\r\n\r\n@media (min-width: 640px) {\r\n\r\n    .mbl_sidebar {\r\n        top: 0px;\r\n    }\r\n}\r\n\r\n/* Onboarding */\r\n\r\n.onbord_disqual_spn_mbl {\r\n    display: flex;\r\n    width: 100%;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    border-bottom-width: 2px;\r\n    --tw-border-opacity: 1;\r\n    border-color: rgb(242 242 242 / var(--tw-border-opacity));\r\n    padding: 1.25rem;\r\n}\r\n\r\n.onbord_rty_btn_mbl {\r\n    display: flex;\r\n    height: 2rem;\r\n    width: 7rem;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border-radius: 0.25rem;\r\n    --tw-bg-opacity: 1;\r\n    background-color: rgb(31 90 167 / var(--tw-bg-opacity));\r\n    padding-left: 0.5rem;\r\n    padding-right: 0.5rem;\r\n    padding-top: 1.25rem;\r\n    padding-bottom: 1.25rem;\r\n    font-size: 18px;\r\n    font-weight: 400;\r\n    --tw-text-opacity: 1;\r\n    color: rgb(255 255 255 / var(--tw-text-opacity));\r\n}\r\n\r\n.onbord_rty_btn_mbl:hover {\r\n    --tw-bg-opacity: 1;\r\n    background-color: rgb(12 36 59 / var(--tw-bg-opacity));\r\n}\r\n\r\n.onbord_attmp_msg_mbl {\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    border-radius: 9999px;\r\n    border-width: 2px;\r\n    --tw-border-opacity: 1;\r\n    border-color: rgb(255 64 64 / var(--tw-border-opacity));\r\n    --tw-bg-opacity: 1;\r\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity));\r\n    padding-top: 0.5rem;\r\n    padding-bottom: 0.5rem;\r\n    padding-left: 1.25rem;\r\n    padding-right: 1.25rem;\r\n    text-align: center;\r\n    font-size: 14px;\r\n    --tw-text-opacity: 1;\r\n    color: rgb(255 64 64 / var(--tw-text-opacity));\r\n}\r\n\r\n/* Onboarding */\r\n\r\n/* Common Component */\r\n\r\n/* Alert */\r\n\r\n.alert_comn {\r\n    position: absolute;\r\n    top: 3.5rem;\r\n    left: 0px;\r\n    bottom: 0px;\r\n    right: 0px;\r\n    z-index: 20;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    --tw-backdrop-blur: blur(32px);\r\n    -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\r\n            backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\r\n}\r\n\r\n@media (min-width: 640px) {\r\n\r\n    .alert_comn {\r\n        top: 0px;\r\n        border-radius: 1rem;\r\n    }\r\n}\r\n\r\n.alert_comn_spn_img {\r\n    display: flex;\r\n    height: 8rem;\r\n    width: 8rem;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border-radius: 9999px;\r\n    border-width: 4px;\r\n    --tw-border-opacity: 1;\r\n    border-color: rgb(255 64 129 / var(--tw-border-opacity));\r\n}\r\n\r\n.alert_comn_sndI_spn {\r\n    display: flex;\r\n    height: 6rem;\r\n    width: 6rem;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border-radius: 9999px;\r\n    --tw-bg-opacity: 1;\r\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity));\r\n}\r\n\r\n.alert_comn_msg {\r\n    margin-top: 0.5rem;\r\n    padding: 1.25rem;\r\n    text-align: center;\r\n    font-size: 18px;\r\n    --tw-text-opacity: 1;\r\n    color: rgb(12 36 59 / var(--tw-text-opacity));\r\n}\r\n\r\n@media (min-width: 640px) {\r\n\r\n    .alert_comn_msg {\r\n        margin-top: 1rem;\r\n        width: 35%;\r\n        padding: 0px;\r\n        font-size: 16px;\r\n    }\r\n}\r\n.alert_comn_btn {\r\n    margin-top: 2rem;\r\n    width: 80%;\r\n    border-radius: 0.25rem;\r\n    --tw-bg-opacity: 1;\r\n    background-color: rgb(31 90 167 / var(--tw-bg-opacity));\r\n    padding-top: 0.5rem;\r\n    padding-bottom: 0.5rem;\r\n    padding-left: 2rem;\r\n    padding-right: 2rem;\r\n    font-size: 1.125rem;\r\n    line-height: 1.75rem;\r\n    font-weight: 600;\r\n    --tw-text-opacity: 1;\r\n    color: rgb(255 255 255 / var(--tw-text-opacity));\r\n}\r\n.alert_comn_btn:hover {\r\n    --tw-bg-opacity: 1;\r\n    background-color: rgb(12 36 59 / var(--tw-bg-opacity));\r\n}\r\n@media (min-width: 640px) {\r\n\r\n    .alert_comn_btn {\r\n        width: 10%;\r\n        padding-top: 0.5rem;\r\n        padding-bottom: 0.5rem;\r\n        padding-left: 2rem;\r\n        padding-right: 2rem;\r\n    }\r\n}\r\n\r\n/* Alert */\r\n\r\n/* Backcam */\r\n\r\n.backcam_rty_btn {\r\n    display: flex;\r\n    width: 6rem;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border-radius: 4px;\r\n    --tw-bg-opacity: 1;\r\n    background-color: rgb(31 90 167 / var(--tw-bg-opacity));\r\n    padding: 0.25rem;\r\n    font-size: 12px;\r\n    --tw-text-opacity: 1;\r\n    color: rgb(255 255 255 / var(--tw-text-opacity));\r\n}\r\n/* Backcam */\r\n\r\n/* Browse */\r\n\r\n.brws_img_div {\r\n    position: relative;\r\n    border-radius: 0.375rem;\r\n    border-width: 1px;\r\n    --tw-border-opacity: 1;\r\n    border-color: rgb(212 212 212 / var(--tw-border-opacity));\r\n    padding: 5px;\r\n    font-size: 0.875rem;\r\n    line-height: 1.25rem;\r\n    --tw-text-opacity: 1;\r\n    color: rgb(12 36 59 / var(--tw-text-opacity));\r\n}\r\n\r\n.brws_detls {\r\n    margin-top: 1.25rem;\r\n    display: block;\r\n    width: 100%;\r\n    border-radius: 0.375rem;\r\n    border-width: 1px;\r\n    --tw-border-opacity: 1;\r\n    border-color: rgb(212 212 212 / var(--tw-border-opacity));\r\n    padding: 0.75rem;\r\n    font-size: 0.875rem;\r\n    line-height: 1.25rem;\r\n    --tw-text-opacity: 1;\r\n    color: rgb(85 85 85 / var(--tw-text-opacity));\r\n}\r\n.brws_detls_spn {\r\n    font-size: 1.125rem;\r\n    line-height: 1.75rem;\r\n    font-weight: 600;\r\n    --tw-text-opacity: 1;\r\n    color: rgb(12 36 59 / var(--tw-text-opacity));\r\n}\r\n@media (min-width: 640px) {\r\n\r\n    .brws_detls_spn {\r\n        font-size: 0.875rem;\r\n        line-height: 1.25rem;\r\n        font-weight: 500;\r\n    }\r\n}\r\n\r\n.brws_detls_name {\r\n    margin-top: 0.5rem;\r\n    font-size: 18px;\r\n    font-weight: 400;\r\n    --tw-text-opacity: 1;\r\n    color: rgb(12 36 59 / var(--tw-text-opacity));\r\n}\r\n\r\n@media (min-width: 640px) {\r\n\r\n    .brws_detls_name {\r\n        font-size: 14px;\r\n    }\r\n}\r\n.brws_detls_attmp {\r\n    display: none;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border-radius: 0.375rem;\r\n    --tw-bg-opacity: 1;\r\n    background-color: rgb(255 64 64 / var(--tw-bg-opacity));\r\n    padding: 0.5rem;\r\n    font-size: 12px;\r\n    --tw-text-opacity: 1;\r\n    color: rgb(255 255 255 / var(--tw-text-opacity));\r\n}\r\n@media (min-width: 640px) {\r\n\r\n    .brws_detls_attmp {\r\n        display: flex;\r\n        width: 10rem;\r\n    }\r\n}\r\n.brws_detls_attmp_msg {\r\n    margin-top: 0.5rem;\r\n    display: flex;\r\n    max-width: 37rem;\r\n    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n    font-size: 14px;\r\n    --tw-text-opacity: 1;\r\n    color: rgb(85 85 85 / var(--tw-text-opacity));\r\n}\r\n@media (min-width: 640px) {\r\n\r\n    .brws_detls_attmp_msg {\r\n        max-width: 32rem;\r\n        font-size: 12px;\r\n    }\r\n}\r\n\r\n.brws_detls_pan {\r\n    margin-top: 0.5rem;\r\n    font-size: 18px;\r\n    font-weight: 400;\r\n    --tw-text-opacity: 1;\r\n    color: rgb(12 36 59 / var(--tw-text-opacity));\r\n}\r\n\r\n@media (min-width: 640px) {\r\n\r\n    .brws_detls_pan {\r\n        font-size: 14px;\r\n    }\r\n}\r\n\r\n.brws_detls_err {\r\n    width: 100%;\r\n    border-radius: 0.375rem;\r\n    border-width: 1px;\r\n    --tw-border-opacity: 1;\r\n    border-color: rgb(255 64 64 / var(--tw-border-opacity));\r\n    background-color: #FF40401A;\r\n    padding: 5px;\r\n    font-size: 0.875rem;\r\n    line-height: 1.25rem;\r\n    --tw-text-opacity: 1;\r\n    color: rgb(12 36 59 / var(--tw-text-opacity));\r\n}\r\n\r\n@media (min-width: 640px) {\r\n\r\n    .brws_detls_err {\r\n        margin-right: 0.75rem;\r\n        width: 32rem;\r\n    }\r\n}\r\n\r\n.brws_detls_err_div {\r\n    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n    font-size: 0.75rem;\r\n    line-height: 1rem;\r\n    font-weight: 300;\r\n    --tw-text-opacity: 1;\r\n    color: rgb(85 85 85 / var(--tw-text-opacity));\r\n}\r\n\r\n.brws_btn {\r\n    border-radius: 0.25rem;\r\n    border-width: 1px;\r\n    --tw-border-opacity: 1;\r\n    border-color: rgb(31 90 167 / var(--tw-border-opacity));\r\n    padding-top: 0.25rem;\r\n    padding-bottom: 0.25rem;\r\n    padding-left: 1.5rem;\r\n    padding-right: 1.5rem;\r\n    font-size: 16px;\r\n}\r\n/* Browse */\r\n\r\n/* Camera */\r\n\r\n.cam_btn {\r\n    display: flex;\r\n    width: 6rem;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border-radius: 4px;\r\n    --tw-bg-opacity: 1;\r\n    background-color: rgb(31 90 167 / var(--tw-bg-opacity));\r\n    padding: 0.25rem;\r\n    font-size: 12px;\r\n    --tw-text-opacity: 1;\r\n    color: rgb(255 255 255 / var(--tw-text-opacity));\r\n}\r\n/* Camera */\r\n\r\n/* Capture img */\r\n\r\n.capture_im {\r\n    display: flex;\r\n    height: 100%;\r\n    width: 100%;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n\r\n    .capture_im {\r\n        width: 100%;\r\n        margin-right: auto;\r\n        margin-left: auto;\r\n        padding-right: 1rem;\r\n        padding-left: 1rem;\r\n    }\r\n\r\n    @media (min-width: 640px) {\r\n\r\n        .capture_im {\r\n            max-width: 640px;\r\n            padding-right: 2rem;\r\n            padding-left: 2rem;\r\n        }\r\n    }\r\n\r\n    @media (min-width: 768px) {\r\n\r\n        .capture_im {\r\n            max-width: 768px;\r\n        }\r\n    }\r\n\r\n    @media (min-width: 1024px) {\r\n\r\n        .capture_im {\r\n            max-width: 1024px;\r\n            padding-right: 4rem;\r\n            padding-left: 4rem;\r\n        }\r\n    }\r\n\r\n    @media (min-width: 1280px) {\r\n\r\n        .capture_im {\r\n            max-width: 1280px;\r\n            padding-right: 5rem;\r\n            padding-left: 5rem;\r\n        }\r\n    }\r\n\r\n    @media (min-width: 1536px) {\r\n\r\n        .capture_im {\r\n            max-width: 1536px;\r\n            padding-right: 6rem;\r\n            padding-left: 6rem;\r\n        }\r\n    }\r\n}\r\n\r\n@media (min-width: 1024px) {\r\n\r\n    .capture_im {\r\n        width: 100%;\r\n        margin-right: auto;\r\n        margin-left: auto;\r\n        padding-right: 1rem;\r\n        padding-left: 1rem;\r\n    }\r\n\r\n    @media (min-width: 640px) {\r\n\r\n        .capture_im {\r\n            max-width: 640px;\r\n            padding-right: 2rem;\r\n            padding-left: 2rem;\r\n        }\r\n    }\r\n\r\n    @media (min-width: 768px) {\r\n\r\n        .capture_im {\r\n            max-width: 768px;\r\n        }\r\n    }\r\n\r\n    @media (min-width: 1024px) {\r\n\r\n        .capture_im {\r\n            max-width: 1024px;\r\n            padding-right: 4rem;\r\n            padding-left: 4rem;\r\n        }\r\n    }\r\n\r\n    @media (min-width: 1280px) {\r\n\r\n        .capture_im {\r\n            max-width: 1280px;\r\n            padding-right: 5rem;\r\n            padding-left: 5rem;\r\n        }\r\n    }\r\n\r\n    @media (min-width: 1536px) {\r\n\r\n        .capture_im {\r\n            max-width: 1536px;\r\n            padding-right: 6rem;\r\n            padding-left: 6rem;\r\n        }\r\n    }\r\n}\r\n\r\n/* Capture img */\r\n\r\n/* Fetching */\r\n\r\n.fetching {\r\n    position: absolute;\r\n    top: 7.5rem;\r\n    left: 0px;\r\n    bottom: 0px;\r\n    right: 0px;\r\n    z-index: 20;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    --tw-backdrop-blur: blur(70px);\r\n    -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\r\n            backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\r\n}\r\n\r\n@media (min-width: 640px) {\r\n\r\n    .fetching {\r\n        top: 0px;\r\n        border-radius: 1rem;\r\n    }\r\n}\r\n\r\n.fetching_spn {\r\n    display: flex;\r\n    height: 8rem;\r\n    width: 8rem;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border-radius: 9999px;\r\n    border-width: 4px;\r\n    --tw-border-opacity: 1;\r\n    border-color: rgb(0 195 65 / var(--tw-border-opacity));\r\n}\r\n\r\n.fetching_spn_spn {\r\n    display: flex;\r\n    height: 6rem;\r\n    width: 6rem;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border-radius: 9999px;\r\n    --tw-bg-opacity: 1;\r\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity));\r\n    --tw-drop-shadow: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));\r\n    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\r\n}\r\n\r\n.fetching_spn_img {\r\n    display: flex;\r\n    height: 6rem;\r\n    width: 6rem;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border-radius: 9999px;\r\n}\r\n.fetching_msg {\r\n    margin-top: 1rem;\r\n    padding: 0.5rem;\r\n    text-align: center;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    --tw-text-opacity: 1;\r\n    color: rgb(12 36 59 / var(--tw-text-opacity));\r\n}\r\n@media (min-width: 640px) {\r\n\r\n    .fetching_msg {\r\n        text-align: start;\r\n        font-size: 16px;\r\n        font-weight: 400;\r\n    }\r\n}\r\n/* Fetching */\r\n\r\n/* Header */\r\n\r\n.header {\r\n    z-index: 10;\r\n    height: 56px;\r\n    width: 100%;\r\n    --tw-bg-opacity: 1;\r\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity));\r\n    padding-left: 1.25rem;\r\n    padding-right: 1.25rem;\r\n}\r\n\r\n@media (min-width: 640px) {\r\n\r\n    .header {\r\n        padding-left: 6rem;\r\n        padding-right: 6rem;\r\n    }\r\n}\r\n\r\n.header_div {\r\n    display: flex;\r\n    height: 100%;\r\n    width: 100%;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding-left: 0.5rem;\r\n    padding-right: 0.5rem;\r\n}\r\n\r\n.header_img_div {\r\n    margin-right: 1rem;\r\n    font-size: 0.875rem;\r\n    line-height: 1.25rem;\r\n    font-weight: 500;\r\n}\r\n/* Header */\r\n\r\n/* Modal */\r\n\r\n.modal {\r\n    position: fixed;\r\n    top: 0px;\r\n    right: 0px;\r\n    bottom: 0px;\r\n    left: 0px;\r\n    z-index: 50;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    padding: 1.5rem;\r\n    outline: 2px solid transparent;\r\n    outline-offset: 2px;\r\n}\r\n\r\n.modal:focus {\r\n    outline: 2px solid transparent;\r\n    outline-offset: 2px;\r\n}\r\n.modal_content {\r\n    position: relative;\r\n    display: flex;\r\n    width: 100%;\r\n    flex-direction: column;\r\n    border-radius: 0.5rem;\r\n    border-width: 0px;\r\n    --tw-bg-opacity: 1;\r\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity));\r\n    outline: 2px solid transparent;\r\n    outline-offset: 2px;\r\n}\r\n.modal_content:focus {\r\n    outline: 2px solid transparent;\r\n    outline-offset: 2px;\r\n}\r\n\r\n.modal_close_btn {\r\n    position: absolute;\r\n    right: -0.625rem;\r\n    top: -0.625rem;\r\n    display: flex;\r\n    border-radius: 9999px;\r\n    --tw-bg-opacity: 1;\r\n    background-color: rgb(12 36 59 / var(--tw-bg-opacity));\r\n    padding: 0.5rem;\r\n    font-size: 1.125rem;\r\n    line-height: 1.75rem;\r\n    font-weight: 500;\r\n    --tw-text-opacity: 1;\r\n    color: rgb(255 255 255 / var(--tw-text-opacity));\r\n}\r\n\r\n.modal_close_btn:focus {\r\n    outline: 2px solid transparent;\r\n    outline-offset: 2px;\r\n}\r\n\r\n@media (prefers-color-scheme: dark) {\r\n\r\n    .modal_close_btn {\r\n        --tw-bg-opacity: 1;\r\n        background-color: rgb(31 90 167 / var(--tw-bg-opacity));\r\n    }\r\n}\r\n\r\n.modal_close_btn_spn {\r\n    display: flex;\r\n    height: 8px;\r\n    width: 8px;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 1.25rem;\r\n    line-height: 1.75rem;\r\n}\r\n\r\n.modal_attntn {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 1.25rem;\r\n    text-align: center;\r\n}\r\n\r\n@media (min-width: 640px) {\r\n\r\n    .modal_attntn {\r\n        padding: 2.5rem;\r\n    }\r\n}\r\n\r\n.modal_attntn_msg {\r\n    padding: 1.25rem;\r\n    text-align: center;\r\n    font-size: 20px;\r\n}\r\n\r\n@media (min-width: 640px) {\r\n\r\n    .modal_attntn_msg {\r\n        padding: 1.5rem;\r\n        font-size: 16px;\r\n    }\r\n}\r\n\r\n.modal_attn_proc_btn {\r\n    margin-right: 0.25rem;\r\n    margin-bottom: 0.25rem;\r\n    display: block;\r\n    border-radius: 0.25rem;\r\n    --tw-bg-opacity: 1;\r\n    background-color: rgb(31 90 167 / var(--tw-bg-opacity));\r\n    padding-left: 2rem;\r\n    padding-right: 2rem;\r\n    padding-top: 0.5rem;\r\n    padding-bottom: 0.5rem;\r\n    text-align: center;\r\n    font-size: 18px;\r\n    font-weight: 500;\r\n    --tw-text-opacity: 1;\r\n    color: rgb(255 255 255 / var(--tw-text-opacity));\r\n    outline: 2px solid transparent;\r\n    outline-offset: 2px;\r\n    transition-property: all;\r\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\r\n    transition-duration: 150ms;\r\n    transition-timing-function: linear;\r\n}\r\n\r\n.modal_attn_proc_btn:focus {\r\n    outline: 2px solid transparent;\r\n    outline-offset: 2px;\r\n}\r\n\r\n.modal_attn_proc_btn:active {\r\n    --tw-bg-opacity: 1;\r\n    background-color: rgb(12 36 59 / var(--tw-bg-opacity));\r\n}\r\n\r\n@media (min-width: 640px) {\r\n\r\n    .modal_attn_proc_btn {\r\n        display: inline-block;\r\n        font-size: 14px;\r\n        font-weight: 400;\r\n    }\r\n}\r\n\r\n.modal_cancl_btn {\r\n    margin-right: 0.25rem;\r\n    margin-bottom: 0.25rem;\r\n    margin-top: 1.75rem;\r\n    display: block;\r\n    padding-left: 3.5rem;\r\n    padding-right: 3.5rem;\r\n    padding-top: 0.5rem;\r\n    padding-bottom: 0.5rem;\r\n    font-size: 18px;\r\n    font-size: 0.875rem;\r\n    line-height: 1.25rem;\r\n    font-weight: 500;\r\n    outline: 2px solid transparent;\r\n    outline-offset: 2px;\r\n    transition-property: all;\r\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\r\n    transition-duration: 150ms;\r\n    transition-timing-function: linear;\r\n}\r\n\r\n.modal_cancl_btn:focus {\r\n    outline: 2px solid transparent;\r\n    outline-offset: 2px;\r\n}\r\n\r\n@media (min-width: 640px) {\r\n\r\n    .modal_cancl_btn {\r\n        margin-top: 0px;\r\n        display: inline-block;\r\n        font-size: 14px;\r\n        font-weight: 400;\r\n    }\r\n}\r\n/* Modal */\r\n\r\n/* Sidebar */\r\n\r\n.sidebar {\r\n    height: 15vh;\r\n    --tw-bg-opacity: 1;\r\n    background-color: rgb(31 90 167 / var(--tw-bg-opacity));\r\n    padding-left: 1.25rem;\r\n    padding-right: 1.25rem;\r\n    padding-top: 1.25rem;\r\n}\r\n\r\n@media (min-width: 640px) {\r\n\r\n    .sidebar {\r\n        height: 100%;\r\n        border-top-left-radius: 1rem;\r\n        border-top-right-radius: 1rem;\r\n        padding: 1.25rem;\r\n    }\r\n}\r\n\r\n.sidebar_step_circl {\r\n    margin-bottom: 1rem;\r\n    height: 12px;\r\n    width: 100%;\r\n    border-radius: 9999px;\r\n    --tw-bg-opacity: 1;\r\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity));\r\n}\r\n\r\n@media (min-width: 640px) {\r\n\r\n    .sidebar_step_circl {\r\n        height: 0.625rem;\r\n    }\r\n}\r\n\r\n.sidebar_step_indictr {\r\n    margin-top: 0.5rem;\r\n    padding-top: 0.25rem;\r\n    text-align: end;\r\n    font-size: 14px;\r\n    --tw-text-opacity: 1;\r\n    color: rgb(255 255 255 / var(--tw-text-opacity));\r\n}\r\n\r\n@media (min-width: 640px) {\r\n\r\n    .sidebar_step_indictr {\r\n        margin-top: 0.25rem;\r\n        font-size: 0.75rem;\r\n        line-height: 1rem;\r\n    }\r\n}\r\n\r\n.sidebar_step_name {\r\n    height: 79vh;\r\n    --tw-bg-opacity: 1;\r\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity));\r\n    padding-top: 1rem;\r\n    padding-left: 0.75rem;\r\n}\r\n\r\n@media (min-width: 640px) {\r\n\r\n    .sidebar_step_name {\r\n        height: 100%;\r\n        border-bottom-right-radius: 1rem;\r\n        border-bottom-left-radius: 1rem;\r\n        padding: 1.25rem;\r\n    }\r\n}\r\n\r\n.sidebar_step_num {\r\n    margin-left: 0.5rem;\r\n    padding-bottom: 0.5rem;\r\n    padding-right: 0.5rem;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    --tw-text-opacity: 1;\r\n    color: rgb(12 36 59 / var(--tw-text-opacity));\r\n}\r\n\r\n@media (min-width: 640px) {\r\n\r\n    .sidebar_step_num {\r\n        font-weight: 400;\r\n    }\r\n}\r\n/* Sidebar */\r\n";
styleInject(css_248z$1);

var img$e = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKkAAAAsCAYAAAAeqJhEAAAABHNCSVQICAgIfAhkiAAAIABJREFUeF7tfQd0VFX3/Z6enlATIJSAVCE06b1LL4IoooINpegHCgiKgGABRUDETz5QwIoNKdJBQDoiTWoCCSRAElJIL1P/+9yZiQNJIP7E/1ou8lxZJG/u3Pfevfvuc84+5z41Dh74vxwOG6ywIyUnGXGZlxCfE4N0Syrsdjs0GsDP5I9yxlAE+1ZGKVNZXI+JR7nyIfD39+fnbFBylIxAMUdAUyyQEsduJGugQbo1FYcS9uD3K7sQlxOBHHsebDwvrbQatnRooHXoecYOg0YPf10QArMq4/K+G8i6nI2O3TqjR/fuqFSxImSJCGZlrZSAt5izdo81KxZIHQ47UWRHrjUXu69twK6rP8PLrkegrgJMttIwGQywWixwGMzI1WXhelY8UjTxsNjyFHTt0EHv0MGo0aKqozEOrDyHw9v3Y9CA/pgwaRKqVKmqAFoC0nsMfcV83GKB1G634VJmNPZGbsClcwm4uCcG5/6IRnxcHDLS0mGzmsmEGgT6BiKwTBBq1rsP4c3qoUqb0ohDFGJzoghUKzRsY9cCpXSB8I2tiq/fXIfMzEyMH/8Sxo4dB29v72Ledkmze2kEigSp21WVfxOS4vD2x7Pwy+rduBBxSZl+DX1SjZagUy6tnj9En9YMotHJijztHxiEtu3boMvwlrgREoVLGRflm2zNz3Va1LA0xarp2xBx8hS6dOuBxYsXoUKFCmr8tVr2V3KUjIDCWhGBk5yWIOjHH3/EG6+9gUtXLkFj18GmISOKE8nPHA4BEn8IWMEUiZKgdfqYqo1yNvmZzguDhvVHx2ca4nDWZsDqA4cum36rBnU1LbHilS2IiDyD+2vXwbfffovq1auXmP4SeOaPQAGQugOY7OxcTJn6KpYu/Z8Cq13stN6G4LLBqH9/DYTXq4jqtfzg46cl0nNhsRgRE52C0xEZOPPHVVyOuYy8vDwFVA19Uh0ptmKlEEz4aBwivHYjx5FHkOtg1lrQ1tARs4YvxfXEBITXD8fWLZsRGBRUEkyVAFWNQAGQCiCzsrLwxJOPYeOmrWRGO7y9vNG5fXOMeLIhmjXLgq/PadjsaWTOFHZhIFvmEYQmaPQ14Ru0DJbc0jh9+gy++uor/PDDD0hMTFTm26qxo7RfIN5YNgURfnuQ6ciiGqDld4Gace0w8/l5sNmy0ePBXvj6669gMrHPErnqnodqAZAKQJ966in8tGY9dFobunZsg/GTGiG84Rna8kgVIGlFcKLEpDwFmn8dgebQhiMoaDkDIx8OKmFnd0brV65cwYcffoj//ve/BKCVgKavGlAaE5eMQlTAbwynbLDryNC6Sri80ox1q37i395YOG8OnnnmmRKQ3vMQdTGp28QLi06Z+joWLZwPrcGEObOfwZCh0QyQjtNkWwhMHUGjVX6nVvCpLwW9rhFZMhS+/mPpr5aBThxTHqKZCkilT+n/4MGDePbppxEZHU0AWxFSsTJeWfk4TlmPEPQWYlqP2rYWeHfoJ8i2ZKFCcDDWbNyFerUqKrYVZYA3UXLcgyOgmNQNpN27d2PAwAEICCqNFf8bjobN1sBoSYNFYyD4hD2NcBjLQm98EAZTJ3jpmhFcJie7Kp1Txf03DaOnSpCamorIyEgYjUbEkmFNfhrsMvyA65Yr0FN3LWcMRvQKO1Z/s5bsbMfI0RPw5LPj0LhGKaUkaDXiGJQc99oIKJAKkMx5ZrRp2wZxCQn4+ov+aHD/Fur3IuIL8GjgjUHwNT1PLbMfYViOWBStSaiYpl7MP9lORfq3HM40KSV9V0ZJ/pUuHToHdFYdDiTvwOen34HVboRNZ0W9hDaY/sx7qvvQalXx7LSVGNG/Pkp5G5VbUXLceyPgAinw+coVGPvSS1i5/FF0aruPQU4atDY97HrK8HmtcCVuKJo27XvX2SyHpv3NfaOQZE2kP0tJytAY7z/0GdKzKFEx2Bo74xNUqRWOF/rUdS2Ee2+S7vUnViC1WvLQkizav2tjjHn5KDQsFJHDRnE+OWUwRozci5cnTcFD/QbQ7N5dNpNkwI7LP+DbqI+VO1HeJxSn5iVj26Yd6h5GPjcO8YGdsOTljijrTyWh5LjnRkCB9MTxU3jq2Sewdk0oTPpzzAZZlAh//frjeGjID4iOisbO3XvRsvkDd53NbA4rkpjrf+3gSOXXaun/Vj3TDm9Ofkt5tx3adUCVPtPQMTwYj7ar6pwgD1nK041wz97/T9nKszDm1iKZ4hTNFKdNYahkOKqCV6mMkPSehq4T9AUjS1UYJE201LpV8Cm6tUfk4KoccrAP5YZpLNAxPrBLsEqfS7ScggcVGZ4neNheS4vLFnTfCsYj6i5VDw7Vl5QcefRIedPhyk4WVoonrflkTp30w0ULEVrpLNq33wgtH9bBSDsrpy/6Dd6BiFMX1AW2bduGNm3a3HVJSFSAPDL5jINPISkviQ+sRZ3Erpj63HRl7kNDQjDinXVISEzD+6OawaDGjBPimg+Z5KioKEhQFhYWhlKlGGTdQVt1B3NxrD04ffo0rl27poK5ypUr4/7770dgYKCal8JSs06f+s8hTaAPH03FQv612WwoU6YMqlatikqVKqk+nWvqT/C4v3v9+nV1bZHodDodQkND1bVLly5d5LU9wWKjxJKZ58DFHKvK9tUNEqW6YGApBZXxOcDVXBuqeAHBJuf80rNyHipFyCQgn+mPdIKCgC7tZUcVE5PXapgLgjSXUuIZGlsLyayWl45lmQZWu6knvQnP0pfNYcbRTMGwBiZetL6vTJ+k0YFMjldEmp0W28bPC1pJCpa4z5swFZDOnDkFTz2zHz76a06pydgCI0emY/PWXbIG4G3ywf79+1C3bt1CVtXfO+UgY9t4jY+Pz8ap5AMcUi0apXfGpOEznEI/V/h73x3HpsOxWDq+NUoHGJj758B5gPThhx/GunXrsHz5cjz66KN3BGlycjJmz56NL774AmlpaQpcAiQBi4Br/PjxeO655+DlxVm95RCQSfv9+/djwYIF2LNnj+rDrZAIsOV7LVu2xMaNG1WfnmC/ceMG3n//fXWvSUlJqi+17NiufPnyLLQZi3HjxsHXV2azqMMBC8G1McmBoQcy2b8O3zU3oU+wTP7NQLHxfmeczsKcCxrMvl+Hl+/Tc0ydIJFDlps805kMG9ruzkI2Z6N/eS2+bRaomK+wWPVKhh01fslSDP50qA4fNfHijBRcIAL8FC6k0C1M+vCa4f7AwY4+JHzn4j2bZkbDXexHTIJYAs9DSJ+gXt6IjJ1nznFsXD8LHdr8CKs2j+198dP6gRj/0gKW2hHLxMOH8xfiaWqcMth3Yqm/ClkHJ0kCpjUXP8OG2FUwWY2ok9sRrz7ypupKS3fgfxsisHxLBN57tgka1ghQtaqeczFw4ECsXbtWge6xxx4r9BbcKoOApFmzZrh8+bJadALIhg0bQs5v2LDBlXSwYfDgwfj888+h15NRXOqETKaFJYnTp0/HwoUL1e/Sx4ABA1CjRg3VVlh57969KFeuHFPKS29SNmRx9OrVC0ePHlXtX3zxRXUv2dnZ2Lp1KxYtWqR+785a2zVr1qiMW5Ew5b1sSbCjz36ClICt5GfCqc56eBmoZVNxcYcOUmY59WwO5p634d36RrxSUxiLbVwd2zm+YrKnn8rBO5FW+HJoLTYHYnr4oYxJ+inIpLsSHOiyNw16prQNGi8k9/ODSfkQtzKpA3MvZOH1MxZmKDWoE6DBH13881UaWRjh2zIQ6OXAKNK8XEmjJU2pmhDAzDNDQ4i53Jw8x42USTDqV9MDMFKKGoQu3Vcj6tJVdc0WLVpg488bVBndP1Hz6RBzwyunW9Ow8vR7OJ7CCYxthFmjP1LX05JpF687i+VbL2Lqw7XRo2kI2xcOUgHV8OHDi5xYq9WqAHn27FnV7rPPPlMM5qnl/vHHH+jSpYtix6lTp2LmzJn5/alkx5Qp+OCDDxTjClD79Omj+nAnLqSx/C7XEtC6/xZAC0B37NgBWVQrVqyAn5+fk81cLsSFCxfUtQXoY8aMUf0XOeYcts0JNvQ6kIMmAcCxLA3GVAfm1/VmplBMuIuZ2LeAdM45grSBAS/XNCoTng9SPhNTKWhIZsww29GsnDc2XrZgeSs9HqvA+9cWZOdPo2x45mQG2gUbsTfOhlNdfFAvsCCT5rLEM2xbEgwObySy7wr0CSIe9CeTOkF4hu5Fgx1pqE69/FRnOS/0KZbFeX8SVOsIWA1z8I705IeI9Eh+FICVX/TA1NcXUYLScqVosGnTZrRv2zZ/ou46k3I86dKr4ugMcwYWH5sBy9FAzJn4gWLLoABfTP54J344kIAxPatgaIfKPE028Fi0bia9HUgFCMJUwpzCfseOHcsHkSeqpZ0ASQAlC1P8XfEz5bwwZOfOnZVZFtZt1KhRPsiEcTx9Vfc4uc99+eWXGDFiBGrXrq1cBLfveeuKOnz4sLpGTk4OYmNjVelioWWLLpD23Z+B0TV1+CyGbppNh53t/NA4yFVA7nQ3bwtSG5n2RLoVLXeZ0Z9VkkMqGDDsSCa6hxiwtrk/DLqCwdirJ7IxJ9qMleE+GHU0Gx34nU1t6J44aziVmyAB3YUsB+rsSMXYqj746qoZBpsGsX1p7lVppydItQRpgPJrNSoadGUteW9qkVqsMY7M5D7slAUj+o5khkgcP35MDXiDBg3w66+/FuqbFUlXf+MDieUSsqIxcfxsrP7qe9VTeP3a6PTCSuw/F4tRPeswwg9Vq9tz6IoDUvH9xMTGxMQoEHbo0KHImtXc3FwGke1x5MgRvPbaa3jzzTeVaReW27dvH9566y28+uqrxXZ95NrS34EDBxR7P/HEE0VeW9p27doVu3btUu6A+L2FEoMLpGLuJ5M9g1kyMf53M1qWsWNXO7Kp1FNw/MSwTz2bWySTOsh2U87lYm6EFZ8/YESfEBNqbCIWmAI/1d0HFb3+9F/dU/vwgVx8n5iH39v5ot0e4WELUnv6wsgaYStVBIMETATr2KNZWBarw6EOXnhwn3i7GiT09GIq3Rkk/cmkBCndAOWpkhid+sOfhyYv95AjI204HyYXsQmT6PBPzg8Cli1bpny8u82ehePYGTVbzBbUvK8uElMSVbMhwx5DRqUhSM624rletTGsA0FKJ/yvglSCFInepXxQfty+ZmH3Ivcxf/58vPLKK2jVqpViPjHBNWvWVH6imGVh1+KOi1y7Vq1ayt88d+4cqlWrVuRSlmuLL/vCCy9wW00VdS1xJwoc+Uyag6eraTCnngHhe9KQlOGDeU30eKYyM3TK7AOvnSkapHk09/W2pyI5z4ATXYwI8Tbg0UPpWHfNji+b+uORqgWj7rY7s3Ag1YrTXb3w4nELtiXzp0MgOgVJPM6wlpfNIgtW3kyv0p6N+J6lUY8B0vUcDa4SzH4uqcwTpKcJUrmSBEu3Bn+avJzNjsz0F9SHnywbQB9ssdMXJDWfvnAeVUMrurTRgrT/N0iz0K86bHYcJYt37NyBPp24ADqMe3UWfsuor1bh5Efq4sHG5bnYbl7dxWFSYaZu3bo5FwJZUY6iQCZthEWbN2+uZC2pNxD3QP4WmejkyZMFvi/+qvvwTAPLOSmu6dSpk3IfpGzR7cMWtUBElpLrikogAZ2Be8iKAmnvA1l4tIoBnzHC3nLdioH8u6zegWPd/REivjKZberZvAJMqvxgst3+ZBu67MlG+7LAltZ0bomwH67m4fFDFnStqMHaFkbCjgGcmGLXTTTakUEXwYEL3XxwIceC3nvz0J6Z8u1t2c7updTNozesaLfLghfqMXiq7YOmO9MRlaFFTG9vlHE9jxukZRh1vVLT5Kz/EB9U1YAARv4+hmoEmfRnR2baSyy1C8KYsWFYs+5n1aAGV/5vH30Mr9atFYD/eYg6R+CNN97A+/PeV6bK34/3NPtLbL/gYPSooU7aCA3DqIM6IZI/b8UBqUT+Tz75pGLD8+fP33Z9yQSKPyh6Z0XuaBUlQOQkieLb0j+XQhxPkEt7KUf8/fffb+p30KBB6N+/v1IeRC0QNj1zhiWPtznc4r4AU9heAji33nrT11xM2nt/DoZVA0Hqx+IyGx4+nI2fEzQYzPjy85ZeMNG/m3ruZpAqgV1Ilj8SVL13PhdLm/ljRGXn4k+nC3Df5lSYLRqc7eaLYC8WEbGxzhW919uSgbO5VlzrEYjSrLfw3+CUo270DoS3UoCyMfiABuuTzIjsEoAK3lwI+/NwOAmI6WmkVuuUoNwgZeCv7kWrxH0pj3fKcv46O270o8USkKanvwgjc+Y9eieTMQ6qBv0HDcHHcQkIXDAP+gb1bzuwd+vD+Pg4qgktkUjzKAPZs2df+DQfh5iUDARRMF76SmuU8zFyO4o8xJ9sWhyQSgG2+IISlYtfeiegiJkVUAlQL168iO3bt/N+eir9U/xST5DK79L3+vXr1XlxJ8SvFWXg9ddfVxruQw89pMy89Huna8t35f0EAk4B6W2Z1AOk3NyDC+lUZHalc+eDDusJ0m7ldZhCJp3rEd1LaEOCRTYXV2ua7ujsPJzvXgoVKMzLwUQ5hh3KxrfxwHetvTGwnFKm8y1PzQ1mXDAnI7VPMPwpQ7Xck4kjKUZsau2L7sE29sukxppclKF4caWrD7NXOvRjgLcpUYcrBH1F35uj+xBvDT5u5A8fquRWAbmwvFyPz9OD968x5x4mSIdSseiIdu0P42KUbJYDg5fxmLx6O7IDjPBb8Sm8OGGiHBTXDysucN3Rr8gNs996G3PmzFHpOx+agDEzVmD/FV9mNoDaZQ2YM6oFgnzELPyZcZLrFAekv/32m8qYial3C+hFbfaTe5LovW/fvggPD2cgeRwiTTVu3Fhlhi5dulQApAJMd1JApCsJeASk06ZNw4kTJ9CaFkmuJ5kpMfu3u/ahQ4fUvUr2TDJTt4vuPZmUYQsjfC3eicrGG6csCA+gItEhCEuirJh4Ops6qZeSoBQA6J7sSbaj654cLgKgMjVRt3ESwkyjCJ9osaFbaS3Wt6O2yQ+t/MBAAJbfkIlkuxnpvcqSOYGdqTY8yERA9woarGthwqEkLTr+mo15jYwYG8YdwJSVHmdQ983lHDJzIGoFOBdD0YHTzejRWCyXHKkpfci1D3Bn58H8CXiHUe3Ir9YAqemw1qoBv21rmdcXKi8Y7RUXkIW1c/tykiLs3LWb2roiubku3QfCr8UoXEvhPiluAGxaNg7Tx/SDPzMxSk7zEI6LA9L09HRluqV/EdVvlz4VsEnmRwIYyWCJqyC+pKgDZrNZSVFNmzYtcsFKwDVv3rx8kMq169SpowAnEb4I+EUtdhmPiRMnKpALc//8s9P9KnAUYu71di5ALuBcix0t9uYgkqnLBY29GQhb8Z+TFOvrezt1Uvp6VuRhykkrPojORR1/DcpyN4Sd5lUOqR2WmP3YDR2s+lxEdy6FUJIG8c+SSi2Cf2b0TyqOf5Cul57Sl9WBUhstsDLozXzIHwN/y8GORCtiugaiPHUlC9tOOGnDxxcZkHGbe29mtG4P0luie5sty5F+oxcpuTqZ9BCZNEp18Pa01/D0yh9hycpkQTLZ9NxBOAgQw12ughLWkr33PXr0IGOdVNmPkJDyGDbhM+yNzVarvpTRhOrmX/DujNdYcM0MtXrGwn3SW9UIt48nky9CviwGYbpZs2YVyKm7A56UlBSlpcq/EvQ88MADiiXFJxWGlTSsuA+FMZz0ISCT1KebSeUeevfujS1btmD06NFKpC80YudTiT4qWqoETxLsiXRVXJAyLeE0lQThnpQsdN1nRVUvGybW9MYLJxjhu0AqW3vymERpvptqQ1ouTnYthbp+/B7Tq3IQo2RNB9rtzsDhNAt+bB6AASEEN7NBWVYNKm5klojgu9jdj1q6bBWyoPt+M3aRmSMYTNXYmolGFPePdqJ2KoUldD2m0eV4i5s0FzYMxLiwwiUopZOqaXVFHbSoTumVR1bGBJit59GzVzqOnziibnTGG9Mw+ss1sLJwQ9Juvnu2QF+jmngzf4c4C/2uFGjUrVdXmXEvHz88P3Uujlyvilxu8BPfs57fdRiu7y8yA+PJpMJ8bvC4s0Bu1nL7lSIjiUkVIN5a/CGAEvnn008/VfKT+J9ul0TMtrCg9D937lyVFfIEm/t6kydPVkw6Y8YMZe7lkFy/6KzSXnxUifZvFfylnZtFxRcWVaHIVHQhTOrWAGRirQyiXjplpqk3o29lBjGxdmacTGRSkxRF4ViSDW32pqN+kAn72plY/CFFJ05wqOQKG82/lAcR7luX0WFb2wClvaZZzKi8IZ1pWC+c7uKrEj5ybIm3oefhdIwI0WBFHPBFQy8GdNxI6QLcgohcTOD9TKxFt42LRQ7PjNPpzgJ4gpIXlkWmelWFPMpHdTjyzDuRSaCOfiEUa3/erjoYPuxxzIuKgTXyAvUrCrRz34LXI1K8cdcxqlyMOnXqUoP0w6Dn/oOrulYEqOi6doRwy/T1fR/ipVFPol//Aerit5pKN0ilaGPo0KH5wHGnG+U7EinLhAvTrlq1Spl7YUORpeS8MK0EKQKqTz75BGXLllXAkncAqIlzSUxihgWE8h1ZEOIWiN/qlpXEHRARXjRmTyaVPuR7klKVKiu5hjCzBEXSt2iowu6iz0rAJEqBBG53Sot6+qSeICVKEUulrc0vmYiTVyDZTHg33KjMPaV2mt88fHjRjtdr6TC9nqRKWQjjSldKvl+mOSaXactfspkJdOAKc/khxFYceaP65jQ08jVhf1daNZf7J2UeQZsZsFm1MJJxU3oHwEsA7ALMlzF2+qWpGMQc/Y9NZbPmnyAN4xwf6ygZJylokYood+6e72wgcTn3ODnSkJoyEEuWhWHm9G+UHtCgQSNsrxsOyy/bae6Z5HqgKQJ//IamlrWG7ONu8akMyPlzEWjTrh36Pz0RcfoHkMnraR0WPqwRYbYT2Pb9Ypw8dRz+ZFm3+XYvFflbpB6Redysdmt6Us6LGO/2Q5999llVPCL5dQGCBERi2sXXFLAI6ARkTZo0yV8Q7oUhZl+yRlJkIqV+AlYBtKgGAjaRrqRsUO7h7bffVsD0vFfJ/S9evFhdRxaAuBLi7kjCQHxXMfVybXdZ5K3P6+7LynHbykKPfvuy8Eg1B1Y0JaupSiSBF3dTcKLF/H8am4fnj4jIbsFspjEn1dDCTOeyEcEXlW3DnvbeaFaKionSJl2z6oquhXFbUd88lqbFiiYmPFJZh6gcB2pvu4HOpUzY2t4nX7OWwLcPi062JjrQmdWGm9sHOQNtF5OuvpaHwYdz0SzIgQMM5sSQn8lgcLcjl26Ghe8KY2OVERWVVVGRCtYGVyIbC0gd4kbnfIbzkVFo03oR/S+WtBoNOP/BfPjOmKO+wLc9ofRObnOuUUv9nV+P+H8kVjeQxKwcPn4Ci9ewrtMSSneeW6TpE9kYpLUok44vF/4HTz05HLNnvVlosCH9CAO5ZaFbb8fNRN99952SdeQQcApLikkX0V5AJaVxEhiJnjlkyJAiX1Ep1xMwxsfHK8lJqpfEEgjQxI2QvL4AX0y7mHRZGJ6+q4BcrilAF5dDslES7Ys8Jcw6bNgwbg3nJN7BZNl4DwcZGM06k4VOLNF7paZMqlRN3WzqcixWjPkjC/HZWjxVVYdBoV6sL+UmR5rxUJLqR5R+vAvJz7vHcUl0GtZe06AFo/yptX0Rwcqliady0Y6y1Kv3iZ/qBLaDfun2G1zAkQ48y1qCTkE8L8kE1/2cSKXrwGqo6l5aLGIwJwXNsVl2jDqexb1tJCWbUzv1PBxk5A6lvdxMSqTYc5GW+hp69vkVJ46fJRPYsPqTpWj9wUewpKTSXzBD13sQfBe9S7nKkO+/3BmjTsWr4MHMD7NK+84k4NNtsbiSmKl8IeUw8cGblLViw/IJyM5Iw9HfjqrJL6wbt0kvinHci8HTd3R/R8AjjCbAkc8FZJ5VUYUBxf1dT39STLy7FNAtwnu6Gp4gdbsNck70UFkw8ntxru05hlInKhXxVh3LK+0EJ99myPLjAsNspTCvoQm2MqHuDKzkJR1szu8ynlGVR7dL1dgoNSlmk8biFpGRtSxkoZ1XvOvpItiJGb4/UVUvKQXGI8Upmzotrk2ZyjUSyV69rdEJ8sLuwVWv4mJSCed4Js92Bp8smo9J077mTk492ndsiVUVa9Dk71ABk4nm99oHM3GjTEWUq1ReYUb8KzF3RYFE/B+7elGEXJKczYdNy7Zg17EYbD6aiItXSffqP5ok2gcT2zWrbsTaD//DbSuRWLBwAQuwR9w2lXjnhVLS4t88Avlbmp0UpmGu+BS3Ng/HpegI6LwM2LvgI1SfxbK5nAzkCvNUro4Hr54luOKZ+dGqUrIlS5aoAKQwJ19KtnLpwH+/IxJXKGdEx2Xj0rV0mNXKFMfYFcQRzBWDvFFRcw7ff/wmEuOS0GtgP3xFjbKwbRj/5kEvufe/NgL5Pql4NIrrmBJbueIbvDhuNCu0LYyoB2JxQDAcW9fCy2pSb9U716wFBv66DamZfP04AykpYpW04GS+EDcsLMzpAItp4Q9dIixacwarjyRQJZAPnPWGdnGQpeKdQn1woBaVS9kQu/crbF67Cjn0iRtR01y/dg1CgqXI2XncyU/7a49e0vrfMgKFvrBM/KRHHnmEBc+blL+0atkSdJz3X+TFJ6ktA3Zu3zjRsQUG79iOnORUZiLoH7GdH4OPRylTyVaTunVYmkYAzl11CnsikrgDUd5lqnb+KT/Gjzn4aqX1CDYm4uS+jdiz5QekZjDbxEP0S3nlpAQTJcD8t0Dpn7vPQkEqlxPNULIdUhBRrnQI9sx7D77TZrIihVsPJXCjXna5b1cM37kT52IvOU292gri3GUZRoA1oLwSWKEBgsqUh3/ZEJZe2ZCemogbyTG4Fn0e544fUcUejJ/Uq3r0BLtExaJ3uus1S0DcrvUJAAACRElEQVT6z03+v6XnIl+iK1GoVP+IUB5xMRJNGjbF6qefgve7C/hCZzPfKwpummN5Fl8J+S7fjf/5pu3MjjHKlf/E1xSfU6y7RHTKjaB5ZwpNXACJ/Bxqn5IAWzxhC19jXg6TXp6gsjjuDWglAP23wOifvc/bvulZInZJWY4cORJSRfRA82b4YshwBCxawkCKNWEEoYEMaAsuj7OtmmP+9Whs28EX5GZmK4nC+arygsqRU9IQ02/j/zanIgZ0aINxz4/Gfa1aOguu73J9wD87hCW9/9MjcMd35ssNiFAtdZEiQIdVroGlE0aj5tc/AREX1HZkK0uxTBTfbJUqI7VrK2wkSHfGRuHM+UiWpvEdT2RRd4bKIPvLWe0fXrcO+lcLQ2udCWUaNYapv3PXpfsoYdF/eur/Pf0X6/8+4hamJZ8sG9OkvnLi82PwOJUAn5+2wJbKkmv1wnHmbUmT2czxepcLg6VBLeRWqQAdmdbBamwtK3yszNT4XLgC+hIwhdWC7o3xQK1qZGQmCP5uGuvfM+4ld/oXRqDYIHWXsYmvKqb/2+9XMaiKRa/G9dGDb3cO3rsf5ovnYTM73wKt4zuFnC/S5Q9fNiBvJoHBCGN5btHt0hJ6ph71DRu49nVLRZf8DyBK3j/6F+bunmlaLJB6jkZ+SpEyUg7TenFXYpGcnoa61avBOykF1lPnYIshUyZeRV56Drx8ufeGOXMtdz6aaofBUac2dH4B1EklrccUHfNzepGn5CW5haZP75m5KHnQIkbg/wF7dI66uEfiCAAAAABJRU5ErkJggg==";

const Header = () => {
    return (React.createElement("div", { className: "header" },
        React.createElement("div", { className: "header_div" },
            React.createElement("div", { className: "flex items-ceter" },
                React.createElement("div", { className: "header_img_div sm:text-2lg" },
                    React.createElement("img", { src: img$e, alt: "oaaslogo", className: "h-8 w-32" }))))));
};

const createStoreImpl = (createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state = (replace != null ? replace : typeof nextState !== "object") ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const destroy = () => {
    if ((undefined && undefined.MODE) !== "production") {
      console.warn(
        "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
      );
    }
    listeners.clear();
  };
  const api = { setState, getState, subscribe, destroy };
  state = createState(setState, getState, api);
  return api;
};
const createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var withSelectorExports = {};
var withSelector = {
  get exports(){ return withSelectorExports; },
  set exports(v){ withSelectorExports = v; },
};

var withSelector_production_min = {};

var shimExports = {};
var shim = {
  get exports(){ return shimExports; },
  set exports(v){ shimExports = v; },
};

var useSyncExternalStoreShim_production_min = {};

/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredUseSyncExternalStoreShim_production_min;

function requireUseSyncExternalStoreShim_production_min () {
	if (hasRequiredUseSyncExternalStoreShim_production_min) return useSyncExternalStoreShim_production_min;
	hasRequiredUseSyncExternalStoreShim_production_min = 1;
var e=React;function h(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var k="function"===typeof Object.is?Object.is:h,l=e.useState,m=e.useEffect,n=e.useLayoutEffect,p=e.useDebugValue;function q(a,b){var d=b(),f=l({inst:{value:d,getSnapshot:b}}),c=f[0].inst,g=f[1];n(function(){c.value=d;c.getSnapshot=b;r(c)&&g({inst:c});},[a,d,b]);m(function(){r(c)&&g({inst:c});return a(function(){r(c)&&g({inst:c});})},[a]);p(d);return d}
	function r(a){var b=a.getSnapshot;a=a.value;try{var d=b();return !k(a,d)}catch(f){return !0}}function t(a,b){return b()}var u="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?t:q;useSyncExternalStoreShim_production_min.useSyncExternalStore=void 0!==e.useSyncExternalStore?e.useSyncExternalStore:u;
	return useSyncExternalStoreShim_production_min;
}

var useSyncExternalStoreShim_development = {};

/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredUseSyncExternalStoreShim_development;

function requireUseSyncExternalStoreShim_development () {
	if (hasRequiredUseSyncExternalStoreShim_development) return useSyncExternalStoreShim_development;
	hasRequiredUseSyncExternalStoreShim_development = 1;

	if (process.env.NODE_ENV !== "production") {
	  (function() {

	/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	if (
	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
	    'function'
	) {
	  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
	}
	          var React$1 = React;

	var ReactSharedInternals = React$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

	function error(format) {
	  {
	    {
	      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        args[_key2 - 1] = arguments[_key2];
	      }

	      printWarning('error', format, args);
	    }
	  }
	}

	function printWarning(level, format, args) {
	  // When changing this logic, you might want to also
	  // update consoleWithStackDev.www.js as well.
	  {
	    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
	    var stack = ReactDebugCurrentFrame.getStackAddendum();

	    if (stack !== '') {
	      format += '%s';
	      args = args.concat([stack]);
	    } // eslint-disable-next-line react-internal/safe-string-coercion


	    var argsWithFormat = args.map(function (item) {
	      return String(item);
	    }); // Careful: RN currently depends on this prefix

	    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
	    // breaks IE9: https://github.com/facebook/react/issues/13610
	    // eslint-disable-next-line react-internal/no-production-logging

	    Function.prototype.apply.call(console[level], console, argsWithFormat);
	  }
	}

	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	function is(x, y) {
	  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
	  ;
	}

	var objectIs = typeof Object.is === 'function' ? Object.is : is;

	// dispatch for CommonJS interop named imports.

	var useState = React$1.useState,
	    useEffect = React$1.useEffect,
	    useLayoutEffect = React$1.useLayoutEffect,
	    useDebugValue = React$1.useDebugValue;
	var didWarnOld18Alpha = false;
	var didWarnUncachedGetSnapshot = false; // Disclaimer: This shim breaks many of the rules of React, and only works
	// because of a very particular set of implementation details and assumptions
	// -- change any one of them and it will break. The most important assumption
	// is that updates are always synchronous, because concurrent rendering is
	// only available in versions of React that also have a built-in
	// useSyncExternalStore API. And we only use this shim when the built-in API
	// does not exist.
	//
	// Do not assume that the clever hacks used by this hook also work in general.
	// The point of this shim is to replace the need for hacks by other libraries.

	function useSyncExternalStore(subscribe, getSnapshot, // Note: The shim does not use getServerSnapshot, because pre-18 versions of
	// React do not expose a way to check if we're hydrating. So users of the shim
	// will need to track that themselves and return the correct value
	// from `getSnapshot`.
	getServerSnapshot) {
	  {
	    if (!didWarnOld18Alpha) {
	      if (React$1.startTransition !== undefined) {
	        didWarnOld18Alpha = true;

	        error('You are using an outdated, pre-release alpha of React 18 that ' + 'does not support useSyncExternalStore. The ' + 'use-sync-external-store shim will not work correctly. Upgrade ' + 'to a newer pre-release.');
	      }
	    }
	  } // Read the current snapshot from the store on every render. Again, this
	  // breaks the rules of React, and only works here because of specific
	  // implementation details, most importantly that updates are
	  // always synchronous.


	  var value = getSnapshot();

	  {
	    if (!didWarnUncachedGetSnapshot) {
	      var cachedValue = getSnapshot();

	      if (!objectIs(value, cachedValue)) {
	        error('The result of getSnapshot should be cached to avoid an infinite loop');

	        didWarnUncachedGetSnapshot = true;
	      }
	    }
	  } // Because updates are synchronous, we don't queue them. Instead we force a
	  // re-render whenever the subscribed state changes by updating an some
	  // arbitrary useState hook. Then, during render, we call getSnapshot to read
	  // the current value.
	  //
	  // Because we don't actually use the state returned by the useState hook, we
	  // can save a bit of memory by storing other stuff in that slot.
	  //
	  // To implement the early bailout, we need to track some things on a mutable
	  // object. Usually, we would put that in a useRef hook, but we can stash it in
	  // our useState hook instead.
	  //
	  // To force a re-render, we call forceUpdate({inst}). That works because the
	  // new object always fails an equality check.


	  var _useState = useState({
	    inst: {
	      value: value,
	      getSnapshot: getSnapshot
	    }
	  }),
	      inst = _useState[0].inst,
	      forceUpdate = _useState[1]; // Track the latest getSnapshot function with a ref. This needs to be updated
	  // in the layout phase so we can access it during the tearing check that
	  // happens on subscribe.


	  useLayoutEffect(function () {
	    inst.value = value;
	    inst.getSnapshot = getSnapshot; // Whenever getSnapshot or subscribe changes, we need to check in the
	    // commit phase if there was an interleaved mutation. In concurrent mode
	    // this can happen all the time, but even in synchronous mode, an earlier
	    // effect may have mutated the store.

	    if (checkIfSnapshotChanged(inst)) {
	      // Force a re-render.
	      forceUpdate({
	        inst: inst
	      });
	    }
	  }, [subscribe, value, getSnapshot]);
	  useEffect(function () {
	    // Check for changes right before subscribing. Subsequent changes will be
	    // detected in the subscription handler.
	    if (checkIfSnapshotChanged(inst)) {
	      // Force a re-render.
	      forceUpdate({
	        inst: inst
	      });
	    }

	    var handleStoreChange = function () {
	      // TODO: Because there is no cross-renderer API for batching updates, it's
	      // up to the consumer of this library to wrap their subscription event
	      // with unstable_batchedUpdates. Should we try to detect when this isn't
	      // the case and print a warning in development?
	      // The store changed. Check if the snapshot changed since the last time we
	      // read from the store.
	      if (checkIfSnapshotChanged(inst)) {
	        // Force a re-render.
	        forceUpdate({
	          inst: inst
	        });
	      }
	    }; // Subscribe to the store and return a clean-up function.


	    return subscribe(handleStoreChange);
	  }, [subscribe]);
	  useDebugValue(value);
	  return value;
	}

	function checkIfSnapshotChanged(inst) {
	  var latestGetSnapshot = inst.getSnapshot;
	  var prevValue = inst.value;

	  try {
	    var nextValue = latestGetSnapshot();
	    return !objectIs(prevValue, nextValue);
	  } catch (error) {
	    return true;
	  }
	}

	function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
	  // Note: The shim does not use getServerSnapshot, because pre-18 versions of
	  // React do not expose a way to check if we're hydrating. So users of the shim
	  // will need to track that themselves and return the correct value
	  // from `getSnapshot`.
	  return getSnapshot();
	}

	var canUseDOM = !!(typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined');

	var isServerEnvironment = !canUseDOM;

	var shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore;
	var useSyncExternalStore$2 = React$1.useSyncExternalStore !== undefined ? React$1.useSyncExternalStore : shim;

	useSyncExternalStoreShim_development.useSyncExternalStore = useSyncExternalStore$2;
	          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	if (
	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
	    'function'
	) {
	  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
	}
	        
	  })();
	}
	return useSyncExternalStoreShim_development;
}

var hasRequiredShim;

function requireShim () {
	if (hasRequiredShim) return shimExports;
	hasRequiredShim = 1;
	(function (module) {

		if (process.env.NODE_ENV === 'production') {
		  module.exports = requireUseSyncExternalStoreShim_production_min();
		} else {
		  module.exports = requireUseSyncExternalStoreShim_development();
		}
} (shim));
	return shimExports;
}

/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredWithSelector_production_min;

function requireWithSelector_production_min () {
	if (hasRequiredWithSelector_production_min) return withSelector_production_min;
	hasRequiredWithSelector_production_min = 1;
var h=React,n=requireShim();function p(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var q="function"===typeof Object.is?Object.is:p,r=n.useSyncExternalStore,t=h.useRef,u=h.useEffect,v=h.useMemo,w=h.useDebugValue;
	withSelector_production_min.useSyncExternalStoreWithSelector=function(a,b,e,l,g){var c=t(null);if(null===c.current){var f={hasValue:!1,value:null};c.current=f;}else f=c.current;c=v(function(){function a(a){if(!c){c=!0;d=a;a=l(a);if(void 0!==g&&f.hasValue){var b=f.value;if(g(b,a))return k=b}return k=a}b=k;if(q(d,a))return b;var e=l(a);if(void 0!==g&&g(b,e))return b;d=a;return k=e}var c=!1,d,k,m=void 0===e?null:e;return [function(){return a(b())},null===m?void 0:function(){return a(m())}]},[b,e,l,g]);var d=r(a,c[0],c[1]);
	u(function(){f.hasValue=!0;f.value=d;},[d]);w(d);return d};
	return withSelector_production_min;
}

var withSelector_development = {};

/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredWithSelector_development;

function requireWithSelector_development () {
	if (hasRequiredWithSelector_development) return withSelector_development;
	hasRequiredWithSelector_development = 1;

	if (process.env.NODE_ENV !== "production") {
	  (function() {

	/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	if (
	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
	    'function'
	) {
	  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
	}
	          var React$1 = React;
	var shim = requireShim();

	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	function is(x, y) {
	  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
	  ;
	}

	var objectIs = typeof Object.is === 'function' ? Object.is : is;

	var useSyncExternalStore = shim.useSyncExternalStore;

	// for CommonJS interop.

	var useRef = React$1.useRef,
	    useEffect = React$1.useEffect,
	    useMemo = React$1.useMemo,
	    useDebugValue = React$1.useDebugValue; // Same as useSyncExternalStore, but supports selector and isEqual arguments.

	function useSyncExternalStoreWithSelector(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
	  // Use this to track the rendered snapshot.
	  var instRef = useRef(null);
	  var inst;

	  if (instRef.current === null) {
	    inst = {
	      hasValue: false,
	      value: null
	    };
	    instRef.current = inst;
	  } else {
	    inst = instRef.current;
	  }

	  var _useMemo = useMemo(function () {
	    // Track the memoized state using closure variables that are local to this
	    // memoized instance of a getSnapshot function. Intentionally not using a
	    // useRef hook, because that state would be shared across all concurrent
	    // copies of the hook/component.
	    var hasMemo = false;
	    var memoizedSnapshot;
	    var memoizedSelection;

	    var memoizedSelector = function (nextSnapshot) {
	      if (!hasMemo) {
	        // The first time the hook is called, there is no memoized result.
	        hasMemo = true;
	        memoizedSnapshot = nextSnapshot;

	        var _nextSelection = selector(nextSnapshot);

	        if (isEqual !== undefined) {
	          // Even if the selector has changed, the currently rendered selection
	          // may be equal to the new selection. We should attempt to reuse the
	          // current value if possible, to preserve downstream memoizations.
	          if (inst.hasValue) {
	            var currentSelection = inst.value;

	            if (isEqual(currentSelection, _nextSelection)) {
	              memoizedSelection = currentSelection;
	              return currentSelection;
	            }
	          }
	        }

	        memoizedSelection = _nextSelection;
	        return _nextSelection;
	      } // We may be able to reuse the previous invocation's result.


	      // We may be able to reuse the previous invocation's result.
	      var prevSnapshot = memoizedSnapshot;
	      var prevSelection = memoizedSelection;

	      if (objectIs(prevSnapshot, nextSnapshot)) {
	        // The snapshot is the same as last time. Reuse the previous selection.
	        return prevSelection;
	      } // The snapshot has changed, so we need to compute a new selection.


	      // The snapshot has changed, so we need to compute a new selection.
	      var nextSelection = selector(nextSnapshot); // If a custom isEqual function is provided, use that to check if the data
	      // has changed. If it hasn't, return the previous selection. That signals
	      // to React that the selections are conceptually equal, and we can bail
	      // out of rendering.

	      // If a custom isEqual function is provided, use that to check if the data
	      // has changed. If it hasn't, return the previous selection. That signals
	      // to React that the selections are conceptually equal, and we can bail
	      // out of rendering.
	      if (isEqual !== undefined && isEqual(prevSelection, nextSelection)) {
	        return prevSelection;
	      }

	      memoizedSnapshot = nextSnapshot;
	      memoizedSelection = nextSelection;
	      return nextSelection;
	    }; // Assigning this to a constant so that Flow knows it can't change.


	    // Assigning this to a constant so that Flow knows it can't change.
	    var maybeGetServerSnapshot = getServerSnapshot === undefined ? null : getServerSnapshot;

	    var getSnapshotWithSelector = function () {
	      return memoizedSelector(getSnapshot());
	    };

	    var getServerSnapshotWithSelector = maybeGetServerSnapshot === null ? undefined : function () {
	      return memoizedSelector(maybeGetServerSnapshot());
	    };
	    return [getSnapshotWithSelector, getServerSnapshotWithSelector];
	  }, [getSnapshot, getServerSnapshot, selector, isEqual]),
	      getSelection = _useMemo[0],
	      getServerSelection = _useMemo[1];

	  var value = useSyncExternalStore(subscribe, getSelection, getServerSelection);
	  useEffect(function () {
	    inst.hasValue = true;
	    inst.value = value;
	  }, [value]);
	  useDebugValue(value);
	  return value;
	}

	withSelector_development.useSyncExternalStoreWithSelector = useSyncExternalStoreWithSelector;
	          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	if (
	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
	    'function'
	) {
	  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
	}
	        
	  })();
	}
	return withSelector_development;
}

(function (module) {

	if (process.env.NODE_ENV === 'production') {
	  module.exports = requireWithSelector_production_min();
	} else {
	  module.exports = requireWithSelector_development();
	}
} (withSelector));

var useSyncExternalStoreExports = /*@__PURE__*/getDefaultExportFromCjs(withSelectorExports);

const { useSyncExternalStoreWithSelector } = useSyncExternalStoreExports;
function useStore$1(api, selector = api.getState, equalityFn) {
  const slice = useSyncExternalStoreWithSelector(
    api.subscribe,
    api.getState,
    api.getServerState || api.getState,
    selector,
    equalityFn
  );
  React.useDebugValue(slice);
  return slice;
}
const createImpl = (createState) => {
  if ((undefined && undefined.MODE) !== "production" && typeof createState !== "function") {
    console.warn(
      "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
    );
  }
  const api = typeof createState === "function" ? createStore(createState) : createState;
  const useBoundStore = (selector, equalityFn) => useStore$1(api, selector, equalityFn);
  Object.assign(useBoundStore, api);
  return useBoundStore;
};
const create = (createState) => createState ? createImpl(createState) : createImpl;

const useStore = create((set) => ({
    steps: [
        "Location Capturing",
        "Pan Verification",
        "Aadhaar Verification",
        "PAN - Aadhaar Matching",
        "Business Details",
        "Video KYC",
        "Onboarding Status",
    ],
    imge: null,
    finish: false,
    completed: false,
    fetchData: false,
    isYourPan: false,
    getLocation: false,
    cameraStatus: false,
    sideBarToggle: false,
    preview: "",
    cameraType: "",
    selectedFile: "",
    status: "In Progress",
    panStatusResult: "Good Match",
    panStatus: 0,
    currentStep: 0,
    uploadedImage: 0,
    manageVeriyStep: 0,
    panVerificationfailed: 0,
    setSideBarToggle: () => set(() => ({})),
    setImg: (input) => set(() => ({ imge: input })),
    setPreview: (input) => set(() => ({ preview: input })),
    setStatus: (input) => set(() => ({ status: input })),
    setFinish: (input) => set(() => ({ finish: input })),
    setPanStatus: (input) => set(() => ({ panStatus: input })),
    setFetchData: (input) => set(() => ({ fetchData: input })),
    setIsYourPan: (input) => set(() => ({ isYourPan: input })),
    setCompleted: (input) => set(() => ({ completed: input })),
    setCameraType: (input) => set(() => ({ cameraType: input })),
    setSelectedFile: (input) => set(() => ({ selectedFile: input })),
    setGetlocation: (input) => set(() => ({ getLocation: input })),
    setCameraStatus: (input) => set(() => ({ cameraStatus: input })),
    setUploadedImage: (input) => set(() => ({ uploadedImage: input })),
    setCurrentStepInput: (input) => set(() => ({ currentStep: input })),
    setPanStatusResult: (input) => set(() => ({ panStatusResult: input })),
    setCurrentStepInitial: () => set((state) => ({ currentStep: state.currentStep })),
    setCurrentStepPlus: () => set((state) => ({ currentStep: state.currentStep + 1 })),
    setCurrentStepMinus: () => set((state) => ({ currentStep: state.currentStep - 1 })),
    setPanVerificationdone: (input) => set(() => ({ panVerificationfailed: input })),
    setPanVerificationfailed: (input) => set(() => ({ panVerificationfailed: input })),
    setManageVeriyStep: () => set((state) => ({ manageVeriyStep: state.manageVeriyStep + 1 })),
    setManageVeriyStepinital: () => set((state) => ({ manageVeriyStep: state.manageVeriyStep })),
    setManageVeriyStepback: () => set((state) => ({ manageVeriyStep: state.manageVeriyStep - 1 })),
}));

var img$d = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8.612' height='15.692' viewBox='0 0 8.612 15.692'%3e %3cpath id='Path_8529' data-name='Path 8529' d='M413%2c3085.334l6.434%2c6.866L413%2c3099.334' transform='translate(-412.072 -3084.479)' fill='none' stroke='white' stroke-linejoin='round' stroke-width='2.5'/%3e%3c/svg%3e";

var img$c = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8.612' height='15.692' viewBox='0 0 8.612 15.692'%3e %3cpath id='Path_8529' data-name='Path 8529' d='M419.434%2c3085.334%2c413%2c3092.2l6.434%2c7.134' transform='translate(-411.75 -3084.479)' fill='none' stroke='white' stroke-linejoin='round' stroke-width='2.5'/%3e%3c/svg%3e";

const SncdHeadermobile = ({ handleSidebarToggle }) => {
    const { steps, currentStep, setCurrentStepMinus } = useStore();
    return (React.createElement("div", { className: `${currentStep !== 0 ? 'block shadow-xl border-2 border-gray p-2' : 'hidden'} sm:hidden` },
        React.createElement("span", { className: "flex px-4" },
            currentStep !== 1 ? (React.createElement("img", { src: img$c, alt: "previous_arrow", className: "bg-sky p-3 rounded-lg", onClick: () => setCurrentStepMinus() })) : (''),
            React.createElement("span", { className: "w-[100%] flex justify-center" }, steps.map((val, index) => {
                return (React.createElement("span", { key: index }, currentStep - 1 === index ? (React.createElement("span", { className: "flex" },
                    React.createElement("span", { className: "mbl_snd_head_step mr-2" }, index + 1),
                    React.createElement("span", null,
                        React.createElement("div", { className: "text-[18px] text-sky font-[500]" }, val),
                        React.createElement("div", { className: "text-[15px] text-orange" }, "In-Progress")))) : ('')));
            })),
            React.createElement("img", { src: img$d, alt: "next_arrow", className: "bg-sky p-3 rounded-lg", onClick: handleSidebarToggle }))));
};

var img$b = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='18' height='13.564' viewBox='0 0 18 13.564'%3e %3cpath id='Path_8520' data-name='Path 8520' d='M6.291%2c9.2c1.35-1.356%2c2.668-2.68%2c3.987-4q2.3-2.3%2c4.6-4.6a1.8%2c1.8%2c0%2c0%2c1%2c2.715%2c2.351c-.091.111-.2.211-.3.313L7.775%2c12.8a1.854%2c1.854%2c0%2c0%2c1-3.009-.014C3.361%2c11.378%2c1.949%2c9.978.555%2c8.561a1.793%2c1.793%2c0%2c0%2c1%2c.813-3.043%2c1.771%2c1.771%2c0%2c0%2c1%2c1.767.535Q4.553%2c7.48%2c5.977%2c8.9c.092.092.187.179.313.3' transform='translate(0 0.001)' fill='white'/%3e%3c/svg%3e";

const UseGeoLocation = () => {
    const [location, setLocation] = React.useState({
        loaded: false,
        coordinates: { lat: 'nothing', lng: '' }
    });
    const onSuccess = (location) => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude
            }
        });
    };
    const onError = (error) => {
        setLocation({
            loaded: true,
            error
        });
    };
    const handleLocation = () => {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    };
    React.useEffect(() => {
        if (!('geolocation' in navigator)) {
            onError({
                code: 0,
                message: 'Geolocation not supported'
            });
        }
        handleLocation();
    }, []);
    return location;
};

const ButtonGlobal = ({ className, children, onClick, disabled, setCapturelocationData, getLocation, type, id }) => {
    const hndlCapturLoction = () => {
        const location = UseGeoLocation();
        setCapturelocationData === null || setCapturelocationData === void 0 ? void 0 : setCapturelocationData(location);
    };
    if (getLocation === true) {
        hndlCapturLoction();
    }
    return (React.createElement("button", { className: className, id: id, onClick: onClick, disabled: disabled, type: type }, children));
};

const Sidebar = ({ steps, stepsStatus }) => {
    const { currentStep, completed, setCurrentStepInput } = useStore();
    let skippedStep;
    stepsStatus.map((val) => {
        skippedStep = val.step;
        return val;
    });
    return (React.createElement("div", { className: "w-[75%] sm:w-full sm:rounded-2xl bg-white" },
        React.createElement("div", { className: "sidebar" },
            React.createElement("div", { className: "flex-col" },
                React.createElement("div", { className: "mb-2 text-base text-white" }, "ONBOARDING PROGRESS"),
                React.createElement("div", { className: "sidebar_step_circl" },
                    React.createElement("div", { className: `bg-green h-[12px] sm:h-2.5 rounded-full ${currentStep === 2
                            ? 'w-[14%]'
                            : currentStep === 3
                                ? 'w-[28%]'
                                : currentStep === 4
                                    ? 'w-[42%]'
                                    : currentStep === 5
                                        ? 'w-[56%]'
                                        : currentStep === 6
                                            ? 'w-[70%]'
                                            : currentStep === 7
                                                ? 'w-[84%]'
                                                : currentStep === 8
                                                    ? 'w-[100]'
                                                    : 'w-[0]'}` }),
                    React.createElement("div", { className: "sidebar_step_indictr" },
                        currentStep > 1 ? currentStep - 1 : 0,
                        " Steps Completed")))),
        React.createElement("div", { className: "sidebar_step_name" }, steps === null || steps === void 0 ? void 0 : steps.map((step, i) => {
            return (React.createElement("span", { key: i, className: `step-item ${currentStep === i + 1 && 'active'} ${(i + 1 < currentStep || completed) && 'complete'}` },
                React.createElement(ButtonGlobal, { onClick: () => {
                        setCurrentStepInput(i + 1);
                    } },
                    React.createElement("span", { className: "flex pb-5 items-center" },
                        React.createElement("span", { className: "step" }, currentStep === i + 1 || currentStep < i + 1 || skippedStep < i ? (i + 1) : (React.createElement("img", { src: img$b, alt: "complete mark", className: "w-[15px] h-[11px]" }))),
                        React.createElement("span", null,
                            React.createElement("p", { className: "sidebar_step_num" }, step),
                            stepsStatus.map((val, index) => {
                                return (React.createElement("span", { key: index }, val.step === i + 1 ? (val.progress === 'Skipped' ? (React.createElement("div", { className: "stepStatus text-red bg-white border-red border-2" }, val.progress)) : ('')) : ('')));
                            }),
                            currentStep === i + 1 ? (React.createElement("div", { className: "stepStatus text-white bg-orange" }, "In Progress")) : (''))))));
        }))));
};

const Modal = ({ showModal, setShowModal, handleOnclick, attentionmsg }) => {
    const { setCameraStatus, setManageVeriyStepinital, setFetchData, setSelectedFile, setManageVeriyStepback, setUploadedImage, setPanVerificationfailed, setImg } = useStore();
    const handleproceed = () => {
        setShowModal(false);
        handleOnclick === null || handleOnclick === void 0 ? void 0 : handleOnclick();
        setCameraStatus(false);
        setManageVeriyStepinital();
        setFetchData(true);
        setManageVeriyStepback();
        setSelectedFile(undefined);
        setUploadedImage(0);
        setPanVerificationfailed(0);
        setImg(null);
    };
    return (React.createElement(React.Fragment, null, showModal ? (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "modal" },
            React.createElement("div", { className: "relative w-auto my-6 mx-auto max-w-3xl" },
                React.createElement("div", { className: "modal_content shadow-lg" },
                    React.createElement("button", { className: "modal_close_btn", onClick: () => setShowModal(false) },
                        React.createElement("span", { className: "modal_close_btn_spn" }, "\u00D7")),
                    React.createElement("div", { className: "modal_attntn" },
                        React.createElement("div", { className: "text-xl font-[500]" }, "Attention!"),
                        React.createElement("div", { className: "modal_attntn_msg" }, attentionmsg),
                        React.createElement("div", { className: "mt-6 sm:mt-4" },
                            React.createElement("button", { className: "modal_attn_proc_btn", type: "button", onClick: handleproceed }, "Yes, Proceed"),
                            React.createElement("button", { className: "modal_cancl_btn", type: "button", onClick: () => setShowModal(false) }, "Cancel")))))),
        React.createElement("div", { className: "opacity-25 fixed inset-0 z-40 bg-black" }))) : null));
};

var img$a = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAABEVJREFUaEPVmdt1EzEQhnEFkApwGoCkAXAqgFSAqQCoAKcDeOYhpgJIBdhpAEIDOBUAFZj/2yMtWnkk7XrtZD3n6Piy0mj+0Vy1owc7oPV6PRab5xonbvCbAf3ReDcajeZdtxLfR1rzVONG6+GzQaOuTP18x/yVfk+d0DlWKwlwbE1wfDx4BEYJ/tMvQfhz8VjEPDoDcBu+EaO3bqM2OrjV5v5E6vnu5L635HMlHi97AdCGaPxDyw39XjeAtbQnfjM9e99GA5pzIR7Mb1CrE3Ca+lIwFQT9qvGDoc1WJcFaAliKz8ISHv5FANoEm/yW0Pqt/p9zKikny4EQ76meXybmYPdn4otCkpQFkNngrzjOxBxz2prEf+KUk+JRBJEEkBH+Srth00UTKSFzpvmrNE/PX6fCsAnAmQ3RIaYkoxZCmFO01zp6cKHfsWMnT2IDQCa07Vx4BNd+nOTjAMSpvuN3sW8A4jj2NQsAmodBSKclZ+pxAgutJZF5wnEXCRMmGp2FezUAJBZRBvRy1hw47QlvEqOnWlmJMNuwhBqAy7BofxwwM7Pfttq21jmT5RQwo49SFhm+Jj2PT6hhSiGAmVaFzkOoHG8T3/cAMI5UdVauADjtM4kiypOZuncpXFtehinVp+ABTMUs9PpBaN8DdAomI4fRqvIFD4Aa5sUQtR+AiJ298s+RQ/c7Ok7i7artEd/FvERyPQIANTaVpie6nzgP3IWMxT0kK2ZEh+bpHAAz/Qqjz2CcN0Zkyqo/Y/undeO/wZGRaJecAOFzHEi7t7Khr0aM8rsC0KgGpf1ik9NXkG3XWwHnoAAAfEPhh3QCBw/AygWY0ELINurxbe10n+tSTjzXptz3/E8Oww2jcdK9shLZRk2+T6124W00PxdWKcGlFH3p4EgA4nb33Fej1NcPA4mHWMzRq8RF59EhldMzAQhrtqUsZZJqaMwrjPu0KZkP2g87xuqyIWwpV5EZDaYqNYq4umPMNfWcAoUdwO6NSv16fC+EsGHfuXGRJIb0zlMN5nIJtVeA2o9mi/jvqdGvt7nYqvOCkco/CwBg9kKG6bBP46LNulqMGxwWVTcAZipXJNiH9Anhq8gT7mcBwNPjK4wKhMZCI7xkSr686wMqITymcxKbbO56HWHD5IZMc42Gyey6AZLw3JNad7Fmp5h7wcHNhAUiVu5OsraLNgSI0GH9XpUJW6daesXUBgSRCKBbk9P6TAzCRFUUngnF/tdFHhw7DK+hsEnt5BCJ71jP/YtyvseEzU+kHPwxSSkfQBPY4sSNHI9ixnZKwJ8QlFOFb+7ybKnn0zY5JgWA4+z1AtqFXGza0m5KIWidF4jznMbCZykAVi6weJqhjYnGfVNOJvgQeTq/b+4SRnkTT32ETfpPSg2+b5AArPRnym/8fExl3kXj8UalKPRMC7jsRUOdSACeaMEnDT5/ange1/p+LZ589qZ/cbkc0dA9Mv8AAAAASUVORK5CYII=";

const SupersetComponent = ({ pagename, steps, children, btnName, tagLine, capturelocationData, stepsStatus, setCapturelocationData, setStepsStatus }) => {
    const { currentStep, panStatus, finish, setPanStatusResult, setFinish, setPanStatus, setCurrentStepPlus, setCurrentStepInitial, setCompleted, setStatus, manageVeriyStep, getLocation, setGetlocation, setPanVerificationfailed, panVerificationfailed, setManageVeriyStepback } = useStore();
    const [showModal, setShowModal] = React.useState(false);
    const handleStatus = () => {
        setCurrentStepPlus();
        setStatus('Skipped');
        setStepsStatus([...stepsStatus, { progress: 'Skipped', step: currentStep }]);
    };
    const handleStepbtn = () => {
        currentStep === steps.length + 1
            ? setCompleted(true)
            : panStatus === 0 || panStatus === 1 || (panStatus === 2 && finish === false)
                ? currentStep < 7
                    ? (setCurrentStepPlus(),
                        setStepsStatus([...stepsStatus, { progress: 'Completed', step: currentStep }]))
                    : setFinish(true)
                : // setStepsStatus?.([...stepsStatus, { progress: 'Completed', step: currentStep }])
                    setCurrentStepInitial();
        setPanStatus(panStatus === 2 ? panStatus : panStatus + 1);
        btnName === 'Next' ? setPanStatusResult('Good Match') : setPanStatusResult('Matching Failed');
        currentStep >= 7 ? setCompleted(true) : '';
    };
    const increase = () => {
        var _a, _b;
        if (((_a = capturelocationData === null || capturelocationData === void 0 ? void 0 : capturelocationData.coordinates) === null || _a === void 0 ? void 0 : _a.lat) !== undefined &&
            ((_b = capturelocationData === null || capturelocationData === void 0 ? void 0 : capturelocationData.coordinates) === null || _b === void 0 ? void 0 : _b.lat) !== 'nothing') {
            setCurrentStepPlus();
            setStepsStatus([...stepsStatus, { progress: 'Completed', step: currentStep }]);
        }
        else {
            console.log('error', capturelocationData);
        }
    };
    React.useEffect(() => {
        increase();
    }, [capturelocationData, panVerificationfailed]);
    const captureLocation = () => {
        setGetlocation(true);
    };
    const handleOnclick = currentStep === 1 ? captureLocation : handleStepbtn;
    const showInfromation = () => {
        // comment this to show pan verify failed screens
        setShowModal(true);
        // comment this code to show pan verify success screens and camera function proper
        // panVerificationfailed <= 3
        //   ? setPanVerificationfailed(panVerificationfailed + 1)
        //   : setShowModal(true);
    };
    const handleRetryPanImg = () => {
        setPanVerificationfailed(panVerificationfailed + 1);
        setManageVeriyStepback();
    };
    return (React.createElement("div", { className: "pt-8 sm:p-8" },
        React.createElement("div", { className: "text-[22px] font-[500] sm:font-[400]" }, pagename),
        currentStep === 2 ||
            currentStep === 3 ||
            currentStep === 5 ||
            currentStep === 6 ||
            currentStep === 7 ? (React.createElement("div", { className: "mt-3 text-[16px] sm:text-[14px] font-[400] sm:font-[300]" },
            tagLine,
            currentStep === 2 || currentStep === 3 || currentStep === 5 ? (React.createElement("span", { className: "text-sky" }, ".jpg, .png, .pdf")) : (''))) : (''),
        children,
        React.createElement("span", { className: `flex flex-col items-center ${currentStep === 4 ? `mt-72 sm:mt-0` : ``} sm:block` },
            React.createElement(ButtonGlobal, { className: (manageVeriyStep === 0 && btnName === 'Verify PAN') ||
                    (manageVeriyStep === 0 && btnName === 'Verify Aadhaar')
                    ? 'bg-darkgray text-white mt-4 py-2 px-8 rounded w-[19rem] sm:w-fit text-[16px]'
                    : 'bg-sky hover:bg-black text-white font-semibold mt-4 py-2 px-8 rounded w-[19rem] sm:w-fit text-[16px]', onClick: btnName === 'Verify PAN' || btnName === 'Verify Aadhaar'
                    ? showInfromation
                    : handleOnclick, disabled: (manageVeriyStep === 0 && btnName === 'Verify PAN') ||
                    (manageVeriyStep === 0 && btnName === 'Verify Aadhaar')
                    ? true
                    : panVerificationfailed === 2 && manageVeriyStep === 0
                        ? true
                        : false, setCapturelocationData: setCapturelocationData, getLocation: getLocation },
                React.createElement(React.Fragment, null, panVerificationfailed === 1 ? (React.createElement("div", { className: "flex justify-center items-center", onClick: handleRetryPanImg },
                    React.createElement("img", { src: img$a, alt: "retry_icon", className: "w-4 h-4 mr-2" }),
                    " Retry")) : panVerificationfailed === 2 ? ('Proceed') : panVerificationfailed === 3 ? (React.createElement("div", null, "Next")) : (btnName))),
            currentStep === steps.length + 1 || currentStep === 7 ? ('') : (React.createElement(ButtonGlobal, { className: `font-semibold sm:ml-10 ${currentStep === 4 ? `mt-10` : `mt-6`}`, onClick: handleStatus }, "Skip this step"))),
        React.createElement(Modal, { showModal: showModal, setShowModal: setShowModal, handleOnclick: handleOnclick, attentionmsg: btnName === 'Verify PAN' ? (React.createElement(React.Fragment, null,
                "Are you sure you want to upload this PAN. You will ",
                React.createElement("br", { className: "hidden sm:block" }),
                ' ',
                "get only two attempts for PAN verification")) : btnName === 'Verify Aadhaar' ? (React.createElement(React.Fragment, null,
                "Are you sure you want to upload this Aadhaar. You will ",
                React.createElement("br", null),
                " get only one attempt for Aadhaar verification.")) : ('') })));
};

var img$9 = "data:image/png;base64,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";

const Welcome = ({ steps, stepsStatus, setStepsStatus }) => {
    const { currentStep, setCompleted, setCurrentStepPlus } = useStore();
    return (React.createElement("div", { className: "welcome" },
        React.createElement("div", { className: "items-center text-center text-black" },
            React.createElement("img", { src: String(img$9), alt: "welcome icon", className: "welcome_img" }),
            React.createElement("b", { className: "text-[24px]" }, "Welcome!"),
            React.createElement("p", { className: "sm:font-normal text-[18px] pt-2 pl-4 pr-4" },
                React.createElement("span", { className: "sm:block" }, "Happy to see you here. Lets start your onboarding journey."),
                React.createElement("span", { className: "sm:block" }, " We ensure, you'll be assisted at every step.")),
            React.createElement(ButtonGlobal, { className: "welcome_btn", onClick: () => {
                    currentStep === steps.length + 1 ? setCompleted(true) : (setCurrentStepPlus(), setStepsStatus([...stepsStatus, { progress: 'In Progress', step: currentStep + 1 }]));
                } }, currentStep === steps.length + 1 ? 'Done' : 'Start Onboarding'))));
};

var img$8 = "data:image/svg+xml,%3csvg id='Group_4806' data-name='Group 4806' xmlns='http://www.w3.org/2000/svg' width='30' height='26.842' viewBox='0 0 30 26.842'%3e %3cpath id='Union_1' data-name='Union 1' d='M3.948%2c26.842A3.947%2c3.947%2c0%2c0%2c1%2c0%2c22.895V8.684A3.947%2c3.947%2c0%2c0%2c1%2c3.948%2c4.737h2A2.369%2c2.369%2c0%2c0%2c0%2c8.062%2c3.428l.622-1.246A3.947%2c3.947%2c0%2c0%2c1%2c12.215%2c0h5.57a3.947%2c3.947%2c0%2c0%2c1%2c3.531%2c2.182l.623%2c1.246a2.369%2c2.369%2c0%2c0%2c0%2c2.119%2c1.309h2A3.947%2c3.947%2c0%2c0%2c1%2c30%2c8.684V22.895a3.947%2c3.947%2c0%2c0%2c1-3.948%2c3.947ZM1.579%2c8.684V22.895a2.368%2c2.368%2c0%2c0%2c0%2c2.368%2c2.368h22.1a2.368%2c2.368%2c0%2c0%2c0%2c2.368-2.368V8.684a2.368%2c2.368%2c0%2c0%2c0-2.368-2.368h-2a3.947%2c3.947%2c0%2c0%2c1-3.531-2.182L19.9%2c2.888a2.369%2c2.369%2c0%2c0%2c0-2.119-1.309h-5.57A2.369%2c2.369%2c0%2c0%2c0%2c10.1%2c2.888L9.473%2c4.134a3.947%2c3.947%2c0%2c0%2c1-3.53%2c2.182h-2A2.368%2c2.368%2c0%2c0%2c0%2c1.579%2c8.684ZM7.895%2c15A7.105%2c7.105%2c0%2c1%2c1%2c15%2c22.105%2c7.105%2c7.105%2c0%2c0%2c1%2c7.895%2c15Zm1.579%2c0A5.526%2c5.526%2c0%2c1%2c0%2c15%2c9.474%2c5.526%2c5.526%2c0%2c0%2c0%2c9.474%2c15Z' fill='%23555'/%3e%3c/svg%3e";

var img$7 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='18.527' height='14' viewBox='0 0 18.527 14'%3e %3cg id='Group_4834' data-name='Group 4834' transform='translate(-3488.719 -959)'%3e %3cpath id='Path_3762' data-name='Path 3762' d='M293.516%2c244a2.4%2c2.4%2c0%2c1%2c1-2.4-2.4%2c2.4%2c2.4%2c0%2c0%2c1%2c2.4%2c2.4' transform='translate(3206.864 722.893)' fill='white'/%3e %3cpath id='Path_3763' data-name='Path 3763' d='M113.25%2c104.914v8.337A1.859%2c1.859%2c0%2c0%2c0%2c115.1%2c115.1h14.821a1.859%2c1.859%2c0%2c0%2c0%2c1.854-1.852v-8.337a1.859%2c1.859%2c0%2c0%2c0-1.854-1.852H127.7a.825.825%2c0%2c0%2c1-.732-.527l-.575-.9a.822.822%2c0%2c0%2c0-.731-.527h-6.3a.824.824%2c0%2c0%2c0-.731.527l-.576.9a.822.822%2c0%2c0%2c1-.731.527H115.1A1.859%2c1.859%2c0%2c0%2c0%2c113.25%2c104.914Zm4.895%2c4.115a4.369%2c4.369%2c0%2c1%2c1%2c4.369%2c4.369A4.369%2c4.369%2c0%2c0%2c1%2c118.145%2c109.029Z' transform='translate(3375.469 857.896)' fill='white'/%3e %3c/g%3e%3c/svg%3e";

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

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

var reactWebcamExports = {};
var reactWebcam = {
  get exports(){ return reactWebcamExports; },
  set exports(v){ reactWebcamExports = v; },
};

(function (module, exports) {
	(function webpackUniversalModuleDefinition(root, factory) {
		module.exports = factory(React);
	})(commonjsGlobal, function(__WEBPACK_EXTERNAL_MODULE_react__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId]) {
	/******/ 			return installedModules[moduleId].exports;
	/******/ 		}
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			i: moduleId,
	/******/ 			l: false,
	/******/ 			exports: {}
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.l = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// define getter function for harmony exports
	/******/ 	__webpack_require__.d = function(exports, name, getter) {
	/******/ 		if(!__webpack_require__.o(exports, name)) {
	/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
	/******/ 		}
	/******/ 	};
	/******/
	/******/ 	// define __esModule on exports
	/******/ 	__webpack_require__.r = function(exports) {
	/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
	/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	/******/ 		}
	/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
	/******/ 	};
	/******/
	/******/ 	// create a fake namespace object
	/******/ 	// mode & 1: value is a module id, require it
	/******/ 	// mode & 2: merge all properties of value into the ns
	/******/ 	// mode & 4: return value when already ns object
	/******/ 	// mode & 8|1: behave like require
	/******/ 	__webpack_require__.t = function(value, mode) {
	/******/ 		if(mode & 1) value = __webpack_require__(value);
	/******/ 		if(mode & 8) return value;
	/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
	/******/ 		var ns = Object.create(null);
	/******/ 		__webpack_require__.r(ns);
	/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
	/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
	/******/ 		return ns;
	/******/ 	};
	/******/
	/******/ 	// getDefaultExport function for compatibility with non-harmony modules
	/******/ 	__webpack_require__.n = function(module) {
	/******/ 		var getter = module && module.__esModule ?
	/******/ 			function getDefault() { return module['default']; } :
	/******/ 			function getModuleExports() { return module; };
	/******/ 		__webpack_require__.d(getter, 'a', getter);
	/******/ 		return getter;
	/******/ 	};
	/******/
	/******/ 	// Object.prototype.hasOwnProperty.call
	/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(__webpack_require__.s = "./src/react-webcam.tsx");
	/******/ })
	/************************************************************************/
	/******/ ({

	/***/ "./src/react-webcam.tsx":
	/*!******************************!*\
	  !*** ./src/react-webcam.tsx ***!
	  \******************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	__webpack_require__.r(__webpack_exports__);
	/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
	var __extends = (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var __assign = function () {
	    __assign = Object.assign || function(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	                t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign.apply(this, arguments);
	};
	var __rest = function (s, e) {
	    var t = {};
	    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
	        t[p] = s[p];
	    if (s != null && typeof Object.getOwnPropertySymbols === "function")
	        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
	                t[p[i]] = s[p[i]];
	        }
	    return t;
	};

	// polyfill based on https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
	(function polyfillGetUserMedia() {
	    if (typeof window === 'undefined') {
	        return;
	    }
	    // Older browsers might not implement mediaDevices at all, so we set an empty object first
	    if (navigator.mediaDevices === undefined) {
	        navigator.mediaDevices = {};
	    }
	    // Some browsers partially implement mediaDevices. We can't just assign an object
	    // with getUserMedia as it would overwrite existing properties.
	    // Here, we will just add the getUserMedia property if it's missing.
	    if (navigator.mediaDevices.getUserMedia === undefined) {
	        navigator.mediaDevices.getUserMedia = function (constraints) {
	            // First get ahold of the legacy getUserMedia, if present
	            var getUserMedia = navigator.getUserMedia ||
	                navigator.webkitGetUserMedia ||
	                navigator.mozGetUserMedia ||
	                navigator.msGetUserMedia;
	            // Some browsers just don't implement it - return a rejected promise with an error
	            // to keep a consistent interface
	            if (!getUserMedia) {
	                return Promise.reject(new Error("getUserMedia is not implemented in this browser"));
	            }
	            // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
	            return new Promise(function (resolve, reject) {
	                getUserMedia.call(navigator, constraints, resolve, reject);
	            });
	        };
	    }
	})();
	function hasGetUserMedia() {
	    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
	}
	var Webcam = /** @class */ (function (_super) {
	    __extends(Webcam, _super);
	    function Webcam(props) {
	        var _this = _super.call(this, props) || this;
	        _this.canvas = null;
	        _this.ctx = null;
	        _this.requestUserMediaId = 0;
	        _this.unmounted = false;
	        _this.state = {
	            hasUserMedia: false
	        };
	        return _this;
	    }
	    Webcam.prototype.componentDidMount = function () {
	        var _a = this, state = _a.state, props = _a.props;
	        this.unmounted = false;
	        if (!hasGetUserMedia()) {
	            props.onUserMediaError("getUserMedia not supported");
	            return;
	        }
	        if (!state.hasUserMedia) {
	            this.requestUserMedia();
	        }
	        if (props.children && typeof props.children != 'function') {
	            console.warn("children must be a function");
	        }
	    };
	    Webcam.prototype.componentDidUpdate = function (nextProps) {
	        var props = this.props;
	        if (!hasGetUserMedia()) {
	            props.onUserMediaError("getUserMedia not supported");
	            return;
	        }
	        var audioConstraintsChanged = JSON.stringify(nextProps.audioConstraints) !==
	            JSON.stringify(props.audioConstraints);
	        var videoConstraintsChanged = JSON.stringify(nextProps.videoConstraints) !==
	            JSON.stringify(props.videoConstraints);
	        var minScreenshotWidthChanged = nextProps.minScreenshotWidth !== props.minScreenshotWidth;
	        var minScreenshotHeightChanged = nextProps.minScreenshotHeight !== props.minScreenshotHeight;
	        if (videoConstraintsChanged ||
	            minScreenshotWidthChanged ||
	            minScreenshotHeightChanged) {
	            this.canvas = null;
	            this.ctx = null;
	        }
	        if (audioConstraintsChanged || videoConstraintsChanged) {
	            this.stopAndCleanup();
	            this.requestUserMedia();
	        }
	    };
	    Webcam.prototype.componentWillUnmount = function () {
	        this.unmounted = true;
	        this.stopAndCleanup();
	    };
	    Webcam.stopMediaStream = function (stream) {
	        if (stream) {
	            if (stream.getVideoTracks && stream.getAudioTracks) {
	                stream.getVideoTracks().map(function (track) {
	                    stream.removeTrack(track);
	                    track.stop();
	                });
	                stream.getAudioTracks().map(function (track) {
	                    stream.removeTrack(track);
	                    track.stop();
	                });
	            }
	            else {
	                stream.stop();
	            }
	        }
	    };
	    Webcam.prototype.stopAndCleanup = function () {
	        var state = this.state;
	        if (state.hasUserMedia) {
	            Webcam.stopMediaStream(this.stream);
	            if (state.src) {
	                window.URL.revokeObjectURL(state.src);
	            }
	        }
	    };
	    Webcam.prototype.getScreenshot = function (screenshotDimensions) {
	        var _a = this, state = _a.state, props = _a.props;
	        if (!state.hasUserMedia)
	            return null;
	        var canvas = this.getCanvas(screenshotDimensions);
	        return (canvas &&
	            canvas.toDataURL(props.screenshotFormat, props.screenshotQuality));
	    };
	    Webcam.prototype.getCanvas = function (screenshotDimensions) {
	        var _a = this, state = _a.state, props = _a.props;
	        if (!this.video) {
	            return null;
	        }
	        if (!state.hasUserMedia || !this.video.videoHeight)
	            return null;
	        if (!this.ctx) {
	            var canvasWidth = this.video.videoWidth;
	            var canvasHeight = this.video.videoHeight;
	            if (!this.props.forceScreenshotSourceSize) {
	                var aspectRatio = canvasWidth / canvasHeight;
	                canvasWidth = props.minScreenshotWidth || this.video.clientWidth;
	                canvasHeight = canvasWidth / aspectRatio;
	                if (props.minScreenshotHeight &&
	                    canvasHeight < props.minScreenshotHeight) {
	                    canvasHeight = props.minScreenshotHeight;
	                    canvasWidth = canvasHeight * aspectRatio;
	                }
	            }
	            this.canvas = document.createElement("canvas");
	            this.canvas.width = (screenshotDimensions === null || screenshotDimensions === void 0 ? void 0 : screenshotDimensions.width) || canvasWidth;
	            this.canvas.height = (screenshotDimensions === null || screenshotDimensions === void 0 ? void 0 : screenshotDimensions.height) || canvasHeight;
	            this.ctx = this.canvas.getContext("2d");
	        }
	        var _b = this, ctx = _b.ctx, canvas = _b.canvas;
	        if (ctx && canvas) {
	            // mirror the screenshot
	            if (props.mirrored) {
	                ctx.translate(canvas.width, 0);
	                ctx.scale(-1, 1);
	            }
	            ctx.imageSmoothingEnabled = props.imageSmoothing;
	            ctx.drawImage(this.video, 0, 0, (screenshotDimensions === null || screenshotDimensions === void 0 ? void 0 : screenshotDimensions.width) || canvas.width, (screenshotDimensions === null || screenshotDimensions === void 0 ? void 0 : screenshotDimensions.height) || canvas.height);
	            // invert mirroring
	            if (props.mirrored) {
	                ctx.scale(-1, 1);
	                ctx.translate(-canvas.width, 0);
	            }
	        }
	        return canvas;
	    };
	    Webcam.prototype.requestUserMedia = function () {
	        var _this = this;
	        var props = this.props;
	        var sourceSelected = function (audioConstraints, videoConstraints) {
	            var constraints = {
	                video: typeof videoConstraints !== "undefined" ? videoConstraints : true
	            };
	            if (props.audio) {
	                constraints.audio =
	                    typeof audioConstraints !== "undefined" ? audioConstraints : true;
	            }
	            _this.requestUserMediaId++;
	            var myRequestUserMediaId = _this.requestUserMediaId;
	            navigator.mediaDevices
	                .getUserMedia(constraints)
	                .then(function (stream) {
	                if (_this.unmounted || myRequestUserMediaId !== _this.requestUserMediaId) {
	                    Webcam.stopMediaStream(stream);
	                }
	                else {
	                    _this.handleUserMedia(null, stream);
	                }
	            })
	                .catch(function (e) {
	                _this.handleUserMedia(e);
	            });
	        };
	        if ("mediaDevices" in navigator) {
	            sourceSelected(props.audioConstraints, props.videoConstraints);
	        }
	        else {
	            var optionalSource_1 = function (id) { return ({ optional: [{ sourceId: id }] }); };
	            var constraintToSourceId_1 = function (constraint) {
	                var deviceId = constraint.deviceId;
	                if (typeof deviceId === "string") {
	                    return deviceId;
	                }
	                if (Array.isArray(deviceId) && deviceId.length > 0) {
	                    return deviceId[0];
	                }
	                if (typeof deviceId === "object" && deviceId.ideal) {
	                    return deviceId.ideal;
	                }
	                return null;
	            };
	            // @ts-ignore: deprecated api
	            MediaStreamTrack.getSources(function (sources) {
	                var audioSource = null;
	                var videoSource = null;
	                sources.forEach(function (source) {
	                    if (source.kind === "audio") {
	                        audioSource = source.id;
	                    }
	                    else if (source.kind === "video") {
	                        videoSource = source.id;
	                    }
	                });
	                var audioSourceId = constraintToSourceId_1(props.audioConstraints);
	                if (audioSourceId) {
	                    audioSource = audioSourceId;
	                }
	                var videoSourceId = constraintToSourceId_1(props.videoConstraints);
	                if (videoSourceId) {
	                    videoSource = videoSourceId;
	                }
	                sourceSelected(optionalSource_1(audioSource), optionalSource_1(videoSource));
	            });
	        }
	    };
	    Webcam.prototype.handleUserMedia = function (err, stream) {
	        var props = this.props;
	        if (err || !stream) {
	            this.setState({ hasUserMedia: false });
	            props.onUserMediaError(err);
	            return;
	        }
	        this.stream = stream;
	        try {
	            if (this.video) {
	                this.video.srcObject = stream;
	            }
	            this.setState({ hasUserMedia: true });
	        }
	        catch (error) {
	            this.setState({
	                hasUserMedia: true,
	                src: window.URL.createObjectURL(stream)
	            });
	        }
	        props.onUserMedia(stream);
	    };
	    Webcam.prototype.render = function () {
	        var _this = this;
	        var _a = this, state = _a.state, props = _a.props;
	        var audio = props.audio; props.forceScreenshotSourceSize; props.onUserMedia; props.onUserMediaError; props.screenshotFormat; props.screenshotQuality; props.minScreenshotWidth; props.minScreenshotHeight; props.audioConstraints; props.videoConstraints; props.imageSmoothing; var mirrored = props.mirrored, _b = props.style, style = _b === void 0 ? {} : _b, children = props.children, rest = __rest(props, ["audio", "forceScreenshotSourceSize", "onUserMedia", "onUserMediaError", "screenshotFormat", "screenshotQuality", "minScreenshotWidth", "minScreenshotHeight", "audioConstraints", "videoConstraints", "imageSmoothing", "mirrored", "style", "children"]);
	        var videoStyle = mirrored ? __assign(__assign({}, style), { transform: (style.transform || "") + " scaleX(-1)" }) : style;
	        var childrenProps = {
	            getScreenshot: this.getScreenshot.bind(this),
	        };
	        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
	            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("video", __assign({ autoPlay: true, src: state.src, muted: !audio, playsInline: true, ref: function (ref) {
	                    _this.video = ref;
	                }, style: videoStyle }, rest)),
	            children && children(childrenProps)));
	    };
	    Webcam.defaultProps = {
	        audio: false,
	        forceScreenshotSourceSize: false,
	        imageSmoothing: true,
	        mirrored: false,
	        onUserMedia: function () { return undefined; },
	        onUserMediaError: function () { return undefined; },
	        screenshotFormat: "image/webp",
	        screenshotQuality: 0.92,
	    };
	    return Webcam;
	}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
	/* harmony default export */ __webpack_exports__["default"] = (Webcam);


	/***/ }),

	/***/ "react":
	/*!**************************************************************************************!*\
	  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
	  \**************************************************************************************/
	/*! no static exports found */
	/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

	/***/ })

	/******/ })["default"];
	});
	
} (reactWebcam));

var Webcam = /*@__PURE__*/getDefaultExportFromCjs(reactWebcamExports);

var img$6 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='18.527' height='14.618' viewBox='0 0 18.527 14.618'%3e %3cg id='Group_4837' data-name='Group 4837' transform='translate(-3372.078 -949)'%3e %3cpath id='Path_3760' data-name='Path 3760' d='M127.529%2c90.719H110.514a.765.765%2c0%2c0%2c0-.756.756v13.107a.765.765%2c0%2c0%2c0%2c.756.756h17.015a.765.765%2c0%2c0%2c0%2c.756-.756V91.475A.738.738%2c0%2c0%2c0%2c127.529%2c90.719Zm-.756%2c9.047L123.685%2c97.3a.779.779%2c0%2c0%2c0-.972.022l-3.476%2c3.023-4.6-5.182a.856.856%2c0%2c0%2c0-.583-.259.783.783%2c0%2c0%2c0-.561.238l-2.224%2c2.418V92.23h15.5Z' transform='translate(3262.32 858.281)' fill='white'/%3e %3cpath id='Path_3761' data-name='Path 3761' d='M288.085%2c146.65a2.483%2c2.483%2c0%2c1%2c0-2.483-2.483A2.483%2c2.483%2c0%2c0%2c0%2c288.085%2c146.65Z' transform='translate(3093.416 809.204)' fill='white'/%3e %3c/g%3e%3c/svg%3e";

const Uploadfile = () => {
    const { uploadedImage, setUploadedImage, selectedFile, setPreview, panVerificationfailed, setSelectedFile, setManageVeriyStep } = useStore();
    React.useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined);
            return;
        }
        const objectUrl = URL.createObjectURL(selectedFile);
        setPreview(objectUrl);
        setUploadedImage(uploadedImage + 1);
        return () => URL.revokeObjectURL(objectUrl);
    }, [selectedFile, panVerificationfailed]);
    const onSelectFile = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined);
            return;
        }
        setSelectedFile(e.target.files[0]);
        setManageVeriyStep();
    };
    return (React.createElement("label", { htmlFor: 'upload-button', className: "documentbtn flex w-[4.2rem]" },
        React.createElement("input", { type: "file", onChange: onSelectFile, name: "done", id: "upload-button", style: { display: 'none' } }),
        React.createElement("img", { src: img$6, className: "w-[18px] h-[18px] mr-2" }),
        "Browse"));
};

const Frontcam = ({ handleRetake }) => {
    const { imge, setImg, setCameraType } = useStore();
    return (React.createElement("div", { className: "flex" },
        React.createElement("div", null,
            React.createElement("img", { src: imge, alt: "screenshot", className: "rounded-[10px]" }),
            React.createElement("span", { className: "flex flex-col justify-end items-end mt-3" },
                React.createElement(ButtonGlobal, { onClick: handleRetake, className: "cam_btn" },
                    React.createElement(React.Fragment, null,
                        React.createElement("img", { src: img$a, alt: "retry_icon", className: "w-[16px] h-[16px] mr-1" }),
                        " Re-Capture")))),
        React.createElement("div", { className: "documentimgstyle w-[40%] h-[190px] ml-4 text-center" },
            React.createElement("img", { src: img$8, className: "w-[2rem] h-[2rem] flex-col mb-4" }),
            React.createElement("div", { className: "text-sm" }, `Drag and drop back copy of Aadhaar or you can`),
            React.createElement("div", { className: "flex mt-4" },
                React.createElement(Uploadfile, null),
                React.createElement(ButtonGlobal, { className: "documentbtn", onClick: () => (setImg(null), setCameraType('back')) },
                    React.createElement(React.Fragment, null,
                        React.createElement("img", { src: img$7, className: "h-[2vh] mr-2" }),
                        " Open Camera"))))));
};

const Backcam = ({ handleRetake }) => {
    const { imge, setImg, setCameraType } = useStore();
    return (React.createElement("div", { className: "flex" },
        React.createElement("div", { className: "documentimgstyle w-[40%] h-[190px] mr-4 text-center" },
            React.createElement("img", { src: img$8, className: "w-[2rem] h-[2rem] flex-col mb-4" }),
            React.createElement("div", { className: "text-sm" }, `Drag and drop back copy of Aadhaar or you can`),
            React.createElement("div", { className: "flex mt-4" },
                React.createElement(Uploadfile, null),
                React.createElement(ButtonGlobal, { className: "documentbtn", onClick: () => (setImg(null), setCameraType('front')) },
                    React.createElement(React.Fragment, null,
                        React.createElement("img", { src: img$7, className: "h-[2vh] mr-2" }),
                        " Open Camera")))),
        React.createElement("div", null,
            React.createElement("img", { src: imge, alt: "screenshot", className: "rounded-[10px]" }),
            React.createElement("span", { className: "flex flex-col justify-end items-start mt-3" },
                React.createElement(ButtonGlobal, { onClick: handleRetake, className: "backcam_rty_btn" },
                    React.createElement(React.Fragment, null,
                        React.createElement("img", { src: img$a, alt: "retry_icon", className: "w-[16px] h-[16px] mr-1" }),
                        " Re-Capture"))))));
};

const FrontBackcapture = ({ type }) => {
    const { setCameraType } = useStore();
    return (React.createElement("div", { className: `documentimgstyle w-[40%] h-[190px] ${type === 'back' ? 'ml-4' : 'mr-4'} text-center` },
        React.createElement("img", { src: img$8, className: "w-[2rem] h-[2rem] flex-col mb-4" }),
        React.createElement("div", { className: "text-sm" }, "Drag and drop back copy of Aadhaar or you can"),
        React.createElement("div", { className: "flex mt-4" },
            React.createElement(Uploadfile, null),
            React.createElement(ButtonGlobal, { className: "documentbtn", onClick: () => setCameraType(type) },
                React.createElement(React.Fragment, null,
                    React.createElement("img", { src: img$7, className: "h-[2vh] mr-2" }),
                    " Open Camera")))));
};

const Camera = ({ capturing, setCapturing, mediaRecorderRef, recordedChunks, setRecordedChunks, type, cameraType }) => {
    const { imge, setImg, setManageVeriyStep, setManageVeriyStepback } = useStore();
    const videoConstraints = {
        width: { min: 1280 },
        height: { min: 720 },
        aspectRatio: 0.6666666667,
        facingMode: 'user'
    };
    const webcamRef = React.useRef(null);
    const capture = React.useCallback((e) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        e.preventDefault();
        const imageSrc = (_a = webcamRef === null || webcamRef === void 0 ? void 0 : webcamRef.current) === null || _a === void 0 ? void 0 : _a.getScreenshot();
        const blob = yield fetch(imageSrc).then((res) => res.blob());
        const formData = new FormData();
        formData.append('images', blob);
        setImg(imageSrc);
        setManageVeriyStep();
    }), [webcamRef]);
    const handleRetake = (e) => {
        e.preventDefault();
        setImg(null);
        setManageVeriyStepback();
    };
    const handleDataAvailable = React.useCallback(({ data }) => {
        if (data.size > 0) {
            setRecordedChunks === null || setRecordedChunks === void 0 ? void 0 : setRecordedChunks((prev) => prev.concat(data));
        }
    }, []);
    const handleStartCaptureClick = React.useCallback((e) => {
        var _a, _b, _c;
        e.preventDefault();
        setCapturing === null || setCapturing === void 0 ? void 0 : setCapturing(true);
        mediaRecorderRef.current = new MediaRecorder((_a = webcamRef === null || webcamRef === void 0 ? void 0 : webcamRef.current) === null || _a === void 0 ? void 0 : _a.stream, {
            mimeType: 'video/webm'
        });
        (_b = mediaRecorderRef === null || mediaRecorderRef === void 0 ? void 0 : mediaRecorderRef.current) === null || _b === void 0 ? void 0 : _b.addEventListener('dataavailable', handleDataAvailable);
        (_c = mediaRecorderRef === null || mediaRecorderRef === void 0 ? void 0 : mediaRecorderRef.current) === null || _c === void 0 ? void 0 : _c.start();
    }, [webcamRef, setCapturing, mediaRecorderRef, handleDataAvailable]);
    const handleStopCaptureClick = React.useCallback((e) => {
        var _a;
        e.preventDefault();
        (_a = mediaRecorderRef === null || mediaRecorderRef === void 0 ? void 0 : mediaRecorderRef.current) === null || _a === void 0 ? void 0 : _a.stop();
        setCapturing === null || setCapturing === void 0 ? void 0 : setCapturing(false);
    }, [mediaRecorderRef, setCapturing]);
    const handleDownload = React.useCallback(() => {
        if (recordedChunks.length) {
            const blob = new Blob(recordedChunks, {
                type: 'video/webm'
            });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            document.body.appendChild(a);
            a.style = 'display: none';
            a.href = url;
            a.download = 'react-webcam-stream-capture.webm';
            a.click();
            window.URL.revokeObjectURL(url);
            setRecordedChunks === null || setRecordedChunks === void 0 ? void 0 : setRecordedChunks([]);
        }
    }, [recordedChunks]);
    return (React.createElement("span", null, imge === null ? (React.createElement(React.Fragment, null,
        React.createElement("span", { className: `${type === 'Pan' || type === 'videoRecord' ? 'flex justify-end' : 'flex'}` }, type === 'Pan' || type === 'videoRecord' ? (React.createElement(Webcam, { audio: false, mirrored: true, height: type === 'videoRecord' ? 500 : 500, width: type === 'videoRecord' ? 500 : 500, ref: webcamRef, screenshotFormat: "image/jpeg", videoConstraints: videoConstraints, className: "rounded-[10px]" })) : cameraType === 'front' ? (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "flex flex-col" },
                React.createElement(Webcam, { audio: false, mirrored: true, height: 340, width: 340, ref: webcamRef, screenshotFormat: "image/jpeg", videoConstraints: videoConstraints, className: "rounded-[10px]" }),
                React.createElement("span", { className: `flex flex-col items-end mt-3` },
                    React.createElement(ButtonGlobal, { onClick: capture, className: "cam_btn" },
                        React.createElement(React.Fragment, null,
                            React.createElement("img", { src: img$7, className: "w-[16px] h-[16px] mr-1" }),
                            " Capture")))),
            React.createElement(FrontBackcapture, { type: "back" }))) : cameraType === 'back' ? (React.createElement(React.Fragment, null,
            React.createElement(FrontBackcapture, { type: "front" }),
            React.createElement("div", { className: "flex flex-col" },
                React.createElement(Webcam, { audio: false, mirrored: true, height: 340, width: 340, ref: webcamRef, screenshotFormat: "image/jpeg", videoConstraints: videoConstraints, className: "rounded-[10px]" }),
                React.createElement("span", { className: `flex flex-col justify-end mt-3` },
                    React.createElement(ButtonGlobal, { onClick: capture, className: "cam_btn" },
                        React.createElement(React.Fragment, null,
                            React.createElement("img", { src: img$7, className: "w-[16px] h-[16px] mr-1" }),
                            " Capture")))))) : ('')),
        type !== 'Aadhaar' ? (React.createElement(React.Fragment, null, type !== 'videoRecord' ? (React.createElement("span", { className: `flex ${type !== 'Aadhaar' ? 'justify-end' : 'justify-center'} mt-3` },
            React.createElement(ButtonGlobal, { onClick: capture, className: "cam_btn" },
                React.createElement(React.Fragment, null,
                    React.createElement("img", { src: img$7, className: "w-[16px] h-[16px] mr-1" }),
                    " Capture")))) : (React.createElement("span", { className: "flex justify-end mt-3" },
            capturing ? (React.createElement(ButtonGlobal, { onClick: handleStopCaptureClick, className: "cam_btn" }, "Stop Capture")) : (React.createElement(ButtonGlobal, { onClick: handleStartCaptureClick, className: "cam_btn" }, "Start Capture")),
            recordedChunks.length > 0 && (React.createElement(ButtonGlobal, { onClick: handleDownload, className: "cam_btn ml-2" }, "Download")))))) : (''))) : type !== 'Aadhaar' ? (React.createElement(React.Fragment, null,
        React.createElement("img", { src: imge, alt: "screenshot", className: "rounded-[10px]" }),
        React.createElement("span", { className: "flex justify-end mt-3" },
            React.createElement(ButtonGlobal, { onClick: handleRetake, className: "cam_btn" },
                React.createElement(React.Fragment, null,
                    React.createElement("img", { src: img$a, alt: "retry_icon", className: "w-[16px] h-[16px] mr-1" }),
                    " Re-Capture"))))) : cameraType === 'front' ? (React.createElement(Frontcam, { handleRetake: handleRetake })) : (React.createElement(Backcam, { handleRetake: handleRetake }))));
};

var img$5 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='27.183' viewBox='0 0 30 27.183'%3e %3cpath id='Path_8521' data-name='Path 8521' d='M0%2c23.136V22.2a11.018%2c11.018%2c0%2c0%2c1%2c.663-1.825Q5.845%2c11.329%2c11.079%2c2.314A4.348%2c4.348%2c0%2c0%2c1%2c13.446.281%2c4.412%2c4.412%2c0%2c0%2c1%2c18.9%2c2.306q5.237%2c9.03%2c10.438%2c18.082a4.288%2c4.288%2c0%2c0%2c1-.129%2c4.757A4.381%2c4.381%2c0%2c0%2c1%2c25.3%2c27.183q-10.319-.006-20.637%2c0c-.176%2c0-.352%2c0-.526-.017A4.28%2c4.28%2c0%2c0%2c1%2c.518%2c24.736%2c10.52%2c10.52%2c0%2c0%2c1%2c0%2c23.136M16.642%2c10.17c0-.151.017-.405%2c0-.656A1.645%2c1.645%2c0%2c0%2c0%2c15.213%2c8a1.674%2c1.674%2c0%2c0%2c0-1.753.993%2c2.7%2c2.7%2c0%2c0%2c0-.154%2c1.349q.145%2c2.352.287%2c4.7c.052.847.087%2c1.7.169%2c2.54A1.172%2c1.172%2c0%2c0%2c0%2c14.99%2c18.64a1.216%2c1.216%2c0%2c0%2c0%2c1.233-1.064c.037-.289.027-.584.044-.876.122-2.143.246-4.286.375-6.53m-.015%2c11.353A1.658%2c1.658%2c0%2c0%2c0%2c15.006%2c19.8a1.669%2c1.669%2c0%2c0%2c0-.031%2c3.337%2c1.641%2c1.641%2c0%2c0%2c0%2c1.653-1.619' transform='translate(0 0)' fill='%23ff4040'/%3e%3c/svg%3e";

const Browse = ({ copyType }) => {
    const { panVerificationfailed, preview, selectedFile, isYourPan, setIsYourPan, setManageVeriyStep, setPanVerificationfailed, setSelectedFile, setManageVeriyStepback, setUploadedImage } = useStore();
    const clearSelectedImg = () => {
        setSelectedFile(undefined);
        setManageVeriyStepback();
        setUploadedImage(0);
    };
    return (React.createElement("div", null, panVerificationfailed === 3 ? (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "browse_img_div max-w[36rem]" },
            React.createElement("div", { className: "flex justify-start" },
                React.createElement("img", { src: preview, className: "w-8 h-8" }),
                React.createElement("span", { className: "flex flex-col ml-2" },
                    React.createElement("div", { className: "text-xs text-extrdarkgray font-sans font-[300]" }, copyType), selectedFile === null || selectedFile === void 0 ? void 0 :
                    selectedFile.name))),
        React.createElement("div", { className: "brws_detls" },
            React.createElement("div", { className: "mt-1 mb-3" },
                React.createElement("span", { className: "brws_detls_spn" }, "Your PAN Details"),
                React.createElement("div", { className: "font-[450] sm:font-normal" }, "Below are the details as per PAN record.")),
            React.createElement("div", { className: "sm:flex justify-between w-[50%] mt-8 mb-4" },
                React.createElement("div", null,
                    React.createElement("div", { className: "text-extrdarkgray text-[16px] sm:text-xs" }, "Your Full Name"),
                    React.createElement("div", { className: "brws_detls_name" }, "Priyanka Kothari")),
                React.createElement("div", null,
                    React.createElement("div", { className: "text-extrdarkgray text-[16px] sm:text-xs mt-4 sm:mt-0" }, "PAN"),
                    React.createElement("div", { className: "brws_detls_pan" }, "AAGPQ3801C")))))) : panVerificationfailed === 1 ? (React.createElement("div", { className: "max-w-[21rem] sm:max-w-[57rem] mb-7" },
        React.createElement("div", { className: "flex" },
            React.createElement("div", { className: "brws_detls_err" },
                React.createElement("div", { className: "flex justify-start" },
                    React.createElement("img", { src: preview, className: "w-8 h-8" }),
                    React.createElement("span", { className: "flex flex-col ml-2" },
                        React.createElement("div", { className: "brws_detls_err_div" }, "Pan Copy"), selectedFile === null || selectedFile === void 0 ? void 0 :
                        selectedFile.name))),
            React.createElement("div", { className: "side" }),
            React.createElement("div", { className: "brws_detls_attmp" }, "You have 1 attempt left")),
        React.createElement("div", { className: "brws_detls_attmp_msg" },
            React.createElement("img", { src: img$5, alt: "alert", className: "w-6 h-6 mr-3" }),
            React.createElement("div", null,
                "We couldn\u2018t fetch details from PAN. Please upload a clear copy of PAN to proceed. You can also skip this step to proceed with next option.",
                React.createElement("div", { className: "text-red block sm:hidden mt-2" }, "You have 1 attempt left"))))) : panVerificationfailed === 2 ? (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "brws_img_div max-w[36rem]" },
            React.createElement("div", { className: "flex justify-start" },
                React.createElement("img", { src: preview, className: "w-8 h-8" }),
                React.createElement("span", { className: "flex flex-col ml-2" },
                    React.createElement("div", { className: "brws_detls_err_div" }, "Pan Copy"), selectedFile === null || selectedFile === void 0 ? void 0 :
                    selectedFile.name))),
        React.createElement("div", { className: "brws_detls mb-6" },
            React.createElement("div", { className: "sm:flex sm:justify-between items-center" },
                React.createElement("div", { className: "mt-1 mb-3" },
                    React.createElement("span", { className: "font-[500] text-black text-[16px]" }, "Is this your PAN"),
                    React.createElement("div", { className: "text-md mt-2 text-[16px]" }, "BJGD6432G")),
                isYourPan === false ? (React.createElement("div", null,
                    React.createElement(ButtonGlobal, { className: "bg-sky text-white mr-3 hover:bg-black brws_btn", onClick: () => (setIsYourPan(true), setManageVeriyStep()) }, "Yes"),
                    React.createElement(ButtonGlobal, { className: "bg-white text-sky hover:bg-white shadow-2xl brws_btn", onClick: () => (setPanVerificationfailed(0), setSelectedFile(undefined)) }, "No"))) : (''))))) : panVerificationfailed === 0 || panVerificationfailed === 4 ? (React.createElement(React.Fragment, null,
        selectedFile ? (React.createElement("div", { className: "brws_img_div p-2 mb-8 max-w[36rem]" },
            React.createElement("div", { className: "flex justify-start" },
                React.createElement("img", { src: preview, className: "w-8 h-8" }),
                React.createElement("span", { className: "flex flex-col ml-2" },
                    React.createElement("div", { className: "brws_detls_err_div" }, "Pan Copy"), selectedFile === null || selectedFile === void 0 ? void 0 :
                    selectedFile.name)))) : (''),
        selectedFile ? (React.createElement(ButtonGlobal, { className: "cancel text-white", onClick: () => clearSelectedImg() }, "X")) : (''))) : ('')));
};

const PanVerification = () => {
    const { cameraStatus, uploadedImage, setCameraStatus } = useStore();
    React.useEffect(() => {
        setCameraStatus(false);
    }, []);
    return (React.createElement("div", { className: "mt-8" },
        React.createElement("div", { className: "relative sm:hidden block", onClick: () => setCameraStatus(true) }, uploadedImage === 0 ? (cameraStatus === true ? (React.createElement(Camera, { type: "Pan" })) : (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "documentimgstyle w-[100%] h-[180px]" },
                React.createElement("img", { src: img$8, className: "w-[3rem] h-[3rem] flex-col mb-6" }),
                "Upload PAN copy by clicking here"),
            React.createElement("div", { className: "flex justify-center" },
                React.createElement("div", { className: "side_arrow_alt" })),
            React.createElement("div", { className: "attmp_alt" }, "You will get two attempts for PAN verification")))) : (React.createElement(Browse, { copyType: "Pan Copy" }))),
        React.createElement("div", { className: "relative hidden sm:block" }, uploadedImage === 0 ? (cameraStatus === true ? (React.createElement(Camera, { type: "Pan" })) : (React.createElement("div", { className: "documentimgstyle w-[100%] h-[330px]" },
            React.createElement("img", { src: img$8, className: "w-[3rem] h-[3rem] flex-col mb-6" }),
            "Drag and drop copy of PAN Card or you can",
            React.createElement("div", { className: "hidden sm:flex mt-8" },
                React.createElement(Uploadfile, null),
                React.createElement(ButtonGlobal, { className: "documentbtn", onClick: () => setCameraStatus(true) },
                    React.createElement(React.Fragment, null,
                        React.createElement("img", { src: img$7, className: "h-[2vh] mr-2" }),
                        " Open Camera")))))) : (React.createElement(Browse, { copyType: "Pan Copy" })))));
};

const AdharVerifiction = () => {
    const { cameraStatus, uploadedImage, cameraType, setCameraStatus, setCameraType } = useStore();
    React.useEffect(() => {
        setCameraStatus(false);
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "relative sm:hidden block mt-8", onClick: () => setCameraStatus(true) }, uploadedImage === 0 ? (cameraStatus === true ? (
        // <Camera type="Pan" />
        React.createElement("div", null, "it's me")) : (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "flex text-center" },
                React.createElement("div", { className: "documentimgstylemobl w-[100%] h-[190px]" },
                    React.createElement("img", { src: img$8, className: "w-[2.4rem] h-[2.4rem] flex-col mb-6" }),
                    "Upload front copy"),
                React.createElement("div", { className: "documentimgstylemobl ml-2 w-[100%] h-[190px]" },
                    React.createElement("img", { src: img$8, className: "w-[2.4rem] h-[2.4rem] flex-col mb-6" }),
                    "Upload back copy")),
            React.createElement("div", { className: "flex justify-center" },
                React.createElement("div", { className: "side_arrow_alt" })),
            React.createElement("div", { className: "attmp_alt" }, "You will get only one attempt for Aadhaar verification")))) : (React.createElement(Browse, { copyType: "Pan Copy" }))),
        React.createElement("div", { className: "mt-10 relative" }, uploadedImage === 0 ? (cameraStatus === true ? (
        // <Camera type="Aadhaar" cameraType={cameraType} />
        React.createElement("div", null)) : (React.createElement("div", { className: "hidden sm:flex text-center" },
            React.createElement("div", { className: "documentimgstyle w-[38%] h-[190px] mr-4" },
                React.createElement("img", { src: img$8, className: "w-[2rem] h-[2rem] flex-col mb-4" }),
                React.createElement("div", { className: "text-sm" }, "Drag and drop front copy of Aadhaar or you can"),
                React.createElement("div", { className: "flex mt-4" },
                    React.createElement(Uploadfile, null),
                    React.createElement(ButtonGlobal, { className: "documentbtn", onClick: () => (setCameraStatus(true), setCameraType('front')) },
                        React.createElement(React.Fragment, null,
                            React.createElement("img", { src: img$7, className: "h-[2vh] mr-2" }),
                            " Open Camera")))),
            React.createElement("div", { className: "documentimgstyle w-[38%] h-[190px] mr-4" },
                React.createElement("img", { src: img$8, className: "w-[2rem] h-[2rem] flex-col mb-4" }),
                React.createElement("div", { className: "text-sm" }, "Drag and drop back copy of Aadhaar or you can"),
                React.createElement("div", { className: "flex mt-4" },
                    React.createElement(Uploadfile, null),
                    React.createElement(ButtonGlobal, { className: "documentbtn", onClick: () => (setCameraStatus(true), setCameraType('back')) },
                        React.createElement(React.Fragment, null,
                            React.createElement("img", { src: img$7, className: "h-[2vh] mr-2" }),
                            " Open Camera"))))))) : (React.createElement(Browse, { copyType: "Aadhaar copy" })))));
};

var img$4 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='36' height='34.548' viewBox='0 0 36 34.548'%3e %3cpath id='Union_28' data-name='Union 28' d='M24.062%2c34.537A15.4%2c15.4%2c0%2c0%2c1%2c21.9%2c34.32a39.666%2c39.666%2c0%2c0%2c1-6.389-1.74%2c26.915%2c26.915%2c0%2c0%2c0-3.173-.869c-1.036-.2-1.531-.663-1.531-1.731q0-6.959%2c0-13.917c0-.094%2c0-.187.006-.281A1.524%2c1.524%2c0%2c0%2c1%2c12%2c14.392a2.766%2c2.766%2c0%2c0%2c0%2c.959-.464%2c7.178%2c7.178%2c0%2c0%2c0%2c1.052-1.03q2.292-2.708%2c4.554-5.442a4.041%2c4.041%2c0%2c0%2c0%2c.372-.551%2c9.068%2c9.068%2c0%2c0%2c0%2c.9-2.866%2c8.314%2c8.314%2c0%2c0%2c1%2c.991-2.976c.388-.6.832-1.127%2c1.644-1.056a14.611%2c14.611%2c0%2c0%2c1%2c1.459.185%2c3.668%2c3.668%2c0%2c0%2c1%2c2.909%2c2.276A8.485%2c8.485%2c0%2c0%2c1%2c27.1%2c7.643a13.737%2c13.737%2c0%2c0%2c1-1.32%2c3.05c-.127.253-.217.524-.339.823h.451q2.847%2c0%2c5.693%2c0a4.308%2c4.308%2c0%2c0%2c1%2c3.523%2c1.728A4.846%2c4.846%2c0%2c0%2c1%2c36%2c15.31v1.125a1.14%2c1.14%2c0%2c0%2c0-.062.2%2c4.292%2c4.292%2c0%2c0%2c1-.873%2c2.153.942.942%2c0%2c0%2c0-.161.954%2c4.574%2c4.574%2c0%2c0%2c1-.58%2c3.928.828.828%2c0%2c0%2c0-.117.687%2c4.741%2c4.741%2c0%2c0%2c1-.984%2c4.021%2c1.14%2c1.14%2c0%2c0%2c0-.3.842%2c4.7%2c4.7%2c0%2c0%2c1-4.307%2c5.207%2c25.577%2c25.577%2c0%2c0%2c1-2.8.124C25.232%2c34.548%2c24.646%2c34.54%2c24.062%2c34.537ZM1.63%2c31.684A1.482%2c1.482%2c0%2c0%2c1%2c0%2c30.046q0-7.01%2c0-14.02A1.477%2c1.477%2c0%2c0%2c1%2c1.635%2c14.4q3.057%2c0%2c6.114%2c0a1.467%2c1.467%2c0%2c0%2c1%2c1.607%2c1.616q0%2c3.514%2c0%2c7.028%2c0%2c3.5%2c0%2c6.992a1.483%2c1.483%2c0%2c0%2c1-1.648%2c1.65l-3.187%2c0Zm2.68-5.759A1.438%2c1.438%2c0%2c0%2c0%2c4.324%2c28.8a1.438%2c1.438%2c0%2c1%2c0-.01-2.877Z' transform='translate(0 0)' fill='%2300c341'/%3e%3c/svg%3e";

var img$3 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='36' height='34.548' viewBox='0 0 36 34.548'%3e %3cpath id='Union_28' data-name='Union 28' d='M24.061.011A15.4%2c15.4%2c0%2c0%2c0%2c21.9.228a39.666%2c39.666%2c0%2c0%2c0-6.389%2c1.74%2c26.915%2c26.915%2c0%2c0%2c1-3.173.869C11.3%2c3.036%2c10.8%2c3.5%2c10.8%2c4.567q0%2c6.959%2c0%2c13.917c0%2c.094%2c0%2c.187.006.281a1.524%2c1.524%2c0%2c0%2c0%2c1.185%2c1.391%2c2.766%2c2.766%2c0%2c0%2c1%2c.959.464%2c7.178%2c7.178%2c0%2c0%2c1%2c1.052%2c1.03q2.292%2c2.708%2c4.554%2c5.442a4.041%2c4.041%2c0%2c0%2c1%2c.372.551%2c9.068%2c9.068%2c0%2c0%2c1%2c.9%2c2.866%2c8.314%2c8.314%2c0%2c0%2c0%2c.991%2c2.976c.388.6.832%2c1.127%2c1.644%2c1.056a14.611%2c14.611%2c0%2c0%2c0%2c1.459-.185%2c3.668%2c3.668%2c0%2c0%2c0%2c2.909-2.276%2c8.485%2c8.485%2c0%2c0%2c0%2c.266-5.174%2c13.737%2c13.737%2c0%2c0%2c0-1.32-3.05c-.127-.253-.217-.524-.339-.823h.451q2.847%2c0%2c5.693%2c0a4.308%2c4.308%2c0%2c0%2c0%2c3.523-1.728A4.846%2c4.846%2c0%2c0%2c0%2c36%2c19.238V18.113a1.14%2c1.14%2c0%2c0%2c1-.062-.2%2c4.292%2c4.292%2c0%2c0%2c0-.873-2.153.942.942%2c0%2c0%2c1-.161-.954%2c4.574%2c4.574%2c0%2c0%2c0-.58-3.928.828.828%2c0%2c0%2c1-.117-.687%2c4.741%2c4.741%2c0%2c0%2c0-.984-4.021%2c1.14%2c1.14%2c0%2c0%2c1-.3-.842A4.7%2c4.7%2c0%2c0%2c0%2c28.621.124%2c25.577%2c25.577%2c0%2c0%2c0%2c25.818%2c0C25.232%2c0%2c24.646.008%2c24.061.011ZM1.629%2c2.864A1.482%2c1.482%2c0%2c0%2c0%2c0%2c4.5q0%2c7.01%2c0%2c14.02a1.477%2c1.477%2c0%2c0%2c0%2c1.634%2c1.629q3.057%2c0%2c6.114%2c0a1.467%2c1.467%2c0%2c0%2c0%2c1.607-1.616q0-3.514%2c0-7.028%2c0-3.5%2c0-6.992a1.483%2c1.483%2c0%2c0%2c0-1.648-1.65l-3.187%2c0Zm2.68%2c5.759a1.438%2c1.438%2c0%2c0%2c1%2c.015-2.877%2c1.438%2c1.438%2c0%2c1%2c1-.01%2c2.877Z' fill='%23ff4040'/%3e%3c/svg%3e";

const PanAdharMatch = () => {
    const { panStatus, panStatusResult } = useStore();
    return (React.createElement(React.Fragment, null, panStatus === 0 ? (React.createElement("ul", { className: "pt-2 pl-5 text-[16px] font-[300]" },
        React.createElement("li", { className: "pb-2" }, "Please click the button below to start matching your details."),
        React.createElement("li", { className: "pb-2" }, "It is required to for verification purpose."),
        React.createElement("li", { className: "pb-2" }, "Minimum match requirement is 60%"))) : panStatusResult === 'Matching Failed' ? (React.createElement("div", { className: "flex mt-4" },
        React.createElement("span", { className: "w-[20%] sm:w-fit" },
            React.createElement("span", { className: "panaadhar_thumb border-green" },
                React.createElement("img", { src: img$4, alt: "tumpup icon", className: "w-[35px] h-[35px] sm:w-7 sm:h-7" }))),
        React.createElement("span", { className: "ml-3" },
            React.createElement("span", { className: "text-lg font-semibold text-green" }, "Good match"),
            React.createElement("div", { className: "mt-1 font-[400] text-[18px] sm:text-md" },
                "Your name, PAN and Aadhaar matches by ",
                React.createElement("span", { className: "font-bold text-lg" }, "70%"))))) : (React.createElement("div", { className: "flex mt-4" },
        React.createElement("span", { className: "w-[20%] sm:w-fit" },
            React.createElement("span", { className: "panaadhar_thumb border-red" },
                React.createElement("img", { src: img$3, alt: "tumpdown icon", className: "w-[32px] h-[32px] sm:w-7 sm:h-7" }))),
        React.createElement("span", { className: "ml-3 sm:ml-5" },
            React.createElement("span", { className: "text-lg font-[500] text-red" }, "Matching Failed"),
            ' ',
            React.createElement("div", { className: "mt-1 font-[400] text-[18px] sm:text-md" },
                "Your name, PAN and Aadhaar matches by ",
                React.createElement("span", { className: "font-bold text-lg" }, "30%")),
            React.createElement("div", { className: "text-red block sm:hidden mt-2" }, "You have 1 attempt left"))))));
};

const InputGlobal = ({ type, id, className, placeholder, value }) => {
    return (React.createElement("input", { type: type, id: id, className: className, placeholder: placeholder, value: value }));
};

const Labelglobal = ({ className, children }) => {
    return React.createElement("label", { className: className }, children);
};

const Business = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "mt-8 text-black text-sm font-bold" }, "Business Type"),
        React.createElement("div", { className: "dropdown relative mt-2" },
            React.createElement(ButtonGlobal, { className: "busin_drpdwn_btn", type: "button", id: "dropdownMenuButton1", "data-bs-toggle": "dropdown", "aria-expanded": "false" },
                React.createElement(React.Fragment, null,
                    "-- Select --",
                    React.createElement("svg", { "aria-hidden": "true", focusable: "false", "data-prefix": "fas", "data-icon": "caret-down", className: "w-3 text-extrdarkgray", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512" },
                        React.createElement("path", { fill: "currentColor", d: "M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" })))),
            React.createElement("ul", { className: "busin_drpdwn_ul", "aria-labelledby": "dropdownMenuButton1" },
                React.createElement("li", null,
                    React.createElement("a", { className: "busin_drpdwn_li_a", href: "#" }, "Action")),
                React.createElement("li", null,
                    React.createElement("a", { className: "busin_drpdwn_li_a", href: "#" }, "Another action")),
                React.createElement("li", null,
                    React.createElement("a", { className: "busin_drpdwn_li_a", href: "#" }, "Something else here")))),
        React.createElement("form", { className: "bg-white mt-4" },
            React.createElement(Labelglobal, { className: "block text-black text-sm font-bold mb-2" }, "Shop Name"),
            React.createElement(InputGlobal, { className: "busin_drpdwn_input", id: "username", type: "text", placeholder: "" }))));
};

var img$2 = "data:image/png;base64,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";

const VideoKYC = () => {
    const { cameraStatus, imge, setCameraStatus } = useStore();
    const mediaRecorderRef = React.useRef(null);
    const [capturing, setCapturing] = React.useState(false);
    const [recordedChunks, setRecordedChunks] = React.useState([]);
    React.useEffect(() => {
        setCameraStatus(false);
    }, []);
    return (React.createElement("div", { className: "flex items-center mt-8 mb-4" }, cameraStatus === true ? (React.createElement(Camera, { mediaRecorderRef: mediaRecorderRef, capturing: capturing, setCapturing: setCapturing, recordedChunks: recordedChunks, setRecordedChunks: setRecordedChunks, type: "videoRecord" })) : (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "relative sm:hidden block", onClick: () => setCameraStatus(true) },
            React.createElement("div", { className: "videokycmobl w-[100%] h-[180px] text-center text-[22px]" },
                React.createElement("img", { src: img$8, className: "w-[3rem] h-[3rem] flex-col mb-6" }),
                "Click here to take a live photo/video with ID proof")),
        React.createElement("div", { className: "hidden sm:flex w-full" },
            React.createElement("img", { src: String(img$2), alt: "selfie icon", className: "w-20 h-20" }),
            React.createElement("div", { className: "relative w-[60%] ml-4 flex justify-center items-center" },
                React.createElement(InputGlobal, { type: "search", id: "search", className: "videoKyc", placeholder: "Take a live photo/video with ID proof", value: imge }),
                React.createElement(ButtonGlobal, { className: "vidoKyCambtn", onClick: () => setCameraStatus(true) },
                    React.createElement(React.Fragment, null,
                        React.createElement("img", { src: img$7, className: "h-[2vh] mr-2" }),
                        " Open Camera"))))))));
};

const OnboardingStatus = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "flex mt-8" },
            React.createElement("span", { className: "w-[20%] sm:w-fit" },
                React.createElement("span", { className: "onbord_thump_icn" },
                    React.createElement("img", { src: img$4, alt: "thump up icon", className: "w-[35px] h-[35px] sm:w-7 sm:h-7" }))),
            React.createElement("span", { className: "flex flex-col ml-5" },
                React.createElement("span", { className: "text-lg font-semibold text-green" }, "64% Completed"),
                React.createElement("div", { className: "mt-1 text-md" }, "4 Steps completed, 1 step skipped, 1 step disqualified"),
                React.createElement("span", { className: "hidden sm:flex mt-8 items-center justify-between w-[80%]" },
                    React.createElement("span", { className: "flex-col" },
                        React.createElement("div", { className: "text-sm text-extrdarkgray" }, "Skipped"),
                        React.createElement("div", { className: "text-md text-black font-bold" }, "Aadhaar Verification")),
                    React.createElement(ButtonGlobal, { className: "onbord_rty_btn" },
                        React.createElement(React.Fragment, null,
                            React.createElement("img", { src: img$a, alt: "retry_icon", className: "w-4 h-4 mr-2" }),
                            " Retry"))),
                React.createElement("span", { className: "onbord_disqual_spn" },
                    React.createElement("span", { className: "flex-col" },
                        React.createElement("span", { className: "text-sm text-extrdarkgray" }, "Disqualified"),
                        React.createElement("div", { className: "text-md text-black font-bold" }, "Video KYC")),
                    React.createElement("div", { className: "onbord_attmp_msg" }, "No Attempts Left")))),
        React.createElement("div", { className: "sm:hidden border-2 border-gray rounded-2xl mt-6" },
            React.createElement("span", { className: "onbord_disqual_spn_mbl" },
                React.createElement("span", { className: "flex-col" },
                    React.createElement("div", { className: "text-md text-extrdarkgray" }, "Skipped"),
                    React.createElement("div", { className: "text-md text-black font-bold" }, "Aadhaar Verification")),
                React.createElement(ButtonGlobal, { className: "onbord_rty_btn_mbl" },
                    React.createElement(React.Fragment, null,
                        React.createElement("img", { src: img$a, alt: "retry_icon", className: "w-4 h-4 mr-2" }),
                        " Retry"))),
            React.createElement("span", { className: "sm:hidden flex p-5 items-center justify-between w-[100%]" },
                React.createElement("span", { className: "flex-col" },
                    React.createElement("span", { className: "text-md text-extrdarkgray" }, "Disqualified"),
                    React.createElement("div", { className: "text-md text-black font-bold" }, "Video KYC")),
                React.createElement("div", { className: "onbord_attmp_msg_mbl" }, "No Attempts Left")))));
};

const LoctionCapture = () => {
    return (React.createElement("ul", { className: "location_ul" },
        React.createElement("li", { className: "pb-2" }, "Please click the button below to allow browser to capture your location."),
        React.createElement("li", { className: "pb-2" }, "In browser popup, click \"Allow\" button to enable location capturing."),
        React.createElement("li", { className: "pb-2" }, "You will be re-directed to next step after successful location capture.")));
};

var img$1 = "data:image/png;base64,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";

const Alert = () => {
    const { setFinish } = useStore();
    return (React.createElement("div", { className: "alert_comn" },
        React.createElement("span", { className: "alert_comn_spn_img" },
            React.createElement("span", { className: "alert_comn_snd_spn" },
                React.createElement("img", { src: String(img$1), alt: "alert", className: "w-12 h-12" }))),
        React.createElement("span", { className: "mt-4 font-bold text-black text-xl" }, "Alert!"),
        React.createElement("span", { className: "alert_comn_msg" }, "Your onboarding process can not be completed without Aadhaar verification. Please complete the same to proceed."),
        React.createElement(ButtonGlobal, { className: "alert_comn_btn", onClick: () => {
                setFinish(false);
            } }, "Go Back")));
};

var img = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='18' height='13.564' viewBox='0 0 18 13.564'%3e %3cpath id='Path_8520' data-name='Path 8520' d='M6.291%2c9.2c1.35-1.356%2c2.668-2.68%2c3.987-4q2.3-2.3%2c4.6-4.6a1.8%2c1.8%2c0%2c0%2c1%2c2.715%2c2.351c-.091.111-.2.211-.3.313L7.775%2c12.8a1.854%2c1.854%2c0%2c0%2c1-3.009-.014C3.361%2c11.378%2c1.949%2c9.978.555%2c8.561a1.793%2c1.793%2c0%2c0%2c1%2c.813-3.043%2c1.771%2c1.771%2c0%2c0%2c1%2c1.767.535Q4.553%2c7.48%2c5.977%2c8.9c.092.092.187.179.313.3' transform='translate(0 0.001)' fill='%2300C341'/%3e%3c/svg%3e";

const Fetching = () => {
    const { setFetchData } = useStore();
    return (React.createElement("div", { className: "fetching" },
        React.createElement("span", { className: "fetching_spn" },
            React.createElement("span", { className: "fetching_spn_spn", onClick: () => {
                    setFetchData(false);
                } },
                React.createElement("span", { className: "fetching_spn_img" },
                    React.createElement("img", { src: img, alt: "complete mark", className: "w-[3rem] h-[2.3rem]" }),
                    React.createElement("div", { className: "text-green" }, "70%")))),
        React.createElement("span", { className: "mt-4 font-bold text-black text-xl" }, "Fetching Details!"),
        React.createElement("span", { className: "fetching_msg" }, "Please wait while we fetch details from PAN. This may take a few seconds.")));
};

const HomePage = ({ sideBarToggle, setSideBarToggle }) => {
    const { currentStep, panStatus, fetchData, finish, steps } = useStore();
    const [capturelocationData, setCapturelocationData] = React.useState();
    const [stepsStatus, setStepsStatus] = React.useState([]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: `${currentStep === 1 && 'pt-0'} ${currentStep === 0 && 'pt-7'} h-screens sm:pt-7 px-7 w-full sm:px-24` },
            React.createElement("div", { className: "flex items-center" },
                React.createElement("div", { className: "containerboxover relative" },
                    React.createElement("div", { className: "sm:flex sm:justify-between" },
                        React.createElement("span", { className: "hidden sm:block md:block lg:block xl:block" },
                            React.createElement(Sidebar, { steps: steps, stepsStatus: stepsStatus })),
                        React.createElement("div", { className: "flex w-full rounded-2xl sm:ml-8 sm:bg-white relative" },
                            currentStep === 0 ? (React.createElement(Welcome, { steps: steps, stepsStatus: stepsStatus, setStepsStatus: setStepsStatus })) : currentStep === 1 ? (React.createElement(SupersetComponent, { steps: steps, btnName: "Start Location Capture", pagename: "Location Capturing", capturelocationData: capturelocationData, setCapturelocationData: setCapturelocationData, stepsStatus: stepsStatus, setStepsStatus: setStepsStatus },
                                React.createElement(LoctionCapture, null))) : currentStep === 2 ? (React.createElement(SupersetComponent, { steps: steps, btnName: "Verify PAN", pagename: "PAN Verification", tagLine: "Upload your PAN copy to verify your business. Accepted format are ", stepsStatus: stepsStatus, setStepsStatus: setStepsStatus },
                                React.createElement(PanVerification, null))) : currentStep === 3 ? (React.createElement(SupersetComponent, { steps: steps, btnName: "Verify Aadhaar", pagename: "Aadhaar Verification", tagLine: "Upload your Aadhar Copy front and back to verify yourself. Accepted format are ", stepsStatus: stepsStatus, setStepsStatus: setStepsStatus },
                                React.createElement(AdharVerifiction, null))) : currentStep === 4 ? (React.createElement(SupersetComponent, { steps: steps, btnName: `${panStatus === 0 ? 'Start Matching' : panStatus === 1 ? 'Next' : 'Retry'}`, pagename: "PAN - Aadhaar Matching", stepsStatus: stepsStatus, setStepsStatus: setStepsStatus },
                                React.createElement(PanAdharMatch, null))) : currentStep === 5 ? (React.createElement(SupersetComponent, { steps: steps, btnName: "Next", pagename: "Business Details", tagLine: "Upload your PAN copy to verify your business. Accepted format are ", stepsStatus: stepsStatus, setStepsStatus: setStepsStatus },
                                React.createElement(Business, null))) : currentStep === 6 ? (React.createElement(SupersetComponent, { steps: steps, btnName: "Next", pagename: "Video KYC", tagLine: "Thanks for completing your personal and address verification. Take a selfie of 5-10 seconds\r\n              to complete the eKYC process.", stepsStatus: stepsStatus, setStepsStatus: setStepsStatus },
                                React.createElement(VideoKYC, null))) : (React.createElement(SupersetComponent, { steps: steps, btnName: "Submit", pagename: "Onboarding Status", tagLine: "Below are the details of the completion status of your onboarding.", stepsStatus: stepsStatus, setStepsStatus: setStepsStatus },
                                React.createElement(OnboardingStatus, null))),
                            fetchData === true ? (React.createElement("span", { className: "hidden sm:block" },
                                React.createElement(Fetching, null))) : (''))),
                    finish === true ? (React.createElement("span", { className: "hidden sm:block" },
                        React.createElement(Alert, null))) : ('')))),
        fetchData === true ? (React.createElement("span", { className: "block sm:hidden" },
            React.createElement(Fetching, null))) : (''),
        finish === true ? (React.createElement("span", { className: "block sm:hidden" },
            React.createElement(Alert, null))) : (''),
        React.createElement("span", { className: "sm:hidden block" }, sideBarToggle ? (React.createElement("div", { className: "mbl_sidebar" },
            React.createElement(Sidebar, { steps: steps, stepsStatus: stepsStatus }),
            React.createElement("div", { className: "w-[25%]", onClick: () => setSideBarToggle((prev) => !prev) }))) : (''))));
};

var css_248z = "/*\n! tailwindcss v3.2.7 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\r\n.fixed {\n  position: fixed;\n}\r\n.relative {\n  position: relative;\n}\r\n.inset-0 {\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n}\r\n.z-40 {\n  z-index: 40;\n}\r\n.m-3 {\n  margin: 0.75rem;\n}\r\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\r\n.my-6 {\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n}\r\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\r\n.mb-3 {\n  margin-bottom: 0.75rem;\n}\r\n.mb-4 {\n  margin-bottom: 1rem;\n}\r\n.mb-6 {\n  margin-bottom: 1.5rem;\n}\r\n.mb-7 {\n  margin-bottom: 1.75rem;\n}\r\n.mb-8 {\n  margin-bottom: 2rem;\n}\r\n.ml-2 {\n  margin-left: 0.5rem;\n}\r\n.ml-3 {\n  margin-left: 0.75rem;\n}\r\n.ml-4 {\n  margin-left: 1rem;\n}\r\n.ml-5 {\n  margin-left: 1.25rem;\n}\r\n.mr-1 {\n  margin-right: 0.25rem;\n}\r\n.mr-2 {\n  margin-right: 0.5rem;\n}\r\n.mr-3 {\n  margin-right: 0.75rem;\n}\r\n.mr-4 {\n  margin-right: 1rem;\n}\r\n.mt-1 {\n  margin-top: 0.25rem;\n}\r\n.mt-10 {\n  margin-top: 2.5rem;\n}\r\n.mt-2 {\n  margin-top: 0.5rem;\n}\r\n.mt-3 {\n  margin-top: 0.75rem;\n}\r\n.mt-4 {\n  margin-top: 1rem;\n}\r\n.mt-6 {\n  margin-top: 1.5rem;\n}\r\n.mt-72 {\n  margin-top: 18rem;\n}\r\n.mt-8 {\n  margin-top: 2rem;\n}\r\n.block {\n  display: block;\n}\r\n.flex {\n  display: flex;\n}\r\n.hidden {\n  display: none;\n}\r\n.h-12 {\n  height: 3rem;\n}\r\n.h-20 {\n  height: 5rem;\n}\r\n.h-4 {\n  height: 1rem;\n}\r\n.h-6 {\n  height: 1.5rem;\n}\r\n.h-8 {\n  height: 2rem;\n}\r\n.h-\\[11px\\] {\n  height: 11px;\n}\r\n.h-\\[12px\\] {\n  height: 12px;\n}\r\n.h-\\[16px\\] {\n  height: 16px;\n}\r\n.h-\\[180px\\] {\n  height: 180px;\n}\r\n.h-\\[18px\\] {\n  height: 18px;\n}\r\n.h-\\[190px\\] {\n  height: 190px;\n}\r\n.h-\\[2\\.3rem\\] {\n  height: 2.3rem;\n}\r\n.h-\\[2\\.4rem\\] {\n  height: 2.4rem;\n}\r\n.h-\\[2rem\\] {\n  height: 2rem;\n}\r\n.h-\\[2vh\\] {\n  height: 2vh;\n}\r\n.h-\\[32px\\] {\n  height: 32px;\n}\r\n.h-\\[330px\\] {\n  height: 330px;\n}\r\n.h-\\[35px\\] {\n  height: 35px;\n}\r\n.h-\\[3rem\\] {\n  height: 3rem;\n}\r\n.min-h-screen {\n  min-height: 100vh;\n}\r\n.w-12 {\n  width: 3rem;\n}\r\n.w-20 {\n  width: 5rem;\n}\r\n.w-3 {\n  width: 0.75rem;\n}\r\n.w-32 {\n  width: 8rem;\n}\r\n.w-4 {\n  width: 1rem;\n}\r\n.w-6 {\n  width: 1.5rem;\n}\r\n.w-8 {\n  width: 2rem;\n}\r\n.w-\\[0\\] {\n  width: 0;\n}\r\n.w-\\[100\\%\\] {\n  width: 100%;\n}\r\n.w-\\[100\\] {\n  width: 100;\n}\r\n.w-\\[14\\%\\] {\n  width: 14%;\n}\r\n.w-\\[15px\\] {\n  width: 15px;\n}\r\n.w-\\[16px\\] {\n  width: 16px;\n}\r\n.w-\\[18px\\] {\n  width: 18px;\n}\r\n.w-\\[19rem\\] {\n  width: 19rem;\n}\r\n.w-\\[2\\.4rem\\] {\n  width: 2.4rem;\n}\r\n.w-\\[20\\%\\] {\n  width: 20%;\n}\r\n.w-\\[25\\%\\] {\n  width: 25%;\n}\r\n.w-\\[28\\%\\] {\n  width: 28%;\n}\r\n.w-\\[2rem\\] {\n  width: 2rem;\n}\r\n.w-\\[32px\\] {\n  width: 32px;\n}\r\n.w-\\[35px\\] {\n  width: 35px;\n}\r\n.w-\\[38\\%\\] {\n  width: 38%;\n}\r\n.w-\\[3rem\\] {\n  width: 3rem;\n}\r\n.w-\\[4\\.2rem\\] {\n  width: 4.2rem;\n}\r\n.w-\\[40\\%\\] {\n  width: 40%;\n}\r\n.w-\\[42\\%\\] {\n  width: 42%;\n}\r\n.w-\\[50\\%\\] {\n  width: 50%;\n}\r\n.w-\\[56\\%\\] {\n  width: 56%;\n}\r\n.w-\\[60\\%\\] {\n  width: 60%;\n}\r\n.w-\\[70\\%\\] {\n  width: 70%;\n}\r\n.w-\\[75\\%\\] {\n  width: 75%;\n}\r\n.w-\\[80\\%\\] {\n  width: 80%;\n}\r\n.w-\\[84\\%\\] {\n  width: 84%;\n}\r\n.w-auto {\n  width: auto;\n}\r\n.w-full {\n  width: 100%;\n}\r\n.max-w-3xl {\n  max-width: 48rem;\n}\r\n.max-w-\\[21rem\\] {\n  max-width: 21rem;\n}\r\n.flex-col {\n  flex-direction: column;\n}\r\n.items-start {\n  align-items: flex-start;\n}\r\n.items-end {\n  align-items: flex-end;\n}\r\n.items-center {\n  align-items: center;\n}\r\n.justify-start {\n  justify-content: flex-start;\n}\r\n.justify-end {\n  justify-content: flex-end;\n}\r\n.justify-center {\n  justify-content: center;\n}\r\n.justify-between {\n  justify-content: space-between;\n}\r\n.rounded {\n  border-radius: 0.25rem;\n}\r\n.rounded-2xl {\n  border-radius: 1rem;\n}\r\n.rounded-\\[10px\\] {\n  border-radius: 10px;\n}\r\n.rounded-full {\n  border-radius: 9999px;\n}\r\n.rounded-lg {\n  border-radius: 0.5rem;\n}\r\n.rounded-md {\n  border-radius: 0.375rem;\n}\r\n.border-2 {\n  border-width: 2px;\n}\r\n.border-gray {\n  --tw-border-opacity: 1;\n  border-color: rgb(242 242 242 / var(--tw-border-opacity));\n}\r\n.border-green {\n  --tw-border-opacity: 1;\n  border-color: rgb(0 195 65 / var(--tw-border-opacity));\n}\r\n.border-red {\n  --tw-border-opacity: 1;\n  border-color: rgb(255 64 64 / var(--tw-border-opacity));\n}\r\n.bg-black {\n  --tw-bg-opacity: 1;\n  background-color: rgb(12 36 59 / var(--tw-bg-opacity));\n}\r\n.bg-darkgray {\n  --tw-bg-opacity: 1;\n  background-color: rgb(212 212 212 / var(--tw-bg-opacity));\n}\r\n.bg-gray {\n  --tw-bg-opacity: 1;\n  background-color: rgb(242 242 242 / var(--tw-bg-opacity));\n}\r\n.bg-green {\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 195 65 / var(--tw-bg-opacity));\n}\r\n.bg-orange {\n  --tw-bg-opacity: 1;\n  background-color: rgb(254 159 0 / var(--tw-bg-opacity));\n}\r\n.bg-red {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 64 64 / var(--tw-bg-opacity));\n}\r\n.bg-sky {\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 90 167 / var(--tw-bg-opacity));\n}\r\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\r\n.p-2 {\n  padding: 0.5rem;\n}\r\n.p-3 {\n  padding: 0.75rem;\n}\r\n.p-5 {\n  padding: 1.25rem;\n}\r\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\r\n.px-7 {\n  padding-left: 1.75rem;\n  padding-right: 1.75rem;\n}\r\n.px-8 {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\r\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\r\n.pb-2 {\n  padding-bottom: 0.5rem;\n}\r\n.pb-5 {\n  padding-bottom: 1.25rem;\n}\r\n.pl-4 {\n  padding-left: 1rem;\n}\r\n.pl-5 {\n  padding-left: 1.25rem;\n}\r\n.pr-4 {\n  padding-right: 1rem;\n}\r\n.pt-0 {\n  padding-top: 0px;\n}\r\n.pt-2 {\n  padding-top: 0.5rem;\n}\r\n.pt-7 {\n  padding-top: 1.75rem;\n}\r\n.pt-8 {\n  padding-top: 2rem;\n}\r\n.text-center {\n  text-align: center;\n}\r\n.font-sans {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n}\r\n.text-\\[15px\\] {\n  font-size: 15px;\n}\r\n.text-\\[16px\\] {\n  font-size: 16px;\n}\r\n.text-\\[18px\\] {\n  font-size: 18px;\n}\r\n.text-\\[22px\\] {\n  font-size: 22px;\n}\r\n.text-\\[24px\\] {\n  font-size: 24px;\n}\r\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\r\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\r\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\r\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\r\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\r\n.font-\\[300\\] {\n  font-weight: 300;\n}\r\n.font-\\[400\\] {\n  font-weight: 400;\n}\r\n.font-\\[450\\] {\n  font-weight: 450;\n}\r\n.font-\\[500\\] {\n  font-weight: 500;\n}\r\n.font-bold {\n  font-weight: 700;\n}\r\n.font-semibold {\n  font-weight: 600;\n}\r\n.text-black {\n  --tw-text-opacity: 1;\n  color: rgb(12 36 59 / var(--tw-text-opacity));\n}\r\n.text-extrdarkgray {\n  --tw-text-opacity: 1;\n  color: rgb(85 85 85 / var(--tw-text-opacity));\n}\r\n.text-green {\n  --tw-text-opacity: 1;\n  color: rgb(0 195 65 / var(--tw-text-opacity));\n}\r\n.text-orange {\n  --tw-text-opacity: 1;\n  color: rgb(254 159 0 / var(--tw-text-opacity));\n}\r\n.text-red {\n  --tw-text-opacity: 1;\n  color: rgb(255 64 64 / var(--tw-text-opacity));\n}\r\n.text-sky {\n  --tw-text-opacity: 1;\n  color: rgb(31 90 167 / var(--tw-text-opacity));\n}\r\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\r\n.opacity-25 {\n  opacity: 0.25;\n}\r\n.shadow-2xl {\n  --tw-shadow: 0px 0px 7px -2px #1F5AA7;\n  --tw-shadow-colored: 0px 0px 7px -2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\r\n.shadow-xl {\n  --tw-shadow: 0 20px 25px -20px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 20px 25px -20px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\r\n.hover\\:bg-black:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(12 36 59 / var(--tw-bg-opacity));\n}\r\n.hover\\:bg-white:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\r\n@media (min-width: 640px) {\n\n  .sm\\:ml-10 {\n    margin-left: 2.5rem;\n  }\n\n  .sm\\:ml-5 {\n    margin-left: 1.25rem;\n  }\n\n  .sm\\:ml-8 {\n    margin-left: 2rem;\n  }\n\n  .sm\\:mt-0 {\n    margin-top: 0px;\n  }\n\n  .sm\\:mt-4 {\n    margin-top: 1rem;\n  }\n\n  .sm\\:block {\n    display: block;\n  }\n\n  .sm\\:flex {\n    display: flex;\n  }\n\n  .sm\\:hidden {\n    display: none;\n  }\n\n  .sm\\:h-2 {\n    height: 0.5rem;\n  }\n\n  .sm\\:h-2\\.5 {\n    height: 0.625rem;\n  }\n\n  .sm\\:h-7 {\n    height: 1.75rem;\n  }\n\n  .sm\\:w-7 {\n    width: 1.75rem;\n  }\n\n  .sm\\:w-fit {\n    width: -moz-fit-content;\n    width: fit-content;\n  }\n\n  .sm\\:w-full {\n    width: 100%;\n  }\n\n  .sm\\:max-w-\\[57rem\\] {\n    max-width: 57rem;\n  }\n\n  .sm\\:justify-between {\n    justify-content: space-between;\n  }\n\n  .sm\\:rounded-2xl {\n    border-radius: 1rem;\n  }\n\n  .sm\\:bg-gray {\n    --tw-bg-opacity: 1;\n    background-color: rgb(242 242 242 / var(--tw-bg-opacity));\n  }\n\n  .sm\\:bg-white {\n    --tw-bg-opacity: 1;\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n  }\n\n  .sm\\:p-8 {\n    padding: 2rem;\n  }\n\n  .sm\\:px-24 {\n    padding-left: 6rem;\n    padding-right: 6rem;\n  }\n\n  .sm\\:pt-7 {\n    padding-top: 1.75rem;\n  }\n\n  .sm\\:text-\\[14px\\] {\n    font-size: 14px;\n  }\n\n  .sm\\:text-xs {\n    font-size: 0.75rem;\n    line-height: 1rem;\n  }\n\n  .sm\\:font-\\[300\\] {\n    font-weight: 300;\n  }\n\n  .sm\\:font-\\[400\\] {\n    font-weight: 400;\n  }\n\n  .sm\\:font-normal {\n    font-weight: 400;\n  }\n}\r\n@media (min-width: 768px) {\n\n  .md\\:block {\n    display: block;\n  }\n}\r\n@media (min-width: 1024px) {\n\n  .lg\\:block {\n    display: block;\n  }\n}\r\n@media (min-width: 1280px) {\n\n  .xl\\:block {\n    display: block;\n  }\n}\r\n";
styleInject(css_248z);

const Home = () => {
    const { currentStep } = useStore();
    const [sideBarToggle, setSideBarToggle] = React.useState(false);
    const handleSidebarToggle = () => {
        setSideBarToggle((prev) => !prev);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: `${currentStep === 0 ? 'bg-gray' : 'bg-white'} sm:bg-gray w-full min-h-screen` },
            React.createElement(Header, null),
            React.createElement(SncdHeadermobile, { handleSidebarToggle: handleSidebarToggle }),
            React.createElement(HomePage, { sideBarToggle: sideBarToggle, setSideBarToggle: setSideBarToggle }))));
};

exports.Home = Home;
//# sourceMappingURL=index.js.map
