import { Spinner } from '../../utils/interfaces/Spinner';
import { defaulValues } from '../../utils/index';
import { HalfCircleSpinner, Circle1, Circle2 } from './style';

export const HalfCircle = (props: Spinner) => {
  const { color, size, animationDuration } = props;

  const circleStyle1 = (): object => {
    const len = size ? parseInt(size) : defaulValues.sizeNumeric;
    return {
      borderWidth: len / 10,
      animationDuration: animationDuration || defaulValues.animationDuration,
      borderTopColor: color || defaulValues.color
    };
  }

  const circleStyle2 = (): object => { 
    const len = size ? parseInt(size) : defaulValues.sizeNumeric;
    return {
      borderWidth: len / 10,
      animationDuration: animationDuration || defaulValues.animationDuration,
      borderBottomColor : color || defaulValues.color
    };
  }


  return (
    <HalfCircleSpinner style={{ height: size || defaulValues.size, width: size || defaulValues.size }}>
        <Circle1 style={circleStyle1()} />
        <Circle2 style={circleStyle2()}/>
    </HalfCircleSpinner>
  );
}