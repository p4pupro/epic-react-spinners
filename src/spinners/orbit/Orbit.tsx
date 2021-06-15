import { Spinner } from '../../utils/interfaces/Spinner';
import { defaulValues } from '../../utils/index';
import { OrbitSpinner, OrbitLine } from './style';
export const Orbit = (props: Spinner) => {
  const { color, size, animationDuration } = props;
  return (
    <OrbitSpinner style={{ height: size || defaulValues.size, width: size || defaulValues.size }}>
      <OrbitLine style={{ color: color || defaulValues.color, animationDuration: animationDuration || defaulValues.animationDuration }} />
      <OrbitLine style={{ color: color || defaulValues.color, animationDuration: animationDuration || defaulValues.animationDuration }} />
      <OrbitLine style={{ color: color || defaulValues.color, animationDuration: animationDuration || defaulValues.animationDuration }} />
    </OrbitSpinner>
  );
}

