import React from 'react';
import { SpinnerCircle, SpinnerLine, AtomSpinner, AtomSpinnerInner } from './style';
export var Atom = function (props) {
    var color = props.color, size = props.size, animationDuration = props.animationDuration;
    return (React.createElement(AtomSpinner, { style: { height: size, width: size } },
        React.createElement(AtomSpinnerInner, null,
            React.createElement(SpinnerLine, { style: { color: color }, itemProp: animationDuration }),
            React.createElement(SpinnerLine, { style: { color: color }, itemProp: animationDuration }),
            React.createElement(SpinnerLine, { style: { color: color }, itemProp: animationDuration }),
            React.createElement(SpinnerCircle, { style: { color: color } }, "\u25CF"))));
};
