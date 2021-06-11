import { Spinner } from '../../utils/interfaces/Spinner';
import { OrbitSpinner, OrbitLine } from './style';
export const Orbit = (props: Spinner) => {
  const { color, size, animationDuration } = props;
  return (
    <OrbitSpinner style={{ height: size, width: size }}>
      <OrbitLine style={{ color: color }} itemProp={animationDuration} />
      <OrbitLine style={{ color: color }} itemProp={animationDuration} />
      <OrbitLine style={{ color: color }} itemProp={animationDuration} />
    </OrbitSpinner>
  );
}

