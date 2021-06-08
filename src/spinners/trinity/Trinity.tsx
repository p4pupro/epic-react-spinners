
import React from 'react';
import { Spinner } from '../../utils/interfaces/Spinner';
import {TrinitySpinner, TrinityCircle } from './style';
export const Trinity = (props: Spinner) => {
  const { color, size, animationDuration } = props;
  return (
    <TrinitySpinner style={{ height: size, width: size }}>
        <TrinityCircle style={{ color: color, height: size, width: size }} itemProp={animationDuration} /> 
        <TrinityCircle style={{ color: color, height: size, width: size }} itemProp={animationDuration} />
        <TrinityCircle style={{ color: color, height: size, width: size }} itemProp={animationDuration} /> 
    </TrinitySpinner>
  );
}



