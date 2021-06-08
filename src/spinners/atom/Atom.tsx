import React from 'react';
import { Spinner } from '../../utils/interfaces/Spinner';
import { SpinnerCircle, SpinnerLine, AtomSpinner, AtomSpinnerInner } from './style';

export const Atom = (props: Spinner) => {
  const { color, size, animationDuration } = props;
  return (
    <AtomSpinner style={{ height: size, width: size }}>
      <AtomSpinnerInner>
          <SpinnerLine  style={{ color: color }} itemProp={animationDuration} />
          <SpinnerLine style={{ color: color }} itemProp={animationDuration} />
          <SpinnerLine style={{ color: color }} itemProp={animationDuration} />
          <SpinnerCircle style={{ color: color }}>
            &#9679;
          </SpinnerCircle>
      </AtomSpinnerInner>
    </AtomSpinner>
  );
}