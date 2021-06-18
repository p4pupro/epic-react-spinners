"use strict";
var __assign = (this && this.__assign) || function () {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = void 0;
var react_1 = __importDefault(require("react"));
var style_1 = require("./style");
var Square = function (props) {
    var squaresNum = 4;
    var color = props.color, size = props.size, animationDuration = props.animationDuration;
    var squaresStyles = function () {
        var squareStyles = [];
        for (var i = 1; i <= squaresNum; i++) {
            squareStyles.push(__assign({}, squareStyles));
        }
        return squareStyles;
    };
    return (react_1.default.createElement(style_1.SquareSpinner, { style: { height: size, width: size } }, squaresStyles().map(function (style, i) {
        console.log(style);
        return react_1.default.createElement(style_1.Squares, { key: i, style: { color: color }, itemProp: animationDuration });
    })));
};
exports.Square = Square;
