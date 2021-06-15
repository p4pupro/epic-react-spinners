import { Spinner } from '../../utils/interfaces/Spinner';
import { defaulValues } from '../../utils/index';
import { ElectronSpinner, ElectronLine } from './style';
export const Electron = (props: Spinner) => {
  const { color, size, animationDuration } = props;
  return (
    <ElectronSpinner style={{ height: size || defaulValues.size, width: size || defaulValues.size }} >
      <ElectronLine style={{ color: color || defaulValues.color, animationDuration: animationDuration || defaulValues.animationDuration }}></ElectronLine>
      <ElectronLine style={{ color: color || defaulValues.color, animationDuration: animationDuration || defaulValues.animationDuration }}></ElectronLine>
      <ElectronLine style={{ color: color || defaulValues.color, animationDuration: animationDuration || defaulValues.animationDuration }}></ElectronLine>
    </ElectronSpinner>
  );
}

