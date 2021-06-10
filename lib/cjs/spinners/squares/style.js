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
exports.Squares = exports.SquareSpinner = void 0;
var styled_components_1 = __importStar(require("styled-components"));
var squareSpinnerAnimation = styled_components_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    50% {\n        transform: rotate(90deg);\n    }\n    100% {\n        transform: rotate(180deg);\n    }\n"], ["\n    50% {\n        transform: rotate(90deg);\n    }\n    100% {\n        transform: rotate(180deg);\n    }\n"])));
var squareSpinnerAnimation1 = styled_components_1.keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    50% {\n        transform: translate(150%,150%) scale(2,2);\n    }\n"], ["\n    50% {\n        transform: translate(150%,150%) scale(2,2);\n    }\n"])));
var squareSpinnerAnimation2 = styled_components_1.keyframes(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    50% {\n        transform: translate(-150%,150%) scale(2,2);\n    }\n"], ["\n    50% {\n        transform: translate(-150%,150%) scale(2,2);\n    }\n"])));
var squareSpinnerAnimation3 = styled_components_1.keyframes(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    50% {\n        transform: translate(-150%,-150%) scale(2,2);\n    }\n"], ["\n    50% {\n        transform: translate(-150%,-150%) scale(2,2);\n    }\n"])));
var squareSpinnerAnimation4 = styled_components_1.keyframes(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    50% {\n        transform: translate(150%,-150%) scale(2,2);\n    }\n"], ["\n    50% {\n        transform: translate(150%,-150%) scale(2,2);\n    }\n"])));
var SquareSpinner = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    animation-name: ", ";\n    animation-duration: ", "s;\n    animation-iteration-count: infinite;\n    transform: rotate(0deg);\n    height: ", "px;\n    width: ", "px;\n"], ["\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    animation-name: ", ";\n    animation-duration: ", "s;\n    animation-iteration-count: infinite;\n    transform: rotate(0deg);\n    height: ", "px;\n    width: ", "px;\n"])), squareSpinnerAnimation, function (props) { return props.itemProp; }, function (props) { var _a; return (_a = props.style) === null || _a === void 0 ? void 0 : _a.height; }, function (props) { var _a; return (_a = props.style) === null || _a === void 0 ? void 0 : _a.width; });
exports.SquareSpinner = SquareSpinner;
var Squares = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    height: calc(65px * 0.25 / 1.3);\n    width: calc(65px * 0.25 / 1.3);\n    margin-right: auto;\n    margin-left: auto;\n    border: calc(65px * 0.04 / 1.3) solid ", ";\n    position: absolute;\n    animation-duration: ", "s;\n    animation-iteration-count: infinite;\n\n    &:nth-child(1) {\n        animation-name: ", ";   \n    }\n    &:nth-child(2) {\n        animation-name: ", "; \n    }\n    &:nth-child(3) {\n        animation-name: ", ";  \n    }\n    &:nth-child(4) {\n        animation-name: ", ";\n    }\n \n"], ["\n    height: calc(65px * 0.25 / 1.3);\n    width: calc(65px * 0.25 / 1.3);\n    margin-right: auto;\n    margin-left: auto;\n    border: calc(65px * 0.04 / 1.3) solid ", ";\n    position: absolute;\n    animation-duration: ", "s;\n    animation-iteration-count: infinite;\n\n    &:nth-child(1) {\n        animation-name: ", ";   \n    }\n    &:nth-child(2) {\n        animation-name: ", "; \n    }\n    &:nth-child(3) {\n        animation-name: ", ";  \n    }\n    &:nth-child(4) {\n        animation-name: ", ";\n    }\n \n"])), function (props) { var _a; return (_a = props.style) === null || _a === void 0 ? void 0 : _a.color; }, function (props) { return props.itemProp; }, squareSpinnerAnimation1, squareSpinnerAnimation2, squareSpinnerAnimation3, squareSpinnerAnimation4);
exports.Squares = Squares;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
