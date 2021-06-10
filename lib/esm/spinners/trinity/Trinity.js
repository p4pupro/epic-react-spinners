import React from 'react';
import { TrinitySpinner, TrinityCircle } from './style';
export var Trinity = function (props) {
    var color = props.color, size = props.size, animationDuration = props.animationDuration;
    return (React.createElement(TrinitySpinner, { style: { height: size, width: size } },
        React.createElement(TrinityCircle, { style: { color: color, height: size, width: size }, itemProp: animationDuration }),
        React.createElement(TrinityCircle, { style: { color: color, height: size, width: size }, itemProp: animationDuration }),
        React.createElement(TrinityCircle, { style: { color: color, height: size, width: size }, itemProp: animationDuration })));
};
