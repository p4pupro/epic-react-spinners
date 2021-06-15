import { Spinner } from '../../utils/interfaces/Spinner';
import { HalfCircleSpinner, Circle1, Circle2 } from './style';

export const HalfCircle = (props: Spinner) => {
  const { color, size, animationDuration } = props;

  const snipperStyle = (): object =>{
    const len = size ? size : '70'
    return {
        width: `${len}px`,
        height: `${len}px`,
      };
  }
  const circleStyle1 = (): object => {
      const len = size ? parseInt(size) : 70;
      const duration = animationDuration ? parseFloat(animationDuration) : 2;
      const dur = duration * 1000;
    return {
      borderWidth: `${len / 10}px`,
      animationDuration: `${dur.toString()}ms`,
      borderTopColor: color
    };
  }

  const circleStyle2 = (): object => {
    const len = size ? parseInt(size) : 70;
    const duration = animationDuration ? parseFloat(animationDuration) : 2;
    const dur = duration * 1000;
    return {
      borderWidth: `${len / 10}px`,
      animationDuration: `${dur.toString()}ms`,
      borderBottomColor: color
    };
  }

  return (
    <HalfCircleSpinner style={snipperStyle()}>
        <Circle1 style={circleStyle1()} />
        <Circle2 style={circleStyle2()}/>
    </HalfCircleSpinner>
  );
}