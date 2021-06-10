"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Atom = void 0;
var react_1 = __importDefault(require("react"));
var style_1 = require("./style");
var Atom = function (props) {
    var color = props.color, size = props.size, animationDuration = props.animationDuration;
    return (react_1.default.createElement(style_1.AtomSpinner, { style: { height: size, width: size } },
        react_1.default.createElement(style_1.AtomSpinnerInner, null,
            react_1.default.createElement(style_1.SpinnerLine, { style: { color: color }, itemProp: animationDuration }),
            react_1.default.createElement(style_1.SpinnerLine, { style: { color: color }, itemProp: animationDuration }),
            react_1.default.createElement(style_1.SpinnerLine, { style: { color: color }, itemProp: animationDuration }),
            react_1.default.createElement(style_1.SpinnerCircle, { style: { color: color } }, "\u25CF"))));
};
exports.Atom = Atom;
