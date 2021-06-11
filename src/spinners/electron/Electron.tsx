import { Spinner } from '../../utils/interfaces/Spinner';
import { ElectronSpinner, ElectronLine } from './style';
export const Electron = (props: Spinner) => {
  const { color, size, animationDuration } = props;
  return (
    <ElectronSpinner style={{ height: size, width: size }} >
      <ElectronLine style={{ color: color }} itemProp={animationDuration}></ElectronLine>
      <ElectronLine style={{ color: color }} itemProp={animationDuration}></ElectronLine>
      <ElectronLine style={{ color: color }} itemProp={animationDuration}></ElectronLine>
    </ElectronSpinner>
  );
}

