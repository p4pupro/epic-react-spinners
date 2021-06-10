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
import React from 'react';
import { SquareSpinner, Squares } from './style';
export var Square = function (props) {
    var squaresNum = 4;
    var color = props.color, size = props.size, animationDuration = props.animationDuration;
    var squaresStyles = function () {
        var squareStyles = [];
        for (var i = 1; i <= squaresNum; i++) {
            squareStyles.push(__assign({}, squareStyles));
        }
        return squareStyles;
    };
    return (React.createElement(SquareSpinner, { style: { height: size, width: size } }, squaresStyles().map(function (style, i) {
        console.log(style);
        return React.createElement(Squares, { key: i, style: { color: color }, itemProp: animationDuration });
    })));
};
