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
exports.TrinityCircle = exports.TrinitySpinner = void 0;
var styled_components_1 = __importStar(require("styled-components"));
var trinitySpinnerAnimation1 = styled_components_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    0% {\n        transform: rotateZ(20deg) rotateY(0deg);\n    }\n    100% {\n        transform: rotateZ(100deg) rotateY(360deg);\n  }\n"], ["\n    0% {\n        transform: rotateZ(20deg) rotateY(0deg);\n    }\n    100% {\n        transform: rotateZ(100deg) rotateY(360deg);\n  }\n"])));
var trinitySpinnerAnimation2 = styled_components_1.keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    0% {\n        transform: rotateZ(100deg) rotateX(0deg);\n    }\n    100% {\n        transform: rotateZ(0deg) rotateX(360deg);\n    }\n"], ["\n    0% {\n        transform: rotateZ(100deg) rotateX(0deg);\n    }\n    100% {\n        transform: rotateZ(0deg) rotateX(360deg);\n    }\n"])));
var trinitySpinnerAnimation3 = styled_components_1.keyframes(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    0% {\n        transform: rotateZ(100deg) rotateX(-360deg);\n    }\n    100% {\n        transform: rotateZ(-360deg) rotateX(360deg);\n    }\n"], ["\n    0% {\n        transform: rotateZ(100deg) rotateX(-360deg);\n    }\n    100% {\n        transform: rotateZ(-360deg) rotateX(360deg);\n    }\n"])));
var TrinitySpinner = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    padding: 3px;\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n    overflow: hidden;\n    box-sizing: border-box;\n    height: ", "px;\n    width: ", "px;\n"], ["\n    padding: 3px;\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n    overflow: hidden;\n    box-sizing: border-box;\n    height: ", "px;\n    width: ", "px;\n"])), function (props) { var _a; return (_a = props.style) === null || _a === void 0 ? void 0 : _a.height; }, function (props) { var _a; return (_a = props.style) === null || _a === void 0 ? void 0 : _a.width; });
exports.TrinitySpinner = TrinitySpinner;
var TrinityCircle = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    position:absolute;\n    display:block;\n    border-radius:50%;\n    border: 3px solid ", ";\n    opacity: 1;\n\n    &:nth-child(1) {\n        height: 60px;\n        width: 60px;\n        border-width: 3px;\n        animation: ", " infinite;\n        animation-duration: ", "s;\n        animation-timing-function: linear; \n    }\n    &:nth-child(2) {\n        height: calc(60px * 0.65);\n        width: calc(60px * 0.65);\n        animation: ", " infinite;\n        border-width: 2px;\n        animation-duration: ", "s;\n        animation-timing-function: linear;\n    }\n    &:nth-child(3) {\n        height: calc(60px * 0.1);\n        width: calc(60px * 0.1);\n        animation: ", " infinite;\n        border-width: 1px;\n        animation-duration: ", "s;\n        animation-timing-function: linear;\n    }\n \n"], ["\n    position:absolute;\n    display:block;\n    border-radius:50%;\n    border: 3px solid ", ";\n    opacity: 1;\n\n    &:nth-child(1) {\n        height: 60px;\n        width: 60px;\n        border-width: 3px;\n        animation: ", " infinite;\n        animation-duration: ", "s;\n        animation-timing-function: linear; \n    }\n    &:nth-child(2) {\n        height: calc(60px * 0.65);\n        width: calc(60px * 0.65);\n        animation: ", " infinite;\n        border-width: 2px;\n        animation-duration: ", "s;\n        animation-timing-function: linear;\n    }\n    &:nth-child(3) {\n        height: calc(60px * 0.1);\n        width: calc(60px * 0.1);\n        animation: ", " infinite;\n        border-width: 1px;\n        animation-duration: ", "s;\n        animation-timing-function: linear;\n    }\n \n"])), function (props) { var _a; return (_a = props.style) === null || _a === void 0 ? void 0 : _a.color; }, trinitySpinnerAnimation1, function (props) { return props.itemProp; }, trinitySpinnerAnimation2, function (props) { return props.itemProp; }, trinitySpinnerAnimation3, function (props) { return props.itemProp; });
exports.TrinityCircle = TrinityCircle;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
