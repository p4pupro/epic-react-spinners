
import { Spinner } from '../../utils/interfaces/Spinner';
import { defaulValues } from '../../utils/index';
import { RhombusesSpinner, Rhombus } from './style';

export const Rhombuses = (props: Spinner) => {
  const rhombusesNum : number = 3;
  const { color, size, animationDuration } = props;

  const spinnerStyle = (): number => {
    const len = size ? parseInt(size) : defaulValues.sizeNumeric;
    return len * 4;
  }

  const rhombusStyle = (): object  => {
    return {
      height: size || defaulValues.size,
      width: size || defaulValues.size,
      background: color || defaulValues.color,
      animationDuration: animationDuration || defaulValues.animationDuration,
      left: `${size ? parseInt(size) * 4 : 15 * 4}`
    };
  }

  const rhombusesStyles = (): [] => {
    const rhombuseStyles = [] as any;
    const duration = animationDuration ? parseFloat(animationDuration) : defaulValues.animationDurationNumeric;
    const delay = (-duration) / 1.5;
    for (let i = 1; i <= rhombusesNum; i++) {
      const style = Object.assign({
        animationDelay: `${i * delay}`
      }, rhombusStyle());
      rhombuseStyles.push(style);
    }
    return rhombuseStyles;
  }


  return (
    <RhombusesSpinner style={{ height: size || defaulValues.size, width: spinnerStyle() }}>
        {
            rhombusesStyles().map((style: any, i: number) => {
              return (
                  <Rhombus
                    key={i} 
                    style={{ 
                        background: style.background, 
                        animationDelay: style.animationDelay,
                        animationDuration: style.animationDuration,
                        left: style.left, 
                        height: size || defaulValues.size,
                        width: size || defaulValues.size
                    }} /> 
              )
            })
        }
    </RhombusesSpinner>
  );
}