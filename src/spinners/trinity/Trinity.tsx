
import { Spinner } from '../../utils/interfaces/Spinner';
import { defaulValues } from '../../utils/index';
import {TrinitySpinner, TrinityCircle } from './style';

export const Trinity = (props: Spinner) => {
  const { color, size, animationDuration } = props;
  return (
    <TrinitySpinner style={{ height: size || defaulValues.size, width: size  || defaulValues.size }}>
        <TrinityCircle style={{ color: color || defaulValues.color, height: size || defaulValues.size, width: size || defaulValues.size, animationDuration: animationDuration || defaulValues.animationDuration }} /> 
        <TrinityCircle style={{ color: color || defaulValues.color, height: size || defaulValues.size, width: size || defaulValues.size, animationDuration: animationDuration || defaulValues.animationDuration }} />
        <TrinityCircle style={{ color: color || defaulValues.color, height: size || defaulValues.size, width: size || defaulValues.size, animationDuration: animationDuration || defaulValues.animationDuration }} /> 
    </TrinitySpinner>
  );
}



