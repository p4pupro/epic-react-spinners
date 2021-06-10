import React from 'react';
import { ElectronSpinner, ElectronLine } from './style';
export var Electron = function (props) {
    var color = props.color, size = props.size, animationDuration = props.animationDuration;
    return (React.createElement(ElectronSpinner, { style: { height: size, width: size } },
        React.createElement(ElectronLine, { style: { color: color }, itemProp: animationDuration }),
        React.createElement(ElectronLine, { style: { color: color }, itemProp: animationDuration }),
        React.createElement(ElectronLine, { style: { color: color }, itemProp: animationDuration })));
};
