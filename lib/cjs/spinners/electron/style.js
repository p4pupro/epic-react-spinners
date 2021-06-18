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
exports.ElectronLine = exports.ElectronSpinner = void 0;
var styled_components_1 = __importStar(require("styled-components"));
var electronSpinnerAnimation1 = styled_components_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    0%  {\n        transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);\n    }\n    100% {\n        transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);\n    }\n"], ["\n    0%  {\n        transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);\n    }\n    100% {\n        transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);\n    }\n"])));
var electronSpinnerAnimation2 = styled_components_1.keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    0% {\n        transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);\n    }\n    100% {\n        transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);\n    }\n"], ["\n    0% {\n        transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);\n    }\n    100% {\n        transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);\n    }\n"])));
var electronSpinnerAnimation3 = styled_components_1.keyframes(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    0% {\n        transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);\n    }\n    100% {\n        transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);\n    }\n"], ["\n    0% {\n        transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);\n    }\n    100% {\n        transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);\n    }\n"])));
var ElectronSpinner = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    border-radius: 50%;\n    perspective: 800px;\n    height: ", "px;\n    width: ", "px;\n"], ["\n    border-radius: 50%;\n    perspective: 800px;\n    height: ", "px;\n    width: ", "px;\n"])), function (props) { var _a; return (_a = props.style) === null || _a === void 0 ? void 0 : _a.height; }, function (props) { var _a; return (_a = props.style) === null || _a === void 0 ? void 0 : _a.width; });
exports.ElectronSpinner = ElectronSpinner;
var ElectronLine = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    position: absolute;\n    box-sizing: border-box;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n\n    &:nth-child(1) {\n        left: 0;\n        top: 0;\n        animation: ", " infinite;\n        border-bottom: 3px solid ", ";\n        animation-duration: ", "s;\n        animation-timing-function: linear;\n        \n    }\n    &:nth-child(2) {\n        right: 0;\n        top: 0;\n        animation: ", " infinite;\n        border-right: 3px solid ", ";\n        animation-duration: ", "s;\n        animation-timing-function: linear; \n    }\n    &:nth-child(3) {\n        right: 0;\n        bottom: 0;\n        animation: ", " infinite;\n        border-right: 3px solid ", ";\n        animation-duration: ", "s;\n        animation-timing-function: linear; \n    }\n \n"], ["\n    position: absolute;\n    box-sizing: border-box;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n\n    &:nth-child(1) {\n        left: 0;\n        top: 0;\n        animation: ", " infinite;\n        border-bottom: 3px solid ", ";\n        animation-duration: ", "s;\n        animation-timing-function: linear;\n        \n    }\n    &:nth-child(2) {\n        right: 0;\n        top: 0;\n        animation: ", " infinite;\n        border-right: 3px solid ", ";\n        animation-duration: ", "s;\n        animation-timing-function: linear; \n    }\n    &:nth-child(3) {\n        right: 0;\n        bottom: 0;\n        animation: ", " infinite;\n        border-right: 3px solid ", ";\n        animation-duration: ", "s;\n        animation-timing-function: linear; \n    }\n \n"])), electronSpinnerAnimation1, function (props) { var _a; return (_a = props.style) === null || _a === void 0 ? void 0 : _a.color; }, function (props) { return props.itemProp; }, electronSpinnerAnimation2, function (props) { var _a; return (_a = props.style) === null || _a === void 0 ? void 0 : _a.color; }, function (props) { return props.itemProp; }, electronSpinnerAnimation3, function (props) { var _a; return (_a = props.style) === null || _a === void 0 ? void 0 : _a.color; }, function (props) { return props.itemProp; });
exports.ElectronLine = ElectronLine;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
