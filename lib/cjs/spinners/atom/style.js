"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpinnerLine = exports.SpinnerCircle = exports.AtomSpinnerInner = exports.AtomSpinner = void 0;
var styled_components_1 = __importStar(require("styled-components"));
var atomSpinnerAnimation1 = styled_components_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    100% {\n        transform: rotateZ(120deg) rotateX(66deg) rotateZ(360deg);\n    }\n"], ["\n    100% {\n        transform: rotateZ(120deg) rotateX(66deg) rotateZ(360deg);\n    }\n"])));
var atomSpinnerAnimation2 = styled_components_1.keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    100% {\n        transform: rotateZ(240deg) rotateX(66deg) rotateZ(360deg);\n    }\n"], ["\n    100% {\n        transform: rotateZ(240deg) rotateX(66deg) rotateZ(360deg);\n    }\n"])));
var atomSpinnerAnimation3 = styled_components_1.keyframes(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    100% {\n        transform: rotateZ(360deg) rotateX(66deg) rotateZ(360deg);\n    }\n"], ["\n    100% {\n        transform: rotateZ(360deg) rotateX(66deg) rotateZ(360deg);\n    }\n"])));
var AtomSpinner = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    height: ", "px;\n    width: ", "px;\n    overflow: hidden;\n    .atom-spinner * {\n        box-sizing: border-box;\n    }\n"], ["\n    height: ", "px;\n    width: ", "px;\n    overflow: hidden;\n    .atom-spinner * {\n        box-sizing: border-box;\n    }\n"])), function (props) { var _a; return (_a = props.style) === null || _a === void 0 ? void 0 : _a.height; }, function (props) { var _a; return (_a = props.style) === null || _a === void 0 ? void 0 : _a.width; });
exports.AtomSpinner = AtomSpinner;
var AtomSpinnerInner = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    position: relative;\n    display: block;\n    height: 100%;\n    width: 100%;\n"], ["\n    position: relative;\n    display: block;\n    height: 100%;\n    width: 100%;\n"])));
exports.AtomSpinnerInner = AtomSpinnerInner;
var SpinnerCircle = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    display: block;\n    position: absolute;\n    color: ", ";\n    font-size: calc(60px * 0.24);\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n"], ["\n    display: block;\n    position: absolute;\n    color: ", ";\n    font-size: calc(60px * 0.24);\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n"])), function (props) { var _a; return (_a = props.style) === null || _a === void 0 ? void 0 : _a.color; });
exports.SpinnerCircle = SpinnerCircle;
var SpinnerLine = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    animation-duration: ", "s;\n    border-left-width: calc(60px / 25);\n    border-top-width: calc(60px / 25);\n    border-left-color: ", ";\n    border-left-style: solid;\n    border-top-style: solid;\n    border-top-color: transparent;\n   \n    &:nth-child(1) {\n        animation: ", " infinite;\n        animation-duration: ", "s;\n        animation-timing-function: linear;\n        transform: rotateZ(120deg) rotateX(66deg) rotateZ(0deg);  \n    }\n    &:nth-child(2) {\n        animation: ", " infinite;\n        animation-duration: ", "s;\n        animation-timing-function: linear;\n        transform: rotateZ(240deg) rotateX(66deg) rotateZ(0deg);  \n    }\n    &:nth-child(3) {\n        animation: ", " infinite;\n        animation-duration: ", "s;\n        animation-timing-function: linear;\n        transform: rotateZ(360deg) rotateX(66deg) rotateZ(0deg);  \n    }\n \n"], ["\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    animation-duration: ", "s;\n    border-left-width: calc(60px / 25);\n    border-top-width: calc(60px / 25);\n    border-left-color: ", ";\n    border-left-style: solid;\n    border-top-style: solid;\n    border-top-color: transparent;\n   \n    &:nth-child(1) {\n        animation: ", " infinite;\n        animation-duration: ", "s;\n        animation-timing-function: linear;\n        transform: rotateZ(120deg) rotateX(66deg) rotateZ(0deg);  \n    }\n    &:nth-child(2) {\n        animation: ", " infinite;\n        animation-duration: ", "s;\n        animation-timing-function: linear;\n        transform: rotateZ(240deg) rotateX(66deg) rotateZ(0deg);  \n    }\n    &:nth-child(3) {\n        animation: ", " infinite;\n        animation-duration: ", "s;\n        animation-timing-function: linear;\n        transform: rotateZ(360deg) rotateX(66deg) rotateZ(0deg);  \n    }\n \n"])), function (props) { return props.itemProp; }, function (props) { var _a; return (_a = props.style) === null || _a === void 0 ? void 0 : _a.color; }, atomSpinnerAnimation1, function (props) { return props.itemProp; }, atomSpinnerAnimation2, function (props) { return props.itemProp; }, atomSpinnerAnimation3, function (props) { return props.itemProp; });
exports.SpinnerLine = SpinnerLine;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
