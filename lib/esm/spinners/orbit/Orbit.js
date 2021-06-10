import React from 'react';
import { OrbitSpinner, OrbitLine } from './style';
export var Orbit = function (props) {
    var color = props.color, size = props.size, animationDuration = props.animationDuration;
    return (React.createElement(OrbitSpinner, { style: { height: size, width: size } },
        React.createElement(OrbitLine, { style: { color: color }, itemProp: animationDuration }),
        React.createElement(OrbitLine, { style: { color: color }, itemProp: animationDuration }),
        React.createElement(OrbitLine, { style: { color: color }, itemProp: animationDuration })));
};
