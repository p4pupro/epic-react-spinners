import { Spinner } from '../../utils/interfaces/Spinner';
import { defaulValues } from '../../utils/index';
import { SpinnerCircle, SpinnerLine, AtomSpinner, AtomSpinnerInner } from './style';

export const Atom = (props: Spinner) => {
  const { color, size, animationDuration } = props;
 
  return (
    <AtomSpinner style={{ height: size || defaulValues.size, width: size || defaulValues.size }}>
      <AtomSpinnerInner>
          <SpinnerLine style={{ color: color || defaulValues.color, animationDuration: animationDuration || defaulValues.animationDuration }} />
          <SpinnerLine style={{ color: color || defaulValues.color, animationDuration: animationDuration || defaulValues.animationDuration }} />
          <SpinnerLine style={{ color: color || defaulValues.color, animationDuration: animationDuration || defaulValues.animationDuration }} />
          <SpinnerCircle style={{ color: color || defaulValues.color }}>
            &#9679;
          </SpinnerCircle>
      </AtomSpinnerInner>
    </AtomSpinner>
  );
}