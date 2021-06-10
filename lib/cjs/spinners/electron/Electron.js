"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Electron = void 0;
var react_1 = __importDefault(require("react"));
var style_1 = require("./style");
var Electron = function (props) {
    var color = props.color, size = props.size, animationDuration = props.animationDuration;
    return (react_1.default.createElement(style_1.ElectronSpinner, { style: { height: size, width: size } },
        react_1.default.createElement(style_1.ElectronLine, { style: { color: color }, itemProp: animationDuration }),
        react_1.default.createElement(style_1.ElectronLine, { style: { color: color }, itemProp: animationDuration }),
        react_1.default.createElement(style_1.ElectronLine, { style: { color: color }, itemProp: animationDuration })));
};
exports.Electron = Electron;
